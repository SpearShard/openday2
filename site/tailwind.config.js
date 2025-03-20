/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                blob: "blob 7s infinite",
                first: "first 4s linear infinite",
                second: "second 4s linear infinite",
                third: "third 4s linear infinite",
                fourth: "fourth 4s linear infinite",
                fifth: "fifth 4s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                first: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "50%": {
                        transform: "translate(50px, 50px) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                second: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50px, -50px) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                third: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "50%": {
                        transform: "translate(50px, -50px) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                fourth: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "50%": {
                        transform: "translate(-50px, 50px) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                fifth: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "50%": {
                        transform: "translate(50px, 50px) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
} 