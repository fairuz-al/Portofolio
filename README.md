<div align="center">

# ⚡ Fairuz Siba Al Khirza — Portfolio

<p align="center">
  <strong>Full-Stack Software Engineer • Backend &amp; AI Systems • Computer Science / Informatics Undergrad</strong>
</p>
<p align="center">
  <em>Universitas Sebelas Maret (UNS) • Surakarta, Indonesia</em>
</p>

[![GitHub](https://img.shields.io/badge/GitHub-fairuz--al-181717?style=for-the-badge&logo=github)](https://github.com/fairuz-al)
[![Email](https://img.shields.io/badge/Email-fairuzziba%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fairuzziba@gmail.com)
[![Status](https://img.shields.io/badge/Status-Available%20for%20Collaboration-10B981?style=for-the-badge)](mailto:fairuzziba@gmail.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-06B6D4?style=for-the-badge)](LICENSE)

<br />

<!-- Tech Badges Bar -->
<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI" />
  <img src="https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React%2019-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white" alt="OpenCV" />
</p>

[**🌐 Live Portfolio Website**](https://fairuz-al.github.io/Portofolio/) • [**📂 Featured Projects**](#-featured-projects-showcase) • [**🛠️ Tech Matrix**](#%EF%B8%8F-technology--skills-matrix) • [**🚀 Local Setup**](#-local-setup--quickstart)

---

</div>

## 📖 Table of Contents

- [About Me](#-about-me)
- [Portfolio Features & Architecture](#-portfolio-features--architecture)
- [Featured Projects Showcase](#-featured-projects-showcase)
  - [1. AgroAI — Smart Agricultural Advisory](#1-agroai--smart-agricultural-advisory)
  - [2. Auto-Mangery-Schedule-UNS](#2-auto-mangery-schedule-uns)
  - [3. Project-EigenFace — Biometric Face Recognition AI](#3-project-eigenface--biometric-face-recognition-ai)
  - [4. Financial-Manager_LaravelBased](#4-financial-manager_laravelbased)
  - [5. LearningLabs Frontend Suite](#5-learninglabs-frontend-suite)
- [Technology & Skills Matrix](#%EF%B8%8F-technology--skills-matrix)
- [Repository Structure](#-repository-structure)
- [Local Setup & Quickstart](#-local-setup--quickstart)
- [Deployment Guide](#-deployment-guide)
- [GitHub Statistics](#-github-statistics)
- [Contact & Connect](#-contact--connect)

---

## 👤 About Me

Hello! I'm **Fairuz Siba Al Khirza** ([@fairuz-al](https://github.com/fairuz-al)), an Informatics / Computer Science student at **Universitas Sebelas Maret (UNS)** in Surakarta, Indonesia.

I focus on building resilient software systems across the development spectrum:
- **Backend & APIs**: Designing scalable, asynchronous REST APIs with **FastAPI** and **Laravel**, structured relational databases (**PostgreSQL**, **MySQL**), and containerized deployments (**Docker**).
- **Modern Frontend**: Crafting responsive, fluid web interfaces utilizing **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and modern **CSS Grid / Flexbox** with 100/100 Lighthouse performance principles.
- **AI & Applied Mathematics**: Implementing machine learning algorithms, LLM inference pipelines (**Groq**, **Google GenAI / Gemini**), and core mathematical computing (**Linear Algebra, PCA, Eigenvalues** in **Python & OpenCV**).

---

## ✨ Portfolio Features & Architecture

This repository hosts a portfolio web application built with a focus on performance, accessibility, and modern aesthetics:

- 🌌 **Obsidian Cyber-Glass Theme**: Curated dark palette (`#080B11`) with electric cyan (`#06B6D4`), violet (`#8B5CF6`), and emerald (`#10B981`) glowing accents.
- 🎯 **Interactive Category Filter**: Dynamically filter projects by *All*, *Backend & Fullstack*, *Frontend & Next.js*, and *Computer Vision & Math*.
- 🔍 **Architecture Deep-Dive Modals**: In-depth modal dialogs providing structural breakdowns, technical stacks, key architectural decisions, and repository links.
- 📡 **Live GitHub API Stream**: Real-time asynchronous fetch from the GitHub public API (`/users/fairuz-al/repos`) with automatic offline cache fallback.
- 📋 **One-Click Email Copy**: Integrated clipboard action with toast notifications for seamless outreach.
- 📱 **100% Responsive & Lightweight**: Pure native HTML5, modern CSS3 (Custom Variables, CSS Grid, Flexbox), and Vanilla ES6+ JavaScript — **0 bloated dependencies, 0 build-time lock-in**.

---

## 🚀 Featured Projects Showcase

### 1. AgroAI — Smart Agricultural Advisory
> **Repository**: [`fairuz-al/AgroAI`](https://github.com/fairuz-al/AgroAI) • **Category**: *Backend & AI*

AgroAI is an agronomy advisory platform designed to help farmers analyze geographic terrain characteristics, receive optimal crop commodity recommendations, and calculate dynamic N-P-K (Nitrogen, Phosphorus, Potassium) fertilizer schedules tailored to each crop growth phase.

- **Key Highlights**:
  - Real-time land elevation and regional soil suitability profiling.
  - Dynamic nutrient balancing algorithms based on phenological crop cycles.
  - Asynchronous FastAPI microservice accelerated by **Groq LLM** and **Google GenAI SDK (Gemini)**.
  - Containerized with Docker and Docker Compose for production readiness.
- **Technologies**: Python 3.11, FastAPI, SQLAlchemy ORM, PostgreSQL, Groq, Google GenAI, BeautifulSoup4, Docker.

---

### 2. Auto-Mangery-Schedule-UNS
> **Repository**: [`fairuz-al/managery-schedule-UNS`](https://github.com/fairuz-al/managery-schedule-UNS) • **Category**: *Frontend & Web Apps*

A course scheduling and conflict-detection tool built for students at Universitas Sebelas Maret (UNS) to parse academic course files, resolve scheduling overlaps, and generate visual timetables.

- **Key Highlights**:
  - Automated timetable parser capable of reading university schedule feeds and raw course data.
  - Interactive weekly grid with instant visual conflict and collision warning indicators.
  - Client-side export engine generating high-resolution timetable PNGs and printable PDF documents.
  - Engineered with the **Next.js 16 App Router** and **React 19 concurrent features**.
- **Technologies**: Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, html2canvas, jsPDF, unpdf, Cheerio.

---

### 3. Project-EigenFace — Biometric Face Recognition AI
> **Repository**: [`fairuz-al/Project-EigenFace`](https://github.com/fairuz-al/Project-EigenFace) • **Category**: *Computer Vision & Linear Algebra*

An academic computer vision system implementing Principal Component Analysis (PCA) and Eigenvalue/Eigenvector matrix decomposition for facial recognition and biometric identification.

- **Key Highlights**:
  - High-dimensional image matrix compression into top 25 principal eigenvectors (eigenfaces).
  - Covariance matrix diagonalization capturing over 94% of total facial dataset variance.
  - Euclidean distance classifier calculating similarity vectors with configurable confidence thresholds.
  - Built from pure mathematical linear algebra formulations.
- **Technologies**: Python 3, OpenCV, NumPy Vectorized Computing, Linear Algebra (PCA).

---

### 4. Financial-Manager_LaravelBased
> **Repository**: [`fairuz-al/Financial-Manager_LaravelBased`](https://github.com/fairuz-al/Financial-Manager_LaravelBased) • **Category**: *Backend & Fullstack*

An enterprise-ready personal financial management system engineered on the Laravel MVC architecture to monitor cashflow, budget allocations, and visual fluctuations in revenue and expenses.

- **Key Highlights**:
  - Interactive cashflow trend visualization highlighting growth and burn rates.
  - Customizable budget categories and automated variance threshold alerts.
  - Relational database schema with optimized Eloquent ORM queries and migrations.
  - Multi-database support for PostgreSQL and MySQL.
- **Technologies**: PHP, Laravel MVC Framework, PostgreSQL / MySQL, Eloquent ORM, Responsive Charting.

---

### 5. LearningLabs Frontend Suite
> **Repository**: [`fairuz-al/L0124014_Fairuz-Siba-Al-Khirza_LearningLabs-`](https://github.com/fairuz-al/L0124014_Fairuz-Siba-Al-Khirza_LearningLabs-) • **Category**: *Frontend Engineering*

A collection of accessible, responsive, and performance-optimized user interface components developed for undergraduate Informatics laboratory coursework at UNS.

- **Key Highlights**:
  - 100/100 Lighthouse performance, accessibility, and SEO audit scores.
  - Semantic HTML5 structure with ARIA landmark navigation.
  - Native DOM manipulation with zero heavy external libraries.
- **Technologies**: HTML5, Modern CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+).

---

## 🛠️ Technology & Skills Matrix

| Domain | Core Technologies & Frameworks | Methodologies & Capabilities |
| :--- | :--- | :--- |
| **Backend & APIs** | FastAPI, Laravel, Python, PHP, SQLAlchemy, Eloquent | RESTful APIs, Asynchronous I/O, Microservices, Auth & Middleware |
| **Frontend & UI** | Next.js 16, React 19, TypeScript, Tailwind CSS, HTML5, CSS3 | App Router, Server Components, Responsive Grid, Canvas & PDF Export |
| **AI & Data** | Google GenAI (Gemini), Groq, OpenCV, NumPy, PCA | LLM Prompt Engineering, Computer Vision, Matrix Linear Algebra |
| **Databases** | PostgreSQL, MySQL | Schema Design, ORM Optimization, Migrations, Indexing |
| **DevOps & Tools** | Docker, Docker Compose, Git, Linux (Hyprland), Vercel | Containerization, CI/CD Workflows, Version Control, Agile Development |

---

## 📂 Repository Structure

```
.
├── assets/
│   └── images/
│       ├── agroai_preview.svg          # High-fidelity vector preview for AgroAI
│       ├── schedule_preview.svg        # Timetable vector preview for Schedule UNS
│       ├── eigenface_preview.svg       # Computer vision vector preview for EigenFace
│       ├── financial_preview.svg       # Financial charts preview for Laravel Manager
│       └── learninglabs_preview.svg    # Frontend suite & Lighthouse metrics preview
├── css/
│   └── style.css                       # Obsidian Cyber-Glass design system & responsive rules
├── js/
│   └── main.js                         # Project data, filtering, modal logic, and GitHub API
├── index.html                          # Semantic, accessible HTML5 single-page application
└── README.md                           # Repository documentation
```

---

## 💻 Local Setup & Quickstart

### Prerequisites
- Any modern web browser (Chrome, Firefox, Brave, Edge).
- (Optional) `python3` or `node` for running a local development server.

### 1. Clone the Repository
```bash
git clone git@github.com:fairuz-al/Portofolio.git
cd Portofolio
```

### 2. Launch Local Server

**Using Vercel (Recommended):**
```bash
npx vercel dev --local --listen 3000 --yes
```
Open your browser and navigate to: **`http://localhost:3000`**

**Using Node.js:**
```bash
npx -y serve .
```

**Using Python:**
```bash
python3 -m http.server 8080
```

---

## 🌐 Deployment Guide

### Deploying to GitHub Pages (Free & Instant)

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "feat: enhance portfolio and comprehensive documentation"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main`, Folder: `/ (root)`.
   - Click **Save**.
3. In a few moments, your portfolio will be accessible at:
   ```
   https://fairuz-al.github.io/Portofolio/
   ```

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the prompts.

---

## 📬 Contact & Connect

- **Author**: Fairuz Siba Al Khirza
- **GitHub**: [@fairuz-al](https://github.com/fairuz-al)
- **Email**: [fairuzziba@gmail.com](mailto:fairuzziba@gmail.com)
- **Institution**: Universitas Sebelas Maret (UNS), Surakarta, Indonesia