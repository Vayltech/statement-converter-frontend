import React from 'react';

export default function Logo({ className = "h-10 w-auto" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 80"
            className={className}
        >
            <defs>
                <linearGradient id="fintech-shine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ccfbf1', stopOpacity: 1 }} />   {/* Light Teal */}
                    <stop offset="50%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />   {/* Teal Main */}
                    <stop offset="100%" style={{ stopColor: '#0f766e', stopOpacity: 1 }} />  {/* Deep Teal */}
                </linearGradient>
            </defs>
            <path
                d="M 50 80 L 15 5 L 35 5 L 50 45 L 65 5 L 85 5 Z"
                fill="url(#fintech-shine)"
                stroke="rgba(20, 184, 166, 0.2)"
                strokeWidth="1"
            />
        </svg>
    );
}