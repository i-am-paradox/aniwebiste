# Paradox | The Silent Revolution

![Paradox Banner](/public/images/story-hero.png)

> "We don't sell headphones. We frame silence."

Paradox is a world-class scrollytelling experience designed to push the boundaries of web animation. Built with **Next.js 14**, **Framer Motion**, and **Lenis**, it features pharmaceutical-grade scroll physics, kinetic typography, and a glitch-resistant digital signature system.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-production-emerald.svg)

## ⚡ Core Technologies

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Motion**: [Framer Motion](https://www.framer.com/motion/)
-   **Physics**: [Lenis](https://lenis.studiofreight.com/) (Inertia Scroll)
-   **Security**: Custom Identity Identity Signature & HUD Kill-switch

## 🚀 Features

### 1. Physics-Based Scrollytelling
Text elements don't just fade; they stick, shrink into the void, and rotate based on scroll velocity (velocity-sensitive layouts).

### 2. High-Performance Canvas
Image sequences are rendered on HTML5 Canvas for 60fps performance, complete with a custom "film grain" overlay and radial masking to blend seamlessly with the dark mode UI.

### 3. The "Dynamic Island" Navbar
A floating, glassmorphism-based navigation pill that reacts to user interaction.

### 4. Anti-Tamper Signature
The project includes a digital signature verification system (`core/Identity.ts`). If the signature is tampered with, the on-screen "Tech HUD" will fail to render, preserving the creator's mark.

## 🛠️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/paradox-landing.git
    cd paradox-landing
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open [http://localhost:3000](http://localhost:3000)** with your browser.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Designed & Engineered by [Paradox Architect](https://github.com/yourusername)**
