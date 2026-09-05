// =============================================================
// CARL CMS & ADMIN ENGINE (v2.0)
// Protected by Secret Double-Tap on Brand Logo & Password: 7777
// Full CMS: Projects, Awards, Experience, Skills, About/Bio, Analytics
// =============================================================

(function initCarlCMS() {
  'use strict';

  const STORAGE_KEY = 'carl_cms_data_v1';
  const MASTER_PASSWORD = '7777';

  // -----------------------------------------------------------
  // 1. Default Baseline Data (Synchronized with Portfolio Content)
  // -----------------------------------------------------------
  const DEFAULT_DATA = {
    analytics: {
      views: 0,
      resumeDownloads: 0,
      history: []
    },
    profile: {
      name: "NAVEEN CARLIN A",
      subtitle: "Building Scalable, Intelligent, and Impactful Systems",
      typewriterPhrases: [
        "AI & Full Stack Engineer",
        "Research Intern @ NIT Trichy",
        "Building Scalable & Intelligent Systems",
        "Winner · Niral Thiruvizha Hackathon"
      ],
      bio: "AI & Full Stack Engineer | Building Scalable, Intelligent, and Impactful Systems with Edge AI, Computer Vision, and Cloud Architectures.",
      statusText: "AVAILABLE FOR OPPORTUNITIES",
      location: "Sivaganga, Tamil Nadu, India",
      email: "naveencarlin07@gmail.com",
      github: "https://github.com/carl07-gif",
      linkedin: "https://www.linkedin.com/in/naveen-carlin-a-b66317411"
    },
    projects: [
      {
        id: "proj_animal_intrusion",
        title: "Smart Animal Intrusion Detection System",
        category: "EDGE AI · 2025",
        badge: "NAAN MUDHALVAN – NIRAL THIRUVIZHA · TOP 25 FINALIST",
        desc: "Edge AI wildlife detection system achieving 94% accuracy with <120 ms inference and ~70% deterrence using ultrasonic waves, MQTT logging, and GSM alerts.",
        image: "/assets/animal-intrusion-system.jpg",
        metrics: "94% Accuracy · ~70% Intrusion Reduction · Top 25 Finalist",
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_multi_agent",
        title: "AI-Based Multi-Agent Path Planning",
        category: "AI / RESEARCH · 2025",
        badge: "NIT TRICHY RESEARCH PROJECT",
        desc: "Autonomous multi-agent collision avoidance and path optimization using deep reinforcement learning and decentralized coordination at signal-free intersections.",
        image: "/assets/multi-agent-path-planning.png",
        metrics: "Signal-Free Intersections · Decentralized Coordination",
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_attendance",
        title: "Smart Face-Recognition Attendance System",
        category: "COMPUTER VISION · 2024",
        badge: "DEPLOYED & OPERATIONAL",
        desc: "Contactless automated attendance tracking featuring real-time facial anti-spoofing, sub-second matching, and live SQLite database synchronization.",
        image: "/assets/smart-attendance-system.png",
        metrics: "Sub-second Matching · Anti-Spoofing Enabled",
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_water_level",
        title: "IoT-Enabled Water Level Monitor",
        category: "EMBEDDED IOT · 2024",
        badge: "COMMUNITY UTILITY",
        desc: "Automated reservoir telemetry with ultrasonic sensors, dry-run protection, and real-time dashboard alerts saving municipal water.",
        image: "/assets/water-level-system-DS29CMjc.jpg",
        metrics: "99.8% Uptime · Automated Cut-off",
        github: "https://github.com/carl07-gif",
        demo: ""
      }
    ],
    awards: [
      {
        id: "award_niral",
        title: "Top 25 Finalist · Niral Thiruvizha Hackathon",
        issuer: "Govt. of Tamil Nadu & Naan Mudhalvan",
        year: "2025",
        rank: "Top 25 in 1.2L+ Entries",
        desc: "Recognized among over 1.2 Lakh participants statewide for building the Edge AI Animal Intrusion Detection System."
      },
      {
        id: "award_nitt",
        title: "Excellence in AI Research Project",
        issuer: "National Institute of Technology (NIT) Trichy",
        year: "2025",
        rank: "Research Milestone",
        desc: "Awarded for significant contributions to signal-free autonomous multi-agent intersection optimization."
      },
      {
        id: "award_symposium",
        title: "Best Project Award · Tech Symposium",
        issuer: "KRCE & Regional Engineering Forum",
        year: "2024",
        rank: "1st Place Winner",
        desc: "Awarded first place for IoT automated reservoir management and telemetry system."
      }
    ],
    experience: [
      {
        id: "exp_nitt",
        role: "Research Intern",
        company: "National Institute of Technology (NIT) Trichy",
        duration: "Dec 2024 – Present",
        location: "Tiruchirappalli, Tamil Nadu",
        desc: "Leading research on multi-agent reinforcement learning for path planning and deadlock avoidance at signal-free intersections."
      },
      {
        id: "exp_alagappa",
        role: "Research Intern",
        company: "Alagappa University",
        duration: "Jun 2024 – Nov 2024",
        location: "Karaikudi, Tamil Nadu",
        desc: "Worked on computer vision and biomedical signal processing algorithms utilizing deep convolutional neural networks."
      },
      {
        id: "exp_vdart",
        role: "Full Stack Developer Intern",
        company: "VDart Digital",
        duration: "Jan 2024 – May 2024",
        location: "Trichy, Tamil Nadu",
        desc: "Developed full-stack web modules, responsive dashboards, and REST API services for client enterprise platforms."
      }
    ],
    skills: [
      {
        id: "cat_ai",
        category: "Artificial Intelligence & ML",
        items: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "Deep RL", "Scikit-Learn", "Edge AI", "Computer Vision"]
      },
      {
        id: "cat_web",
        category: "Full Stack & Web",
        items: ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "FastAPI", "Tailwind CSS", "HTML5 / CSS3", "REST APIs"]
      },
      {
        id: "cat_cloud",
        category: "Backend, Cloud & DB",
        items: ["Python", "PostgreSQL", "MongoDB", "SQLite", "Firebase Hosting", "Docker", "Git / GitHub", "Linux"]
      },
      {
        id: "cat_iot",
        category: "IoT & Embedded Systems",
        items: ["ESP32", "Arduino", "MQTT", "GSM / GPRS", "Ultrasonic Sensors", "MicroPython", "Telemetry"]
      }
    ]
  };

  // -----------------------------------------------------------
  // 2. Storage Helpers
  // -----------------------------------------------------------
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        saveData(DEFAULT_DATA);
        return DEFAULT_DATA;
      }
      const parsed = JSON.parse(raw);
      // Ensure all fields exist
      return {
        analytics: Object.assign({}, DEFAULT_DATA.analytics, parsed.analytics),
        profile: Object.assign({}, DEFAULT_DATA.profile, parsed.profile),
        projects: parsed.projects && parsed.projects.length ? parsed.projects : DEFAULT_DATA.projects,
        awards: parsed.awards && parsed.awards.length ? parsed.awards : DEFAULT_DATA.awards,
        experience: parsed.experience && parsed.experience.length ? parsed.experience : DEFAULT_DATA.experience,
        skills: parsed.skills && parsed.skills.length ? parsed.skills : DEFAULT_DATA.skills
      };
    } catch (e) {
      console.warn('[Carl CMS] Error loading storage data:', e);
      return DEFAULT_DATA;
    }
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('[Carl CMS] Error saving storage data:', e);
    }
  }

  // -----------------------------------------------------------
  // 3. Analytics Tracking Engine
  // -----------------------------------------------------------
  function trackPageView() {
    const data = loadData();
    const pageName = window.location.pathname.includes('about') ? 'About Page' : 'Home Page';
    const lastVisitKey = 'carl_last_visit_ts';
    const now = Date.now();
    const lastVisit = parseInt(sessionStorage.getItem(lastVisitKey) || '0', 10);

    // Count once per session page visit or at least 15 min apart
    if (now - lastVisit > 15 * 60 * 1000) {
      data.analytics.views = (data.analytics.views || 0) + 1;
      data.analytics.history.unshift({
        type: 'VIEW',
        page: pageName,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' })
      });
      if (data.analytics.history.length > 50) data.analytics.history.pop();
      saveData(data);
      sessionStorage.setItem(lastVisitKey, now.toString());
    }
  }

  function trackResumeDownload() {
    const data = loadData();
    const pageName = window.location.pathname.includes('about') ? 'About Page' : 'Home Page';
    data.analytics.resumeDownloads = (data.analytics.resumeDownloads || 0) + 1;
    data.analytics.history.unshift({
      type: 'RESUME_DOWNLOAD',
      page: pageName,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' })
    });
    if (data.analytics.history.length > 50) data.analytics.history.pop();
    saveData(data);
  }

  // Intercept resume downloads for accurate analytics
  window.addEventListener('carl_resume_downloaded', trackResumeDownload);
  const origDownload = window.executeResumeDownload;
  if (typeof origDownload === 'function') {
    window.executeResumeDownload = function () {
      trackResumeDownload();
      origDownload.apply(this, arguments);
    };
  }

  // -----------------------------------------------------------
  // 4. Secret Double-Tap Logo Trigger
  // -----------------------------------------------------------
  function initDoubleTapTrigger() {
    let lastTapTime = 0;
    const logoSelectors = [
      '.nav-logo', '.brand-logo', '.logo-img', '.logo-icon-wrap',
      '.footer-logo-row', '.trust-avatars', 'header .logo-row', 'header .logo-container'
    ];

    function handleDoubleTap(e) {
      const now = Date.now();
      const diff = now - lastTapTime;
      if (diff > 40 && diff < 380) {
        e.preventDefault();
        e.stopPropagation();
        openAuthModal();
        lastTapTime = 0;
      } else {
        lastTapTime = now;
      }
    }

    // Attach to all logo targets
    document.querySelectorAll(logoSelectors.join(',')).forEach((el) => {
      el.style.cursor = 'pointer';
      el.setAttribute('title', 'Naveen Carlin A');
      el.addEventListener('touchend', handleDoubleTap, { passive: false });
      el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openAuthModal();
      });
    });

    // Also support keyboard shortcut for convenience: Ctrl + Shift + 7
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === '7' || e.key === '&')) {
        e.preventDefault();
        openAuthModal();
      }
    });
  }

  // -----------------------------------------------------------
  // 5. Auth Modal (Password: 7777)
  // -----------------------------------------------------------
  function openAuthModal() {
    let modal = document.getElementById('carlAuthModal');
    if (!modal) {
      modal = createAuthModal();
      document.body.appendChild(modal);
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    const input = document.getElementById('carlPinInput');
    const msg = document.getElementById('carlPinMsg');
    if (msg) msg.textContent = '';
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 150);
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('carlAuthModal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function createAuthModal() {
    const wrap = document.createElement('div');
    wrap.id = 'carlAuthModal';
    wrap.className = 'carl-cms-modal-overlay';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.innerHTML = `
      <div class="carl-cms-auth-card">
        <button class="carl-cms-close-btn" id="closeCarlAuthBtn">&times;</button>
        <div class="carl-cms-auth-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span>CARL OS // RESTRICTED ACCESS</span>
        </div>
        <h3 class="carl-cms-auth-title">Admin Command Center</h3>
        <p class="carl-cms-auth-desc">Enter master security password to access live analytics, edit site content, and manage projects.</p>
        
        <form id="carlAuthForm" onsubmit="event.preventDefault();">
          <div class="carl-pin-box">
            <input type="password" id="carlPinInput" class="carl-cms-input carl-pin-input" maxlength="10" placeholder="••••" autocomplete="off" />
          </div>
          <div class="carl-cms-status-msg" id="carlPinMsg"></div>
          <button type="submit" class="carl-cms-btn-primary" id="carlPinSubmitBtn">
            <span>Unlock Dashboard</span> &rarr;
          </button>
        </form>
      </div>
    `;

    wrap.querySelector('#closeCarlAuthBtn').addEventListener('click', closeAuthModal);
    wrap.addEventListener('click', (e) => {
      if (e.target === wrap) closeAuthModal();
    });

    const form = wrap.querySelector('#carlAuthForm');
    form.addEventListener('submit', () => {
      const input = document.getElementById('carlPinInput');
      const msg = document.getElementById('carlPinMsg');
      const card = wrap.querySelector('.carl-cms-auth-card');
      const val = input.value.trim();

      if (val === MASTER_PASSWORD) {
        msg.className = 'carl-cms-status-msg success';
        msg.textContent = '✓ Access Authorized! Opening dashboard...';
        input.blur();
        setTimeout(() => {
          closeAuthModal();
          openAdminPanel();
        }, 500);
      } else {
        msg.className = 'carl-cms-status-msg error';
        msg.textContent = 'Access Denied: Incorrect Password';
        card.classList.add('carl-shake');
        setTimeout(() => card.classList.remove('carl-shake'), 400);
        input.value = '';
        input.focus();
      }
    });

    return wrap;
  }

  // -----------------------------------------------------------
  // 6. Admin Panel Dashboard Interface
  // -----------------------------------------------------------
  let currentActiveTab = 'analytics';

  function openAdminPanel() {
    let panel = document.getElementById('carlAdminPanel');
    if (!panel) {
      panel = createAdminPanel();
      document.body.appendChild(panel);
    }
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderTabContent(currentActiveTab);
  }

  function closeAdminPanel() {
    const panel = document.getElementById('carlAdminPanel');
    if (panel) {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  function createAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'carlAdminPanel';
    panel.className = 'carl-admin-overlay';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <div class="carl-admin-container">
        
        <!-- Header -->
        <header class="carl-admin-header">
          <div class="carl-admin-branding">
            <div class="carl-admin-logo-dot"></div>
            <div>
              <div class="carl-admin-title">NAVEEN CARLIN // ADMIN CMS</div>
              <div class="carl-admin-subtitle">LIVE SYSTEM CONTROL &bull; PASSWORD PROTECTED</div>
            </div>
          </div>
          <div class="carl-admin-actions">
            <button class="carl-btn-subtle" id="carlEmailReportBtn" title="Send report to naveencarlin07@gmail.com">
              <i class="fa-regular fa-paper-plane"></i> Email Stats
            </button>
            <button class="carl-btn-close-admin" id="closeCarlAdminBtn" aria-label="Close Admin">&times;</button>
          </div>
        </header>

        <!-- Navigation Tabs -->
        <nav class="carl-admin-nav">
          <button class="carl-tab-btn active" data-tab="analytics"><i class="fa-solid fa-chart-line"></i> Analytics</button>
          <button class="carl-tab-btn" data-tab="projects"><i class="fa-solid fa-code-fork"></i> Projects</button>
          <button class="carl-tab-btn" data-tab="awards"><i class="fa-solid fa-trophy"></i> Awards</button>
          <button class="carl-tab-btn" data-tab="experience"><i class="fa-solid fa-briefcase"></i> Experience</button>
          <button class="carl-tab-btn" data-tab="skills"><i class="fa-solid fa-layer-group"></i> Skills</button>
          <button class="carl-tab-btn" data-tab="profile"><i class="fa-solid fa-id-badge"></i> About & Bio</button>
          <button class="carl-tab-btn" data-tab="backup"><i class="fa-solid fa-database"></i> Backup & Sync</button>
        </nav>

        <!-- Main Body -->
        <main class="carl-admin-body" id="carlAdminBody">
          <!-- Dynamically Injected by renderTabContent() -->
        </main>

      </div>
    `;

    // Tab switcher
    panel.querySelectorAll('.carl-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.carl-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveTab = btn.getAttribute('data-tab');
        renderTabContent(currentActiveTab);
      });
    });

    panel.querySelector('#closeCarlAdminBtn').addEventListener('click', closeAdminPanel);
    panel.querySelector('#carlEmailReportBtn').addEventListener('click', sendEmailReport);

    return panel;
  }

  function sendEmailReport() {
    const data = loadData();
    const subject = `Portfolio Stats Report - ${new Date().toLocaleDateString()}`;
    const body = `Hi Naveen,

Here is your live Portfolio Analytics Report:

📊 Total Views: ${data.analytics.views || 0}
📥 Resume Downloads: ${data.analytics.resumeDownloads || 0}
⚡ Conversion Rate: ${data.analytics.views ? ((data.analytics.resumeDownloads / data.analytics.views) * 100).toFixed(1) : 0}%

Recent Activity (Last 10 Events):
${data.analytics.history.slice(0, 10).map((h, i) => `${i + 1}. [${h.type}] on ${h.page} at ${h.time} (${h.date})`).join('\n') || 'No recent events recorded.'}

----------------------------------------
Admin Management: Double-tap logo on https://carl-portfolio-77777.web.app (PIN: 7777)
`;
    window.location.href = `mailto:naveencarlin07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // -----------------------------------------------------------
  // 7. Tab Renderers
  // -----------------------------------------------------------
  function renderTabContent(tab) {
    const container = document.getElementById('carlAdminBody');
    if (!container) return;
    const data = loadData();

    switch (tab) {
      case 'analytics':
        renderAnalyticsTab(container, data);
        break;
      case 'projects':
        renderProjectsTab(container, data);
        break;
      case 'awards':
        renderAwardsTab(container, data);
        break;
      case 'experience':
        renderExperienceTab(container, data);
        break;
      case 'skills':
        renderSkillsTab(container, data);
        break;
      case 'profile':
        renderProfileTab(container, data);
        break;
      case 'backup':
        renderBackupTab(container, data);
        break;
      default:
        renderAnalyticsTab(container, data);
    }
  }

  // TAB: Analytics
  function renderAnalyticsTab(el, data) {
    const views = data.analytics.views || 0;
    const downloads = data.analytics.resumeDownloads || 0;
    const convRate = views > 0 ? ((downloads / views) * 100).toFixed(1) : '0.0';

    el.innerHTML = `
      <div class="carl-kpi-grid">
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon"><i class="fa-solid fa-eye"></i></div>
          <div class="carl-kpi-val">${views}</div>
          <div class="carl-kpi-label">TOTAL SITE VIEWS</div>
        </div>
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon highlight"><i class="fa-solid fa-file-arrow-down"></i></div>
          <div class="carl-kpi-val highlight">${downloads}</div>
          <div class="carl-kpi-label">RESUME DOWNLOADS</div>
        </div>
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
          <div class="carl-kpi-val">${convRate}%</div>
          <div class="carl-kpi-label">DOWNLOAD CONVERSION</div>
        </div>
      </div>

      <div class="carl-card-box">
        <div class="carl-card-header">
          <h4 class="carl-card-title"><i class="fa-solid fa-clock-rotate-left"></i> Recent Visitor & Download Log</h4>
          <button class="carl-btn-subtle" id="carlResetAnalyticsBtn"><i class="fa-solid fa-trash-can"></i> Reset Counts</button>
        </div>
        <div class="carl-table-wrap">
          <table class="carl-table">
            <thead>
              <tr>
                <th>Event Type</th>
                <th>Page</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${(data.analytics.history && data.analytics.history.length) ? data.analytics.history.map(item => `
                <tr>
                  <td>
                    <span class="carl-badge ${item.type === 'RESUME_DOWNLOAD' ? 'highlight' : 'normal'}">
                      ${item.type === 'RESUME_DOWNLOAD' ? '📥 Resume Download' : '👁 Site View'}
                    </span>
                  </td>
                  <td>${item.page}</td>
                  <td>${item.time}</td>
                  <td>${item.date}</td>
                </tr>
              `).join('') : `
                <tr>
                  <td colspan="4" style="text-align: center; color: rgba(255,255,255,0.4); padding: 24px;">No visitor activity recorded yet.</td>
                </tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    `;

    el.querySelector('#carlResetAnalyticsBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset analytics counts to 0?')) {
        data.analytics.views = 0;
        data.analytics.resumeDownloads = 0;
        data.analytics.history = [];
        saveData(data);
        renderTabContent('analytics');
      }
    });
  }

  // TAB: Projects
  function renderProjectsTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Manage Projects (${data.projects.length})</h3>
          <p class="carl-section-desc">Add new projects, upload screenshots, rewrite descriptions, and update GitHub links.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddNewProjectBtn">
          <i class="fa-solid fa-plus"></i> Add New Project
        </button>
      </div>

      <div class="carl-items-grid" id="carlProjectsList">
        ${data.projects.map((proj, idx) => `
          <div class="carl-item-card" data-id="${proj.id}">
            <div class="carl-item-thumb-wrap">
              <img src="${proj.image || '/assets/animal-intrusion-system.jpg'}" alt="${proj.title}" class="carl-item-thumb" onerror="this.src='/assets/logo.svg'" />
              <span class="carl-item-badge">${proj.category || 'PROJECT'}</span>
            </div>
            <div class="carl-item-content">
              <h4 class="carl-item-title">${proj.title}</h4>
              <p class="carl-item-desc">${proj.desc}</p>
              <div class="carl-item-meta">
                ${proj.github ? `<a href="${proj.github}" target="_blank" class="carl-item-link"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}
                ${proj.metrics ? `<span class="carl-item-stat">${proj.metrics}</span>` : ''}
              </div>
            </div>
            <div class="carl-item-actions">
              <button class="carl-btn-icon edit-proj" data-idx="${idx}" title="Edit Project"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="carl-btn-icon delete-proj danger" data-idx="${idx}" title="Delete Project"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Project Edit Modal -->
      <div class="carl-submodal-overlay" id="carlProjectModal" style="display:none;">
        <div class="carl-submodal-card">
          <div class="carl-submodal-header">
            <h4 id="carlProjModalHeading">Add / Edit Project</h4>
            <button class="carl-cms-close-btn" id="closeProjModalBtn">&times;</button>
          </div>
          <form id="carlProjectForm" class="carl-form">
            <input type="hidden" id="projFormIdx" value="-1" />
            <div class="carl-form-group">
              <label>Project Title *</label>
              <input type="text" id="projFormTitle" class="carl-cms-input" required placeholder="e.g. Autonomous AI Drone" />
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>Category / Tag</label>
                <input type="text" id="projFormCategory" class="carl-cms-input" placeholder="e.g. EDGE AI · 2026" />
              </div>
              <div class="carl-form-group">
                <label>Highlight / Badge</label>
                <input type="text" id="projFormBadge" class="carl-cms-input" placeholder="e.g. 1st Place Hackathon Winner" />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Project Picture / Image</label>
              <div style="display:flex; gap:10px; align-items:center;">
                <input type="text" id="projFormImageUrl" class="carl-cms-input" placeholder="Image URL or upload below" />
                <label class="carl-file-upload-btn">
                  Upload File <input type="file" id="projFormImageFile" accept="image/*" style="display:none;" />
                </label>
              </div>
              <div id="projImagePreviewWrap" style="margin-top:8px; display:none;">
                <img id="projImagePreview" src="" alt="Preview" style="max-height:80px; border-radius:6px; border:1px solid rgba(255,255,255,0.2);" />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Description *</label>
              <textarea id="projFormDesc" class="carl-cms-input carl-textarea" rows="3" required placeholder="Detail the problem, architecture, stack, and impact..."></textarea>
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>GitHub Repository URL</label>
                <input type="url" id="projFormGithub" class="carl-cms-input" placeholder="https://github.com/carl07-gif/..." />
              </div>
              <div class="carl-form-group">
                <label>Live Demo URL (Optional)</label>
                <input type="url" id="projFormDemo" class="carl-cms-input" placeholder="https://..." />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Key Metrics / Stats (Optional)</label>
              <input type="text" id="projFormMetrics" class="carl-cms-input" placeholder="e.g. 96% Accuracy · <50ms Latency" />
            </div>
            <div class="carl-form-actions">
              <button type="button" class="carl-btn-subtle" id="cancelProjModalBtn">Cancel</button>
              <button type="submit" class="carl-btn-primary">Save Project</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = el.querySelector('#carlProjectModal');
    const form = el.querySelector('#carlProjectForm');
    const imageInput = el.querySelector('#projFormImageUrl');
    const fileInput = el.querySelector('#projFormImageFile');
    const previewWrap = el.querySelector('#projImagePreviewWrap');
    const preview = el.querySelector('#projImagePreview');

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => {
          imageInput.value = re.target.result;
          preview.src = re.target.result;
          previewWrap.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });

    el.querySelector('#carlAddNewProjectBtn').addEventListener('click', () => {
      form.reset();
      el.querySelector('#projFormIdx').value = '-1';
      el.querySelector('#carlProjModalHeading').textContent = 'Add New Project';
      previewWrap.style.display = 'none';
      modal.style.display = 'flex';
    });

    el.querySelector('#closeProjModalBtn').addEventListener('click', () => modal.style.display = 'none');
    el.querySelector('#cancelProjModalBtn').addEventListener('click', () => modal.style.display = 'none');

    // Edit Project
    el.querySelectorAll('.edit-proj').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const p = data.projects[idx];
        if (!p) return;
        el.querySelector('#projFormIdx').value = idx;
        el.querySelector('#projFormTitle').value = p.title || '';
        el.querySelector('#projFormCategory').value = p.category || '';
        el.querySelector('#projFormBadge').value = p.badge || '';
        el.querySelector('#projFormImageUrl').value = p.image || '';
        el.querySelector('#projFormDesc').value = p.desc || '';
        el.querySelector('#projFormGithub').value = p.github || '';
        el.querySelector('#projFormDemo').value = p.demo || '';
        el.querySelector('#projFormMetrics').value = p.metrics || '';
        if (p.image) {
          preview.src = p.image;
          previewWrap.style.display = 'block';
        } else {
          previewWrap.style.display = 'none';
        }
        el.querySelector('#carlProjModalHeading').textContent = 'Edit Project';
        modal.style.display = 'flex';
      });
    });

    // Delete Project
    el.querySelectorAll('.delete-proj').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (confirm(`Delete project "${data.projects[idx].title}"?`)) {
          data.projects.splice(idx, 1);
          saveData(data);
          syncToDOM();
          renderTabContent('projects');
        }
      });
    });

    // Save Project Form
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(el.querySelector('#projFormIdx').value, 10);
      const newProj = {
        id: idx >= 0 ? data.projects[idx].id : `proj_${Date.now()}`,
        title: el.querySelector('#projFormTitle').value.trim(),
        category: el.querySelector('#projFormCategory').value.trim(),
        badge: el.querySelector('#projFormBadge').value.trim(),
        image: el.querySelector('#projFormImageUrl').value.trim() || '/assets/animal-intrusion-system.jpg',
        desc: el.querySelector('#projFormDesc').value.trim(),
        github: el.querySelector('#projFormGithub').value.trim(),
        demo: el.querySelector('#projFormDemo').value.trim(),
        metrics: el.querySelector('#projFormMetrics').value.trim()
      };

      if (idx >= 0) {
        data.projects[idx] = newProj;
      } else {
        data.projects.unshift(newProj);
      }

      saveData(data);
      syncToDOM();
      modal.style.display = 'none';
      renderTabContent('projects');
    });
  }

  // TAB: Awards
  function renderAwardsTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Manage Awards &amp; Honors (${data.awards.length})</h3>
          <p class="carl-section-desc">Add, rewrite, or remove hackathons, research honors, and awards.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddAwardBtn">
          <i class="fa-solid fa-plus"></i> Add New Award
        </button>
      </div>

      <div class="carl-items-grid">
        ${data.awards.map((awd, idx) => `
          <div class="carl-item-card">
            <div class="carl-item-content">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                <span class="carl-item-badge">${awd.year || '2025'} &bull; ${awd.rank || 'Honored'}</span>
                <span style="font-size:0.8rem; color:#38bdf8; font-weight:600;">${awd.issuer || ''}</span>
              </div>
              <h4 class="carl-item-title">${awd.title}</h4>
              <p class="carl-item-desc">${awd.desc}</p>
            </div>
            <div class="carl-item-actions">
              <button class="carl-btn-icon edit-awd" data-idx="${idx}"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="carl-btn-icon delete-awd danger" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Award Edit Modal -->
      <div class="carl-submodal-overlay" id="carlAwardModal" style="display:none;">
        <div class="carl-submodal-card">
          <div class="carl-submodal-header">
            <h4 id="carlAwdModalHeading">Add / Edit Award</h4>
            <button class="carl-cms-close-btn" id="closeAwdModalBtn">&times;</button>
          </div>
          <form id="carlAwardForm" class="carl-form">
            <input type="hidden" id="awdFormIdx" value="-1" />
            <div class="carl-form-group">
              <label>Award Title *</label>
              <input type="text" id="awdFormTitle" class="carl-cms-input" required placeholder="e.g. Top 25 Finalist · Niral Thiruvizha" />
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>Issuing Organization *</label>
                <input type="text" id="awdFormIssuer" class="carl-cms-input" required placeholder="e.g. Govt. of Tamil Nadu" />
              </div>
              <div class="carl-form-group">
                <label>Year / Date</label>
                <input type="text" id="awdFormYear" class="carl-cms-input" placeholder="2025" />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Rank / Distinction</label>
              <input type="text" id="awdFormRank" class="carl-cms-input" placeholder="e.g. Top 25 / 1.2L+ Entries" />
            </div>
            <div class="carl-form-group">
              <label>Description / Details</label>
              <textarea id="awdFormDesc" class="carl-cms-input carl-textarea" rows="3" placeholder="Context about the event, achievement, or project recognized..."></textarea>
            </div>
            <div class="carl-form-actions">
              <button type="button" class="carl-btn-subtle" id="cancelAwdModalBtn">Cancel</button>
              <button type="submit" class="carl-btn-primary">Save Award</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = el.querySelector('#carlAwardModal');
    const form = el.querySelector('#carlAwardForm');

    el.querySelector('#carlAddAwardBtn').addEventListener('click', () => {
      form.reset();
      el.querySelector('#awdFormIdx').value = '-1';
      el.querySelector('#carlAwdModalHeading').textContent = 'Add New Award';
      modal.style.display = 'flex';
    });

    el.querySelector('#closeAwdModalBtn').addEventListener('click', () => modal.style.display = 'none');
    el.querySelector('#cancelAwdModalBtn').addEventListener('click', () => modal.style.display = 'none');

    el.querySelectorAll('.edit-awd').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const a = data.awards[idx];
        if (!a) return;
        el.querySelector('#awdFormIdx').value = idx;
        el.querySelector('#awdFormTitle').value = a.title || '';
        el.querySelector('#awdFormIssuer').value = a.issuer || '';
        el.querySelector('#awdFormYear').value = a.year || '';
        el.querySelector('#awdFormRank').value = a.rank || '';
        el.querySelector('#awdFormDesc').value = a.desc || '';
        el.querySelector('#carlAwdModalHeading').textContent = 'Edit Award';
        modal.style.display = 'flex';
      });
    });

    el.querySelectorAll('.delete-awd').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (confirm(`Delete award "${data.awards[idx].title}"?`)) {
          data.awards.splice(idx, 1);
          saveData(data);
          syncToDOM();
          renderTabContent('awards');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(el.querySelector('#awdFormIdx').value, 10);
      const newAwd = {
        id: idx >= 0 ? data.awards[idx].id : `awd_${Date.now()}`,
        title: el.querySelector('#awdFormTitle').value.trim(),
        issuer: el.querySelector('#awdFormIssuer').value.trim(),
        year: el.querySelector('#awdFormYear').value.trim(),
        rank: el.querySelector('#awdFormRank').value.trim(),
        desc: el.querySelector('#awdFormDesc').value.trim()
      };

      if (idx >= 0) {
        data.awards[idx] = newAwd;
      } else {
        data.awards.unshift(newAwd);
      }

      saveData(data);
      syncToDOM();
      modal.style.display = 'none';
      renderTabContent('awards');
    });
  }

  // TAB: Experience
  function renderExperienceTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Manage Experience (${data.experience.length})</h3>
          <p class="carl-section-desc">Add internships, research fellowships, and engineering roles.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddExpBtn">
          <i class="fa-solid fa-plus"></i> Add Experience
        </button>
      </div>

      <div class="carl-items-grid">
        ${data.experience.map((exp, idx) => `
          <div class="carl-item-card">
            <div class="carl-item-content">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
                <span class="carl-item-badge">${exp.duration || ''}</span>
                <span style="font-size:0.8rem; color:#a855f7; font-weight:600;">${exp.location || ''}</span>
              </div>
              <h4 class="carl-item-title">${exp.role} <span style="font-weight:400; color:rgba(255,255,255,0.7);">&bull; ${exp.company}</span></h4>
              <p class="carl-item-desc">${exp.desc}</p>
            </div>
            <div class="carl-item-actions">
              <button class="carl-btn-icon edit-exp" data-idx="${idx}"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="carl-btn-icon delete-exp danger" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Experience Modal -->
      <div class="carl-submodal-overlay" id="carlExpModal" style="display:none;">
        <div class="carl-submodal-card">
          <div class="carl-submodal-header">
            <h4 id="carlExpModalHeading">Add / Edit Experience</h4>
            <button class="carl-cms-close-btn" id="closeExpModalBtn">&times;</button>
          </div>
          <form id="carlExpForm" class="carl-form">
            <input type="hidden" id="expFormIdx" value="-1" />
            <div class="carl-form-group">
              <label>Role / Position Title *</label>
              <input type="text" id="expFormRole" class="carl-cms-input" required placeholder="e.g. Research Intern" />
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>Company / University *</label>
                <input type="text" id="expFormCompany" class="carl-cms-input" required placeholder="e.g. NIT Trichy" />
              </div>
              <div class="carl-form-group">
                <label>Duration</label>
                <input type="text" id="expFormDuration" class="carl-cms-input" placeholder="e.g. Dec 2024 – Present" />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Location</label>
              <input type="text" id="expFormLocation" class="carl-cms-input" placeholder="e.g. Tiruchirappalli, Tamil Nadu" />
            </div>
            <div class="carl-form-group">
              <label>Key Responsibilities &amp; Impact</label>
              <textarea id="expFormDesc" class="carl-cms-input carl-textarea" rows="3" placeholder="Describe core tasks, technologies used, and outcomes..."></textarea>
            </div>
            <div class="carl-form-actions">
              <button type="button" class="carl-btn-subtle" id="cancelExpModalBtn">Cancel</button>
              <button type="submit" class="carl-btn-primary">Save Experience</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = el.querySelector('#carlExpModal');
    const form = el.querySelector('#carlExpForm');

    el.querySelector('#carlAddExpBtn').addEventListener('click', () => {
      form.reset();
      el.querySelector('#expFormIdx').value = '-1';
      el.querySelector('#carlExpModalHeading').textContent = 'Add Experience';
      modal.style.display = 'flex';
    });

    el.querySelector('#closeExpModalBtn').addEventListener('click', () => modal.style.display = 'none');
    el.querySelector('#cancelExpModalBtn').addEventListener('click', () => modal.style.display = 'none');

    el.querySelectorAll('.edit-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const exp = data.experience[idx];
        if (!exp) return;
        el.querySelector('#expFormIdx').value = idx;
        el.querySelector('#expFormRole').value = exp.role || '';
        el.querySelector('#expFormCompany').value = exp.company || '';
        el.querySelector('#expFormDuration').value = exp.duration || '';
        el.querySelector('#expFormLocation').value = exp.location || '';
        el.querySelector('#expFormDesc').value = exp.desc || '';
        el.querySelector('#carlExpModalHeading').textContent = 'Edit Experience';
        modal.style.display = 'flex';
      });
    });

    el.querySelectorAll('.delete-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (confirm(`Delete experience "${data.experience[idx].role}"?`)) {
          data.experience.splice(idx, 1);
          saveData(data);
          syncToDOM();
          renderTabContent('experience');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(el.querySelector('#expFormIdx').value, 10);
      const newExp = {
        id: idx >= 0 ? data.experience[idx].id : `exp_${Date.now()}`,
        role: el.querySelector('#expFormRole').value.trim(),
        company: el.querySelector('#expFormCompany').value.trim(),
        duration: el.querySelector('#expFormDuration').value.trim(),
        location: el.querySelector('#expFormLocation').value.trim(),
        desc: el.querySelector('#expFormDesc').value.trim()
      };

      if (idx >= 0) {
        data.experience[idx] = newExp;
      } else {
        data.experience.unshift(newExp);
      }

      saveData(data);
      syncToDOM();
      modal.style.display = 'none';
      renderTabContent('experience');
    });
  }

  // TAB: Skills
  function renderSkillsTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Manage Skills &amp; Tech Stack</h3>
          <p class="carl-section-desc">Add or remove skills across your core engineering categories.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddSkillCatBtn">
          <i class="fa-solid fa-plus"></i> Add Category
        </button>
      </div>

      <div class="carl-skill-categories">
        ${data.skills.map((cat, cIdx) => `
          <div class="carl-skill-cat-card">
            <div class="carl-skill-cat-header">
              <h4 class="carl-skill-cat-title">${cat.category}</h4>
              <button class="carl-btn-icon delete-cat danger" data-cidx="${cIdx}" title="Delete Category"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="carl-skill-tags-wrap">
              ${cat.items.map((skill, sIdx) => `
                <span class="carl-skill-tag">
                  ${skill}
                  <button class="carl-tag-del" data-cidx="${cIdx}" data-sidx="${sIdx}">&times;</button>
                </span>
              `).join('')}
            </div>
            <div class="carl-add-skill-row">
              <input type="text" class="carl-cms-input skill-new-input" placeholder="New skill (e.g. Next.js)..." />
              <button class="carl-btn-subtle add-skill-btn" data-cidx="${cIdx}"><i class="fa-solid fa-plus"></i> Add</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add new skill item to category
    el.querySelectorAll('.add-skill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cIdx = parseInt(btn.getAttribute('data-cidx'), 10);
        const card = btn.closest('.carl-skill-cat-card');
        const input = card.querySelector('.skill-new-input');
        const val = input.value.trim();
        if (!val) return;
        data.skills[cIdx].items.push(val);
        saveData(data);
        syncToDOM();
        renderTabContent('skills');
      });
    });

    // Delete individual skill tag
    el.querySelectorAll('.carl-tag-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const cIdx = parseInt(btn.getAttribute('data-cidx'), 10);
        const sIdx = parseInt(btn.getAttribute('data-sidx'), 10);
        data.skills[cIdx].items.splice(sIdx, 1);
        saveData(data);
        syncToDOM();
        renderTabContent('skills');
      });
    });

    // Delete whole category
    el.querySelectorAll('.delete-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        const cIdx = parseInt(btn.getAttribute('data-cidx'), 10);
        if (confirm(`Delete category "${data.skills[cIdx].category}"?`)) {
          data.skills.splice(cIdx, 1);
          saveData(data);
          syncToDOM();
          renderTabContent('skills');
        }
      });
    });

    // Add new category
    el.querySelector('#carlAddSkillCatBtn').addEventListener('click', () => {
      const name = prompt('Enter new category name (e.g. Cloud & DevOps):');
      if (name && name.trim()) {
        data.skills.push({
          id: `cat_${Date.now()}`,
          category: name.trim(),
          items: []
        });
        saveData(data);
        syncToDOM();
        renderTabContent('skills');
      }
    });
  }

  // TAB: Profile & About
  function renderProfileTab(el, data) {
    const p = data.profile;
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Site Identity &amp; Bio Information</h3>
          <p class="carl-section-desc">Rewrite your name, headline, typewriter phrases, bio summary, and status.</p>
        </div>
      </div>

      <form id="carlProfileForm" class="carl-form" style="max-width: 680px;">
        <div class="carl-form-group">
          <label>Display Headline Name</label>
          <input type="text" id="profFormName" class="carl-cms-input" value="${p.name || ''}" />
        </div>
        <div class="carl-form-group">
          <label>Hero Subtitle / Tagline</label>
          <input type="text" id="profFormSubtitle" class="carl-cms-input" value="${p.subtitle || ''}" />
        </div>
        <div class="carl-form-group">
          <label>Typewriter Rotating Phrases (one per line)</label>
          <textarea id="profFormTypewriter" class="carl-cms-input carl-textarea" rows="4">${(p.typewriterPhrases || []).join('\n')}</textarea>
        </div>
        <div class="carl-form-group">
          <label>About Bio Description</label>
          <textarea id="profFormBio" class="carl-cms-input carl-textarea" rows="4">${p.bio || ''}</textarea>
        </div>
        <div class="carl-form-row">
          <div class="carl-form-group">
            <label>Availability Status Pill</label>
            <input type="text" id="profFormStatus" class="carl-cms-input" value="${p.statusText || ''}" />
          </div>
          <div class="carl-form-group">
            <label>Location</label>
            <input type="text" id="profFormLocation" class="carl-cms-input" value="${p.location || ''}" />
          </div>
        </div>
        <div class="carl-form-row">
          <div class="carl-form-group">
            <label>Contact Email</label>
            <input type="email" id="profFormEmail" class="carl-cms-input" value="${p.email || ''}" />
          </div>
          <div class="carl-form-group">
            <label>GitHub URL</label>
            <input type="url" id="profFormGithub" class="carl-cms-input" value="${p.github || ''}" />
          </div>
        </div>

        <div style="margin-top:16px;">
          <button type="submit" class="carl-btn-primary">Save Profile Changes</button>
          <span id="profSaveMsg" style="margin-left: 12px; color: #00ff88; display: none;">✓ Saved!</span>
        </div>
      </form>
    `;

    el.querySelector('#carlProfileForm').addEventListener('submit', (e) => {
      e.preventDefault();
      data.profile.name = el.querySelector('#profFormName').value.trim();
      data.profile.subtitle = el.querySelector('#profFormSubtitle').value.trim();
      data.profile.typewriterPhrases = el.querySelector('#profFormTypewriter').value
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean);
      data.profile.bio = el.querySelector('#profFormBio').value.trim();
      data.profile.statusText = el.querySelector('#profFormStatus').value.trim();
      data.profile.location = el.querySelector('#profFormLocation').value.trim();
      data.profile.email = el.querySelector('#profFormEmail').value.trim();
      data.profile.github = el.querySelector('#profFormGithub').value.trim();

      saveData(data);
      syncToDOM();

      const msg = el.querySelector('#profSaveMsg');
      msg.style.display = 'inline';
      setTimeout(() => msg.style.display = 'none', 2000);
    });
  }

  // TAB: Backup & Sync
  function renderBackupTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Data Backup &amp; Portability</h3>
          <p class="carl-section-desc">Export your custom portfolio CMS data to a JSON file, or restore from a previous backup.</p>
        </div>
      </div>

      <div class="carl-kpi-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
        <div class="carl-card-box">
          <h4 class="carl-card-title"><i class="fa-solid fa-download"></i> Export CMS Backup</h4>
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin: 10px 0 16px;">Download a complete snapshot of all projects, awards, experience, skills, and analytics as a JSON file.</p>
          <button class="carl-btn-primary" id="carlExportDataBtn"><i class="fa-solid fa-file-export"></i> Download Backup (.json)</button>
        </div>

        <div class="carl-card-box">
          <h4 class="carl-card-title"><i class="fa-solid fa-upload"></i> Restore from Backup</h4>
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin: 10px 0 16px;">Upload a previously saved JSON backup to sync your data instantly to any device.</p>
          <label class="carl-btn-subtle" style="cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-file-import"></i> Choose Backup JSON
            <input type="file" id="carlImportFileInput" accept=".json" style="display:none;" />
          </label>
        </div>

        <div class="carl-card-box">
          <h4 class="carl-card-title" style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> Reset to Defaults</h4>
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin: 10px 0 16px;">Restore original built-in projects, experience, and awards. Warning: this clears local edits.</p>
          <button class="carl-btn-subtle danger" id="carlResetDefaultsBtn"><i class="fa-solid fa-rotate-left"></i> Restore Original Data</button>
        </div>
      </div>
    `;

    // Export JSON
    el.querySelector('#carlExportDataBtn').addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `naveen_portfolio_cms_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    // Import JSON
    el.querySelector('#carlImportFileInput').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (re) => {
        try {
          const imported = JSON.parse(re.target.result);
          if (imported && (imported.projects || imported.awards || imported.experience)) {
            saveData(imported);
            syncToDOM();
            alert('✓ Backup successfully restored!');
            renderTabContent('backup');
          } else {
            alert('Invalid backup file format.');
          }
        } catch (err) {
          alert('Error reading JSON backup file: ' + err.message);
        }
      };
      reader.readAsText(file);
    });

    // Reset Defaults
    el.querySelector('#carlResetDefaultsBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all site data back to factory defaults?')) {
        saveData(DEFAULT_DATA);
        syncToDOM();
        alert('Site data restored to original defaults!');
        renderTabContent('backup');
      }
    });
  }

  // -----------------------------------------------------------
  // 8. Dynamic DOM Synchronization
  // -----------------------------------------------------------
  function syncToDOM() {
    const data = loadData();

    // 1. Sync Headline Name
    if (data.profile.name) {
      document.querySelectorAll('.headline-line.line1, .footer-brand-name, .hero-author-name').forEach(el => {
        el.textContent = data.profile.name;
      });
    }

    // 2. Sync Subtitle & Desc
    if (data.profile.subtitle) {
      document.querySelectorAll('.hero .desc, .footer-brand-bio').forEach(el => {
        el.textContent = data.profile.subtitle;
      });
    }

    // 3. Sync Typewriter Phrases if typewriter active
    if (window.CARL_TYPEWRITER_WORDS && Array.isArray(data.profile.typewriterPhrases)) {
      window.CARL_TYPEWRITER_WORDS = data.profile.typewriterPhrases;
    }

    // 4. Sync Projects Section on About Page
    const bentoGrid = document.querySelector('.proj-bento-grid');
    if (bentoGrid && data.projects && data.projects.length) {
      renderBentoProjects(bentoGrid, data.projects);
    }

    // 5. Sync Awards on About Page
    const awardsGrid = document.querySelector('.awards-grid, .awards-bento-grid');
    if (awardsGrid && data.awards && data.awards.length) {
      renderAwardsGrid(awardsGrid, data.awards);
    }

    // 6. Sync Experience Timeline
    const expContainer = document.querySelector('.experience-timeline, .exp-list');
    if (expContainer && data.experience && data.experience.length) {
      renderExperienceTimeline(expContainer, data.experience);
    }
  }

  function renderBentoProjects(container, projects) {
    if (!projects || !projects.length) return;
    const featured = projects[0];
    const rest = projects.slice(1);

    let html = `
      <!-- Featured Card -->
      <a href="${featured.github || '#projects'}" ${featured.github ? 'target="_blank" rel="noopener"' : ''} class="proj-card proj-card-featured">
        <div class="proj-image-box">
          <div class="proj-overlay-badges">
            <span class="proj-tag-pill">${featured.category || 'FEATURED'}</span>
            <span class="proj-arrow-btn">&#8599;</span>
          </div>
          <div class="proj-real-image-wrap">
            <img src="${featured.image}" alt="${featured.title}" class="proj-real-image" onerror="this.src='/assets/animal-intrusion-system.jpg'" />
          </div>
          <div class="proj-image-gradient-overlay"></div>
        </div>
        <div class="proj-content-box">
          ${featured.badge ? `<div class="proj-sub-badge">&starf; ${featured.badge}</div>` : ''}
          <h3 class="proj-title">${featured.title}</h3>
          <p class="proj-desc">${featured.desc}</p>
          ${featured.metrics ? `
            <div class="proj-metrics-row">
              <span class="proj-metric-chip">${featured.metrics}</span>
            </div>
          ` : ''}
        </div>
      </a>

      <!-- Stacked Cards Column -->
      <div class="proj-stack-col">
        ${rest.slice(0, 3).map(p => `
          <a href="${p.github || '#projects'}" ${p.github ? 'target="_blank" rel="noopener"' : ''} class="proj-card proj-card-sm">
            <div class="proj-image-box">
              <div class="proj-overlay-badges">
                <span class="proj-tag-pill">${p.category || 'PROJECT'}</span>
                <span class="proj-arrow-btn">&#8599;</span>
              </div>
              <img src="${p.image}" alt="${p.title}" class="proj-real-image" onerror="this.src='/assets/multi-agent-path-planning.png'" />
            </div>
            <div class="proj-content-box">
              ${p.badge ? `<div class="proj-sub-badge">&starf; ${p.badge}</div>` : ''}
              <h3 class="proj-title">${p.title}</h3>
              <p class="proj-desc">${p.desc}</p>
            </div>
          </a>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  function renderAwardsGrid(container, awards) {
    if (!awards || !awards.length) return;
    container.innerHTML = awards.map(a => `
      <div class="award-card" style="padding: 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <span style="font-size:0.75rem; color:#38bdf8; font-weight:700; text-transform:uppercase;">${a.issuer}</span>
          <span style="font-size:0.75rem; color:#a855f7; font-weight:700;">${a.year}</span>
        </div>
        <h4 style="font-size:1.1rem; color:#fff; font-weight:700; margin-bottom:6px;">${a.title}</h4>
        <p style="font-size:0.9rem; color:rgba(255,255,255,0.7); line-height:1.5;">${a.desc}</p>
      </div>
    `).join('');
  }

  function renderExperienceTimeline(container, experience) {
    if (!experience || !experience.length) return;
    container.innerHTML = experience.map(exp => `
      <div class="exp-timeline-item" style="margin-bottom: 24px; padding-left: 18px; border-left: 2px solid rgba(56,189,248,0.4);">
        <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 700; margin-bottom: 4px;">${exp.duration} &bull; ${exp.location}</div>
        <h4 style="font-size: 1.15rem; color: #fff; font-weight: 700;">${exp.role} &ndash; <span style="font-weight:400; color:#cbd5e1;">${exp.company}</span></h4>
        <p style="font-size: 0.92rem; color: rgba(255,255,255,0.7); margin-top: 6px; line-height: 1.55;">${exp.desc}</p>
      </div>
    `).join('');
  }

  // -----------------------------------------------------------
  // 9. Startup & Initialization
  // -----------------------------------------------------------
  function init() {
    trackPageView();
    initDoubleTapTrigger();
    syncToDOM();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global controller for debug or external callers
  window.CarlCMS = {
    openAuth: openAuthModal,
    openAdmin: openAdminPanel,
    getData: loadData,
    saveData: saveData,
    syncDOM: syncToDOM,
    trackDownload: trackResumeDownload
  };

})();
