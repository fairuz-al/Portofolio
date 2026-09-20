/**
 * FAIRUZ SIBA AL KHIRZA - PORTFOLIO INTERACTIVE CONTROLLER
 * Strictly 2 asset images used: AgroAI.jpeg & Schedule.png.
 * All other projects redirect/link to GitHub source.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjectsSection();
  initGitHubReposFeed();
  initContactCopy();
  initModalEvents();
});

/* ==========================================================================
   1. Projects Data (Only 2 local assets: AgroAI.jpeg & Schedule.png)
   ========================================================================== */
const FEATURED_PROJECTS = [
  {
    id: 'agro-ai',
    title: 'AgroAI Engine',
    category: 'backend',
    categoryLabel: 'Backend & AI',
    badgeClass: 'badge-backend',
    image: 'assets/images/AgroAI.jpeg', // Local Asset 1
    hasImage: true,
    description: 'Intelligent agronomy platform powering soil diagnostic pipelines, crop disease classification, and microservice recommendations.',
    highlights: [
      'Built async RESTful microservices with FastAPI & SQLAlchemy',
      'Integrated Google GenAI & Groq API for agricultural guidance',
      'PostgreSQL data architecture with vector index capability'
    ],
    tags: ['FastAPI', 'Python', 'Google GenAI', 'PostgreSQL', 'Docker'],
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
    title: 'UNS Schedule Planner',
    category: 'frontend',
    categoryLabel: 'Frontend & Next.js',
    badgeClass: 'badge-frontend',
    image: 'assets/images/Schedule.png', // Local Asset 2
    hasImage: true,
    description: 'Interactive course schedule builder for university students to resolve timetable conflicts and export optimized weekly routines.',
    highlights: [
      'Next.js 16 App Router with React 19 server components',
      'Client-side matrix collision detection algorithm',
      'PNG & iCal calendar export engine'
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
    title: 'EigenFace Computer Vision',
    category: 'math',
    categoryLabel: 'CV & Linear Algebra',
    badgeClass: 'badge-math',
    image: null, // No image (Asset limit rule)
    hasImage: false,
    description: 'Facial recognition engine implementing Principal Component Analysis (PCA), Covariance Matrix Eigendecomposition, and Euclidean distance classification.',
    highlights: [
      'Constructed covariance matrix decomposition using NumPy',
      'Calculated top-k Eigenvectors for feature dimensionality reduction',
      'Implemented vector space matching for low-latency facial recognition'
    ],
    tags: ['Python', 'OpenCV', 'NumPy', 'PCA', 'Linear Algebra'],
    githubUrl: 'https://github.com/fairuz-al/EigenFace',
    archOverview: `[Image Matrix X] -> [Mean Centering] -> [Covariance Cov = X X^T]
                      -> [Eigenvalues/Vectors] -> [Euclidean Distance Matching]`
  },
  {
    id: 'backend-starter',
    title: 'FastAPI Production Boilerplate',
    category: 'backend',
    categoryLabel: 'Backend Infrastructure',
    badgeClass: 'badge-backend',
    image: null, // No image (Asset limit rule)
    hasImage: false,
    description: 'Modular enterprise API foundation featuring JWT authentication, Alembic database migrations, Rate limiting, and Dockerized dev environment.',
    highlights: [
      'Strict Async SQLAlchemy ORM session lifecycle management',
      'OAuth2 Bearer authentication with JWT token refresh pairs',
      'Structured Pydantic v2 schemas with automated OpenAPI docs'
    ],
    tags: ['FastAPI', 'Python', 'SQLAlchemy', 'Alembic', 'Docker'],
    githubUrl: 'https://github.com/fairuz-al',
    archOverview: `[Client Request] -> [Rate Limiter & OAuth Middleware]
                    -> [Dependency Injection Session] -> [PostgreSQL DB]`
  },
  {
    id: 'expert-system-agronomy',
    title: 'Forward-Chaining Expert System',
    category: 'math',
    categoryLabel: 'Expert Systems & AI',
    badgeClass: 'badge-math',
    image: null, // No image (Asset limit rule)
    hasImage: false,
    description: 'Rule-based inferencing engine evaluating agricultural facts and leaf symptoms using forward chaining and certainty factors.',
    highlights: [
      'Knowledge base engine with dynamic rule evaluation tree',
      'Certainty factor calculation for fuzzy symptom scoring',
      'Clean interactive CLI and API presentation layers'
    ],
    tags: ['Python', 'Expert Systems', 'Algorithms', 'AI'],
    githubUrl: 'https://github.com/fairuz-al',
    archOverview: `[Symptom Inputs] -> [Forward Chaining Inference Engine]
                      -> [Rule Knowledge Base] -> [Diagnostic Score & CF]`
  }
];

/* ==========================================================================
   2. Render Projects & Filter Functionality
   ========================================================================== */
function initProjectsSection() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('#project-filters .filter-btn');

  if (!grid) return;

  function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' 
      ? FEATURED_PROJECTS 
      : FEATURED_PROJECTS.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card';

      // Header preview section: Image (if 2 allowed assets) or GitHub link hero box
      let mediaHtml = '';
      if (project.hasImage && project.image) {
        mediaHtml = `
          <div class="project-media-wrap">
            <img src="${project.image}" alt="${project.title}" class="project-thumbnail" loading="lazy" />
            <span class="project-badge-float ${project.badgeClass}">${project.categoryLabel}</span>
          </div>
        `;
      } else {
        mediaHtml = `
          <div class="project-media-wrap" style="display:flex; flex-direction:column; align-items:center; justify-content:center; background: linear-gradient(135deg, rgba(14, 19, 31, 0.95), rgba(8, 11, 17, 0.98)); border-bottom: 1px solid var(--border-light); padding: 1.5rem; text-align: center;">
            <span class="project-badge-float ${project.badgeClass}">${project.categoryLabel}</span>
            <div style="font-size: 2.2rem; margin-bottom: 0.5rem; opacity: 0.85;">📦</div>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent-cyan); letter-spacing: 0.05em;">github.com/fairuz-al</div>
            <div style="font-size: 0.8rem; color: var(--text-subtle); margin-top: 0.25rem;">Source Available on GitHub</div>
          </div>
        `;
      }

      const highlightsHtml = project.highlights.map(h => `
        <li><span class="bullet">▹</span> ${h}</li>
      `).join('');

      const tagsHtml = project.tags.map(t => `
        <span class="tag-item">${t}</span>
      `).join('');

      card.innerHTML = `
        ${mediaHtml}
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <ul class="project-highlights-list">
            ${highlightsHtml}
          </ul>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-footer">
            <button class="btn btn-outline btn-card view-details-btn" data-id="${project.id}">
              Architecture Specs
            </button>
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-card" style="margin-left: auto;">
                Live Demo ↗
              </a>
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-card" title="View GitHub Source">
                GitHub ↗
              </a>
            ` : `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-card" style="margin-left: auto;">
                GitHub ↗
              </a>
            `}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Attach click listener for modal details
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-id');
        openModal(projId);
      });
    });
  }

  // Filter Buttons event binding
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects('all');
}

/* ==========================================================================
   3. GitHub Repositories Live API Feed
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
      name: 'jadwal-kuliah',
      description: 'Next.js 16 interactive timetable conflict resolver and schedule generator.',
      language: 'TypeScript',
      stargazers_count: 2,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/jadwal-kuliah'
    },
    {
      name: 'EigenFace',
      description: 'Facial recognition algorithm based on Eigenvalues and Principal Component Analysis.',
      language: 'Python',
      stargazers_count: 2,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/EigenFace'
    },
    {
      name: 'Portofolio',
      description: 'Modern Cyber-Glass software engineer portfolio built with HTML5, CSS3, and ES6 JS.',
      language: 'HTML',
      stargazers_count: 1,
      forks_count: 0,
      html_url: 'https://github.com/fairuz-al/Portofolio'
    }
  ];

  try {
    const res = await fetch('https://api.github.com/users/fairuz-al/repos?sort=updated&per_page=6');
    if (!res.ok) throw new Error('GitHub API rate limit or error');
    const repos = await res.json();
    renderRepos(repos.slice(0, 6));
  } catch (err) {
    console.warn('Using fallback repositories data:', err);
    renderRepos(FALLBACK_REPOS);
  }

  function renderRepos(reposList) {
    reposGrid.innerHTML = '';
    const langColors = {
      Python: '#3572A5',
      TypeScript: '#3178C6',
      JavaScript: '#F1E05A',
      HTML: '#E34C26',
      PHP: '#4F5D95',
      Vue: '#41B883'
    };

    reposList.forEach(repo => {
      const card = document.createElement('a');
      card.href = repo.html_url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';
      card.className = 'repo-card';

      const dotColor = langColors[repo.language] || '#06B6D4';

      card.innerHTML = `
        <div class="repo-card-top">
          <span class="repo-icon">📁</span>
          <span class="repo-visibility">Public</span>
        </div>
        <h3 class="repo-name">${repo.name}</h3>
        <p class="repo-description">${repo.description || 'No description provided.'}</p>
        <div class="repo-meta-row">
          <div>
            <span class="repo-lang-dot" style="background-color: ${dotColor}"></span>
            ${repo.language || 'Code'}
          </div>
          <div>⭐ ${repo.stargazers_count || 0}</div>
          <div>🍴 ${repo.forks_count || 0}</div>
        </div>
      `;

      reposGrid.appendChild(card);
    });
  }
}

/* ==========================================================================
   4. Modal Event Controllers
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
  badge.className = `project-badge-float ${project.badgeClass}`;
  summary.textContent = project.description;

  highlights.innerHTML = project.highlights.map(h => `
    <li style="margin-bottom:0.4rem; font-size:0.9rem; color:#CBD5E1;">
      <span style="color:var(--accent-cyan); font-weight:bold;">✓</span> ${h}
    </li>
  `).join('');

  arch.textContent = project.archOverview;

  tags.innerHTML = project.tags.map(t => `
    <span class="tag-item">${t}</span>
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
   5. Navigation & Scroll Effects
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active nav link highlight on scroll
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   6. Contact Copy & Toast Notification
   ========================================================================== */
function initContactCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'fairuzziba@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('📋 Email copied to clipboard: ' + email);
    }).catch(() => {
      showToast('Email: ' + email);
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}
