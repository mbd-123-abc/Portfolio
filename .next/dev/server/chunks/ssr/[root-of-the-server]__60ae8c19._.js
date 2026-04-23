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
"[project]/app/ProjectsContainer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*Mahika Bagri*/ /*April 22 2026*/ const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
function ProjectContainer({ projects, title, raw, alive }) {
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "projects-container",
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/app/ProjectsContainer.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "project-grid",
                children: projects.map((project)=>/*#__PURE__*/ _jsxDEV("div", {
                        className: "project-card",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "card-header",
                                children: /*#__PURE__*/ _jsxDEV("img", {
                                    src: project.image
                                }, void 0, false, {
                                    fileName: "[project]/app/ProjectsContainer.js",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/ProjectsContainer.js",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "card-body",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/ProjectsContainer.js",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/ProjectsContainer.js",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "card-links",
                                        children: [
                                            project.live && /*#__PURE__*/ _jsxDEV(Link, {
                                                href: project.live,
                                                className: "btn btn-primary",
                                                target: "_blank",
                                                children: alive
                                            }, void 0, false, {
                                                fileName: "[project]/app/ProjectsContainer.js",
                                                lineNumber: 22,
                                                columnNumber: 19
                                            }, this),
                                            project.github && /*#__PURE__*/ _jsxDEV(Link, {
                                                href: project.github,
                                                className: "btn btn-outline",
                                                target: "_blank",
                                                children: raw
                                            }, void 0, false, {
                                                fileName: "[project]/app/ProjectsContainer.js",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ProjectsContainer.js",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ProjectsContainer.js",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/app/ProjectsContainer.js",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/ProjectsContainer.js",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ProjectsContainer.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/coding/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*Mahika Bagri*/ /*April 22 2026*/ __turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ProjectsContainer.js [app-rsc] (ecmascript)");
;
;
;
;
function ProjectsPage() {
    const professional_projects = JSON.parse(("TURBOPACK compile-time value", '[{"id":1,"title":"Stealth Mode Startup","description":"Developing an industry standard mobile app for a client (details confidential).","image":"stealth.png","github":"","live":""},{"id":2,"title":"Da Vinci Institute","description":"Developing a virtual educational platform that serves underserved communities.","image":"LogoDV2.png","github":"https://github.com/webimpactuw/da-vinci-institute","live":""},{"id":3,"title":"Egg Hunt","description":"Developed a website, leveraging web development skills, to increase engagement for a community bonding event.","image":"Background.png","github":"https://github.com/mbd-123-abc/egg-hunt","live":"https://egg-hunt-two.vercel.app/"}]') || "[]");
    const personal_projects = JSON.parse(("TURBOPACK compile-time value", '[{"id":1,"title":"Campus Eats","description":"Campus Eats is a dining application designed to eliminate the decision fatigue around meals using student schedules, campus geography, and real-time nutrient tracking.","image":"CampusEatsLogo.png","github":"https://github.com/mbd-123-abc/CampusEats","live":"https://expo.dev/accounts/mbd_123_abc/projects/campus-fuel/builds/0fa8f86f-8a5b-4d01-9607-8b698267fca3"},{"id":2,"title":"Kriyarthika Arena","description":"Kriyarthika Arena is a gamified to-do application designed to empower all users by boosting motivation, enhancing productivity, and fostering effectively time management skills.","image":"LandingPage.png","github":"https://github.com/mbd-123-abc/FullStackathon/tree/main/KriyarthikaArena","live":""},{"id":3,"title":"Cafe Portfolio","description":"Cafe Porfolio is cozy digital cafe where my projects live and grow. The portfolio highlights my work in software development and creative writing.","image":"PortfolioEntry.png","github":"https://github.com/mbd-123-abc/Portfolio","live":""}]') || "[]");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "projects-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: professional_projects,
                title: "Professional Projects",
                alive: "View Live",
                raw: "GitHub"
            }, void 0, false, {
                fileName: "[project]/app/coding/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ProjectsContainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                projects: personal_projects,
                title: "Personal Projects",
                alive: "View Live",
                raw: "GitHub"
            }, void 0, false, {
                fileName: "[project]/app/coding/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/coding/page.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/coding/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/coding/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__60ae8c19._.js.map