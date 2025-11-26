(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/drag-drop/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "page-module__R1liwG__active",
  "container": "page-module__R1liwG__container",
  "draggable": "page-module__R1liwG__draggable",
  "dropzone": "page-module__R1liwG__dropzone",
  "playground": "page-module__R1liwG__playground",
  "reset": "page-module__R1liwG__reset",
  "success": "page-module__R1liwG__success",
});
}),
"[project]/app/drag-drop/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DragDropPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/drag-drop/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DragDropPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "66d7661a64553e4e12eb8fa5c259695a4ef5c0e1db9e3e00e6bf1ed53e72100e") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66d7661a64553e4e12eb8fa5c259695a4ef5c0e1db9e3e00e6bf1ed53e72100e";
    }
    const [dropped, setDropped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDragOver = _DragDropPageHandleDragOver;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "DragDropPage[handleDrop]": (e_0)=>{
                e_0.preventDefault();
                setDropped(true);
            }
        })["DragDropPage[handleDrop]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleDrop = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Drag & Drop"
        }, void 0, false, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Drag the box into the target area to verify drag events."
        }, void 0, false, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].draggable,
            draggable: true,
            onDragStart: _DragDropPageDivOnDragStart,
            id: "draggable",
            children: "Drag Me"
        }, void 0, false, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropzone} ${dropped ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    const t5 = dropped ? "Dropped!" : "Drop Here";
    let t6;
    if ($[5] !== t4 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playground,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: t4,
                    onDragOver: handleDragOver,
                    onDrop: handleDrop,
                    id: "dropzone",
                    children: t5
                }, void 0, false, {
                    fileName: "[project]/app/drag-drop/page.tsx",
                    lineNumber: 51,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== dropped) {
        t7 = dropped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success,
            id: "success-message",
            children: "Success! Item dropped."
        }, void 0, false, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 60,
            columnNumber: 21
        }, this);
        $[8] = dropped;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset,
            onClick: {
                "DragDropPage[<button>.onClick]": ()=>setDropped(false)
            }["DragDropPage[<button>.onClick]"],
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t6 || $[12] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t1,
                t2,
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/app/drag-drop/page.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    return t9;
}
_s(DragDropPage, "++gpaSjxERI+PRpa/QDL5O2tl3A=");
_c = DragDropPage;
function _DragDropPageDivOnDragStart(e_1) {
    return e_1.dataTransfer.setData("text", "dragged");
}
function _DragDropPageHandleDragOver(e) {
    e.preventDefault();
}
var _c;
__turbopack_context__.k.register(_c, "DragDropPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_drag-drop_bf25d39b._.js.map