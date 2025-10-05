module.exports = {

"[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src\\components\\ui\\button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src\\components\\ui\\input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src\\components\\ui\\label.tsx:13:4",
        "data-orchids-name": "LabelPrimitive.Root",
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/alert.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\alert.tsx:28:4",
        "data-orchids-name": "div",
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\alert.tsx:39:4",
        "data-orchids-name": "div",
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ui\\alert.tsx:55:4",
        "data-orchids-name": "div",
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShieldLoginPortal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/src/components/ui/alert.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/lucide-react/dist/esm/icons/fingerprint.js [app-ssr] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/Tesseract/shield-tesseract-access-portal/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
"use client";
;
;
;
;
;
;
;
;
;
function ShieldLoginPortal() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGlitch, setShowGlitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError("");
        setIsLoading(true);
        // Simulate authentication
        setTimeout(()=>{
            // Demo credentials
            const validUser = email === "agent@shield.gov" && password === "stark2025";
            const validAdmin = email === "admin@shield.gov" && password === "fury2025";
            if (isAdmin && validAdmin || !isAdmin && validUser) {
                // Success - redirect to dashboard
                router.push("/dashboard");
            } else {
                // Error - show glitch effect
                setShowGlitch(true);
                setError("ACCESS DENIED – CODE RED");
                setIsLoading(false);
                setTimeout(()=>setShowGlitch(false), 300);
            }
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:46:4",
        "data-orchids-name": "div",
        className: "min-h-screen relative overflow-hidden bg-gradient-to-b from-[#001a33] via-[#002b52] to-[#001a33] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:48:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:49:8",
                    "data-orchids-name": "div",
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.3) 1px, transparent 1px)
          `,
                        backgroundSize: '50px 50px'
                    }
                }, void 0, false, {
                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:59:6",
                "data-orchids-name": "div",
                className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scanline opacity-50"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:62:6",
                "data-orchids-name": "div",
                className: "absolute top-[20%] left-0 right-0 h-px bg-cyan-400/30"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:63:6",
                "data-orchids-name": "div",
                className: "absolute top-[45%] left-0 right-0 h-px bg-cyan-400/20"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:64:6",
                "data-orchids-name": "div",
                className: "absolute top-[70%] left-0 right-0 h-px bg-cyan-400/30"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:67:6",
                "data-orchids-name": "div",
                className: "absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:68:6",
                "data-orchids-name": "div",
                className: "absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-400/50"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:69:6",
                "data-orchids-name": "div",
                className: "absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-400/50"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:70:6",
                "data-orchids-name": "div",
                className: "absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50"
            }, void 0, false, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:72:6",
                "data-orchids-name": "Card",
                className: `w-full max-w-md relative z-10 bg-[#001a33]/90 backdrop-blur-sm border-2 transition-all duration-300 ${showGlitch ? "glitch" : ""} ${isAdmin ? "border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] glow-pulse" : "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] glow-pulse"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:81:8",
                        "data-orchids-name": "CardHeader",
                        className: "space-y-1 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:82:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-2 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:83:12",
                                        "data-orchids-name": "Lock",
                                        className: `w-6 h-6 ${isAdmin ? "text-red-500" : "text-cyan-400"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:84:12",
                                        "data-orchids-name": "h1",
                                        className: `text-2xl font-bold tracking-wider ${isAdmin ? "text-red-500" : "text-cyan-400"}`,
                                        style: {
                                            fontFamily: 'Orbitron, sans-serif'
                                        },
                                        children: "S.H.I.E.L.D."
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:90:10",
                                "data-orchids-name": "div",
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:91:12",
                                        "data-orchids-name": "p",
                                        className: `text-xs tracking-widest font-mono ${isAdmin ? "text-red-400" : "text-cyan-300"}`,
                                        children: "TESSERACT 2025 // ACCESS TERMINAL"
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:96:12",
                                        "data-orchids-name": "div",
                                        className: "flex items-center justify-center gap-1 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:97:14",
                                                "data-orchids-name": "div",
                                                className: `w-1.5 h-1.5 rounded-full ${isAdmin ? "bg-red-500" : "bg-cyan-400"} animate-pulse`
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:98:14",
                                                "data-orchids-name": "span",
                                                className: "text-[10px] text-gray-400 font-mono tracking-wider",
                                                children: "SECURE CONNECTION"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:103:8",
                        "data-orchids-name": "CardContent",
                        className: "space-y-4",
                        children: [
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert"], {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:105:12",
                                "data-orchids-name": "Alert",
                                className: `border-red-500 bg-red-950/50 ${showGlitch ? "glitch" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:106:14",
                                        "data-orchids-name": "ShieldAlert",
                                        className: "h-4 w-4 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:107:14",
                                        "data-orchids-name": "AlertDescription",
                                        className: "text-red-400 font-mono text-xs tracking-wider",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:113:10@handleLogin",
                                "data-orchids-name": "form",
                                onSubmit: handleLogin,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:114:12",
                                        "data-orchids-name": "div",
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:115:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "email",
                                                className: "text-gray-300 font-mono text-xs tracking-wider",
                                                children: "AGENT ID"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:118:14",
                                                "data-orchids-name": "Input",
                                                id: "email",
                                                type: "email",
                                                placeholder: "agent.id@shield.gov",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                className: `bg-[#002b52]/50 border ${isAdmin ? "border-red-500/50 focus:border-red-500" : "border-cyan-400/50 focus:border-cyan-400"} text-cyan-100 placeholder:text-gray-500 font-mono`,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:131:12",
                                        "data-orchids-name": "div",
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:132:14",
                                                "data-orchids-name": "Label",
                                                htmlFor: "password",
                                                className: "text-gray-300 font-mono text-xs tracking-wider",
                                                children: "CLEARANCE CODE"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:135:14",
                                                "data-orchids-name": "Input",
                                                id: "password",
                                                type: "password",
                                                placeholder: "••••••••••••",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                className: `bg-[#002b52]/50 border ${isAdmin ? "border-red-500/50 focus:border-red-500" : "border-cyan-400/50 focus:border-cyan-400"} text-cyan-100 placeholder:text-gray-500 font-mono`,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:149:12",
                                        "data-orchids-name": "div",
                                        className: "flex items-center justify-center py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:150:14",
                                            "data-orchids-name": "div",
                                            className: "relative inline-flex items-center bg-[#002b52]/70 rounded-full p-1 border border-cyan-400/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:151:16",
                                                    "data-orchids-name": "button",
                                                    type: "button",
                                                    onClick: ()=>setIsAdmin(false),
                                                    className: `relative z-10 px-6 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${!isAdmin ? "text-cyan-900 font-bold" : "text-cyan-400 hover:text-cyan-300"}`,
                                                    children: "PARTICIPANT MODE"
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:162:16",
                                                    "data-orchids-name": "button",
                                                    type: "button",
                                                    onClick: ()=>setIsAdmin(true),
                                                    className: `relative z-10 px-6 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${isAdmin ? "text-red-900 font-bold" : "text-red-400 hover:text-red-300"}`,
                                                    children: "ADMIN MODE"
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:173:16",
                                                    "data-orchids-name": "div",
                                                    className: `absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ${isAdmin ? "translate-x-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" : "translate-x-0 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:183:12",
                                        "data-orchids-name": "Button",
                                        type: "submit",
                                        disabled: isLoading,
                                        className: `w-full font-mono tracking-widest text-sm font-bold relative overflow-hidden ${isAdmin ? "bg-red-600 hover:bg-red-700 text-white border-2 border-red-400" : "bg-cyan-600 hover:bg-cyan-700 text-white border-2 border-cyan-400"}`,
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:193:16",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:194:18",
                                                    "data-orchids-name": "Fingerprint",
                                                    className: "w-5 h-5 fingerprint-scan"
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:195:18",
                                                    "data-orchids-name": "span",
                                                    children: "SCANNING..."
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:198:16",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:199:18",
                                                    "data-orchids-name": "Fingerprint",
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:200:18",
                                                    "data-orchids-name": "span",
                                                    children: "INITIATE LOGIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:206:10",
                                "data-orchids-name": "div",
                                className: "pt-2 border-t border-cyan-400/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:207:12",
                                    "data-orchids-name": "p",
                                    className: "text-center text-[10px] text-gray-500 font-mono tracking-wider",
                                    children: [
                                        "CLASSIFIED // LEVEL ",
                                        isAdmin ? "10" : "7",
                                        " CLEARANCE REQUIRED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:213:10",
                                "data-orchids-name": "div",
                                className: "pt-2 border-t border-cyan-400/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:214:12",
                                    "data-orchids-name": "p",
                                    className: "text-center text-[9px] text-gray-600 font-mono",
                                    children: "Demo: agent@shield.gov / stark2025 (user) | admin@shield.gov / fury2025 (admin)"
                                }, void 0, false, {
                                    fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:222:6",
                "data-orchids-name": "div",
                className: "absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-cyan-400/30 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-cyan-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:223:8",
                        "data-orchids-name": "span",
                        children: "SYSTEM STATUS: OPERATIONAL"
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:224:8",
                        "data-orchids-name": "span",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$shield$2d$tesseract$2d$access$2d$portal$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\ShieldLoginPortal.tsx:225:10",
                                "data-orchids-name": "span",
                                className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            "SECURE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Tesseract/shield-tesseract-access-portal/src/components/ShieldLoginPortal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=Tesseract_shield-tesseract-access-portal_src_3c6f5a24._.js.map