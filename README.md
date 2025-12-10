# Vsync | AI Financial Data Converter

**Live Demo:** [https://vsync.vayltech.com](https://vsync.vayltech.com)

## 🚀 Project Overview
Vsync is a production-ready SaaS platform designed to automate financial data entry for accountants and small businesses. This repository contains the **Frontend application**, which serves as the user interface for converting PDF bank statements into editable formats like Excel, CSV, and QuickBooks Online (QBO). The application leverages AI (GPT-4o) on the backend to extract transaction data with high accuracy, complete with fraud detection and automatic balance reconciliation.

## 🛠️ Technical Stack
Built with **React (Vite)** and styled with **Tailwind CSS**, this single-page application features a modern, responsive "Dark Mode" design optimized for speed and usability. It integrates **Supabase** for secure authentication (RLS), **Stripe** for tiered subscription management, and communicates with a Node.js/Express backend for file processing. Key technical highlights include custom React hooks for state management, secure handling of file uploads, and a dynamic UI that adjusts based on the user's live subscription status.

## ✨ Key Features
* **Modern UI/UX:** Responsive design with custom "ribbon" branding and smooth animations.
* **Secure Authentication:** Integrated with Supabase Auth for seamless sign-up/login.
* **File Handling:** Drag-and-drop interface supporting PDF, Images, and Excel files.
* **Payment Integration:** Real-time connection to Stripe for handling upgrades and "pro" tier access.
* **Reconciliation Engine:** Visual feedback for users when statement balances don't match extracted data.

## 📦 Local Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev