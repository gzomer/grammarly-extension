(function () {
    Error;
    console.log('aca')
    function e(t, n, o) {
        const r = o();
        return t > 0 ? r.catch((r) => new Promise((e, t) => setTimeout(e, n)).then((r) => e(t - 1, n, o))) : r;
    }
    var t;
    !(function (e) {
        function t() {
            return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
        }
        e.create = function () {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
        };
    })(t || (t = {}));
    void 0 !== self.requestIdleCallback && self.requestIdleCallback;
    function n(e) {
        return new Promise((t) => setTimeout(t, e));
    }
    const o = n;
    const r = function () {
        let e, t;
        return {
            promise: new Promise((n, o) => {
                (e = n), (t = o);
            }),
            resolve: e,
            reject: t,
        };
    };
    var i, s, a, l, c, u;
    !(function (e) {
        function t(e) {
            return new Promise(e);
        }
        (e.create = t),
            (e.createCompletionSource = r),
            (e.sync = function (e) {
                return t((t, n) => t(e()));
            }),
            (e.delay = o);
    })(i || (i = {}));
    class d extends Error {}
    function g(e) {
        return new Promise((t, n) => setTimeout(() => n(new d("Promise timed out.")), e));
    }
    function p(e) {
        return e.nodeType === Node.ELEMENT_NODE;
    }
    !(function (e) {
        (e[(e.Escape = 27)] = "Escape"), (e[(e.Return = 13)] = "Return"), (e[(e.Tab = 9)] = "Tab"), (e[(e.RightArrow = 39)] = "RightArrow"), (e[(e.UpArrow = 38)] = "UpArrow"), (e[(e.DownArrow = 40)] = "DownArrow");
    })(s || (s = {})),
        (function (e) {
            (e.editorElementClass = "kix-appview-editor"),
                (e.layoutRootClass = "kix-zoomdocumentplugin-outer"),
                (e.contentRootClass = "kix-paginateddocumentplugin"),
                (e.wordNodeClass = "kix-wordhtmlgenerator-word-node"),
                (e.commentContainerClass = "docos-input"),
                (e.viewModeIconClass = "docs-icon-acl-view-only-on-brand-color-background"),
                (e.eventsIFrameSelector = ".docs-texteventtarget-iframe"),
                (e.selectionOverlaySelector = ".kix-selection-overlay"),
                (e.cursor = ".kix-cursor"),
                (e.cursor_rectangle = ".kix-cursor-caret"),
                (e.cursor_active = "docs-text-ui-cursor-blink"),
                (e.versionHistorySidebarSelector = "#docs-revisions-sidebar"),
                (e.viewModeMenuSelector = ".docs-toolbar-menu-button .docs-icon-acl-view-only"),
                (e.requestEditAccessButtonSelector = "#titlebar-mode-indicator-container .kix-titlebar-request-access-button"),
                (e.lineViewDecorationsSelector = ".kix-lineview-decorations"),
                (e.suggestionNewTextSelector = '[class*="suggestion-text"]'),
                (e.suggestionOverlaySelector = ".suggest-changes-top-colorbar"),
                (e.smartComposeSelector = ".docs-smartcompose-suggestion"),
                (e.canvasSelector = "canvas.kix-canvas-tile-content"),
                (e.canvasLayoutRootClass = "kix-rotatingtilemanager");
        })(a || (a = {})),
        (function (e) {
            (e.gdocsPageClass = "kix-page"),
                (e.gdocsColumnClass = "kix-page-column"),
                (e.gdocsColumnBottomClass = "kix-page-column-bottom"),
                (e.gdocsFootNoteClass = "kix-paginated-footnoteview"),
                (e.gdocsParagraphClass = "kix-paragraphrenderer"),
                (e.gdocsTableClass = "kix-tablerenderer"),
                (e.gdocsTableCellClass = "kix-cellrenderer"),
                (e.lineTextClass = "kix-lineview-text-block"),
                (e.wordNodeClass = "kix-wordhtmlgenerator-word-node"),
                (e.inlineBlockClass = "goog-inline-block"),
                (e.personEntityViewClass = "kix-person-entity-view"),
                (e.personEntityNameClass = "kix-person-entity-name"),
                (e.gdocsContentParagraphSelector = `.${e.gdocsColumnClass} .${e.gdocsParagraphClass}`),
                (e.isContinuationParagraphContent = (e) => {
                    if (e) {
                        const t = e.closest(".kix-paragraphrenderer");
                        return t && !t.hasAttribute("id");
                    }
                    return null;
                }),
                (e.isSplitTailParagraph = (e) => p(e) && !e.hasAttribute("id"));
        })(l || (l = {})),
        (function (e) {
            (e.lineViewSelector = "div.kix-lineview"),
                (e.spellingOverlaySelector = "div.kix-spelling-error-overlay-container.kix-htmloverlay.docs-ui-unprintable"),
                (e.spellingUnderlineSelector = "svg.kix-spelling-error-overlay"),
                (e.spellingBubbleSelector = "div.kix-spell-bubble"),
                (e.spellingHighlightSelectors = ["div.kix-spelling-error-highlighted-overlay", "div.kix-spelling-error-highlighted-overlay-non-critical"]),
                (e.sellingUnderlinePromoBubbleSelector = "div.jfk-bubble.jfk-bubble-promo.docs-promo-bubble");
        })(c || (c = {})),
        (function (e) {
            function t(e) {
                return p(e) && e.classList.contains(l.gdocsParagraphClass);
            }
            function n(e) {
                return p(e) && e.classList.contains(l.gdocsTableClass);
            }
            (e.isPage = function (e) {
                return p(e) && e.classList.contains(l.gdocsPageClass);
            }),
                (e.isPageLoaded = function (e) {
                    return e.querySelectorAll(l.gdocsContentParagraphSelector).length > 0;
                }),
                (e.isColumn = function (e) {
                    return p(e) && e.classList.contains(l.gdocsColumnClass);
                }),
                (e.isColumnBottom = function (e) {
                    return p(e) && e.classList.contains(l.gdocsColumnBottomClass);
                }),
                (e.isFootNote = function (e) {
                    return p(e) && e.classList.contains(l.gdocsFootNoteClass);
                }),
                (e.isParagraph = t),
                (e.isTable = n),
                (e.isTableRow = function (e) {
                    return p(e) && "tr" === e.tagName.toLowerCase();
                }),
                (e.isTableCellHolder = function (e) {
                    return p(e) && "td" === e.tagName.toLocaleLowerCase();
                }),
                (e.isTableCellContent = function (e) {
                    return p(e) && e.classList.contains(l.gdocsTableCellClass);
                }),
                (e.isContent = function (e) {
                    return t(e) || n(e);
                }),
                (e.isParagraphLine = function (e) {
                    return p(e) && e.classList.contains(l.lineTextClass);
                }),
                (e.isWordNode = function (e) {
                    return p(e) && e.classList.contains(l.wordNodeClass);
                }),
                (e.isTextNode = function (e) {
                    return e.nodeType === Node.TEXT_NODE;
                }),
                (e.isNBSPNode = function (e) {
                    return p(e) && e.classList.contains(l.inlineBlockClass) && e.textContent === String.fromCharCode(160);
                }),
                (e.isPersonEntityView = function (e) {
                    return p(e) && e.classList.contains(l.personEntityViewClass);
                }),
                (e.isPersonEntityName = function (e) {
                    return p(e) && e.classList.contains(l.personEntityNameClass);
                });
        })(u || (u = {}));
    class h {
        constructor(e, t, n, o) {
            console.log('H', e, t, n, o),
            (this._customInboundEventName = t),
                (this._customOutboundEventName = n),
                (this._wrapOutboundMessage = o),
                (this.inbound = {
                    subscribe: (e) => {
                        const t = ({ detail: t }) => {
                            const n = t;
                            e && ("function" == typeof e ? e(n) : e.next && e.next(n));
                        };
                        return this._target.addEventListener(this._customInboundEventName, t, !1), { unsubscribe: () => this._target.removeEventListener(this._customInboundEventName, t, !1) };
                    },
                }),
                (this.outbound = (e) => {
                    const t = this._wrapOutboundMessage ? this._wrapOutboundMessage(e) : e,
                        n = new CustomEvent(this._customOutboundEventName, { bubbles: !0, cancelable: !0, detail: t });
                    this._target.dispatchEvent(n);
                }),
                (this._target = e.defaultView || e);
        }
    }
    function f(e, t, n) {
        return {
            call(o, r, i, s) {
                var a;
                const l = s(i),
                    c = null === (a = t.postFn) || void 0 === a ? void 0 : a[r];
                if (c)
                    try {
                        c(o, e, i, l);
                    } catch (e) {
                        n.logException(`proxy.call.${String(r)}`, e);
                    }
                return l;
            },
            set(o, r, i, s) {
                var a;
                const l = null === (a = t.overrideSet) || void 0 === a ? void 0 : a[r];
                if (l)
                    try {
                        const t = l(o, e, i);
                        if (void 0 !== t) return s(t);
                    } catch (e) {
                        n.logException(`proxy.set.${String(r)}`, e);
                    }
                return s(i);
            },
        };
    }
    const m = "M";
    function v(e) {
        const t = /^(?:([\d\w]+) )?(?:(\w+) )?([\d\.]+)px (?:[\'\"])?([\w \-]+)(?:[\'\"])?$/.exec(e);
        if (t) {
            const [e, n, o, r, i] = t;
            let s = "400",
                a = "normal";
            return (
                n && (isNaN(parseInt(n, 10)) ? ("italic" === n ? ((a = "italic"), (s = isNaN(parseInt(o, 10)) ? ("bold" === o ? "700" : "400") : o)) : (s = "bold" === n ? "700" : "400")) : ((s = n), (a = o || a))),
                `${s} ${a} ${parseFloat(r).toFixed(4)}px "${i}"`
            );
        }
        return e;
    }
    var w, b;
    function x(e) {
        return e.type === w.text;
    }
    function y(e, t, n) {
        const o = new DOMPoint(e, t).matrixTransform(n);
        return { left: o.x, top: o.y };
    }
    function C(e, t, n) {
        return { width: n.a * e + n.c * t, height: n.b * e + n.d * t };
    }
    function _(e, t) {
        return t.a * e;
    }
    function N(e, t) {
        return t.d * e;
    }
    function S(e, t, n, o, r = !1) {
        const i = (e, t, n, o = !1) => {
            e.beginPath(), (e.strokeStyle = `rgba(0,0,255,${o ? 0.05 : 0.2})`), (e.lineWidth = 2), e.moveTo(t, n), e.lineTo(t, n - 20), e.stroke();
        };
        e.save(), e.resetTransform(), i(e, t, n, r), o.forEach((o) => i(e, t + o, n, r)), e.restore();
    }
    !(function (e) {
        (e.text = "text"), (e.space = "space"), (e.lineBreak = "lineBreak"), (e.footnoteLink = "footnoteLink"), (e.mention = "mention");
    })(w || (w = {})),
        (function (e) {
            (e.ordinary = "ordinary"), (e.special = "special");
        })(b || (b = {}));
    const P = (e, t, n, o, r, i = 0, s = 0, a = !1) => {
            e.save(),
                e.resetTransform(),
                (e.fillStyle = `rgba(221,0,0,${a ? 0.05 : 0.1})`),
                e.fillRect(t, n, o, 10),
                (e.fillStyle = `rgba(221,0,0,${a ? 0.4 : 0.8})`),
                (e.font = "10px Arial"),
                e.fillText(`${i}`, t, n + 10),
                (e.fillStyle = `rgba(0,128,221,${a ? 0.4 : 0.8})`),
                e.fillText(`${s}`, t, n + 20),
                S(e, t, n, r, a),
                e.restore();
        },
        T = (e, t, n, o, r, i = !1) => {
            e.save(), e.resetTransform(), (e.fillStyle = `rgba(0,221,0,${i ? 0.05 : 0.1})`), e.fillRect(t, n + 10, o, 10), e.restore(), S(e, t, n, r, i);
        },
        E = (e, t, n, o = !1) => {
            e.save(), e.resetTransform(), e.beginPath(), (e.strokeStyle = `rgba(0,221,0,${o ? 0.05 : 0.1})`), (e.lineWidth = 5), e.moveTo(t + 2.5, n), e.lineTo(t + 2.5, n + 10), e.lineTo(t - 10, n + 10), e.stroke(), e.restore();
        };
    function M(e) {
        return (t, n) => {
            const o = (function (e, t, n) {
                const o = n.slice(0);
                return o[0] === e
                    ? (o.shift(), 0 === o.length ? { shouldStart: !0, newPageCandidate: t.slice(0) } : { shouldStart: !1, newPageCandidate: o })
                    : o.length < t.length
                    ? { shouldStart: !1, newPageCandidate: t.slice(0) }
                    : { shouldStart: !1, newPageCandidate: o };
            })(e, n.newPageRoutine, n.newPageCandidate);
            o.shouldStart
                ? (function (e) {
                      const t = e.getCurrentPageAttrs();
                      if (
                          ((e.currentSelection = []),
                          (e.pageCleared = !0),
                          (e.newPageRoutine = A.slice(0)),
                          (e.newPageCandidate = A.slice(0)),
                          (e.matchingBroken = !1),
                          (e.hasSuggestions = !1),
                          (e.footnote = { footnoteLineDetected: !1 }),
                          (e.compact = e.isCompactLayout()),
                          e.clearedRect &&
                              (function (e, t) {
                                  const { left: n, top: o, width: r, height: i } = t,
                                      s = e;
                                  return !(n <= 0 && o <= 0 && n + r >= s.width && o + i >= s.height);
                              })(t.canvasBitmapSize, e.clearedRect))
                      ) {
                          e.currentPageMap = null;
                          const n = { rect: null, fragments: [], specialFragments: [], length: 0, wordCount: 0 };
                          e.currentPartialMap = { pageAttrs: t, rect: e.clearedRect, sections: { main: n } };
                      } else
                          (e.currentPartialMap = null),
                              (e.currentPageMap =
                                  ((n = t),
                                  {
                                      pageAttrs: { ...n },
                                      sections: {
                                          main: { rect: null, fragments: [], specialFragments: [], length: 0, wordCount: 0 },
                                          header: { rect: null, fragments: [], specialFragments: [], length: 0, wordCount: 0 },
                                          footer: { rect: null, fragments: [], specialFragments: [], length: 0, wordCount: 0 },
                                          footnotes: { rect: null, fragments: [], specialFragments: [], length: 0, wordCount: 0 },
                                      },
                                  }));
                      var n;
                  })(n)
                : (n.newPageCandidate = o.newPageCandidate);
        };
    }
    const A = ["clearRect", "save", "scale"];
    function k(e) {
        const { clips: t } = e;
        if (1 === t.length) {
            if (!e.currentPageMap) return 0;
            return O(t[0], { ...e.currentPageMap.pageAttrs.canvasBitmapSize, left: 0, top: 0 });
        }
        if (2 === t.length) {
            const [e, n] = t;
            return O(n, e);
        }
        return 0;
    }
    function O(e, t) {
        return e.left !== t.left || e.width !== t.width ? 0 : 0 === e.top && e.height < t.height * U ? 1 : e.top > t.top && e.top > t.height * q ? 2 : 0;
    }
    function R(e, t) {
        return !(!e.currentPageMap && !e.currentPartialMap) || (e.api.log(t, "Current page map expected"), !1);
    }
    function I(e, t, n, o) {
        const r = n.metricsMap.getMetrics(t, m),
            i = n.metricsMap.getMetrics(t, " ");
        if (!r || !i) return null;
        return { spaceMetrics: i, top: e.top - N(r.chunk.actualBoundingBoxAscent, o), height: N(r.chunk.actualBoundingBoxAscent + r.chunk.actualBoundingBoxDescent, o) };
    }
    function L(e, t, n, { top: o, height: r }, i, s) {
        const a = s.metricsMap.getMetrics(t, e);
        if (!a) return null;
        const l = _(a.chunk.width, i);
        return { baseline: n.top, top: o, left: n.left, text: e, width: l, height: r, charShifts: a.charShifts.map((e) => _(e.width, i)) };
    }
    function D(e, t, n, o, r, i, s) {
        const a = new RegExp(`^${String.fromCodePoint(8237)}.*${String.fromCodePoint(8236)}$`).test(e),
            l = /^\d+$/.test(V(e)),
            c = !a && !l,
            u = I(n, t, r, i);
        if (c) {
            if (u) {
                const s = L(e, t, n, u, i, r);
                s && o.specialFragments.push({ type: w.mention, class: b.special, ...s });
            }
            return !0;
        }
        if (l) {
            const a = V(e);
            if (s && u && x(s)) {
                let e = s,
                    l = o.fragments.length - 1;
                for (let t = o.fragments.length - 1; t > 0; t--) {
                    const r = o.fragments[t];
                    if (r.type === w.lineBreak) break;
                    if (!(r.left > n.left)) {
                        (e = r), (l = t);
                        break;
                    }
                }
                const c = Math.abs(e.height * F - u.height) < z * u.height,
                    d = Math.abs(e.top - u.top) < u.height * z;
                if (c && d) {
                    const s = L(a, t, n, u, i, r);
                    if (s) {
                        const t = { ...s, height: e.height, baseline: e.baseline, type: w.footnoteLink, class: b.ordinary, linkText: a, text: "#" };
                        if (
                            (function (e) {
                                return e.type === w.space;
                            })(e) &&
                            (function (e, t, n = 0.001) {
                                return e === t || Math.abs(e - t) <= n;
                            })(e.left, n.left, $)
                        )
                            return (
                                !(function (e, t, n = 0.001) {
                                    return (function (e, t, n = 0.001) {
                                        return e >= t || e + n >= t;
                                    })(t, e, n);
                                })(e.width, s.width, $)
                                    ? o.fragments.splice(l, 1, t, { ...e, left: e.left + s.width, width: e.width - s.width })
                                    : o.fragments.splice(l, 1, t),
                                !0
                            );
                        if (Math.abs(s.left - e.left - e.width) < 0.5 * u.spaceMetrics.chunk.width) return o.fragments.splice(l + 1, 0, t), !0;
                    }
                }
            }
        } else if (a && s && u && x(s)) {
            const a = Math.abs(s.height * F - u.height) < z * u.height,
                l = Math.abs(s.top - u.top) < u.height * z;
            if (a && l) {
                const a = L(V(e), t, n, u, i, r);
                if (a) {
                    if (Math.abs(a.left - s.left - s.width) < 0.5 * u.spaceMetrics.chunk.width) return o.fragments.push({ ...a, height: s.height, baseline: s.baseline, type: w.text, class: b.ordinary }), !0;
                }
            }
        }
        return !1;
    }
    const B = 1,
        F = 0.6,
        z = 0.1,
        $ = 0.001,
        j = 192,
        U = 2 / 3,
        q = 2 / 3;
    function V(e) {
        return 8237 === e.codePointAt(0) ? e.substr(1, e.length - 2) || "" : e;
    }
    function H(e, t, n, o, r, i) {
        var s, a;
        const l = i.getTransform(),
            c = y(t, n, l),
            u = v(null !== (s = r.font) && void 0 !== s ? s : i.font),
            d = o.fragments.length > 0 ? o.fragments[o.fragments.length - 1] : null;
        if (D(e, u, c, o, r, l, d)) return;
        const g = V(e),
            p = d && ((h = d).type === w.text || h.type === w.footnoteLink) ? d : null;
        var h;
        if (p) {
            const e = { top: p.baseline, left: p.left },
                t = c.left - e.left - p.width,
                n = r.lastTextClipsId !== r.clipsId || c.top - e.top > 0.2 * p.height;
            r.lastTextClipsId = r.clipsId;
            !n && t > B && (o.fragments.push({ type: w.space, class: b.ordinary, baseline: c.top, left: e.left + p.width, top: p.top, width: t, height: p.height }), o.length++, r.debugVizualize && T(i, e.left + p.width, c.top, t, [])),
                n && (o.fragments.push({ type: w.lineBreak, class: b.ordinary, baseline: c.top, left: e.left + p.width, top: p.top, height: p.height }), o.length++, r.debugVizualize && E(i, p.left + p.width, p.top));
        }
        const f = I(c, u, r, l);
        if (!f) return;
        const m = null !== (a = g.match(/[^\s]+|\s+/g)) && void 0 !== a ? a : [];
        for (const e of m) {
            const t = L(e, u, c, f, l, r);
            if (null == t) continue;
            const n = { type: w.text, class: b.ordinary, ...t };
            o.fragments.push(n),
                r.debugVizualize && (e.match(/^\s+$/) ? T(i, c.left, c.top, n.width, n.charShifts) : P(i, c.left, c.top, t.width, t.charShifts, " " === e ? void 0 : o.wordCount++, " " === e ? void 0 : o.length)),
                (o.length += e.length),
                (c.left += n.width);
        }
    }
    const W = M("clearRect"),
        G = M("save"),
        Y = {
            postFn: {
                fillText(e, t, [n, o, r, i]) {
                    const s = (function (e, t) {
                        if (e.currentPartialMap) return e.currentPartialMap.sections.main;
                        if (!e.currentPageMap) return null;
                        const n = e.currentPageMap.sections,
                            o = e.footnote.footnoteLineDetected && t > e.footnote.footnoteLinePosition.top ? e.currentPageMap.sections.footnotes : e.currentPageMap.sections.main;
                        if (e.compact) return o;
                        switch (k(e)) {
                            case 1:
                                return n.header;
                            case 2:
                                return n.footer;
                            default:
                                return o;
                        }
                    })(t, r);
                    if (!s) return void R(t, "proxy.fillText");
                    const a = s.fragments.length > 0;
                    H(n, o, r, s, t, e), !a && s.fragments.length > 0 && (s.rect = K(t));
                },
                fillRect(e, t, [n, o, r, i]) {
                    if (["rgba(118, 167, 250, 0.5)", "rgba(118, 167, 250, 0.501960784313726)"].includes(e.fillStyle)) {
                        const s = e.getTransform();
                        t.currentSelection.push({ ...y(n, o, s), ...C(r, i, s) });
                    }
                },
                clearRect(e, t, n) {
                    W(e, t), t.clips.length || (t.clearedRect = Q(e, n));
                },
                save(e, t) {
                    t.saveCount++, t.savedState.push({ font: t.font, clips: t.clips, clipsId: t.clipsId }), G(e, t);
                },
                scale: M("scale"),
                restore(e, t) {
                    const n = t.savedState.pop();
                    if ((n && ((t.font = n.font), (t.clips = n.clips), (t.clipsId = n.clipsId)), t.saveCount--, 0 === t.saveCount))
                        if ((t.hasSuggestions && t.onChangeMode("suggest"), t.currentPageMap)) {
                            const e = t.currentPageMap.pageAttrs,
                                n = t.currentPageMap.sections,
                                o = n.footer.rect ? Math.min(e.canvasBitmapSize.height, n.footer.rect.top) : e.canvasBitmapSize.height,
                                i = t.footnote.footnoteLineDetected ? t.footnote.footnoteLinePosition.top : o;
                            n.footnotes.rect = { top: i, left: 0, width: e.canvasBitmapSize.width, height: o - i };
                            const s = n.header.rect ? Math.max(0, n.header.rect.top + n.header.rect.height) : 0;
                            (n.main.rect = { top: s, left: 0, width: e.canvasBitmapSize.width, height: i - s }),
                                t.onRender({
                                    pageMap: ((r = t.currentPageMap), { pageAttrs: r.pageAttrs, sections: { main: X(r.sections.main), footnotes: X(r.sections.footnotes), header: X(r.sections.header), footer: X(r.sections.footer) } }),
                                    pageAttrs: e,
                                    selection: t.currentSelection,
                                    hasSuggestions: t.hasSuggestions,
                                });
                        } else
                            t.currentPartialMap
                                ? t.onRender({
                                      partialPageMap: ((o = t.currentPartialMap), { pageAttrs: o.pageAttrs, rect: o.rect, sections: { main: X(o.sections.main) } }),
                                      pageAttrs: t.currentPartialMap.pageAttrs,
                                      selection: t.currentSelection,
                                      hasSuggestions: t.hasSuggestions,
                                  })
                                : R(t, "proxy.restore");
                    var o, r;
                },
                moveTo(e, t, [n, o]) {
                    t.footnote.footnoteLineDetected || (t.footnote.lastPosition = { left: n, top: o });
                },
                lineTo(e, t, [n, o]) {
                    !(function (e, t, n) {
                        if (!e.footnote.footnoteLineDetected) {
                            const o = e.footnote.lastPosition;
                            if (o) {
                                const r = t - o.left;
                                n > 0 && Math.abs(o.top - n) < B && r === j && (e.footnote = { footnoteLineDetected: !0, footnoteLinePosition: o });
                            }
                        }
                        e.footnote.footnoteLineDetected || (e.footnote.lastPosition = { left: t, top: n });
                    })(t, n, o);
                },
                beginPath(e, t) {
                    t.path = [];
                },
                clip(e, t, n) {
                    var o, r, i, s;
                    if (n[0]) t.api.logError("proxy.clip:unexpectedArguments", "clip with parameters is not supported");
                    else if (1 !== t.path.length) t.api.logError("proxy.clip:unsupportedPath", "clip with multiple paths is not supported", { pathSize: t.path.length });
                    else if (((t.clips = [...t.clips, t.path[0]]), t.currentPageMap)) {
                        const e = null !== (r = null === (o = t.currentPageMap) || void 0 === o ? void 0 : o.sections.header.fragments.length) && void 0 !== r && r,
                            n = null !== (s = null === (i = t.currentPageMap) || void 0 === i ? void 0 : i.sections.footer.fragments.length) && void 0 !== s && s;
                        if (!e || !n)
                            switch (k(t)) {
                                case 1:
                                    e || (t.currentPageMap.sections.header.rect = K(t));
                                    break;
                                case 2:
                                    n || (t.currentPageMap.sections.footer.rect = K(t));
                            }
                    }
                    t.clipsId = ++t.lastClipsId;
                },
                rect(e, t, n) {
                    t.path.push(Q(e, n));
                },
            },
            overrideSet: {
                strokeStyle: (e, t, n) => ("rgba(221,0,0,1)" === n || "rgba(66,133,244,1)" === n ? "rgba(0,0,0,0)" : void 0),
                fillStyle: (e, t, n) => ("rgba(252,232,230,1)" === n || "rgba(232,240,254,1)" === n ? "rgba(0,0,0,0)" : void ("rgba(31,161,93,1)" === n && (t.hasSuggestions = !0))),
                font(e, t, n) {
                    t.font = n;
                },
            },
        };
    function Q(e, [t, n, o, r]) {
        const i = e.getTransform();
        return { ...y(t, n, i), ...C(o, r, i) };
    }
    function X(e) {
        const { wordCount: t, ...n } = e;
        return n;
    }
    function K(e) {
        return e.clips.reduce(
            (e, t) =>
                e
                    ? (function (e, t) {
                          const n = Math.max(e.left, t.left),
                              o = Math.max(e.top, t.top),
                              r = Math.min(e.left + e.width, t.left + t.width),
                              i = Math.min(e.top + e.height, t.top + t.height);
                          return { left: n, top: o, width: n > r ? 0 : r - n, height: o > i ? 0 : i - o };
                      })(e, t)
                    : t,
            null
        );
    }
    const J = new Set([
            "version",
            "title",
            "lang",
            "translate",
            "dir",
            "dataset",
            "hidden",
            "tabIndex",
            "accessKey",
            "draggable",
            "spellcheck",
            "contentEditable",
            "isContentEditable",
            "offsetParent",
            "offsetTop",
            "offsetLeft",
            "offsetWidth",
            "offsetHeight",
            "style",
            "innerText",
            "outerText",
            "onabort",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncontextmenu",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onseeked",
            "onseeking",
            "onselect",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwheel",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "click",
            "focus",
            "blur",
            "onauxclick",
            "nonce",
            "namespaceURI",
            "prefix",
            "localName",
            "tagName",
            "id",
            "className",
            "classList",
            "slot",
            "attributes",
            "shadowRoot",
            "assignedSlot",
            "innerHTML",
            "outerHTML",
            "scrollTop",
            "scrollLeft",
            "scrollWidth",
            "scrollHeight",
            "clientTop",
            "clientLeft",
            "clientWidth",
            "clientHeight",
            "onbeforecopy",
            "onbeforecut",
            "onbeforepaste",
            "oncopy",
            "oncut",
            "onpaste",
            "onsearch",
            "onselectstart",
            "previousElementSibling",
            "nextElementSibling",
            "children",
            "firstElementChild",
            "lastElementChild",
            "childElementCount",
            "onwebkitfullscreenchange",
            "onwebkitfullscreenerror",
            "setPointerCapture",
            "releasePointerCapture",
            "hasPointerCapture",
            "hasAttributes",
            "getAttributeNames",
            "getAttribute",
            "getAttributeNS",
            "setAttribute",
            "setAttributeNS",
            "removeAttribute",
            "removeAttributeNS",
            "hasAttribute",
            "hasAttributeNS",
            "getAttributeNode",
            "getAttributeNodeNS",
            "setAttributeNode",
            "setAttributeNodeNS",
            "removeAttributeNode",
            "closest",
            "matches",
            "webkitMatchesSelector",
            "attachShadow",
            "getElementsByTagName",
            "getElementsByTagNameNS",
            "getElementsByClassName",
            "insertAdjacentElement",
            "insertAdjacentText",
            "insertAdjacentHTML",
            "requestPointerLock",
            "getClientRects",
            "getBoundingClientRect",
            "scrollIntoView",
            "scrollIntoViewIfNeeded",
            "createShadowRoot",
            "getDestinationInsertionPoints",
            "animate",
            "remove",
            "querySelector",
            "querySelectorAll",
            "webkitRequestFullScreen",
            "webkitRequestFullscreen",
            "scroll",
            "scrollTo",
            "scrollBy",
            "before",
            "after",
            "replaceWith",
            "prepend",
            "append",
            "ELEMENT_NODE",
            "ATTRIBUTE_NODE",
            "TEXT_NODE",
            "CDATA_SECTION_NODE",
            "ENTITY_REFERENCE_NODE",
            "ENTITY_NODE",
            "PROCESSING_INSTRUCTION_NODE",
            "COMMENT_NODE",
            "DOCUMENT_NODE",
            "DOCUMENT_TYPE_NODE",
            "DOCUMENT_FRAGMENT_NODE",
            "NOTATION_NODE",
            "DOCUMENT_POSITION_DISCONNECTED",
            "DOCUMENT_POSITION_PRECEDING",
            "DOCUMENT_POSITION_FOLLOWING",
            "DOCUMENT_POSITION_CONTAINS",
            "DOCUMENT_POSITION_CONTAINED_BY",
            "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC",
            "nodeType",
            "nodeName",
            "baseURI",
            "isConnected",
            "ownerDocument",
            "parentNode",
            "parentElement",
            "childNodes",
            "firstChild",
            "lastChild",
            "previousSibling",
            "nextSibling",
            "nodeValue",
            "textContent",
            "hasChildNodes",
            "getRootNode",
            "normalize",
            "cloneNode",
            "isEqualNode",
            "isSameNode",
            "compareDocumentPosition",
            "contains",
            "lookupPrefix",
            "lookupNamespaceURI",
            "isDefaultNamespace",
            "insertBefore",
            "appendChild",
            "replaceChild",
            "removeChild",
            "addEventListener",
            "removeEventListener",
            "dispatchEvent",
        ]),
        Z = [
            "autocorrect",
            "comment",
            "composing_decoration",
            "composing_region",
            "draft_comment",
            "ignore_spellcheck",
            "ignore_word",
            "import_warnings",
            "link",
            "named_range",
            "revision_diff",
            "smart_todo",
            "spellcheck",
            "suppress_feature",
            "text",
            "voice_corrections",
            "voice_dotted_span",
            "autogen",
            "cell",
            "citation_sources",
            "column_sector",
            "date_time",
            "document",
            "equation",
            "equation_function",
            "footnote",
            "headings",
            "horizontal_rule",
            "language",
            "list",
            "paragraph",
            "row",
            "tbl",
        ],
        ee = [61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17],
        te = [47, 91, 61439, 61438, 59651, 26, 30, 59649, 3, 59653, 59652, 16, 17, 93, 47, 103].reduce((e, t) => e + String.fromCharCode(t), ""),
        ne = [47, 91, 28, 3, 59653, 59651, 26, 25, 31, 92, 110, 18, 16, 93, 47, 103].reduce((e, t) => e + String.fromCharCode(t), "");
    class oe extends Error {
        constructor(e) {
            super(`Assertion failed: ${e ? ("string" == typeof e ? e : e()) : "(unnamed)"}`);
        }
    }
    function re(e, t) {
        if (!e) throw new oe(t);
    }
    function ie(e, t) {
        if (null == e) throw new oe(() => (t ? `Expected ${t} to be non-null` : "Expected non-null"));
        return e;
    }
    function se(e, t) {
        return {
            get: () => t.reduce((e, t) => (null == e ? void 0 : e[t]), e.get()),
            parent() {
                if (0 !== t.length) return se(e, t.slice(0, -1));
            },
            getPath: () => [e, t],
        };
    }
    function ae(e, t, n) {
        const o = e.get();
        if (!o) return [void 0, void 0, void 0];
        const r = le(o, t, n);
        if (!r.results.length) return [void 0, void 0, void 0];
        const i = r.results.map((t) => se(e, t.path));
        return [i[0], r.results[0].value, i];
    }
    function le(e, t, n, o = Object.getOwnPropertyNames(e)) {
        const r = new Set(),
            i = [];
        let s = 0;
        const a = (o, l, c, u = 0) => {
            if ((s++, "prototype" === o || l instanceof Window)) return;
            if (u > n) return;
            const d = [...c, o];
            try {
                if (t(o, l)) return void i.push({ path: d, value: l });
            } catch (e) {}
            var g;
            if (null != l && !r.has(l))
                if ((r.add(l), Array.isArray(l)))
                    l.forEach((e, t) => {
                        try {
                            a(t.toString(), e, d, u + 1);
                        } catch (e) {}
                    });
                else if (l instanceof Object) {
                    ((g = l) && null !== g && 1 === g.nodeType && "string" == typeof g.nodeName ? Object.getOwnPropertyNames(e).filter((e) => !J.has(e)) : Object.getOwnPropertyNames(l)).forEach((e) => {
                        try {
                            a(e, l[e], d, u + 1);
                        } catch (e) {}
                    });
                }
        };
        return (
            o.forEach((t) => {
                try {
                    a(t, e[t], []);
                } catch (e) {}
            }),
            { results: i, iterations: s }
        );
    }
    function ce(e) {
        const t = ie(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp"))),
            n = ie(e[t], "kixApp"),
            o = (function (e, t) {
                const n = new Set();
                return e.filter((e) => {
                    const o = t(e);
                    return !n.has(o) && (n.add(o), !0);
                });
            })(le(n, (e, t) => t && "" === t.toString().charAt(0), 5).results, (e) => e.value)
                .filter((e) => isNaN(parseInt(e.path[e.path.length - 1], 10)))
                .reduce(
                    (e, o) => {
                        const r = o.path.slice(0, o.path.length - 1).reduce((e, t) => e[t], n),
                            i = le(r, (e, t) => t instanceof RegExp, 1);
                        let s = !1,
                            a = !1;
                        if (1 === i.results.length) {
                            const e = i.results[0].value;
                            (s = e.toString() === ne), (a = e.toString() === te);
                        } else {
                            1 === le(r, (e, t) => Array.isArray(t) && t.length === ee.length && t.every((e, t) => e.charCodeAt(0) === ee[t]), 1).results.length && (a = !0);
                        }
                        return s ? { ...e, headersAndFooters: [t].concat(o.path) } : a ? { ...e, text: [t].concat(o.path) } : e;
                    },
                    { text: [], headersAndFooters: [] }
                );
        return 0 === o.text.length ? null : o;
    }
    function ue(e, t, n) {
        return e.push(Array.isArray(t) || isNaN(t) ? n : t), e;
    }
    class de {
        constructor(e) {
            (this._win = e),
                (this._result = null),
                (this._resizer = null),
                (this._kixApp = (function (e) {
                    const t = ie(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp")));
                    return se(((n = e), { get: () => n }), [t]);
                    var n;
                })(this._win)),
                (this._images = (function (e) {
                    let t,
                        n = 0;
                    const o = () => {
                        n++, (t = e());
                    };
                    return {
                        get calcCount() {
                            return n;
                        },
                        refresh: o,
                        get: () => (0 === n && o(), t),
                    };
                })(() =>
                    (function (e) {
                        const t = "inline",
                            n = "positioned";
                        try {
                            const [o] = ae(e, (e, o) => (e === t || e === n) && "object" == typeof o, 5);
                            re(!!o);
                            const r = o.parent();
                            re(!!r);
                            const [i, s] = ae(o, (e, t) => "object" == typeof t && !!t && 2 === Object.keys(t).length, 5);
                            re(!!i && !!s);
                            const a = ie(Object.keys(s)[0]),
                                [l, c] = ie(i.getPath());
                            return { inline: se(r, [t, ...c, a]), positioned: se(r, [n, ...c, a]) };
                        } catch (e) {
                            return { inline: null, positioned: null, error: e };
                        }
                    })(this._kixApp)
                ));
        }
        _attemptTextExtraction() {
            try {
                const e = ce(this._win),
                    t = Boolean(null == e ? void 0 : e.headersAndFooters.length),
                    n = (function (e) {
                        const t = ie(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp"))),
                            n = le(ie(e[t], "kixApp"), (e, t) => "horizontal_rule" === e && 2 === Object.keys(t).length, 6);
                        return [t].concat(ie(n.results[0]).path, Object.keys(n.results[0].value)[0]);
                    })(this._win);
                let o = !1;
                this._images.refresh();
                const r = (null == e ? void 0 : e.text) || [],
                    i = r.pop(),
                    s = r.reduce((e, t) => e[t], this._win),
                    a = (null == e ? void 0 : e.headersAndFooters) || [],
                    l = a.pop(),
                    c = a.reduce((e, t) => e[t], this._win),
                    u = null == n ? void 0 : n.pop(),
                    d = n ? (null == n ? void 0 : n.reduce((e, t) => e[t], this._win)) : {};
                if (r.length > 0) {
                    const { suggestionsFullArrayPath: e } = (function (e, t) {
                            try {
                                const n = ie(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp"))),
                                    o = le(ie(e[n], "kixApp"), (e, t) => t && Array.isArray(t) && t.some((e) => Array.isArray(e) && -1 !== e.toString().indexOf("suggest.")), 10)
                                        .results.filter((e) => e.path[0] === t[1])
                                        .filter((e) => !Z.some((t) => e.path.includes(t)))
                                        .map((e) => {
                                            const t = [...e.path];
                                            return t.pop(), t;
                                        })
                                        .reduce((t, o) => {
                                            const r = [n].concat(o).reduce((e, t) => e[t], e);
                                            return t
                                                ? r[t.idProp] > t.id
                                                    ? { ...t, id: r[t.idProp], path: o }
                                                    : t
                                                : Object.getOwnPropertyNames(r).reduce(
                                                      (e, t) => (Array.isArray(r[t]) || isNaN(parseInt(r[t], 10)) ? (Array.isArray(r[t][0]) ? { ...e, fullArrayProp: t } : { ...e, compactArrayProp: t }) : { ...e, idProp: t, id: r[t] }),
                                                      { path: o }
                                                  );
                                        }, null);
                                return { suggestionsFullArrayPath: o ? [n].concat(o.path, o.fullArrayProp) : null };
                            } catch (e) {
                                return { suggestionsFullArrayPath: null };
                            }
                        })(this._win, r),
                        n = Array.isArray(e) && e.pop(),
                        a = e && e.reduce((e, t) => e[t], this._win),
                        g = (e) => {
                            const t = null == e ? void 0 : e.get();
                            return Array.isArray(t) ? t.reduce(ue, []) : [];
                        };
                    return {
                        getText: () => {
                            const e = s[i],
                                r = t ? c[l] : "",
                                p = d[u],
                                h = Array.isArray(p) ? p.reduce(ue, []).sort((e, t) => e - t) : [],
                                f = g(this._images.get().positioned);
                            let m = g(this._images.get().inline);
                            o || (m.length > 0 ? (o = !0) : this._images.calcCount < 10 && "string" == typeof e && e.indexOf("*") >= 0 && (this._images.refresh(), (m = g(this._images.get().inline)), (o = m.length > 0)));
                            const v = a && n && a[n];
                            if ("string" == typeof e)
                                return v
                                    ? {
                                          fullText: e,
                                          headersAndFootersText: r,
                                          ignoredRanges: [...v].reduce((e, t) => (e.push(Array.isArray(t) ? !!t[0] : !!e.length && e[e.length - 1]), e), []),
                                          nonTextEntities: { horizontal_rule: { startsAt: h, textRepresentation: "-\n" }, inline_image: { startsAt: m, textRepresentation: "*" }, positioned_image: { startsAt: f, textRepresentation: "\n" } },
                                      }
                                    : {
                                          fullText: e,
                                          headersAndFootersText: r,
                                          ignoredRanges: [],
                                          nonTextEntities: { horizontal_rule: { startsAt: h, textRepresentation: "-\n" }, inline_image: { startsAt: m, textRepresentation: "*" }, positioned_image: { startsAt: f, textRepresentation: "\n" } },
                                      };
                            throw new Error("unexpected text value type");
                        },
                        gotIgnoredRanges: !!a,
                    };
                }
                return { error: "notFound" };
            } catch (e) {
                return { error: "exception", message: e.message };
            }
        }
        _attemptResizerExtraction() {
            const e = (function (e) {
                try {
                    return [ie(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp")))].concat("resize");
                } catch (e) {
                    return null;
                }
            })(this._win);
            try {
                return e ? e.reduce((e, t) => e[t], this._win) : () => {};
            } catch (e) {
                return () => {};
            }
        }
        _getText(e) {
            try {
                return (
                    this._result || (this._result = this._attemptTextExtraction()),
                    e.reQueryForIgnoredRanges && "getText" in this._result && !this._result.gotIgnoredRanges && (this._result = this._attemptTextExtraction()),
                    "getText" in this._result ? this._result.getText() : null
                );
            } catch (e) {
                return null;
            }
        }
        getText(e) {
            return this._getText(e);
        }
        triggerRender() {
            try {
                this._resizer || (this._resizer = this._attemptResizerExtraction()), this._resizer();
            } catch (e) {}
        }
    }
    function ge(e, t, n) {
        let o;
        function r(r, i) {
            const s = (void 0 === o && ((o = null !== (a = t()) && void 0 !== a ? a : null), o || n.logError("createMeasuringFallbackMetricsMap", "Can't create self-measuring canvas")), o);
            var a;
            if (!s) return;
            n.log("createMeasuringFallbackMetricsMap", "No metrics for text"), (s.font = r), s.measureText(i);
            const l = e.getMetrics(r, i);
            return l || n.logError("createMeasuringFallbackMetricsMap", "Self-measuring failed for text"), l;
        }
        return {
            get size() {
                return e.size;
            },
            getMetrics(t, n) {
                var o;
                return null !== (o = e.getMetrics(t, n)) && void 0 !== o ? o : r(t, n);
            },
            getFontMetrics(t) {
                const n = e.getFontMetrics(t);
                return {
                    get size() {
                        return n.size;
                    },
                    getMetrics(e) {
                        var o;
                        return null !== (o = n.getMetrics(e)) && void 0 !== o ? o : r(t, e);
                    },
                };
            },
        };
    }
    class pe {
        constructor(e, t) {
            (this._transport = e),
                (this._log = t),
                (this._calls = new Map()),
                (this._sub = this._transport.inbound.subscribe((e) => {
                    var t;
                    const n = this._calls.get(e.id);
                    if (n)
                        try {
                            "err" in e ? n.reject(e.err) : n.resolve(e.res);
                        } finally {
                            this._calls.delete(e.id);
                        }
                    else null === (t = this._log) || void 0 === t || t.warn(`received rpc call response for unregistered call ${e.id}`);
                })),
                (this.api = new Proxy({}, { get: (e, t) => ("then" === t ? void 0 : (...e) => this._handleCall(t, e)) }));
        }
        _handleCall(e, n) {
            let o = t.create();
            for (; this._calls.has(o); ) o = t.create();
            const r = i.createCompletionSource();
            return this._calls.set(o, r), this._transport.outbound({ id: o, method: e, args: n }), r.promise;
        }
        dispose() {
            this._sub.unsubscribe();
        }
    }
    const he = (t, o) => (r, i) => {
        console.log('[RPC]', r, i);
        const { request: s, response: l } = (function (e) {
                return { request: `cs-grm-request-${e}`, response: `cs-grm-response-${e}` };
            })(t),
            c = new pe(new h(document, l, s)),
            u = () => document.querySelector(`.${a.canvasLayoutRootClass}`);
        !(async function () {
            var t;
            console.log('Step Inside async after t')
            try {
                const s =
                    null !== (t = u()) && void 0 !== t
                        ? t
                        : await (async function () {
                              for (;;) {
                                  await n(250);
                                  const e = u();
                                  if (e) return e;
                              }
                          })();
                if (!s) throw new Error("Cannot find rotating tile manager");
                console.log('Step Before a')
                const a = (function (e, t) {
                        console.log('Step inside a', e, t)
                        const n = new de(self);
                        let o,
                            r = !1,
                            i = !1,
                            s = [];
                        return {
                            onChangeMode(e) {
                                console.log("onChangeMode", e)
                                o !== e && ((o = e), "suggest" === o && ((r = !1), (i = !1), a(e)));
                            },
                            onRender(o) {
                                console.log('onRender', o);
                                let fullText = n.getText({})
                                console.log('FULL TEXT', fullText)
                                if (r || i) {
                                    const r = i ? null : n.getText({ reQueryForIgnoredRanges: o.hasSuggestions });
                                    e.pageRendered({ fullText: r, renderResult: o }, t);
                                } else s.push(o);
                            },
                            init: () => a(void 0),
                        };
                        function a(o) {
                            console.log('init', o);
                            setTimeout(() => {
                                if (r || i) return;
                                if (o != o) return;
                                const a = n.getText({ reQueryForIgnoredRanges: !0 });
                                null === a ? ((i = !0), e.logError("FullTextExtractor", "Cannot get full document text")) : (r = !0),
                                    s.length
                                        ? (Promise.resolve(s).then(async (n) => {
                                              for (const o of n) await e.pageRendered({ fullText: a, renderResult: o }, t);
                                          }),
                                          (s = []))
                                        : n.triggerRender();
                            }, 0);
                        }
                    })(c.api, o),
                    l = ge(i.metricsMap, () => document.createElement("canvas").getContext("2d"), c.api);
                r((e) => {
                    console.log('Step inside r', e)
                    if (
                        (function (e) {
                            return Boolean(e.className);
                        })(e)
                    ) {
                        const t = (function (e) {
                            return {
                                ...e,
                                pageCleared: !1,
                                matchingBroken: !1,
                                currentSelection: [],
                                currentPageMap: null,
                                currentPartialMap: null,
                                newPageRoutine: A.slice(0),
                                newPageCandidate: A.slice(0),
                                saveCount: 0,
                                savedState: [],
                                path: [],
                                clips: [],
                                clipsId: 0,
                                lastClipsId: 0,
                                lastTextClipsId: 0,
                                clearedRect: null,
                                hasSuggestions: !1,
                                footnote: { footnoteLineDetected: !1 },
                                compact: !1,
                            };
                        })({
                            api: c.api,
                            metricsMap: l,
                            getCurrentPageAttrs() {
                                const t = s.getBoundingClientRect(),
                                    { left: n, top: o, width: r, height: i } = e.getBoundingClientRect(),
                                    a = { left: n - t.left, top: o - t.top, width: r, height: i };
                                return { canvasBitmapSize: { width: e.width, height: e.height }, pageOffsetRect: a };
                            },
                            isCompactLayout() {
                                var t;
                                return !!(null === (t = e.parentElement) || void 0 === t ? void 0 : t.classList.contains("kix-page-canvas-compact-mode"));
                            },
                            onChangeMode: a.onChangeMode,
                            onRender: a.onRender,
                        });
                        return (function ({ api: e, state: t }) {
                            return f(t, Y, e);
                        })({ api: c.api, state: t });
                    }
                });
                (await e(10, 0, () => {
                    return (e = 400), (t = c.api.init()), Promise.race([g(e), t]);
                    var e, t;
                })) && a.init(),
                    await n(1e3),
                    i.metricsMap.size || (await c.api.logError("init.textMeasuringCheck", "No text measuring events received"));
            } catch (e) {
                try {
                    await c.api.logException("init", e);
                } catch (e) {}
            }
        })();
    };
    !(async function () {
        var e;
        console.log('ACA')
        try {
            console.log('Init')
            const t = document.documentElement.dataset.grGdcConnId || (document.documentElement.dataset.grGdcConnId = `${Date.now()}-${Math.random()}`),
                n = self[`GR_GDEI_${t}`];

            console.log('==> CANVAS GR_GDEI_', t);
            window.test = n
            if (!n) return void console.error("Could not start grammarly integration", "no early injected data found");
            const o = (null === (e = document.currentScript) || void 0 === e ? void 0 : e.getAttribute("data-ext-version")) || "unknown";
            he(t, o)(n.addMiddleware, n.textMeasuringState)
        } catch (e) {
            console.error("Could not start grammarly integration", "module not loaded", e);
        }
    })();
})();
