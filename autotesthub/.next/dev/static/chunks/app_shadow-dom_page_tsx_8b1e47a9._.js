(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/shadow-dom/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShadowDomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './page.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ShadowDomPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "60b5a742b7b9a0c72ddc2aab2a7c235f3e5f9e77f82468d88519ed997a39ef9a") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "60b5a742b7b9a0c72ddc2aab2a7c235f3e5f9e77f82468d88519ed997a39ef9a";
    }
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ShadowDomPage[useEffect()]": ()=>{
                if (hostRef.current && !hostRef.current.shadowRoot) {
                    const shadow = hostRef.current.attachShadow({
                        mode: "open"
                    });
                    const container = document.createElement("div");
                    container.style.padding = "20px";
                    container.style.background = "#334155";
                    container.style.borderRadius = "8px";
                    container.style.color = "white";
                    const title = document.createElement("h3");
                    title.textContent = "Inside Shadow DOM";
                    const button = document.createElement("button");
                    button.textContent = "Shadow Button";
                    button.id = "shadow-btn";
                    button.style.padding = "8px 16px";
                    button.style.background = "#818cf8";
                    button.style.border = "none";
                    button.style.borderRadius = "4px";
                    button.style.cursor = "pointer";
                    button.onclick = _temp;
                    container.appendChild(title);
                    container.appendChild(button);
                    shadow.appendChild(container);
                }
            }
        })["ShadowDomPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Shadow DOM & iFrames"
        }, void 0, false, {
            fileName: "[project]/app/shadow-dom/page.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Elements below are isolated. Test your ability to pierce the Shadow DOM."
        }, void 0, false, {
            fileName: "[project]/app/shadow-dom/page.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.container,
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: styles.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Shadow Host"
                        }, void 0, false, {
                            fileName: "[project]/app/shadow-dom/page.tsx",
                            lineNumber: 67,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: hostRef,
                            id: "shadow-host"
                        }, void 0, false, {
                            fileName: "[project]/app/shadow-dom/page.tsx",
                            lineNumber: 67,
                            columnNumber: 104
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/shadow-dom/page.tsx",
                    lineNumber: 67,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/shadow-dom/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_s(ShadowDomPage, "dNFxtM1c0E9MyhgCkG6AqZWcZlM=");
_c = ShadowDomPage;
function _temp() {
    return alert("Shadow Button Clicked!");
}
var _c;
__turbopack_context__.k.register(_c, "ShadowDomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_shadow-dom_page_tsx_8b1e47a9._.js.map