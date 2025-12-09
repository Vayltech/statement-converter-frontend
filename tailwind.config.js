/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Vayltech Fintech Palette
                vayl: {
                    bg: '#020617',          // Deep Slate (Professional Dark)
                    card: '#0f172a',        // Lighter Slate (Card Background)
                    border: '#1e293b',      // Subtle Border
                    primary: '#14b8a6',     // Teal 500 (Primary Action)
                    primaryDark: '#0d9488', // Teal 600 (Hover)
                    accent: '#10b981',      // Emerald 500 (Success/Money)
                    text: '#f8fafc',        // Off-white text
                    muted: '#94a3b8',       // Muted text
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'vayl-gradient': 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)', // Teal -> Emerald
            }
        },
    },
    plugins: [],
}