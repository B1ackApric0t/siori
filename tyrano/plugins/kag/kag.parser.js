tyrano.plugin.kag.parser = {
  tyrano: null,
  kag: null,
  flag_script: !1,
  deep_if: 0,
  init: function () {},
  loadConfig: function (e) {
    var i = this;
    $.loadText("./data/system/Config.tjs", function (l) {
      var t = i.compileConfig(l);
      e && e(t)
    })
  },
  compileConfig: function (e) {
    for (var i = "", l = {}, t = e.split("\n"), a = 0; a < t.length; a++) try {
      var r = $.trim(t[a]);
      if ("" != r && ";" === r.substr(0, 1)) {
        var s = r.split("//");
        s.length > 1 && (r = $.trim(s[0])), r = $.replaceAll(r, ";", "");
        var n = (r = $.replaceAll(r, '"', "")).split("="),
          p = $.trim(n[0]),
          f = $.trim(n[1]);
        l[p] = f
      }
    } catch (e) {
      i += "Error:Config.tjsに誤りがあります/行:" + a
    }
    return "" != i && alert(i), l
  },
  parseScenario: function (e) {
    for (var i = [], l = {}, t = e.split("\n"), a = !1, r = 0; r < t.length; r++) {
      var s = $.trim(t[r]),
        n = s.substr(0, 1);
      if (-1 != s.indexOf("endscript") && (this.flag_script = !1), !0 === a && "*/" === s) a = !1;
      else if ("/*" === s) a = !0;
      else if (1 == a || ";" === n);
      else if ("#" === n) {
        var p = $.trim(s.replace("#", "")),
          f = "",
          m = "";
        if (p.split(":").length > 1) {
          var h = p.split(":");
          f = h[0], m = h[1]
        } else f = p;
        var g = {
          line: r,
          name: "chara_ptext",
          pm: {
            name: f,
            face: m
          },
          val: k
        };
        i.push(g)
      } else if ("*" === n) {
        var c, v = s.substr(1, s.length).split("|"),
          u = "";
        c = $.trim(v[0]), v.length > 1 && (u = $.trim(v[1]));
        var o = {
          name: "label",
          pm: {
            line: r,
            index: i.length,
            label_name: c,
            val: u
          },
          val: u
        };
        i.push(o), l[o.pm.label_name] ? this.kag.warning("Warning line:" + r + " " + $.lang("label") + "'" + o.pm.label_name + "'" + $.lang("label_double")) : l[o.pm.label_name] = o.pm
      } else if ("@" === n) {
        var _ = s.substr(1, s.length),
          d = this.makeTag(_, r);
        i.push(d)
      } else {
        "_" === n && (s = s.substring(1, s.length));
        for (var b = s.split(""), k = "", x = (_ = "", !1), y = 0, C = 0; C < b.length; C++) {
          var T = b[C];
          if (!0 === x) "]" === T && 0 == this.flag_script ? 0 == --y ? (x = !1, i.push(this.makeTag(_, r)), _ = "") : _ += T : "[" === T && 0 == this.flag_script ? (y++, _ += T) : _ += T;
          else if (!1 === x && "[" === T && 0 == this.flag_script) {
            if (y++, "" != k) {
              g = {
                line: r,
                name: "text",
                pm: {
                  val: k
                },
                val: k
              };
              i.push(g), k = ""
            }
            x = !0
          } else k += T
        }
        if ("" != k) {
          g = {
            line: r,
            name: "text",
            pm: {
              val: k
            },
            val: k
          };
          i.push(g)
        }
      }
    }
    var A = {
      array_s: i,
      map_label: l
    };
    return 0 != this.deep_if && (alert("[if]と[endif]の数が一致しません。シナリオを見直してみませんか？"), this.deep_if = 0), A
  },
  makeTag: function (e, i) {
    for (var l = {
        line: i,
        name: "",
        pm: {},
        val: ""
      }, t = e.split(""), a = "", r = "", s = 0, n = 0; n < t.length; n++) {
      var p = t[n];
      "" != a || '"' !== p && "'" !== p ? "" != a ? p === a ? (a = "", 0 == s && (r += "undefined"), s = 0) : ("=" == p && (p = "#"), " " == p && (p = ""), r += p, s++) : r += p : (a = p, s = 0)
    }
    var f = (e = r).split(" ");
    l.name = $.trim(f[0]);
    for (var m = 1; m < f.length; m++) "" == f[m] ? (f.splice(m, 1), m--) : "=" === f[m] ? f[m - 1] && f[m + 1] && (f[m - 1] = f[m - 1] + "=" + f[m + 1], f.splice(m, 2), m--) : "=" === f[m].substr(0, 1) ? f[m - 1] && f[m] && (f[m - 1] = f[m - 1] + f[m], f.splice(m, 1)) : "=" === f[m].substr(f[m].length - 1, f[m].length) && f[m + 1] && f[m] && (f[m] = f[m] + f[m + 1], f.splice(m + 1, 1));
    for (var h = 1; h < f.length; h++) {
      var g = $.trim(f[h]).split("="),
        c = $.trim(g[0]),
        v = $.trim(g[1]);
      "*" == c && (l.pm["*"] = ""), "" != v && (l.pm[c] = $.replaceAll(v, "#", "=")), "undefined" == v && (l.pm[c] = "")
    }
    switch ("iscript" == l.name && (this.flag_script = !0), "endscript" == l.name && (this.flag_script = !1), l.name) {
    case "if":
      this.deep_if++;
    case "elsif":
    case "else":
      l.pm.deep_if = this.deep_if;
      break;
    case "endif":
      l.pm.deep_if = this.deep_if, this.deep_if--
    }
    return l
  },
  test: function () {}
};