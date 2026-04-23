module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/components/ProjectsContainer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*Mahika Bagri*/ /*April 22 2026*/ __turbopack_context__.s([
    "default",
    ()=>ProjectContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
function ProjectContainer({ projects, title, h2Color, cardColor, cardHeadColor, raw, alive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "projects-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    color: h2Color
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectsContainer.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-grid",
                children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "project-card",
                        style: {
                            "--hover-color": h2Color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-header",
                                style: {
                                    backgroundColor: cardHeadColor
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: project.image
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProjectsContainer.js",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectsContainer.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-body",
                                style: {
                                    backgroundColor: cardColor
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProjectsContainer.js",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProjectsContainer.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-links",
                                        children: [
                                            project.alive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: project.alive,
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                children: alive
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProjectsContainer.js",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this),
                                            project.raw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: project.raw,
                                                className: "btn btn-outline",
                                                target: "_blank",
                                                children: raw
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProjectsContainer.js",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ProjectsContainer.js",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ProjectsContainer.js",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/app/components/ProjectsContainer.js",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectsContainer.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProjectsContainer.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/writing/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*Mahika Bagri*/ /*April 22 2026*/ __turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProjectsContainer.js [app-rsc] (ecmascript)");
;
;
function ProjectsPage() {
    const poetry_projects = JSON.parse(("TURBOPACK compile-time value", '[{"id":1,"title":"A Tulip Flower","description":"This poem reflects on how easily we can mistake change for failure, reminding us not to take life too seriously. ","image":"Tulip.png","raw":"https://docs.google.com/document/d/1_x4GloM2aN9U2ZyHPW1mD4bzVJA03YY4-INjJLbUVto/edit?usp=sharing","alive":""},{"id":2,"title":"Masti","description":"This poem attempts to express a Hindi word’s essence, because mere translation struggles to carry its meaning across. ","image":"Masti.png","raw":"https://docs.google.com/document/d/1RJMpDUsvNDlwOZegsMt6cGeRuJaNkHoerHiYtWLoGQg/edit?usp=sharing","alive":"https://www.amazon.com/Teen-Author-Boot-Poetry-Collection/dp/B0CXF5BR8B/ref=sr_1_1?crid=3ALRZAHM"},{"id":3,"title":"My Old Cotton Shirt","description":"This poem attempts to give tangible form to the quiet warmth of true, comforting love.  ","image":"Shirt.png","raw":"https://docs.google.com/document/d/16j7ErKZK_-xkbDwd3lq_r63EaorIrWUVUwqmjq7cHTg/edit?usp=sharing","alive":"https://www.amazon.com/gp/product/B0BYGT46N8?ref_=dbs_m_mng_rwt_calw_tpbk_2&storeType=ebooks"},{"id":4,"title":"Jackets","description":"This poem attempts to encompass the complicated feelings of friendship.","image":"Jacket.png","raw":"https://docs.google.com/document/d/1SuOEcN1_IjTLmhjlcT4ZFqRHq7Z5b6dvnnhY18A-g58/edit?usp=sharing","alive":""},{"id":5,"title":"Something Forgotten","description":"This poem attempts to put into words a question philosophers and scientists alike have probably had for years.","image":"Forgotten.png","raw":"https://docs.google.com/document/d/1s4hsFfgs6h5ycNvOJt3Uain2_UHPKJy2V9I-5y1i5EY/edit?usp=sharing","alive":""},{"id":6,"title":"Anxiety","description":"This poem attempts to explain why writing have the urge to write.","image":"Anxious.png","raw":"https://docs.google.com/document/d/1c4LPTWoOu00QzTaiaNnq-M-YpXcJXmvIg2_fFd7J0fE/edit?usp=sharing","alive":""}]') || "[]");
    const hindi_projects = JSON.parse(("TURBOPACK compile-time value", '[{"id":1,"title":"Sitaaron Mein Dharti","description":"This poem attempts to convey the feelings of unrequited idealized love.","image":"star.png","raw":"https://docs.google.com/document/d/1xUL1gxTC_NevTjd9L8thjaDFP2zxQc2C81eb0T2JOdk/edit?usp=drive_link","alive":""}, {"id":2,"title":"Yeh Mann","description":"This poem attempts to explain how an overthinker’s heart operates. ","image":"heart.png","raw":"https://docs.google.com/document/d/15dpbtsZvJPaQT0P5hOHWem-2r3M_5ozQsRZ5QYUh-gg/edit?usp=sharing","alive":""}]') || "[]");
    const short_projects = JSON.parse(("TURBOPACK compile-time value", '[{"id":1,"title":"Him","description":"A power cut in a Mumbai night leaves the world quiet, dark, and strangely intimate. In the stillness, she moves through memory, comfort, and playful tenderness with someone who knows her almost too well.","image":"him.png","raw":"https://docs.google.com/document/d/1hdn-ujRaESKb1LfTguzga7ShpQlwrq6vliLhy47907s/edit?usp=sharing","alive":""},{"id":2,"title":"How to Become a Black Cat","description":"A girl moves through childhood, adolescence, and early adulthood carrying unseen fractures from friendship, family, and belonging. She learns and changes in unforeseeable ways.","image":"cat.png","raw":"https://docs.google.com/document/d/17kEvd96rb3eTWEpJup1IcOOjnEaj7RdUspSGVfdd72E/edit?usp=sharing","alive":""},{"id":3,"title":"The Realities of a Golden Retriever","description":"He is the school’s golden boy. Effortless smiles, perfect scores, and a reputation that seems to glow on its own. But behind every “easy” success is something more.","image":"dog.png","raw":"https://docs.google.com/document/d/1Vpob4MmNm10OmpgjExgD4PUiyki-O73E9BVuPwFkAYM/edit?usp=sharing","alive":""},{"id":4,"title":"Midnight Ramen","description":"A quiet late night ramen shop becomes a stage where fleeting romances, quiet loneliness, and soft laughter linger in the steam. A student tries to hide behind a bowl of spicy noodles, only to be gently interrupted by an unexpected guest. In the warmth of shared stories, something forgotten begins to resurface.","image":"ramen.png","raw":"https://docs.google.com/document/d/12vWcDq9o-SebXL_-0CLsc0_MpYBKghu6OVlwPMo4bhw/edit?usp=sharing","alive":""}]') || "[]");
    const book_projects = JSON.parse(("TURBOPACK compile-time value", "[]") || "[]");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#614531"
        },
        children: [
            book_projects?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: book_projects,
                title: "Books",
                h2Color: "#ffb5df",
                cardColor: "rgb(243, 193, 228)",
                cardHeadColor: "#rgb(243, 193, 228)",
                alive: "View Published",
                raw: "Draft"
            }, void 0, false, {
                fileName: "[project]/app/writing/page.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: short_projects,
                title: "Short Stories",
                h2Color: "#edac70",
                cardColor: "#ffc997",
                cardHeadColor: "#ffc997",
                alive: "View Published",
                raw: "Draft"
            }, void 0, false, {
                fileName: "[project]/app/writing/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: poetry_projects,
                title: "Poetry",
                h2Color: "#b3d4eb",
                cardColor: "#d0e0eb",
                cardHeadColor: "#d0e0eb",
                alive: "View Published",
                raw: "Draft"
            }, void 0, false, {
                fileName: "[project]/app/writing/page.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: hindi_projects,
                title: "Hindi Poetry",
                h2Color: "#e97474",
                cardColor: "#ffbbbb",
                cardHeadColor: "#ffbbbb",
                alive: "View Published",
                raw: "Draft"
            }, void 0, false, {
                fileName: "[project]/app/writing/page.js",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/writing/page.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/writing/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/writing/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f757817._.js.map