(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/autotesthub/app/drag-drop/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "page-module__kcRPvW__active",
  "arrow": "page-module__kcRPvW__arrow",
  "container": "page-module__kcRPvW__container",
  "dragIcon": "page-module__kcRPvW__dragIcon",
  "draggable": "page-module__kcRPvW__draggable",
  "dropAnimation": "page-module__kcRPvW__dropAnimation",
  "dropPlaceholder": "page-module__kcRPvW__dropPlaceholder",
  "droppedItem": "page-module__kcRPvW__droppedItem",
  "dropzone": "page-module__kcRPvW__dropzone",
  "playground": "page-module__kcRPvW__playground",
  "pulse": "page-module__kcRPvW__pulse",
  "reset": "page-module__kcRPvW__reset",
  "sourceZone": "page-module__kcRPvW__sourceZone",
  "success": "page-module__kcRPvW__success",
  "zoneLabel": "page-module__kcRPvW__zoneLabel",
});
}),
"[project]/autotesthub/app/drag-drop/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DragDropPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/autotesthub/app/drag-drop/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DragDropPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "d207247ad98abce16232a92a859c59fa581872de48eb600028903608aea2d7e6") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d207247ad98abce16232a92a859c59fa581872de48eb600028903608aea2d7e6";
    }
    const [dropped, setDropped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setDraggedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "DragDropPage[handleDragStart]": (e, item)=>{
                setDraggedItem(item);
                e.dataTransfer.setData("text", item);
                e.dataTransfer.effectAllowed = "move";
            }
        })["DragDropPage[handleDragStart]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleDragStart = t0;
    const handleDragOver = _DragDropPageHandleDragOver;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "DragDropPage[handleDrop]": (e_1)=>{
                e_1.preventDefault();
                const data = e_1.dataTransfer.getData("text");
                if (data) {
                    setDropped(true);
                }
            }
        })["DragDropPage[handleDrop]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleDrop = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "DragDropPage[handleReset]": ()=>{
                setDropped(false);
                setDraggedItem(null);
            }
        })["DragDropPage[handleReset]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleReset = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Drag & Drop"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Drag the neon box into the target zone to test drag events."
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoneLabel,
            children: "Source"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== dropped) {
        t6 = !dropped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].draggable,
            draggable: true,
            onDragStart: {
                "DragDropPage[<div>.onDragStart]": (e_2)=>handleDragStart(e_2, "neon-box")
            }["DragDropPage[<div>.onDragStart]"],
            id: "draggable",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragIcon,
                    children: "⬡"
                }, void 0, false, {
                    fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
                    lineNumber: 82,
                    columnNumber: 58
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Drag Me"
                }, void 0, false, {
                    fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
                    lineNumber: 82,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 80,
            columnNumber: 22
        }, this);
        $[7] = dropped;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sourceZone,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
            children: "→"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const t9 = `${__TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropzone} ${dropped ? __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`;
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoneLabel,
            children: "Target"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== dropped) {
        t11 = dropped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].droppedItem,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragIcon,
                    children: "⬡"
                }, void 0, false, {
                    fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
                    lineNumber: 113,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Dropped!"
                }, void 0, false, {
                    fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
                    lineNumber: 113,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 113,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropPlaceholder,
            children: "Drop Here"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 113,
            columnNumber: 125
        }, this);
        $[13] = dropped;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] !== t11 || $[16] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            onDragOver: handleDragOver,
            onDrop: handleDrop,
            id: "dropzone",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[15] = t11;
        $[16] = t9;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playground,
            children: [
                t7,
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t7;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== dropped) {
        t14 = dropped && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].success,
            id: "success-message",
            children: "✓ Success! Item successfully dropped into target zone."
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 139,
            columnNumber: 22
        }, this);
        $[21] = dropped;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reset,
            onClick: handleReset,
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t13 || $[25] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$drag$2d$drop$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t3,
                t4,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/drag-drop/page.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[24] = t13;
        $[25] = t14;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    return t16;
}
_s(DragDropPage, "u0yO7bE6yl1tBjybhdk0K5cf+I8=");
_c = DragDropPage;
function _DragDropPageHandleDragOver(e_0) {
    e_0.preventDefault();
    e_0.dataTransfer.dropEffect = "move";
}
var _c;
__turbopack_context__.k.register(_c, "DragDropPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=autotesthub_app_drag-drop_e0c413e1._.js.map