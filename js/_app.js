// customize the layout of all pages
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (n, t, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return c(2730);
        },
      ]);
    },
    2730: function (n, t, c) {
      "use strict";
      c.r(t),
        c.d(t, {
          default: function () {
            return a;
          },
        });
      var e = c(5893),
        _ = c(5901),
        u = c.n(_);
      function a(n) {
        let { Component: t, pageProps: c } = n;
        return (0, e.jsx)("main", {
          className: u().className,
          children: (0, e.jsx)(t, { ...c }),
        });
      }
      c(7599);
    },
    7599: function () {},
    5901: function (n) {
      n.exports = {
        style: {
          fontFamily: "'__Inter_83ccbe', '__Inter_Fallback_83ccbe'",
          fontStyle: "normal",
        },
        className: "__className_83ccbe",
      };
    },
  },
  function (n) {
    var t = function (t) {
      return n((n.s = t));
    };
    n.O(0, [774, 179], function () {
      return t(1118), t(880);
    }),
      (_N_E = n.O());
  },
]);
