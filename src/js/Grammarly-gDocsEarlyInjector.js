!(function () {
    var e;
    !(function (e) {
        (e.full = "full"), (e.limited = "limited");
    })(e || (e = {}));
    function t(e, t, n, o = document) {
        const i = e,
            r = o.documentElement,
            a = o.createElement("script");
        (a.async = !1),
            (a.defer = !1),
            (a.src = i),
            t && a.setAttribute("data-ext-id", t),
            n && a.setAttribute("data-ext-version", n),
            (a.onload = () => {
                a.remove();
            }),
            r.prepend(a);
    }
    !(function (e, n, o, i = t) {
        let r = !0;
        try {
            const t = o(),
                a = t.experiment;
            t.dynamicConfig && a && (i(n("Grammarly-gDocsEarlyInjectedCs.js"), e), (r = !1));
        } catch (e) {
            console.error("Grammarly error: Unable to initialize on gdocs due to exception: ", e);
        }
        r && i(n("Grammarly-gDocsCanvasFallbackInjected.js"), e),
            (function (e = "grammarly-desktop-integration") {
                var t, n;
                const o = document.createElement("style");
                o.textContent =
                    "\n  div {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select:none;\n    user-select:none;\n  }\n\n  div:before {\n    content: attr(data-content);\n  }\n";
                const i = document.createElement("div");
                i.setAttribute("aria-label", "grammarly-integration"), i.setAttribute("tabindex", "-1");
                const r = document.createElement(e);
                return (
                    r.attachShadow({ mode: "open" }),
                    r.setAttribute("data-grammarly-shadow-root", "true"),
                    null === (t = r.shadowRoot) || void 0 === t || t.appendChild(o),
                    null === (n = r.shadowRoot) || void 0 === n || n.appendChild(i),
                    document.documentElement.appendChild(r),
                    {
                        activate: (e, t, n) => {
                            const o = JSON.stringify(t ? { mode: t, isActive: e, isUserDisabled: n } : { isActive: e });
                            null == i || i.setAttribute("data-content", o);
                        },
                        remove: () => {
                            var e;
                            null === (e = null == r ? void 0 : r.parentNode) || void 0 === e || e.removeChild(r);
                        },
                    }
                );
            })().activate(!0);
    })(
        chrome.runtime.id,
        (e) => chrome.runtime.getURL(`src/js/${e}`),
        (function (e, t, n, o) {
            function i() {
                const e = t.getItem(n);
                if (e)
                    try {
                        return JSON.parse(e);
                    } catch (e) {}
            }
            return (
                chrome.storage.local.get(e, (e) => {
                    const r = JSON.stringify(o(i(), e));
                    t.setItem(n, r);
                }),
                chrome.storage.onChanged.addListener((r, a) => {
                    if ("local" === a) {
                        const a = {};
                        let c = !1;
                        for (const [t, n] of Object.entries(r)) e.includes(t) && ((a[t] = n.newValue), (c = !0));
                        if (c) {
                            const e = JSON.stringify(o(i(), a));
                            t.setItem(n, e);
                        }
                    }
                }),
                function () {
                    return o(i(), {});
                }
            );
        })(["user", "dynamicConfig"], localStorage, "grammarly.gDocs", function (e, t) {
            var n, o;
            const i = t.dynamicConfig ? Object.keys(t.dynamicConfig).find((e) => e.startsWith("gDocsCanvasConfig")) : null;
            return {
                experiment: (null === (n = t.user) || void 0 === n ? void 0 : n.experiments) ? t.user.experiments.gdocsCanvas : null == e ? void 0 : e.experiment,
                dynamicConfig: i ? (null === (o = t.dynamicConfig[i]) || void 0 === o ? void 0 : o.enableCanvas) : null == e ? void 0 : e.dynamicConfig,
            };
        })
    );
})();
