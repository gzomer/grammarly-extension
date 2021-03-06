var e = {
    d: (t, n) => {
        for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
},
t = {};
e.d(t, { _: () => o });
class n {
constructor(e, t, n, o, r = e.defaultView || e) {
    (this._inboundEventName = t),
        (this._outboundEventName = n),
        (this._api = o),
        (this._target = r),
        (this._handleInbound = ({ detail: e }) => {
            const t = e;
            try {
                const e = this._api[t.method];
                if ("function" != typeof e) throw { message: `invalid method name ${t.method}` };
                {
                    const n = e.apply(this._api, t.args);
                    this._outbound({ id: t.id, res: n });
                }
            } catch (e) {
                this._outbound({ id: t.id, err: JSON.parse(JSON.stringify(e)) });
            }
        }),
        this._target.addEventListener(this._inboundEventName, this._handleInbound, !1);
}
_outbound(e) {
    const t = new CustomEvent(this._outboundEventName, { bubbles: !0, cancelable: !0, detail: e });
    this._target.dispatchEvent(t);
}
dispose() {
    this._target.removeEventListener(this._inboundEventName, this._handleInbound, !1);
}
}
function o(e, t) {
function o(e, t) {
    if (null == e) throw new Error(t ? `Expected ${t} to be non-null` : "Expected non-null");
    return e;
}
const r = new Set([
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
]);
function i(e, t, n, o = Object.getOwnPropertyNames(e)) {
    const i = new Set(),
        s = [];
    let a = 0;
    const l = (o, c, u, d = 0) => {
        if ((a++, "prototype" === o || c instanceof Window)) return;
        if (d > n) return;
        const g = [...u, o];
        try {
            if (t(o, c)) return void s.push({ path: g, value: c });
        } catch (e) {}
        var p;
        if (null != c && !i.has(c))
            if ((i.add(c), Array.isArray(c)))
                c.forEach((e, t) => {
                    try {
                        l(t.toString(), e, g, d + 1);
                    } catch (e) {}
                });
            else if (c instanceof Object) {
                ((p = c) && null !== p && 1 === p.nodeType && "string" == typeof p.nodeName ? Object.getOwnPropertyNames(e).filter((e) => !r.has(e)) : Object.getOwnPropertyNames(c)).forEach((e) => {
                    try {
                        l(e, c[e], g, d + 1);
                    } catch (e) {}
                });
            }
    };
    return (
        o.forEach((t) => {
            try {
                l(t, e[t], []);
            } catch (e) {}
        }),
        { results: s, iterations: a }
    );
}
function s(e) {
    return (function (e) {
        return e && e.replace(/[\u200b\u200c\u200d]/g, "");
    })(e).replace(/\s/g, "");
}
function a(e, t) {
    const n = o(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp"))),
        r = i(o(e[n], "kixApp"), (e, n) => n && -1 !== s(n.toString()).indexOf(t), 5),
        a = e.document.querySelector(".docs-title-input-label-inner");
    let l = "";
    a && a.innerText && (l = a.innerText);
    let c = (function (e, t) {
        const n = new Set();
        return e.filter((e) => {
            const o = t(e);
            return !n.has(o) && (n.add(o), !0);
        });
    })(r.results, (e) => e.value)
        .filter((e) => e.value !== l)
        .filter((e) => !e.path.some((e) => e.includes("font-size")));
    if ((c.length > 1 && (c = c.filter((e) => e.value.length > 0 && "" === e.value.charAt(0))), c.length)) {
        if (c.length > 1) throw new Error("FailureMessages.foundMoreThanOneTextObjectReference");
        return [n].concat(c[0].path);
    }
    return null;
}
const l = [
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
];
function c(e) {
    const t = u(e)
        .map((e) => s(e))
        .find((e) => e.length > 20);
    return (t && t.substring(0, 20)) || null;
}
function u(e) {
    const t = "#docs-editor",
        n = ".kix-wordhtmlgenerator-word-node",
        o = e.querySelector(t),
        r = o && o.querySelectorAll(n);
    if (!o || !r || !r.length) throw new Error("FailureMessages.editorElementNotFound");
    return r && Array.from(r).map((e) => e.innerText);
}
const d = new (class {
        constructor(e) {
            (this._win = e), (this._getTextFn = null);
        }
        _extractGetTextFn() {
            try {
                const e = c(this._win.document);
                if (null !== e) {
                    const t = a(this._win, e) || [],
                        n = t.pop(),
                        r = t.reduce((e, t) => e[t], this._win);
                    if (t.length > 0) {
                        const { suggestionsFullArrayPath: e, suggestionFastArrayPath: s } = (function (e, t) {
                                try {
                                    const n = o(Object.getOwnPropertyNames(e).find((e) => -1 !== e.toString().indexOf("_kixApp"))),
                                        r = i(o(e[n], "kixApp"), (e, t) => t && Array.isArray(t) && t.some((e) => Array.isArray(e) && -1 !== e.toString().indexOf("suggest.")), 10)
                                            .results.filter((e) => e.path[0] === t[1])
                                            .filter((e) => !l.some((t) => e.path.includes(t)))
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
                                                          (e, t) =>
                                                              Array.isArray(r[t]) || isNaN(parseInt(r[t], 10)) ? (Array.isArray(r[t][0]) ? { ...e, fullArrayProp: t } : { ...e, compactArrayProp: t }) : { ...e, idProp: t, id: r[t] },
                                                          { path: o }
                                                      );
                                            }, null);
                                    return { suggestionFastArrayPath: r ? [n].concat(r.path, r.compactArrayProp) : null, suggestionsFullArrayPath: r ? [n].concat(r.path, r.fullArrayProp) : null };
                                } catch (e) {
                                    return { suggestionFastArrayPath: null, suggestionsFullArrayPath: null };
                                }
                            })(this._win, t),
                            a = Array.isArray(e) && e.pop(),
                            c = Array.isArray(s) && s.pop(),
                            u = e && e.reduce((e, t) => e[t], this._win);
                        return {
                            getText: () => {
                                const e = r[n],
                                    t = u && a && u[a],
                                    o = u && c && u[c];
                                if ("string" == typeof e) {
                                    if (t && o) {
                                        let n = !1,
                                            r = 0;
                                        return {
                                            checkableText: o.concat([e.length - 1]).reduce((o, i) => {
                                                let s = o;
                                                return n || (s += e.slice(r, i)), (n = !(!t[i] || !t[i][0])), (r = i), s;
                                            }, ""),
                                            fullText: e,
                                            ignoredRanges: [...t].reduce((e, t) => (e.push(Array.isArray(t) ? !!t[0] : !!e.length && e[e.length - 1]), e), []),
                                        };
                                    }
                                    return { checkableText: e, fullText: e, ignoredRanges: [] };
                                }
                                throw new Error("unexpected text value type");
                            },
                            gotIgnoredRanges: !!u,
                        };
                    }
                    return { error: "notFound" };
                }
                return { error: "noSubText" };
            } catch (e) {
                return { error: "exception", message: e.message };
            }
        }
        _getText(e) {
            try {
                return (
                    this._getTextFn || (this._getTextFn = this._extractGetTextFn()),
                    e.reQueryForIgnoredRanges && "gotIgnoredRanges" in this._getTextFn && !this._getTextFn.gotIgnoredRanges && (this._getTextFn = this._extractGetTextFn()),
                    "getText" in this._getTextFn ? this._getTextFn.getText() : "noSubText" === this._getTextFn.error ? ((this._getTextFn = null), null) : null
                );
            } catch (e) {
                return null;
            }
        }
        getText(e) {
            return this._getText(e);
        }
    })(self),
    g = {
        getText: (e = { reQueryForIgnoredRanges: !1 }) => d.getText(e),
        ping: () => !0,
        dispose: () => {
            p.dispose();
        },
    },
    p = new n(document, e, t, g);
return { gte: d, api: g, lookup: i, findGetTextPath: a, getSubText: c, getWordNodesText: u };
}
var r = t._;
export { r as startInjectedApp };
