function initEmailjs() {
    emailjs.init(window.GATSBY_EMAILJS_PUBLIC_KEY);
}
const handleGetLexioClick = () => {
  window.location.href = 'https://app.lexio.me';
}
document.addEventListener('DOMContentLoaded', initEmailjs);

function initGoogleAnalytics() {
    const measurementId = "G-WCWJYEW9FG";

    if (!measurementId) {
      console.warn('Google Analytics Measurement ID is not set. Analytics will not be initialized.');
      return;
    }

    if (typeof window === 'undefined')
    {
        console.warn('Google Analytics not loaded: window undefined')
        return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);

    const gaScript = document.createElement('script');
    gaScript.async = true
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(gaScript);
  }
document.addEventListener('DOMContentLoaded', initGoogleAnalytics);


(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(9470);
        },
      ]);
    },
    8834: function (e, t, l) {
      "use strict";
      var s = l(5893);
      l(7294);
      var a = l(5874),
        n = l.n(a);
      t.Z = function () {
        return (0, s.jsx)("div", { className: n().pagebackground });
      };
    },
    1268: function (e, t, l) {
      "use strict";
      var s = l(5893);
      l(7294);
      var a = l(1664),
        n = l.n(a),
        i = l(6893),
        r = l(9583);
      let o = () =>
        (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className:
              "w-auto h-auto bottom-0 items-center text-center font-[inter] mt-10 bg-transparent mb-24",
            children: (0, s.jsx)("footer", {
              className: "inline-flex w-full items-center justify-center",
              children: (0, s.jsxs)("div", {
                className: "inline-flex flex-row justify-between w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-col basis-1/2 text-left sm:basis-1/4 justify-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "font-semibold w-full",
                        children: "Lexio 2025",
                      }),
                      (0, s.jsx)(n(), {
                        className: "mt-4 sm:mt-0",
                        href: "../privacy.html",
                        title: "privacy policy",
                        children: "Privacy policy",
                      }),
                      (0, s.jsx)(n(), {
                        href: "../terms.html",
                        title: "terms and conditions",
                        children: "Terms of use",
                      }),
                      (0, s.jsx)(n(), {
                        href: "../contactPage.html",
                        title: "contact us",
                        children: "Contact us",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, s.jsxs)("div", {
                      className:
                        "grid grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-4 sm:grid-rows-1",
                      children: [
                        (0, s.jsx)("a", {
                          type: "button",
                          href: "mailto:support@lexio.me?body=Ciao! I'm interested in Lexio.",
                          className:
                            "bg-LexioGray p-3 rounded-xl bg-opacity-50 flex justify-center items-center aspect-square",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          title: "Lexio's Email",
                          children: (0, s.jsx)(i.Imn, { size: 19 }),
                        }),
                        (0, s.jsx)("a", {
                          type: "button",
                          href: "https://www.instagram.com/Lexioapp/",
                          className:
                            "bg-LexioGray p-3 rounded-xl flex justify-center items-center aspect-square bg-opacity-50",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          title: "Lexio's Instagram",
                          children: (0, s.jsx)(r.Zf_, { size: 19 }),
                        }),
                        (0, s.jsx)("a", {
                          type: "button",
                          href: "https://x.com/Lexio_app",
                          className:
                            "bg-LexioGray p-3 rounded-xl flex justify-center items-center aspect-square bg-opacity-50",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          title: "Lexio's X",
                          children: (0, s.jsx)(r.fWC, { size: 18 }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      t.Z = o;
    },
        1533: function (e, t, l) {
      "use strict";
      var s = l(5893);
      l(7294);
      var a = l(5675),
        n = l.n(a),
        i = l(1163);
      let r = (e) => {
        let t = (0, i.useRouter)(),
          l = () => {
            var t;
            null === (t = e.refDiv.current) ||
              void 0 === t ||
              t.scrollIntoView({ behavior: "smooth" });
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: "w-full h-auto font-[inter] mb-20 xl:mb-24",
            children: (0, s.jsx)("header", {
              className: "inline-flex w-full ",
              children: (0, s.jsxs)("div", {
                className:
                  "inline-flex flex-row justify-between items-center w-full",
                children: [
                  (0, s.jsxs)("div", {
                    className: "inline-flex items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: "relative w-12 h-12 shadow-md rounded-xl",
                        children: (0, s.jsx)(n(), {
                          className: "rounded-xl",
                          src: "media/logo.svg",
                          fill: !0,
                          alt: "LexioLogo",
                          title: "Lexio Logo",
                        }),
                      }),
                      (0, s.jsx)("p", {
                        href: "#",
                        className: "font-bold text-xl ml-3 focus:outline-none",
                        children: "Lexio",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, s.jsx)("button", {
                      className:
                        "bg-gradient-to-r from-[#eec0a9] via-[#d5b0c0] to-[#baafc3] py-3 px-5 rounded-full font-medium text-sm focus:outline-none transition-all duration-200 ease-linear hover:from-[#f0c8b3] hover:via-[#d9b8c6] hover:to-[#c0b5ca] flex items-center",  // Added flex and items-center
                      onClick: handleGetLexioClick,
                      children: [
                        (0, s.jsx)("p", { children: "Get Lexio" }),
                        (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", className: "ml-2", children: (0, s.jsx)("path", { d: "M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" }) })
                      ]
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
      t.Z = r;
    },
    9470: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return E;
          },
        });
      var s = l(5893),
        a = l(7294),
        n = l(8834),
        i = l(1533),
        r = l(5701),
        o = l(9245),
        c = l(1268),
        x = l(3977),
        d = l(1019),
        m = l(3454);
      let u = (0, x.ZF)({
          apiKey: m.env.GATSBY_API_KEY,
          authDomain: m.env.GATSBY_AUTH_DOMAIN,
          databaseURL: "https://Lexio-waitlist-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: m.env.GATSBY_PROJECT_ID,
          storageBucket: m.env.GATSBY_STORAGE_BUCKET,
          messagingSenderId: m.env.GATSBY_MESSAGING_SENDER_ID,
          appId: m.env.GATSBY_APP_ID,
        }),
        p = (0, d.N8)(u);
      var f = l(5675),
        h = l.n(f),
        g = l(6265);
      let b = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)(null),
          [l, n] = (0, a.useState)(""),
          [x, m] = (0, a.useState)(
            "bg-transparent w-full lg:w-2/3 text-xl sm:text-4xl font-medium text-[#9ca3af97] placeholder-[#9ca3af60]"
          ),
          [u, f] = (0, a.useState)("opacity-0 -translate-x-8"),
          [b, y] = (0, a.useState)(""),
          [j, v] = (0, a.useState)(!1),
          [w, N] = (0, a.useState)("animate-none"),
          [E, _] = (0, a.useState)({});
        (0, a.useEffect)(() => {
          (0, d.jM)((0, d.iH)(p), (e) => {
            let t = e.val();
            _(t);
          });
        }, []);
        let S = () => {
            var t;
            null === (t = e.current) ||
              void 0 === t ||
              t.scrollIntoView({ behavior: "smooth" });
          };

        return (0, s.jsxs)("main", {
          className: "max-w-[1100px] p-5 md:p-8 lg:p-12",
          children: [
            (0, s.jsx)(i.Z, { refDiv: t }),
            (0, s.jsxs)("div", {
              className:
                "font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl",
              children: [
                (0, s.jsx)("h1", {
                  className: "font-bold text-[#262626] md:pt-5 xl:pt-8",
                  children: "Study less",
                }),
                (0, s.jsx)("h1", {
                  className:
                    "mb-5 xl:mb-10 leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eec0a9] via-[#d5b0c0] to-[#baafc3]",
                  children: "Study better",
                }),
              ],
            }),
            (0, s.jsxs)("h2", {
              className:
                "w-full xl:w-2/3 font-regular sm:text-xl lg:text-2l xl:text-2xl",
              children: [
                "Lexio helps people studying, allowing them to",
                (0, s.jsx)("br", {}),
                "improve their methods and boosting their results.",
              ],
            }),
            (0, s.jsxs)("button", {
              onClick: S,
              className:
                "mt-6 bg-LexioGray py-3 px-5 rounded-full font-medium text-sm inline-flex items-center mb-16 md:mb-20 bg-opacity-50 focus:outline-none hover:bg-[#EEEEEE] hover:text-[#404040] transition-all duration-200 ease-linear",
              children: ["Explore ", (0, s.jsx)(r.m, { className: "ml-2" })],
            }),
            (0, s.jsx)("div", { ref: e }),
            (0, s.jsxs)("div", {
              className:
                "w-full my-10 md:my-20 lg:my-28 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-[#262626] inline mr-1",
                      children: "Intelligent Study Documents.",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-[#9ca3af97] inline text-opacity-50",
                      children:
                        "Lexio's advanced technology ensures accurate summaries, multiple-choice questions, and flashcards, saving you time and effort.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "my-10 lg:my-16",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-[#262626] inline mr-1",
                      children: "Easy Editing.",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-[#9ca3af97] inline text-opacity-50",
                      children:
                        "Customize your documents effortlessly with our user-friendly editing tools.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-[#262626] inline mr-1",
                      children: "Ready-to-Use Components.",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-[#9ca3af97] inline text-opacity-50",
                      children:
                        "Let AI help your study with easy and intuitive tools.",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("p", {
              className:
                "font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#eec0a9] via-[#d5b0c0] to-[#baafc3] ",
              children: "Your personal space.",
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col sm:flex-row w-auto h-auto mb-20 mt-16",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col w-full h-full mr-5",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "transform-gpu transition-all hover:scale-95 bg-LexioGray w-full h-auto bg-opacity-50 rounded-2xl py-8 grid place-items-center mb-5 px-8",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full pb-5",
                          children: "Bring Lexio everywhere on every device",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "font-regular text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full text-[#6B7280]",
                          children:
                            "We provide our services on many different platforms, starting from a Web app, a mobile platform and soon even on a desktop application.",
                        }),
                        (0, s.jsx)(h(), {
                          src: "media/macFirst.svg",
                          className: "w-1/2 h-auto mt-4",
                          alt: "MacBook Render",
                          title: "MacBook Render",
                          width: 500,
                          height: 300,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "transform-gpu transition-all hover:scale-95 bg-LexioGray w-full h-auto bg-opacity-50 rounded-2xl py-8 grid place-items-center mb-3 px-8",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full pb-5",
                          children: "Let AI help you",
                        }),
                        (0, s.jsxs)("p", {
                          className:
                            "font-regular text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full text-[#6B7280]",
                          children: [
                            "Unlock personalized study aids with our AI engine. Get instant summaries, quiz-style questions, and custom flashcards to elevate your learning experience. Lexio's AI engine is designed to help you study smarter, not harder.",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "transform-gpu transition-all hover:scale-95 bg-LexioGray w-full h-auto bg-opacity-50 rounded-2xl py-8 grid place-items-center mb-3 px-8",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full pb-5",
                          children: "Chat with AI",
                        }),
                        (0, s.jsxs)("p", {
                          className:
                            "font-regular text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full text-[#6B7280]",
                          children: [
                            "Struggling to comprehend a text? Don't let confusion hold you back! Simply ask our AI Chat for assistance, and it will expertly guide you through the problem, helping you understand even the most complex materials.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex flex-col w-full h-auto m-0",
                  children: (0, s.jsxs)("div", {
                    className:
                      "transform-gpu transition-all hover:scale-95 bg-LexioGray w-full h-full bg-opacity-50 sm:h-full rounded-2xl py-8 flex flex-col mb-3 px-8",
                    children: [
                      (0, s.jsxs)("p", {
                        className:
                          "font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full pb-5",
                        children: ["Don't worry about your notes"],
                      }),
                      (0, s.jsxs)("p", {
                        className:
                          "font-regular text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg w-full text-[#6B7280]",
                        children: [
                          "Lexio automatically saves your notes and transcriptions in the cloud, so you can access them anytime, anywhere. Use Lexio's file management system to organize your notes and keep your study materials in order.",
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        className:
                          "flex justify-center items-center flex-grow",
                        children: [
                          (0, s.jsx)("img", {
                            src: "media/notesThird.svg",
                            className: "w-full sm:w-full h-auto mt-10 sm:mt-15",
                            alt: "Notes Render",
                            title: "Notes Render",
                            width: 500,
                            height: 300,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "w-full",
              ref: t,
              children: [
                (0, s.jsx)("p", {
                  className:
                    "font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#eec0a9] via-[#d5b0c0] to-[#baafc3] ",
                  children: "Join Lexio.",
                }),
                (0, s.jsx)("p", {
                  className:
                    "my-5 mb-8 xl:mb-16 font-regular sm:text-xl lg:text-2xl xl:text-2xl",
                  children:
                    "We are currently developing our first beta release for the public. Meanwhile, you can follow us on our social networks.",
                }),
                (0, s.jsx)("div", {
                  children:
                    (0, s.jsx)("a", {
                      type: "button",
                      href: "https://app.lexio.me",
                      className:
                        "w-full outline-none sm:w-1/4 flex justify-center mt-6 bg-gradient-to-r from-[#eec0a9] via-[#d5b0c0] to-[#baafc3] py-3 px-6 rounded-full size-4xl font-medium items-center mb-16 md:mb-20 hover:from-[#f0c8b3] hover:via-[#d9b8c6] hover:to-[#c0b5ca] transition-all duration-200 ease-linear cursor-pointer",
                      rel: "noopener noreferrer",
                      children: (0, s.jsx)("p", {
                        className: "text-[#000000]",
                        children: "Go to Lexio! \uD83D\uDE80",
                      }),
                    })
                }),
              ],
            }),
            (0, s.jsx)(c.Z, {}),
          ],
        });
      };
      var y = l(9008),
        j = l.n(y),
        v = l(4298),
        w = l.n(v);
      let N = () =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(j(), {
              children: [
                (0, s.jsx)("title", { children: "Lexio" }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    "Lexio is an app that helps you improve your studying process. Download Lexio today and start enjoying school.",
                }),
                (0, s.jsx)("meta", {
                  name: "keywords",
                  content:
                    "Lexio, Lexioapp, education, study, studying, class, school, transcription, flashcard",
                }),
                (0, s.jsx)("link", {
                  rel: "canonical",
                  href: "https://lexio.me/privacy",
                }),
                (0, s.jsx)("meta", { name: "author", content: "Lexio" }),
                (0, s.jsx)("meta", { name: "publisher", content: "Lexio" }),
              ],
            }),
            (0, s.jsx)(n.Z, {}),
            (0, s.jsx)("div", {
              className: "flex justify-center font-[inter] bg-opacity-60 z-10",
              children: (0, s.jsx)(b, {}),
            }),
          ],
        });
      var E = N;
    },
    5874: function (e) {
      e.exports = { pagebackground: "Background_pagebackground__qdFTJ" };
    },
  },
  function (e) {
    e.O(0, [445, 627, 675, 140, 828, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);