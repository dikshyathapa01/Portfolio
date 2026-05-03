(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hugo-theme-academic-cv/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "scrollToSection",
    ()=>scrollToSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 disabled:cursor-not-allowed disabled:opacity-70';
    const variants = {
        primary: 'bg-gradient-to-r from-stone-700 to-stone-600 text-white shadow-[0_12px_28px_rgba(87,83,78,0.34)] hover:from-stone-800 hover:to-stone-700 dark:from-stone-300 dark:to-stone-200 dark:text-stone-950 dark:hover:from-stone-200 dark:hover:to-stone-100',
        secondary: 'bg-gradient-to-r from-stone-100 to-stone-200/80 text-stone-800 shadow-[0_10px_24px_rgba(87,83,78,0.12)] hover:from-stone-200 hover:to-stone-200 dark:from-stone-800/80 dark:to-stone-700/70 dark:text-stone-100 dark:hover:from-stone-700 dark:hover:to-stone-700',
        outline: 'border border-stone-300/90 bg-white/65 text-stone-700 hover:bg-stone-50/90 dark:border-stone-500/50 dark:bg-stone-900/30 dark:text-stone-200 dark:hover:bg-stone-900/50'
    };
    const sizes = {
        sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm',
        md: 'px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base',
        lg: 'px-6 sm:px-8 py-2.5 sm:py-3.5 text-base sm:text-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseStyles, variants[variant], sizes[size], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/hugo-theme-academic-cv/components/ui/Button.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactInfo",
    ()=>contactInfo,
    "portfolio",
    ()=>portfolio,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills
]);
const skills = [
    // Backend
    {
        name: 'Node.js',
        category: 'Backend',
        proficiency: 'Expert'
    },
    {
        name: 'Express.js',
        category: 'Backend',
        proficiency: 'Advanced'
    },
    {
        name: 'NestJS',
        category: 'Backend',
        proficiency: 'Advanced'
    },
    {
        name: 'TypeScript',
        category: 'Backend',
        proficiency: 'Advanced'
    },
    {
        name: 'JavaScript',
        category: 'Backend',
        proficiency: 'Advanced'
    },
    {
        name: 'PostgreSQL',
        category: 'Backend',
        proficiency: 'Advanced'
    },
    // Frontend
    {
        name: 'React.js',
        category: 'Frontend',
        proficiency: 'Beginner'
    },
    {
        name: 'HTML',
        category: 'Frontend',
        proficiency: 'Advanced'
    },
    {
        name: 'CSS',
        category: 'Frontend',
        proficiency: 'Advanced'
    },
    // Tools & Others
    {
        name: 'Git',
        category: 'Tools',
        proficiency: 'Advanced'
    },
    {
        name: 'REST APIs',
        category: 'Tools',
        proficiency: 'Advanced'
    },
    {
        name: 'Database Design',
        category: 'Tools',
        proficiency: 'Advanced'
    },
    {
        name: 'Authentication',
        category: 'Tools',
        proficiency: 'Advanced'
    },
    {
        name: 'CRUD Operations',
        category: 'Tools',
        proficiency: 'Advanced'
    }
];
const projects = [
    {
        id: 'library-management',
        title: 'Library Management System',
        shortDescription: 'A backend-focused library platform with member and borrow-return workflows.',
        description: 'Built a complete library management backend with authentication, role-based access, book inventory, member records, and borrow-return tracking. Focused on clean architecture, modular API design, and reliable PostgreSQL data handling.',
        technologies: [
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'TypeScript',
            'Authentication',
            'CRUD Operations'
        ],
        githubUrl: 'https://github.com/dikshyathapa01',
        featured: false
    },
    {
        id: 'ecommerce',
        title: 'Ecommerce',
        shortDescription: 'Scalable ecommerce API with media upload and modular NestJS architecture.',
        description: 'Developed an ecommerce backend using NestJS with TypeScript, PostgreSQL, and TypeORM-style modular service patterns. Added file handling for product media with Multer and Cloudinary integration to support production-ready image workflows.',
        technologies: [
            'NestJS',
            'TypeScript',
            'PostgreSQL',
            'TypeORM',
            'JWT Authentication',
            'Swagger',
            'Multer',
            'Cloudinary'
        ],
        githubUrl: 'https://github.com/dikshyathapa01/Ecommere',
        featured: true
    }
];
const contactInfo = {
    email: 'dikshyatha4258@gmail.com',
    github: 'https://github.com/dikshyathapa01',
    linkedin: 'https://www.linkedin.com/in/dikshya-thapa-31370135a',
    cv: '/DT cv.pdf',
    phone: '+977-9861133240',
    location: 'Banepa, Kavre, Nepal'
};
const portfolio = {
    name: 'Dikshya Thapa',
    title: 'Backend Developer',
    subtitle: 'Building scalable server-side applications',
    bio: 'Backend Developer skilled in Node.js and NestJS for building structured and scalable server-side applications. Experienced in developing RESTful APIs, implementing authentication, handling CRUD operations, and integrating relational databases. Strong foundation in data structures and backend architecture principles, with a focus on clean and maintainable code.',
    shortBio: 'Backend developer passionate about creating efficient, scalable applications with Node.js and NestJS.',
    interests: [
        'Backend Development',
        'RESTful APIs',
        'Database Design'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLink",
    ()=>SocialLink,
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function SocialLink({ href, icon, label, tooltip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        whileHover: {
            scale: 1.1,
            rotate: 10
        },
        whileTap: {
            scale: 0.95
        },
        title: tooltip || label,
        className: "inline-flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-all duration-300 hover:bg-stone-700 hover:text-white dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-600",
        children: icon
    }, void 0, false, {
        fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SocialLink;
function SocialLinks() {
    const links = [
        {
            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email}`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 33,
                columnNumber: 50
            }, this),
            label: 'Email'
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].github,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 34,
                columnNumber: 39
            }, this),
            label: 'GitHub'
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].linkedin || '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 35,
                columnNumber: 48
            }, this),
            label: 'LinkedIn'
        },
        {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].cv || '#',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 36,
                columnNumber: 42
            }, this),
            label: 'CV'
        },
        {
            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phone}`,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                size: 18
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 37,
                columnNumber: 47
            }, this),
            label: 'Phone'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-2.5 sm:gap-4",
        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLink, {
                href: link.href,
                icon: link.icon,
                label: link.label
            }, link.label, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c1 = SocialLinks;
var _c, _c1;
__turbopack_context__.k.register(_c, "SocialLink");
__turbopack_context__.k.register(_c1, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$SocialLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/SocialLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Hero() {
    _s();
    const [profileSrc, setProfileSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('/dt.png');
    const [rabbitTapped, setRabbitTapped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const firstName = __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].name.split(' ')[0];
    const rabbitControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"])();
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            rabbitControls.start({
                x: [
                    '8vw',
                    '78vw',
                    '55vw',
                    '22vw',
                    '70vw',
                    '12vw',
                    '8vw'
                ],
                y: [
                    '9vh',
                    '17vh',
                    '30vh',
                    '15vh',
                    '34vh',
                    '24vh',
                    '9vh'
                ],
                transition: {
                    duration: 28,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }
            });
        }
    }["Hero.useEffect"], [
        rabbitControls
    ]);
    const handleRabbitTap = ()=>{
        rabbitControls.stop();
        setRabbitTapped(true);
        setTimeout(()=>{
            setRabbitTapped(false);
            rabbitControls.start({
                x: [
                    '8vw',
                    '78vw',
                    '55vw',
                    '22vw',
                    '70vw',
                    '12vw',
                    '8vw'
                ],
                y: [
                    '9vh',
                    '17vh',
                    '30vh',
                    '15vh',
                    '34vh',
                    '24vh',
                    '9vh'
                ],
                transition: {
                    duration: 28,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }
            });
        }, 900);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative flex min-h-screen w-full items-center overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1,
                                1.12,
                                1
                            ],
                            x: [
                                0,
                                -30,
                                0
                            ]
                        },
                        transition: {
                            duration: 18,
                            repeat: Infinity,
                            repeatType: 'loop'
                        },
                        className: "absolute -top-24 -right-24 w-72 h-72 rounded-full bg-stone-300/25 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: [
                                1.15,
                                1,
                                1.15
                            ],
                            x: [
                                0,
                                24,
                                0
                            ]
                        },
                        transition: {
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'loop'
                        },
                        className: "absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-zinc-300/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "absolute left-0 top-0 hidden sm:block cursor-pointer",
                        animate: rabbitControls,
                        onTap: handleRabbitTap,
                        whileTap: {
                            scale: 1.06
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                            width: "66",
                            height: "38",
                            viewBox: "0 0 66 38",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "opacity-90",
                            animate: rabbitTapped ? {
                                y: [
                                    0,
                                    -4,
                                    0
                                ],
                                rotate: [
                                    0,
                                    -4,
                                    0,
                                    4,
                                    0
                                ]
                            } : {
                                y: [
                                    0,
                                    -2,
                                    0
                                ],
                                rotate: [
                                    0,
                                    -2,
                                    0,
                                    2,
                                    0
                                ]
                            },
                            transition: {
                                duration: 0.7,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5 21C7 18 11 17 16 18",
                                    stroke: "#cdb8a6",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 24C4 21 9 21 13 22",
                                    stroke: "#cdb8a6",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.45"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "35",
                                    cy: "22",
                                    rx: "15",
                                    ry: "10",
                                    fill: "#e7d8cb"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "49",
                                    cy: "18",
                                    rx: "7",
                                    ry: "6",
                                    fill: "#e7d8cb"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "47",
                                    cy: "7",
                                    rx: "2.6",
                                    ry: "6.4",
                                    fill: "#eddfd2",
                                    transform: "rotate(-8 47 7)"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "52",
                                    cy: "8",
                                    rx: "2.6",
                                    ry: "6.8",
                                    fill: "#eddfd2",
                                    transform: "rotate(7 52 8)"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "51.5",
                                    cy: "17.8",
                                    r: "1",
                                    fill: "#3f342d"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "24",
                                    cy: "31",
                                    rx: "4.5",
                                    ry: "2",
                                    fill: "#d9c7b8"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "38",
                                    cy: "31",
                                    rx: "4.5",
                                    ry: "2",
                                    fill: "#d9c7b8"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "54",
                                    cy: "24",
                                    rx: "3",
                                    ry: "2",
                                    fill: "#d9c7b8"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "20",
                                    cy: "17",
                                    r: "3",
                                    fill: "#e1cebf"
                                }, void 0, false, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                animate: "visible",
                className: "site-container relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid w-full max-w-4xl grid-cols-1 items-center justify-items-center gap-8 sm:gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "mx-auto w-full max-w-xl text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-extrabold leading-[1.03] text-slate-900 sm:text-5xl md:text-6xl xl:text-7xl dark:text-stone-100",
                                        children: [
                                            "Hi, I'm",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-gradient-to-r from-stone-800 via-stone-600 to-zinc-500 bg-clip-text text-transparent",
                                                children: [
                                                    " ",
                                                    firstName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg md:text-xl dark:text-stone-200/85",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].shortBio
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: itemVariants,
                                        className: "mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#projects",
                                                className: "w-full sm:w-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "primary",
                                                    className: "w-full sm:w-auto",
                                                    children: "View Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                className: "w-full sm:w-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "outline",
                                                    className: "w-full sm:w-auto",
                                                    children: "Book A Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: itemVariants,
                                        className: "mt-6 sm:mt-8 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$SocialLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLinks"], {}, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-2xl border border-stone-200/75 bg-gradient-to-br from-white/96 to-stone-50/65 p-4 shadow-[0_24px_64px_rgba(25,20,17,0.14)] ring-1 ring-white/65 backdrop-blur-md dark:border-stone-600/45 dark:bg-gradient-to-br dark:from-stone-900/82 dark:to-stone-800/55 dark:ring-stone-200/8 sm:rounded-[2rem] sm:p-5 md:p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-3 -right-3 rounded-xl bg-gradient-to-r from-stone-700 to-stone-600 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_24px_rgba(87,83,78,0.36)] sm:-top-4 sm:-right-4 sm:rounded-2xl sm:px-4 sm:py-2",
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700/60 bg-gradient-to-b from-slate-100/80 to-zinc-100/80 dark:from-slate-800/60 dark:to-zinc-800/50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: profileSrc,
                                                alt: "Dikshya Thapa",
                                                fill: true,
                                                sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 36vw",
                                                className: "object-cover object-top",
                                                priority: true,
                                                unoptimized: true,
                                                onError: ()=>setProfileSrc('https://avatars.githubusercontent.com/u/220727066?v=4')
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 rounded-lg border border-stone-200/70 bg-gradient-to-r from-stone-50/90 to-white/95 px-4 py-3 text-center shadow-[0_10px_28px_rgba(25,20,17,0.08)] dark:border-stone-600/45 dark:from-stone-900/65 dark:to-stone-800/55 sm:mt-5 sm:rounded-2xl sm:px-5 sm:py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-300/80 uppercase tracking-wider",
                                                    children: "Current Focus"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        },
                        className: "flex justify-center gap-2 mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                            className: "text-slate-400 dark:text-stone-300/60",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hugo-theme-academic-cv/components/sections/Hero.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Hero, "vTVKckrM+Q0BwrAEJm+efim1/ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationControls"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        16,
                        0
                    ],
                    y: [
                        0,
                        -10,
                        0
                    ]
                },
                transition: {
                    duration: 13,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute -top-20 left-2 sm:left-6 h-44 sm:h-48 w-44 sm:w-48 rounded-full bg-stone-300/20 blur-3xl dark:bg-stone-500/15"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        -14,
                        0
                    ],
                    y: [
                        0,
                        12,
                        0
                    ]
                },
                transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute -bottom-16 right-2 sm:right-8 h-48 sm:h-52 w-48 sm:w-52 rounded-full bg-zinc-300/15 blur-3xl dark:bg-stone-400/10"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-container relative w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100",
                                children: "About Me"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-7 md:gap-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            whileHover: {
                                y: -4
                            },
                            className: "w-full space-y-4 rounded-2xl border border-stone-200/70 bg-white/85 p-6 sm:space-y-6 sm:rounded-3xl sm:p-8 dark:border-stone-500/30 dark:bg-stone-900/45",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-4 text-2xl font-semibold text-slate-900 sm:mb-6 sm:text-3xl dark:text-stone-100",
                                        children: "Backend Developer"
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-relaxed text-slate-700 sm:text-lg dark:text-stone-200/85 mb-4 sm:mb-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].bio
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-relaxed text-slate-700 sm:text-lg dark:text-stone-200/85",
                                        children: "I'm passionate about creating efficient, maintainable code and building systems that scale. Currently pursuing my BSc in Computer Science while working on real-world projects."
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-7",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["portfolio"].interests.map((interest)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-stone-200/80 bg-stone-50/85 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-stone-700 dark:border-stone-600/50 dark:bg-stone-800/45 dark:text-stone-200",
                                                children: interest
                                            }, interest, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hugo-theme-academic-cv/components/sections/About.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Card({ children, className, hover = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: hover ? {
            y: -7,
            scale: 1.012
        } : undefined,
        transition: {
            duration: 0.28
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-2xl border border-stone-200/75 bg-gradient-to-br from-white/96 to-stone-50/70 p-5 shadow-[0_18px_45px_rgba(25,20,17,0.11)] ring-1 ring-white/60 transition-all dark:border-stone-600/45 dark:bg-gradient-to-br dark:from-stone-900/78 dark:to-stone-800/50 dark:text-slate-100 dark:ring-stone-200/8 sm:rounded-3xl sm:p-7 md:p-8', hover && 'cursor-pointer', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/hugo-theme-academic-cv/components/ui/Card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/sections/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "relative overflow-hidden bg-transparent py-20 sm:py-24 md:py-28 lg:py-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        18,
                        0
                    ],
                    y: [
                        0,
                        -12,
                        0
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute -top-16 left-2 sm:left-8 h-40 sm:h-44 w-40 sm:w-44 rounded-full bg-stone-300/20 blur-3xl dark:bg-stone-500/20"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        -16,
                        0
                    ],
                    y: [
                        0,
                        10,
                        0
                    ]
                },
                transition: {
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute bottom-2 sm:bottom-6 right-2 sm:right-10 h-48 sm:h-52 w-48 sm:w-52 rounded-full bg-zinc-300/15 blur-3xl dark:bg-stone-400/10"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-container relative w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "Case Studies"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100",
                                children: "Featured Projects"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-stone-200/80",
                                children: "Selected backend work focused on clean architecture, secure APIs, and reliable database operations."
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-7 md:gap-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 22
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.65,
                                    delay: index * 0.08
                                },
                                whileHover: {
                                    y: -6
                                },
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-stone-200/80 bg-white/85 p-6 text-center sm:p-7 md:p-8 dark:border-stone-600/45 dark:bg-stone-900/50",
                                    hover: false,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500 dark:text-stone-300/75",
                                            children: [
                                                "Project ",
                                                String(index + 1).padStart(2, '0')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 text-xl font-bold text-slate-900 dark:text-stone-100 sm:text-2xl",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-medium text-stone-600 dark:text-stone-300/85",
                                            children: project.shortDescription
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-slate-700 sm:text-base dark:text-stone-200/85",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5 flex flex-wrap justify-center gap-2",
                                            children: project.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-stone-200/80 bg-stone-50/90 px-3 py-1 text-xs font-semibold text-stone-700 dark:border-stone-600/45 dark:bg-stone-800/55 dark:text-stone-200",
                                                    children: tech
                                                }, tech, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center rounded-full border border-stone-300/90 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 transition-all hover:bg-stone-100 dark:border-stone-500/50 dark:bg-stone-900/45 dark:text-stone-200 dark:hover:bg-stone-800/65",
                                                children: "View Repository"
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hugo-theme-academic-cv/components/sections/Projects.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/sections/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Skills() {
    const skillsByCategory = __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"].reduce((acc, skill)=>{
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
    const categories = Object.keys(skillsByCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        14,
                        0
                    ],
                    y: [
                        0,
                        -8,
                        0
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute top-2 sm:top-4 left-2 sm:left-10 h-36 sm:h-40 w-36 sm:w-40 rounded-full bg-stone-300/15 blur-3xl dark:bg-stone-500/15"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                animate: {
                    x: [
                        0,
                        -18,
                        0
                    ],
                    y: [
                        0,
                        12,
                        0
                    ]
                },
                transition: {
                    duration: 16,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                className: "pointer-events-none absolute bottom-2 sm:bottom-4 right-2 sm:right-6 h-48 sm:h-56 w-48 sm:w-56 rounded-full bg-zinc-300/10 blur-3xl dark:bg-stone-400/10"
            }, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "site-container relative w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        viewport: {
                            once: true
                        },
                        className: "mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-badge",
                                children: "Capabilities"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100",
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-stone-200/80",
                                children: "Tools and technologies I use to design and deliver backend products."
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:grid-cols-3 md:gap-8",
                        children: categories.map((category, categoryIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: categoryIndex * 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                whileHover: {
                                    y: -6
                                },
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "h-full text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-4 text-lg font-bold text-slate-900 sm:mb-6 sm:text-xl dark:text-slate-100",
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 sm:space-y-4",
                                            children: skillsByCategory[category].map((skill, skillIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.5,
                                                        delay: skillIndex * 0.1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    whileHover: {
                                                        x: 4
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg sm:rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-center dark:border-slate-700/60 dark:bg-slate-800/60 sm:px-4 sm:py-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sm font-medium text-slate-900 sm:text-base dark:text-slate-100",
                                                                children: skill.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 25
                                                            }, this),
                                                            skill.proficiency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-0.5 block text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-300/75",
                                                                children: skill.proficiency
                                                            }, void 0, false, {
                                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 23
                                                    }, this)
                                                }, skill.name, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            }, category, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hugo-theme-academic-cv/components/sections/Skills.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/components/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const FORMSPREE_ID = 'mzdodvpy';
function Contact() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        // Validate email format
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address (e.g., example@gmail.com)');
            setLoading(false);
            return;
        }
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email,
                    _subject: 'New Portfolio Contact Message'
                })
            });
            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                // Reset success message after 3 seconds
                setTimeout(()=>setSubmitted(false), 3000);
            } else {
                const errorText = await response.text();
                console.error('Formspree error:', response.status, errorText);
                setError(`Failed to send message (${response.status}). Please try again.`);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error sending message. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "site-container w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    viewport: {
                        once: true
                    },
                    className: "mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-badge",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg dark:text-stone-200/80",
                            children: "Have a project in mind? Let's work together!"
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-8 md:gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "w-full space-y-6 sm:space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex items-center gap-3 text-center sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email}`,
                                                    className: "text-slate-600 dark:text-stone-200/75 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all text-sm sm:text-base",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].email
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex items-center gap-3 text-center sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phone}`,
                                                    className: "text-slate-600 dark:text-stone-200/75 hover:text-stone-700 dark:hover:text-stone-300 transition-colors text-sm sm:text-base",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].phone
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex items-center gap-3 text-center sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-600 dark:text-stone-200/75 text-sm sm:text-base",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInfo"].location
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "flex flex-col items-center justify-center py-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.1,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 0.6
                                            },
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-16 h-16 text-green-500 mx-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2",
                                            children: "Thank You!"
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                            children: "Will get back to you soon! Love from Este ^_^"
                                        }, void 0, false, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "space-y-4 text-center sm:space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    className: "mb-2 block text-xs font-medium text-gray-900 sm:text-sm dark:text-white",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    value: formData.name,
                                                    onChange: handleChange,
                                                    required: true,
                                                    autoComplete: "name",
                                                    className: "w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-center text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-stone-400 focus:outline-none dark:border-stone-500/30 dark:bg-stone-900/45 dark:text-stone-100 dark:placeholder-stone-300/50 dark:focus:ring-stone-400 sm:rounded-xl sm:text-base",
                                                    placeholder: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: "mb-2 block text-xs font-medium text-gray-900 sm:text-sm dark:text-white",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    required: true,
                                                    autoComplete: "email",
                                                    className: "w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-center text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-stone-400 focus:outline-none dark:border-stone-500/30 dark:bg-stone-900/45 dark:text-stone-100 dark:placeholder-stone-300/50 dark:focus:ring-stone-400 sm:rounded-xl sm:text-base",
                                                    placeholder: "Your email"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: "mb-2 block text-xs font-medium text-gray-900 sm:text-sm dark:text-white",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "message",
                                                    name: "message",
                                                    value: formData.message,
                                                    onChange: handleChange,
                                                    required: true,
                                                    rows: 5,
                                                    autoComplete: "off",
                                                    className: "w-full resize-none rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-center text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-stone-400 focus:outline-none dark:border-stone-500/30 dark:bg-stone-900/45 dark:text-stone-100 dark:placeholder-stone-300/50 dark:focus:ring-stone-400 sm:rounded-xl sm:text-base",
                                                    placeholder: "Your message... "
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            variant: "primary",
                                            size: "lg",
                                            className: "w-full text-sm sm:text-base",
                                            disabled: loading,
                                            children: [
                                                loading ? 'Sending...' : 'Send Message',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hugo-theme-academic-cv/components/sections/Contact.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(Contact, "FgEcg5GkybxgTKkU1Q0k4855fTg=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hugo-theme-academic-cv/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/sections/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/sections/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/sections/Skills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hugo-theme-academic-cv/components/sections/Contact.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skills"], {}, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["About"], {}, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hugo$2d$theme$2d$academic$2d$cv$2f$components$2f$sections$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hugo-theme-academic-cv/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hugo-theme-academic-cv_a8e5592b._.js.map