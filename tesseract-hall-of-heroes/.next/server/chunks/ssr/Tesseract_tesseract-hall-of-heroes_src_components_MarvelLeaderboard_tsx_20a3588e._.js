module.exports = {

"[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarvelLeaderboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/tesseract-hall-of-heroes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/tesseract-hall-of-heroes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/tesseract-hall-of-heroes/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/tesseract-hall-of-heroes/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Tesseract/tesseract-hall-of-heroes/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const initialData = [
    {
        id: 1,
        teamName: "Team Thor",
        votes: 15234,
        rank: 1
    },
    {
        id: 2,
        teamName: "Iron Legion",
        votes: 14892,
        rank: 2
    },
    {
        id: 3,
        teamName: "Cap's Avengers",
        votes: 13567,
        rank: 3
    },
    {
        id: 4,
        teamName: "Guardians United",
        votes: 12345,
        rank: 4
    },
    {
        id: 5,
        teamName: "Wakanda Forever",
        votes: 11234,
        rank: 5
    },
    {
        id: 6,
        teamName: "Strange Alliance",
        votes: 10456,
        rank: 6
    },
    {
        id: 7,
        teamName: "Spider Squad",
        votes: 9876,
        rank: 7
    },
    {
        id: 8,
        teamName: "Ant-Man's Army",
        votes: 8765,
        rank: 8
    }
];
function MarvelLeaderboard() {
    const [leaderboard, setLeaderboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData);
    const [animatingVotes, setAnimatingVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Simulate vote updates every 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            const randomIndex = Math.floor(Math.random() * leaderboard.length);
            const voteIncrease = Math.floor(Math.random() * 100) + 50;
            setLeaderboard((prev)=>{
                const updated = [
                    ...prev
                ];
                updated[randomIndex] = {
                    ...updated[randomIndex],
                    votes: updated[randomIndex].votes + voteIncrease
                };
                // Sort by votes and update ranks
                updated.sort((a, b)=>b.votes - a.votes);
                updated.forEach((entry, index)=>{
                    entry.rank = index + 1;
                });
                // Trigger confetti for top 3
                if (updated[randomIndex].rank <= 3) {
                    triggerConfetti();
                }
                return updated;
            });
            // Animate vote counter
            setAnimatingVotes((prev)=>({
                    ...prev,
                    [randomIndex]: voteIncrease
                }));
            setTimeout(()=>{
                setAnimatingVotes((prev)=>{
                    const newState = {
                        ...prev
                    };
                    delete newState[randomIndex];
                    return newState;
                });
            }, 1000);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        leaderboard
    ]);
    const triggerConfetti = ()=>{
        const duration = 2000;
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0
        };
        const randomInRange = (min, max)=>{
            return Math.random() * (max - min) + min;
        };
        const interval = setInterval(()=>{
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            const particleCount = 50 * (timeLeft / duration);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.1, 0.3),
                    y: Math.random() - 0.2
                },
                colors: [
                    "#FFD700",
                    "#C0C0C0",
                    "#CD7F32",
                    "#4169E1"
                ]
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.7, 0.9),
                    y: Math.random() - 0.2
                },
                colors: [
                    "#FFD700",
                    "#C0C0C0",
                    "#CD7F32",
                    "#4169E1"
                ]
            });
        }, 250);
    };
    const playSound = (rank)=>{
        // Create audio element dynamically for demo
        // In production, you'd use actual audio files
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        // Different frequencies for different ranks
        const frequencies = {
            1: 523.25,
            2: 440.0,
            3: 392.0
        };
        oscillator.frequency.value = frequencies[rank] || 330.0;
        oscillator.type = "sine";
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    };
    const getRankIcon = (rank)=>{
        switch(rank){
            case 1:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:136:10",
                    "data-orchids-name": "div",
                    className: "relative w-24 h-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:137:12",
                        "data-orchids-name": "img",
                        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/glowing-blue-tesseract-cube-from-marvel--308b07b3-20251004144402.jpg",
                        alt: "Tesseract Trophy",
                        fill: true,
                        className: "object-contain drop-shadow-[0_0_30px_rgba(100,200,255,0.8)]"
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this);
            case 2:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:147:10",
                    "data-orchids-name": "div",
                    className: "relative w-20 h-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:148:12",
                        "data-orchids-name": "img",
                        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/captain-america-vibranium-shield-icon%2c-07a401e2-20251004144438.jpg",
                        alt: "Vibranium Shield",
                        fill: true,
                        className: "object-contain drop-shadow-[0_0_20px_rgba(192,192,192,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this);
            case 3:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:158:10",
                    "data-orchids-name": "div",
                    className: "relative w-16 h-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:159:12",
                        "data-orchids-name": "img",
                        src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/iron-man-arc-reactor-glowing-blue%2c-cir-47eda056-20251004144446.jpg",
                        alt: "Arc Reactor",
                        fill: true,
                        className: "object-contain drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]"
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    const getPodiumStyles = (rank)=>{
        switch(rank){
            case 1:
                return "bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 border-yellow-300 shadow-[0_0_50px_rgba(255,215,0,0.6)]";
            case 2:
                return "bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 border-gray-200 shadow-[0_0_40px_rgba(192,192,192,0.5)]";
            case 3:
                return "bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 border-orange-300 shadow-[0_0_30px_rgba(205,127,50,0.4)]";
            default:
                return "bg-gradient-to-b from-blue-800 via-blue-900 to-black border-blue-600";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:186:4",
        "data-orchids-name": "div",
        className: "min-h-screen w-full relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:188:6",
                "data-orchids-name": "div",
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:189:8",
                        "data-orchids-name": "div",
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-black"
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    [
                        ...Array(100)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:192:10",
                            "data-orchids-name": "motion.div",
                            className: "absolute w-1 h-1 bg-white rounded-full",
                            style: {
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            },
                            animate: {
                                opacity: [
                                    0.2,
                                    1,
                                    0.2
                                ],
                                scale: [
                                    1,
                                    1.5,
                                    1
                                ]
                            },
                            transition: {
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }
                        }, i, false, {
                            fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:213:6",
                "data-orchids-name": "motion.div",
                className: "absolute left-1/2 top-40 -translate-x-1/2 w-48 h-48 opacity-20",
                animate: {
                    y: [
                        0,
                        -20,
                        0
                    ],
                    rotateY: [
                        0,
                        360
                    ],
                    rotateX: [
                        0,
                        15,
                        0
                    ]
                },
                transition: {
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    rotateY: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    rotateX: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:226:8",
                    "data-orchids-name": "img",
                    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/bcc68ddc-63f1-440a-a861-cbf7483d32f0/generated_images/glowing-blue-tesseract-cube-from-marvel--308b07b3-20251004144402.jpg",
                    alt: "Tesseract",
                    fill: true,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:235:6",
                "data-orchids-name": "div",
                className: "relative z-10 container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:237:8",
                        "data-orchids-name": "motion.div",
                        className: "text-center mb-16",
                        initial: {
                            opacity: 0,
                            y: -50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:243:10",
                                "data-orchids-name": "h1",
                                className: "text-5xl md:text-7xl font-bold mb-4 tracking-wider",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:244:12",
                                    "data-orchids-name": "span",
                                    className: "inline-block bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent",
                                    style: {
                                        textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(255,215,0,0.5), 2px 2px 0 rgba(218,165,32,0.8), 4px 4px 0 rgba(184,134,11,0.6)",
                                        filter: "drop-shadow(0 0 20px rgba(255,215,0,0.6))"
                                    },
                                    children: "TESSERACT 2025"
                                }, void 0, false, {
                                    fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:255:10",
                                "data-orchids-name": "div",
                                className: "h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-4"
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:256:10",
                                "data-orchids-name": "h2",
                                className: "text-3xl md:text-4xl font-semibold tracking-widest bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent",
                                style: {
                                    textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.4)"
                                },
                                children: "HALL OF HEROES"
                            }, void 0, false, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:267:8",
                        "data-orchids-name": "div",
                        className: "flex justify-center items-end gap-8 mb-16 flex-wrap",
                        children: [
                            leaderboard[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:270:12",
                                "data-orchids-name": "motion.div",
                                className: "flex flex-col items-center",
                                initial: {
                                    opacity: 0,
                                    x: -100
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                onMouseEnter: ()=>playSound(2),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:277:14",
                                        "data-orchids-name": "div",
                                        className: "mb-4",
                                        children: getRankIcon(2)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:278:14",
                                        "data-orchids-name": "div",
                                        className: `${getPodiumStyles(2)} border-4 rounded-lg p-6 w-56 h-48 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:283:16",
                                                "data-orchids-name": "div",
                                                className: "text-6xl font-bold text-white mb-2",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:284:16",
                                                "data-orchids-name": "div",
                                                className: "text-white text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:285:18",
                                                        "data-orchids-name": "div",
                                                        className: "font-bold text-xl mb-2",
                                                        children: leaderboard[1].teamName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:286:18",
                                                        "data-orchids-name": "AnimatedCounter",
                                                        value: leaderboard[1].votes,
                                                        isAnimating: animatingVotes[leaderboard[1].id] !== undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            leaderboard[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:297:12",
                                "data-orchids-name": "motion.div",
                                className: "flex flex-col items-center",
                                initial: {
                                    opacity: 0,
                                    y: -100
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                onMouseEnter: ()=>playSound(1),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:304:14",
                                        "data-orchids-name": "motion.div",
                                        className: "mb-4",
                                        animate: {
                                            y: [
                                                0,
                                                -10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: getRankIcon(1)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:317:14",
                                        "data-orchids-name": "div",
                                        className: `${getPodiumStyles(1)} border-4 rounded-lg p-8 w-64 h-64 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:322:16",
                                                "data-orchids-name": "motion.div",
                                                className: "text-7xl font-bold text-white mb-2",
                                                animate: {
                                                    scale: [
                                                        1,
                                                        1.1,
                                                        1
                                                    ]
                                                },
                                                transition: {
                                                    duration: 2,
                                                    repeat: Infinity
                                                },
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:334:16",
                                                "data-orchids-name": "div",
                                                className: "text-white text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:335:18",
                                                        "data-orchids-name": "div",
                                                        className: "font-bold text-2xl mb-2",
                                                        children: leaderboard[0].teamName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:336:18",
                                                        "data-orchids-name": "AnimatedCounter",
                                                        value: leaderboard[0].votes,
                                                        isAnimating: animatingVotes[leaderboard[0].id] !== undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this),
                            leaderboard[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:347:12",
                                "data-orchids-name": "motion.div",
                                className: "flex flex-col items-center",
                                initial: {
                                    opacity: 0,
                                    x: 100
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4
                                },
                                onMouseEnter: ()=>playSound(3),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:354:14",
                                        "data-orchids-name": "div",
                                        className: "mb-4",
                                        children: getRankIcon(3)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:355:14",
                                        "data-orchids-name": "div",
                                        className: `${getPodiumStyles(3)} border-4 rounded-lg p-6 w-56 h-40 flex flex-col justify-between items-center transition-transform hover:scale-105 cursor-pointer`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:360:16",
                                                "data-orchids-name": "div",
                                                className: "text-5xl font-bold text-white mb-2",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:361:16",
                                                "data-orchids-name": "div",
                                                className: "text-white text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:362:18",
                                                        "data-orchids-name": "div",
                                                        className: "font-bold text-xl mb-2",
                                                        children: leaderboard[2].teamName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:363:18",
                                                        "data-orchids-name": "AnimatedCounter",
                                                        value: leaderboard[2].votes,
                                                        isAnimating: animatingVotes[leaderboard[2].id] !== undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:374:8",
                        "data-orchids-name": "motion.div",
                        className: "max-w-4xl mx-auto space-y-4",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.8,
                            delay: 1
                        },
                        children: leaderboard.slice(3).map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:381:12",
                                "data-orchids-name": "motion.div",
                                className: "bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 flex items-center justify-between hover:border-blue-400/50 transition-all cursor-pointer group",
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 1 + index * 0.1
                                },
                                whileHover: {
                                    scale: 1.02,
                                    x: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:389:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:390:16",
                                                "data-orchids-name": "div",
                                                className: "text-4xl font-bold text-blue-300 w-16 text-center group-hover:text-blue-100 transition-colors",
                                                children: entry.rank
                                            }, void 0, false, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:393:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:394:18",
                                                        "data-orchids-name": "div",
                                                        className: "text-2xl font-bold text-white mb-1",
                                                        children: entry.teamName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:395:18",
                                                        "data-orchids-name": "AnimatedCounter",
                                                        value: entry.votes,
                                                        isAnimating: animatingVotes[entry.id] !== undefined
                                                    }, void 0, false, {
                                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:401:14",
                                        "data-orchids-name": "motion.div",
                                        className: "text-blue-400 text-xl",
                                        animate: {
                                            opacity: animatingVotes[entry.id] ? [
                                                1,
                                                0.5,
                                                1
                                            ] : 1
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        children: animatingVotes[entry.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:409:18",
                                            "data-orchids-name": "span",
                                            className: "text-green-400 text-sm ml-2",
                                            children: [
                                                "+",
                                                animatingVotes[entry.id]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, entry.id, true, {
                                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
function AnimatedCounter({ value, isAnimating }) {
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAnimating) {
            const start = displayValue;
            const end = value;
            const duration = 1000;
            const startTime = Date.now();
            const animate = ()=>{
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const current = Math.floor(start + (end - start) * progress);
                setDisplayValue(current);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            animate();
        } else {
            setDisplayValue(value);
        }
    }, [
        value,
        isAnimating
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Tesseract$2f$tesseract$2d$hall$2d$of$2d$heroes$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        "data-orchids-id": "src\\components\\MarvelLeaderboard.tsx:456:4",
        "data-orchids-name": "motion.div",
        className: "text-lg text-blue-200 font-mono",
        animate: isAnimating ? {
            scale: [
                1,
                1.2,
                1
            ],
            color: [
                "#bfdbfe",
                "#22c55e",
                "#bfdbfe"
            ]
        } : {},
        transition: {
            duration: 0.5
        },
        children: [
            displayValue.toLocaleString(),
            " votes"
        ]
    }, void 0, true, {
        fileName: "[project]/Tesseract/tesseract-hall-of-heroes/src/components/MarvelLeaderboard.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=Tesseract_tesseract-hall-of-heroes_src_components_MarvelLeaderboard_tsx_20a3588e._.js.map