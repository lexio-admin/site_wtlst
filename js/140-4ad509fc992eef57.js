(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [140],
  {
    227: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(2648).Z,
        o = r(7273).Z,
        l = n(r(7294)),
        a = r(1003),
        u = r(7795),
        c = r(4465),
        i = r(2692),
        f = r(8245),
        s = r(9246),
        d = r(227),
        p = r(3468);
      let v = new Set();
      function h(e, t, r, n) {
        if (a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + r + "%" + o;
            if (v.has(l)) return;
            v.add(l);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function y(e) {
        return "string" == typeof e ? e : u.formatUrl(e);
      }
      let b = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: u,
            as: v,
            children: b,
            prefetch: g,
            passHref: m,
            replace: C,
            shallow: O,
            scroll: _,
            locale: j,
            onClick: k,
            onMouseEnter: w,
            onTouchStart: E,
            legacyBehavior: M = !1,
          } = e,
          x = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = b),
          M &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = l.default.createElement("a", null, r));
        let P = !1 !== g,
          L = l.default.useContext(i.RouterContext),
          S = l.default.useContext(f.AppRouterContext),
          I = null != L ? L : S,
          N = !L,
          { href: R, as: T } = l.default.useMemo(() => {
            if (!L) {
              let e = y(u);
              return { href: e, as: v ? y(v) : e };
            }
            let [t, r] = a.resolveHref(L, u, !0);
            return { href: t, as: v ? a.resolveHref(L, v) : r || t };
          }, [L, u, v]),
          z = l.default.useRef(R),
          D = l.default.useRef(T);
        M && (n = l.default.Children.only(r));
        let H = M ? n && "object" == typeof n && n.ref : t,
          [K, U, B] = s.useIntersection({ rootMargin: "200px" }),
          A = l.default.useCallback(
            (e) => {
              (D.current !== T || z.current !== R) &&
                (B(), (D.current = T), (z.current = R)),
                K(e),
                H &&
                  ("function" == typeof H
                    ? H(e)
                    : "object" == typeof H && (H.current = e));
            },
            [T, H, R, B, K]
          );
        l.default.useEffect(() => {
          I && U && P && h(I, R, T, { locale: j });
        }, [T, R, U, j, P, null == L ? void 0 : L.locale, I]);
        let W = {
          ref: A,
          onClick(e) {
            M || "function" != typeof k || k(e),
              M &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, u, c, i, f, s) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !a.isLocalURL(r))
                  )
                    return;
                  e.preventDefault();
                  let v = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: u,
                          locale: i,
                          scroll: c,
                        })
                      : t[o ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !s,
                        });
                  };
                  f ? l.default.startTransition(v) : v();
                })(e, I, R, T, C, O, _, j, N, P);
          },
          onMouseEnter(e) {
            M || "function" != typeof w || w(e),
              M &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              I &&
                (P || !N) &&
                h(I, R, T, {
                  locale: j,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            M || "function" != typeof E || E(e),
              M &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              I &&
                (P || !N) &&
                h(I, R, T, {
                  locale: j,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!M || m || ("a" === n.type && !("href" in n.props))) {
          let Z = void 0 !== j ? j : null == L ? void 0 : L.locale,
            q =
              (null == L ? void 0 : L.isLocaleDomain) &&
              d.getDomainLocale(
                T,
                Z,
                null == L ? void 0 : L.locales,
                null == L ? void 0 : L.domainLocales
              );
          W.href =
            q ||
            p.addBasePath(
              c.addLocale(T, Z, null == L ? void 0 : L.defaultLocale)
            );
        }
        return M
          ? l.default.cloneElement(n, W)
          : l.default.createElement("a", Object.assign({}, x, W), r);
      });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: r, disabled: c } = e,
            i = c || !l,
            [f, s] = n.useState(!1),
            [d, p] = n.useState(null);
          n.useEffect(() => {
            if (l) {
              if (!i && !f && d && d.tagName) {
                let e = (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = u.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let o = new Map(),
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: l, elements: o }),
                      u.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), a.delete(n);
                        let t = u.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        t > -1 && u.splice(t, 1);
                      }
                    }
                  );
                })(d, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
                return e;
              }
            } else if (!f) {
              let n = o.requestIdleCallback(() => s(!0));
              return () => o.cancelIdleCallback(n);
            }
          }, [d, i, r, t, f]);
          let v = n.useCallback(() => {
            s(!1);
          }, []);
          return [p, f, v];
        });
      var n = r(7294),
        o = r(4686);
      let l = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9008: function (e, t, r) {
      e.exports = r(3121);
    },
    1664: function (e, t, r) {
      e.exports = r(1551);
    },
    1163: function (e, t, r) {
      e.exports = r(880);
    },
    6893: function (e, t, r) {
      "use strict";
      r.d(t, {
        Imn: function () {
          return o;
        },
      });
      var n = r(8357);
      function o(e) {
        return (0, n.w_)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
              },
            },
            { tag: "polyline", attr: { points: "22,6 12,13 2,6" } },
          ],
        })(e);
      }
    },
    8357: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var n = r(7294),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = n.createContext && n.createContext(o),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        u = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(e);
              o < n.length;
              o++
            )
              0 > t.indexOf(n[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function c(e) {
        return function (t) {
          return n.createElement(
            i,
            a({ attr: a({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    a({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function i(e) {
        var t = function (t) {
          var r,
            o = e.attr,
            l = e.size,
            c = e.title,
            i = u(e, ["attr", "size", "title"]),
            f = l || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                i,
                {
                  className: r,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              c && n.createElement("title", null, c),
              e.children
            )
          );
        };
        return void 0 !== l
          ? n.createElement(l.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
  },
]);
