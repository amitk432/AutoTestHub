(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/autotesthub/app/tables/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionGroup": "page-module__tjqMWG__actionGroup",
  "active": "page-module__tjqMWG__active",
  "cancelBtn": "page-module__tjqMWG__cancelBtn",
  "container": "page-module__tjqMWG__container",
  "deleteBtn": "page-module__tjqMWG__deleteBtn",
  "editBtn": "page-module__tjqMWG__editBtn",
  "editInput": "page-module__tjqMWG__editInput",
  "inactive": "page-module__tjqMWG__inactive",
  "loading": "page-module__tjqMWG__loading",
  "saveBtn": "page-module__tjqMWG__saveBtn",
  "spin": "page-module__tjqMWG__spin",
  "spinner": "page-module__tjqMWG__spinner",
  "status": "page-module__tjqMWG__status",
  "table": "page-module__tjqMWG__table",
  "tableWrapper": "page-module__tjqMWG__tableWrapper",
});
}),
"[project]/autotesthub/app/tables/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/autotesthub/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/autotesthub/app/tables/page.module.css [app-client] (css module)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "26dcb1c47939c9b354cf8df67d9a3b719d3f7159fb3e6be3e6462891a29fc844") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "26dcb1c47939c9b354cf8df67d9a3b719d3f7159fb3e6be3e6462891a29fc844";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            role: ""
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "TablesPage[useEffect()]": ()=>{
                setTimeout({
                    "TablesPage[useEffect() > setTimeout()]": ()=>{
                        setData(initialData);
                        setLoading(false);
                    }
                }["TablesPage[useEffect() > setTimeout()]"], 1500);
            }
        })["TablesPage[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "TablesPage[handleEdit]": (user)=>{
                setEditingId(user.id);
                setEditForm({
                    name: user.name,
                    role: user.role
                });
            }
        })["TablesPage[handleEdit]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleEdit = t4;
    let t5;
    if ($[6] !== editForm) {
        t5 = ({
            "TablesPage[handleSave]": (id)=>{
                setData({
                    "TablesPage[handleSave > setData()]": (prev)=>prev.map({
                            "TablesPage[handleSave > setData() > prev.map()]": (user_0)=>user_0.id === id ? {
                                    ...user_0,
                                    name: editForm.name,
                                    role: editForm.role
                                } : user_0
                        }["TablesPage[handleSave > setData() > prev.map()]"])
                }["TablesPage[handleSave > setData()]"]);
                setEditingId(null);
            }
        })["TablesPage[handleSave]"];
        $[6] = editForm;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleSave = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "TablesPage[handleCancel]": ()=>{
                setEditingId(null);
            }
        })["TablesPage[handleCancel]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const handleCancel = t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "TablesPage[handleDelete]": (id_0)=>{
                if (confirm("Are you sure you want to delete this user?")) {
                    setData({
                        "TablesPage[handleDelete > setData()]": (prev_0)=>prev_0.filter({
                                "TablesPage[handleDelete > setData() > prev_0.filter()]": (user_1)=>user_1.id !== id_0
                            }["TablesPage[handleDelete > setData() > prev_0.filter()]"])
                    }["TablesPage[handleDelete > setData()]"]);
                }
            }
        })["TablesPage[handleDelete]"];
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const handleDelete = t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Dynamic Tables"
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/tables/page.tsx",
            lineNumber: 159,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Data loads asynchronously. Test wait conditions, editing, and cell verification."
        }, void 0, false, {
            fileName: "[project]/autotesthub/app/tables/page.tsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] !== data || $[13] !== editForm || $[14] !== editingId || $[15] !== handleSave || $[16] !== loading) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t8,
                t9,
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                    id: "loading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                        }, void 0, false, {
                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                            lineNumber: 169,
                            columnNumber: 109
                        }, this),
                        "Loading data..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                    lineNumber: 169,
                    columnNumber: 64
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrapper,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                        id: "user-table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "ID"
                                        }, void 0, false, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 263
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 274
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 287
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 300
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 315
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 259
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                lineNumber: 169,
                                columnNumber: 252
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data.map({
                                    "TablesPage[data.map()]": (user_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: user_2.id
                                                }, void 0, false, {
                                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 71
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: editingId === user_2.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editForm.name,
                                                        onChange: {
                                                            "TablesPage[data.map() > <input>.onChange]": (e)=>setEditForm({
                                                                    ...editForm,
                                                                    name: e.target.value
                                                                })
                                                        }["TablesPage[data.map() > <input>.onChange]"],
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editInput
                                                    }, void 0, false, {
                                                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 122
                                                    }, this) : user_2.name
                                                }, void 0, false, {
                                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 91
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: editingId === user_2.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: editForm.role,
                                                        onChange: {
                                                            "TablesPage[data.map() > <select>.onChange]": (e_0)=>setEditForm({
                                                                    ...editForm,
                                                                    role: e_0.target.value
                                                                })
                                                        }["TablesPage[data.map() > <select>.onChange]"],
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editInput,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Admin",
                                                                children: "Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 97
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Editor",
                                                                children: "Editor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 133
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Viewer",
                                                                children: "Viewer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 171
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 149
                                                    }, this) : user_2.role
                                                }, void 0, false, {
                                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 118
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${__TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][user_2.status.toLowerCase()]}`,
                                                        children: user_2.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 242
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 238
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: editingId === user_2.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionGroup,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveBtn,
                                                                onClick: {
                                                                    "TablesPage[data.map() > <button>.onClick]": ()=>handleSave(user_2.id)
                                                                }["TablesPage[data.map() > <button>.onClick]"],
                                                                children: "Save"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 412
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                                                onClick: handleCancel,
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 82
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 376
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionGroup,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editBtn,
                                                                onClick: {
                                                                    "TablesPage[data.map() > <button>.onClick]": ()=>handleEdit(user_2)
                                                                }["TablesPage[data.map() > <button>.onClick]"],
                                                                id: `edit-${user_2.id}`,
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 202
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$autotesthub$2f$app$2f$tables$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                                onClick: {
                                                                    "TablesPage[data.map() > <button>.onClick]": ()=>handleDelete(user_2.id)
                                                                }["TablesPage[data.map() > <button>.onClick]"],
                                                                children: "Delete"
                                                            }, void 0, false, {
                                                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 107
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 166
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 345
                                                }, this)
                                            ]
                                        }, user_2.id, true, {
                                            fileName: "[project]/autotesthub/app/tables/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 51
                                        }, this)
                                }["TablesPage[data.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/autotesthub/app/tables/page.tsx",
                                lineNumber: 169,
                                columnNumber: 344
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/autotesthub/app/tables/page.tsx",
                        lineNumber: 169,
                        columnNumber: 204
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/autotesthub/app/tables/page.tsx",
                    lineNumber: 169,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/autotesthub/app/tables/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[12] = data;
        $[13] = editForm;
        $[14] = editingId;
        $[15] = handleSave;
        $[16] = loading;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    return t10;
}
_s(TablesPage, "t0XcsjpEHZABcJB7X+EmFOBZHPQ=");
_c = TablesPage;
var _c;
__turbopack_context__.k.register(_c, "TablesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=autotesthub_app_tables_0b61aec0._.js.map