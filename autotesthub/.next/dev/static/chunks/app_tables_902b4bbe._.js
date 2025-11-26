(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/tables/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "page-module__F8F3Eq__actionBtn",
  "active": "page-module__F8F3Eq__active",
  "container": "page-module__F8F3Eq__container",
  "inactive": "page-module__F8F3Eq__inactive",
  "loading": "page-module__F8F3Eq__loading",
  "status": "page-module__F8F3Eq__status",
  "table": "page-module__F8F3Eq__table",
});
}),
"[project]/app/tables/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/tables/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const initialData = [
    {
        id: 1,
        name: 'Alice Johnson',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Bob Smith',
        role: 'Editor',
        status: 'Inactive'
    },
    {
        id: 3,
        name: 'Charlie Brown',
        role: 'Viewer',
        status: 'Active'
    },
    {
        id: 4,
        name: 'Diana Prince',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 5,
        name: 'Evan Wright',
        role: 'Editor',
        status: 'Inactive'
    }
];
function TablesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "c8abcbecfc0ae189788ebab8c82cc7dd524de0690c638cb261ecf0bba3681f44") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8abcbecfc0ae189788ebab8c82cc7dd524de0690c638cb261ecf0bba3681f44";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "TablesPage[useEffect()]": ()=>{
                setTimeout({
                    "TablesPage[useEffect() > setTimeout()]": ()=>{
                        setData(initialData);
                        setLoading(false);
                    }
                }["TablesPage[useEffect() > setTimeout()]"], 1500);
            }
        })["TablesPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Dynamic Tables"
        }, void 0, false, {
            fileName: "[project]/app/tables/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Data loads asynchronously. Test wait conditions and cell verification."
        }, void 0, false, {
            fileName: "[project]/app/tables/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== data || $[7] !== loading) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t3,
                t4,
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    id: "loading",
                    children: "Loading data..."
                }, void 0, false, {
                    fileName: "[project]/app/tables/page.tsx",
                    lineNumber: 89,
                    columnNumber: 63
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    id: "user-table",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tables/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 191
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tables/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tables/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 215
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tables/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tables/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 243
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tables/page.tsx",
                                lineNumber: 89,
                                columnNumber: 187
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tables/page.tsx",
                            lineNumber: 89,
                            columnNumber: 180
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: data.map(_TablesPageDataMap)
                        }, void 0, false, {
                            fileName: "[project]/app/tables/page.tsx",
                            lineNumber: 89,
                            columnNumber: 272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/tables/page.tsx",
                    lineNumber: 89,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/tables/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[6] = data;
        $[7] = loading;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_s(TablesPage, "OsrA0c/FfU2601H4T8R42zLMhG4=");
_c = TablesPage;
function _TablesPageDataMap(user) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: user.id
            }, void 0, false, {
                fileName: "[project]/app/tables/page.tsx",
                lineNumber: 99,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: user.name
            }, void 0, false, {
                fileName: "[project]/app/tables/page.tsx",
                lineNumber: 99,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: user.role
            }, void 0, false, {
                fileName: "[project]/app/tables/page.tsx",
                lineNumber: 99,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][user.status.toLowerCase()]}`,
                    children: user.status
                }, void 0, false, {
                    fileName: "[project]/app/tables/page.tsx",
                    lineNumber: 99,
                    columnNumber: 90
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tables/page.tsx",
                lineNumber: 99,
                columnNumber: 86
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionBtn,
                    children: "Edit"
                }, void 0, false, {
                    fileName: "[project]/app/tables/page.tsx",
                    lineNumber: 99,
                    columnNumber: 193
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/tables/page.tsx",
                lineNumber: 99,
                columnNumber: 189
            }, this)
        ]
    }, user.id, true, {
        fileName: "[project]/app/tables/page.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TablesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_tables_902b4bbe._.js.map