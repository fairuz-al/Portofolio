/**
 * FAIRUZ SIBA AL KHIRZA - HERMES AGENT EDITORIAL CONTROLLER
 * Strictly 2 asset images used: AgroAI.jpeg & Schedule.png.
 * All other projects redirect/link to GitHub source.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTerminalTabs();
  initProjectsSection();
  initFaqAccordion();
  initGitHubReposFeed();
  initContactCopy();
  initModalEvents();
});

/* ==========================================================================
   1. Terminal Tab Switcher (Hero Section)
   ========================================================================== */
function initTerminalTabs() {
  const tabs = document.querySelectorAll('.terminal-tab-btn');
  const codeDisplay = document.getElementById('terminal-code-display');
  const copyBtn = document.getElementById('terminal-copy-btn');

  const commands = {
    curl: 'curl -fsSL https://fairuz.dev/api/profile.json',
    nextjs: 'git clone https://github.com/fairuz-al/managery-schedule-UNS.git',
    fastapi: 'git clone https://github.com/fairuz-al/AgroAI.git',
    git: 'git clone https://github.com/fairuz-al/Portofolio.git'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabKey = tab.getAttribute('data-tab');
      if (codeDisplay && commands[tabKey]) {
        codeDisplay.textContent = commands[tabKey];
      }
    });
  });

  if (copyBtn && codeDisplay) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeDisplay.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('📋 Copied to clipboard: ' + textToCopy);
      });
    });
  }
}

/* ==========================================================================
   2. Projects Data (Strictly 2 local assets: AgroAI.jpeg & Schedule.png)
   ========================================================================== */
const FEATURED_PROJECTS = [
  {
    id: 'agro-ai',
    title: 'AgroAI Diagnostic Engine',
    category: 'backend',
    categoryLabel: 'Backend & AI',
    badgeClass: 'hw-tag',
    image: 'assets/images/AgroAI.jpeg', // Asset 1
    hasImage: true,
    description: 'Intelligent agricultural advisory microservice calculating dynamic N-P-K nutrient balancing and soil suitability profiling using LLM acceleration.',
    highlights: [
      'Engineered asynchronous RESTful endpoints with FastAPI & SQLAlchemy',
      'Integrated Groq LLM & Google GenAI (Gemini) for agronomic synthesis',
      'PostgreSQL data layer containerized with Docker & Docker Compose'
    ],
    tags: ['FastAPI', 'Python', 'Google GenAI', 'PostgreSQL', 'Docker'],
    liveUrl: null,
    githubUrl: 'https://github.com/fairuz-al/AgroAI',
    archOverview: `+-----------------------+     +-----------------------+
| Next.js / Client UI  | --> | FastAPI API Gateway   |
+-----------------------+     +-----------------------+
                                          |
                        +-----------------+-----------------+
                        |                                   |
            +-----------------------+           +-----------------------+
            | Groq & Gemini GenAI   |           | PostgreSQL Database   |
            +-----------------------+           +-----------------------+`
  },
  {
    id: 'schedule-planner',
    title: 'UNS Schedule Conflict Solver',
    category: 'frontend',
    categoryLabel: 'Frontend & Next.js',
    badgeClass: 'hw-tag',
    image: 'assets/images/Schedule.png', // Asset 2
    hasImage: true,
    description: 'Interactive university student course timetable builder featuring real-time collision detection matrix and iCal/PNG calendar export engines.',
    highlights: [
      'Next.js 16 App Router architecture leveraging React 19 concurrent features',
      'Temporal matrix collision solver identifying course schedule overlaps',
      'High-resolution canvas and calendar iCal (.ics) export pipelines'
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://managery-schedule-uns.vercel.app/',
    githubUrl: 'https://github.com/fairuz-al/managery-schedule-UNS',
    archOverview: `+-----------------------+     +-----------------------+
|  User Timetable Input | --> | Conflict Solver Engine|
+-----------------------+     +-----------------------+
                                          |
                               +---------------------+
                               | iCal / PNG Export   |
                               +---------------------+`
  },
  {
    id: 'eigenface-pca',
    title: 'Project-EigenFace Vision AI',
    category: 'math',
    categoryLabel: 'CV & Linear Algebra',
    badgeClass: 'hw-tag',
    image: null, // No image (strictly 2 image limit)
    hasImage: false,
    description: 'Biometric facial recognition pipeline calculating covariance matrix eigendecomposition and Principal Component Analysis (PCA) for image vector dimensionality reduction.',
    highlights: [
      'Constructed covariance matrix decomposition using NumPy vectorized computing',
      'Extracted top-k principal Eigenfaces retaining >94% facial variance',
      'Vector space similarity classifier based on Euclidean distance metrics'
    ],
    tags: ['Python', 'OpenCV', 'NumPy', 'PCA', 'Linear Algebra'],
    liveUrl: null,
    githubUrl: 'https://github.com/fairuz-al/Project-EigenFace',
    archOverview: `[Face Image Matrix X] -> [Mean Centering] -> [Covariance Cov = X X^T]
                      -> [Eigenvalues/Vectors] -> [Euclidean Distance Match]`
  },
  {
    id: 'financial-manager',
    title: 'Financial Manager MVC',
    category: 'backend',
    categoryLabel: 'Backend & Fullstack',
    badgeClass: 'hw-tag',
    image: null, // No image (strictly 2 image limit)
    hasImage: false,
    description: 'Enterprise personal finance management platform engineered with Laravel MVC to monitor cashflow trends, budget thresholds, and ledger allocations.',
    highlights: [
      'Relational database migrations with Eloquent ORM optimizations',
      'Dynamic cashflow variance analytics and interactive balance tracking',
      'Robust authentication middleware supporting multi-account ledgers'
    ],
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'Eloquent ORM'],
    liveUrl: null,
    githubUrl: 'https://github.com/fairuz-al/Financial-Manager_LaravelBased',
    archOverview: `[HTTP Request] -> [Auth Middleware] -> [Controller Layer]
                   -> [Eloquent ORM] -> [PostgreSQL / MySQL Database]`
  },
  {
    id: 'expert-system',
    title: 'Forward-Chaining Expert System',
    category: 'math',
    categoryLabel: 'Algorithms & AI',
    badgeClass: 'hw-tag',
    image: null, // No image (strictly 2 image limit)
    hasImage: false,
    description: 'Rule-based inferencing engine evaluating agricultural symptoms and plant pathologies through forward chaining trees and certainty factors.',
    highlights: [
      'Dynamically evaluated rule base evaluating premises to reach conclusions',
      'Certainty factor (CF) scoring handling ambiguous user symptom weights',
      'High-speed deterministic inference execution in Python'
    ],
    tags: ['Python', 'Expert Systems', 'Algorithms', 'AI'],
    liveUrl: null,
    githubUrl: 'https://github.com/fairuz-al',
    archOverview: `[Observed Symptoms] -> [Forward Chaining Inference Engine]
                      -> [Knowledge Base Tree] -> [Diagnostic Confidence Score]`
  }
];

/* ==========================================================================
   3. Render Projects Grid & Filters
   ========================================================================== */
function initProjectsSection() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('#project-filters .filter-tab');

  if (!grid) return;

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'editorial-project-card';

      let mediaHtml = '';
      if (project.hasImage && project.image) {
        mediaHtml = `
          <div class="card-media-box">
            <img src="${project.image}" alt="${project.title}" loading="lazy" />
            <span class="hw-tag" style="position:absolute; top:1rem; right:1rem; background:rgba(0,15,10,0.85);">${project.categoryLabel}</span>
          </div>
        `;
      } else {
        mediaHtml = `
          <div class="card-media-code-art">
            <span class="hw-tag" style="margin-bottom:0.75rem;">${project.categoryLabel}</span>
            <div style="font-size:2rem; margin-bottom:0.4rem;">📦</div>
            <div class="hw-mono" style="font-size:0.78rem; color:var(--hermes-accent);">github.com/fairuz-al</div>
            <div style="font-size:0.75rem; color:var(--hermes-fg-subtle); margin-top:0.2rem;">Source Repository on GitHub</div>
          </div>
        `;
      }

      const highlightsHtml = project.highlights.map(h => `
        <li><span style="color:var(--hermes-accent); font-weight:bold;">▹</span> ${h}</li>
      `).join('');

      const tagsHtml = project.tags.map(t => `
        <span class="feature-tag-item">${t}</span>
      `).join('');

      card.innerHTML = `
        ${mediaHtml}
        <div class="card-body-content">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.description}</p>
          <ul class="card-highlights">
            ${highlightsHtml}
          </ul>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:1.5rem;">
            ${tagsHtml}
          </div>
          <div class="card-footer-actions">
            <button class="hermes-btn hermes-btn-ghost view-details-btn" data-id="${project.id}" style="font-size:0.74rem; padding:0.5rem 0.9rem;">
              Architecture Specs
            </button>
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="hermes-btn hermes-btn-accent" style="margin-left:auto; font-size:0.74rem; padding:0.5rem 0.9rem;">
                Live Demo ↗
              </a>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="hermes-btn hermes-btn-ghost" style="font-size:0.74rem; padding:0.5rem 0.9rem;" title="View Source">
                GH ↗
              </a>
            ` : `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="hermes-btn hermes-btn-primary" style="margin-left:auto; font-size:0.74rem; padding:0.5rem 0.9rem;">
                GitHub ↗
              </a>
            `}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-id');
        openModal(projId);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      render(filter);
    });
  });

  render('all');
}

/* ==========================================================================
   4. Hermes FAQ Accordion Controller
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const icon = i.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('active');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

/* ==========================================================================
   5. GitHub Repositories Live API Feed
   ========================================================================== */
async function initGitHubReposFeed() {
  const reposGrid = document.getElementById('repos-grid');
  if (!reposGrid) return;

  const FALLBACK_REPOS = [
    {
      name: 'AgroAI',
      description: 'AI-assisted agricultural diagnostic backend platform built with FastAPI and Google GenAI.',
      language: 'Python',
      stargazers_count: 3,
      forks_count: 1,
      html_url: 'https://github.com/fairuz-al/AgroAI'
    },
    {
      name: 'managery-schedule-UNS',
      description: 'Next.js 16 interactive timetable conflict resolver and schedule generator for UNS students.',
      language: 'TypeScript',
      stargazers_count: 2,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/managery-schedule-UNS'
    },
    {
      name: 'Project-EigenFace',
      description: 'Facial recognition algorithm based on Eigenvalues and Principal Component Analysis.',
      language: 'Python',
      stargazers_count: 2,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/Project-EigenFace'
    },
    {
      name: 'Portofolio',
      description: 'Hermes editorial portfolio built with native HTML5, CSS3, and ES6 JavaScript.',
      language: 'HTML',
      stargazers_count: 1,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/Portofolio'
    }
  ];

  try {
    const res = await fetch('https://api.github.com/users/fairuz-al/repos?sort=updated&per_page=6');
    if (!res.ok) throw new Error('API Rate Limit or Network Error');
    const repos = await res.json();
    renderRepos(repos.slice(0, 6));
  } catch (err) {
    console.warn('Using fallback repository data:', err);
    renderRepos(FALLBACK_REPOS);
  }

  function renderRepos(list) {
    reposGrid.innerHTML = '';
    list.forEach(repo => {
      const card = document.createElement('a');
      card.href = repo.html_url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'repo-card';

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
          <span class="hw-mono" style="color:var(--hermes-accent); font-size:0.74rem;">PUBLIC REPO</span>
          <span class="hw-mono" style="color:var(--hermes-fg-subtle); font-size:0.7rem;">⭐ ${repo.stargazers_count || 0}</span>
        </div>
        <h4 style="font-family:var(--font-heading); font-size:1.15rem; margin-bottom:0.4rem; color:var(--hermes-fg);">${repo.name}</h4>
        <p style="font-size:0.86rem; color:var(--hermes-fg-dim); line-height:1.5; margin-bottom:1rem; flex-grow:1;">${repo.description || 'No description provided.'}</p>
        <div class="hw-mono" style="font-size:0.72rem; color:var(--hermes-accent);">
          ${repo.language || 'Code'} • View on GitHub ↗
        </div>
      `;

      reposGrid.appendChild(card);
    });
  }
}

/* ==========================================================================
   6. Project Architecture Specs Modal
   ========================================================================== */
function openModal(projectId) {
  const project = FEATURED_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const summary = document.getElementById('modal-summary');
  const highlights = document.getElementById('modal-highlights');
  const arch = document.getElementById('modal-arch');
  const tags = document.getElementById('modal-tags');
  const githubLink = document.getElementById('modal-github');
  const liveLink = document.getElementById('modal-live');

  if (project.hasImage && project.image) {
    img.src = project.image;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }

  title.textContent = project.title;
  badge.textContent = project.categoryLabel;
  summary.textContent = project.description;

  highlights.innerHTML = project.highlights.map(h => `
    <li style="margin-bottom:0.4rem; font-size:0.88rem; color:#d1fae5;">
      <span style="color:var(--hermes-accent); font-weight:bold;">✓</span> ${h}
    </li>
  `).join('');

  arch.textContent = project.archOverview;

  tags.innerHTML = project.tags.map(t => `
    <span class="feature-tag-item">${t}</span>
  `).join('');

  githubLink.href = project.githubUrl;

  if (liveLink) {
    if (project.liveUrl) {
      liveLink.href = project.liveUrl;
      liveLink.style.display = 'inline-flex';
    } else {
      liveLink.style.display = 'none';
    }
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   7. Navigation Scroll & Contact
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function initContactCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'fairuzziba@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('📋 Email copied: ' + email);
    });
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
