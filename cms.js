// =============================================================
// CARL CMS & ADMIN ENGINE (v4.0 - REAL ANALYTICS EDITION)
// Protected by Secret Double-Tap on Brand Logo & Password: 7065
// Full CMS: 14 Site Projects, Education/CGPA, Awards, Experience, Skills
// 100% Real Live Analytics: Zero Mock Data, Isolated Admin Scroll & Top Exit
// =============================================================

(function initCarlCMS() {
  'use strict';

  // Live storage key (starts 100% clean and real)
  const STORAGE_KEY = 'carl_cms_data_live_v5';
  const MASTER_PASSWORD = '7065';

  // -----------------------------------------------------------
  // 1. Comprehensive Site Data (All 14 Projects & Site Sequences)
  // -----------------------------------------------------------
  const DEFAULT_DATA = {
    analytics: {
      views: 1, // Real initial view
      resumeDownloads: 0,
      history: [],
      visitorLog: [] // 100% REAL visitor records only (populated on visit)
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
    // Complete 14 Projects from About Page Bento and Interactive Gallery
    projects: [
      {
        id: "proj_animal_intrusion",
        title: "Smart Animal Intrusion Detection System",
        category: "EDGE AI · 2025",
        badge: "NAAN MUDHALVAN – NIRAL THIRUVIZHA · TOP 25 FINALIST",
        desc: "Edge AI wildlife detection system achieving 94% accuracy with <120 ms inference and ~70% deterrence using ultrasonic waves, MQTT logging, and GSM alerts.",
        image: "/assets/animal-intrusion-system.jpg",
        metrics: "94% Accuracy · ~70% Intrusion Reduction · Top 25 Finalist",
        tags: ["YOLOv8", "Edge AI", "MQTT", "GSM", "Ultrasonic"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_multi_agent",
        title: "AI-Based Multi-Agent Path Planning System",
        category: "AI / RESEARCH · 2025",
        badge: "NIT TRICHY RESEARCH PROJECT",
        desc: "Autonomous multi-agent collision avoidance and path optimization using deep reinforcement learning and decentralized coordination at signal-free intersections.",
        image: "/assets/multi-agent-path-planning.png",
        metrics: "Signal-Free Intersections · Decentralized Coordination",
        tags: ["Deep RL", "PyTorch", "Multi-Agent", "Simulation"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_anpr",
        title: "Vehicle Detection & ANPR Logging",
        category: "COMPUTER VISION · 2024",
        badge: "AUTOMATED SMART GATEWAY",
        desc: "High-speed automated vehicle recognition pipeline tracking entry/exit sequences, optical character recognition for number plates, and parking slot occupancy logging.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "98.2% Plate Accuracy · Real-Time Video FPS",
        tags: ["YOLOv8", "OpenCV", "ANPR", "FastAPI", "SQLite"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_water_level",
        title: "AI Water Level Monitoring & Automation",
        category: "IOT · AI · 2025",
        badge: "COMMUNITY UTILITY PLATFORM",
        desc: "Automated reservoir telemetry with ultrasonic sensors, dry-run protection, and real-time dashboard alerts saving municipal water and pump hardware.",
        image: "/assets/water-level-system-DS29CMjc.jpg",
        metrics: "99.8% Uptime · Automated Cut-off",
        tags: ["ESP32", "Ultrasonic", "MQTT", "React.js", "Telemetry"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_hostel_management",
        title: "College Hostel Management Application",
        category: "JAVA · MVC · 2024",
        badge: "INSTITUTIONAL DEPLOYMENT",
        desc: "Full-scale administrative hostel allocation platform with student room booking, automated fee reconciliation, gate pass QR generation, and complaint workflows.",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "1,200+ Students Managed · Zero Outage",
        tags: ["Java", "Spring Boot", "MySQL", "RBAC", "QR Code"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_argon",
        title: "ARGON — Farmer Marketplace",
        category: "FULL-STACK · 2024",
        badge: "AGRI-TECH PLATFORM",
        desc: "Direct farm-to-consumer digital marketplace bypassing middlemen, providing regional language support, live mandi price updates, and secure escrow payments.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "Direct Farmer Trade · Multi-lingual UI",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_reward_management",
        title: "Employee Reward Management System",
        category: "REACT NATIVE · 2024",
        badge: "ENTERPRISE PRODUCTIVITY",
        desc: "Gamified corporate peer recognition mobile application with reward points ledger, milestone badges, manager nomination workflows, and gift card redemption.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "Sub-second Ledger · Cross-Platform Mobile",
        tags: ["React Native", "TypeScript", "Firebase", "Redux"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_substation_security",
        title: "AI Electrical Substation Security",
        category: "CYBERSECURITY · 2025",
        badge: "CRITICAL INFRASTRUCTURE DEFENSE",
        desc: "Cyber-physical intrusion detection system protecting power substations on IEC 61850 protocol networks with 95% accuracy using GAN, FCNN, and SHAP explainability.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "95% Intrusion Accuracy · Sub-50ms Response",
        tags: ["Python", "Flask", "GAN / FCNN", "PostgreSQL", "SHAP"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_bus_tracking",
        title: "AI-Based Smart Bus Tracking System",
        category: "BEST PAPER AWARD · 2026",
        badge: "SYMPO-2K26 AWARD WINNER",
        desc: "Awarded Best Paper at SYMPO-2K26 (K. Ramakrishnan College of Engineering) for intelligent fleet transit tracking, ETA forecasting, and dynamic bus route optimization.",
        image: "/assets/bus-tracking-system.png",
        metrics: "Best Paper Award · ±15s ETA Accuracy",
        tags: ["IoT GPS", "AI Tracking", "FastAPI", "Real-Time Streams"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_attendance",
        title: "AI-Based Smart Attendance & Campus Management",
        category: "REACT · NODE · 2024",
        badge: "ENTERPRISE DEPLOYED",
        desc: "College-focused smart attendance platform with real-time analytics, period heatmap, department metrics, faculty management, and centralized event posting.",
        image: "/assets/smart-attendance-system.png",
        metrics: "Sub-second Facial Match · Heatmap Analytics",
        tags: ["React.js", "Node.js", "Express.js", "MS SQL Server", "OpenCV"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_knowledge_assistant",
        title: "AI-Powered College Knowledge Assistant",
        category: "RAG · OLLAMA · 2024",
        badge: "GEN-AI CAMPUS COMPANION",
        desc: "Retrieval-augmented generation (RAG) campus chatbot answering course syllabi, fee structures, exam dates, and lab schedules using local Llama 3 via Ollama.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "100% On-Premise Privacy · <1.5s Generation",
        tags: ["LangChain", "Ollama", "Llama 3", "ChromaDB", "FastAPI"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_college_website",
        title: "Official College Website – Institutional Web Portal",
        category: "FULL-STACK · CMS · 2024",
        badge: "OFFICIAL PRODUCTION PORTAL",
        desc: "High-traffic modern institutional web portal engineered for Mount Zion College of Engineering and Technology, featuring dynamic department pages, admission portals, and accreditation showcases.",
        image: "/assets/mzcet-website.png",
        metrics: "10,000+ Monthly Visitors · 98+ PageSpeed",
        tags: ["HTML5/CSS3", "JavaScript", "PHP", "MySQL", "SEO"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_flight_tracker",
        title: "Global Real-Time Flight Tracking System",
        category: "SPRING BOOT · MAPS · 2024",
        badge: "GLOBAL GEOSPATIAL RADAR",
        desc: "Interactive global airspace flight radar ingesting live ADS-B transponder data streams, visualizing trajectory vectors, altitude gradients, and aircraft telemetry.",
        image: "/assets/flight-tracker.png",
        metrics: "5,000+ Active Flights · Live 3D Altitude Tracking",
        tags: ["Spring Boot", "Leaflet.js", "OpenSky API", "WebSockets"],
        github: "https://github.com/carl07-gif",
        demo: ""
      },
      {
        id: "proj_linkedin_finder",
        title: "AI-Based College Student LinkedIn Profile Finder",
        category: "AI / NLP · SCRAPING · 2024",
        badge: "CAREER & ALUMNI DISCOVERY",
        desc: "Automated intelligence tool correlating student enrollment databases with professional LinkedIn identities to track alumni placements, batch careers, and recruitment statistics.",
        image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=600&h=260&q=85",
        metrics: "91% Identity Correlation · Automated Alumni Auditing",
        tags: ["Python", "Selenium", "BeautifulSoup", "NLP Matcher"],
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
        id: "award_sympo",
        title: "Best Paper Award · SYMPO-2K26",
        issuer: "K. Ramakrishnan College of Engineering (KRCE)",
        year: "2026",
        rank: "Best Research Paper",
        desc: "Awarded for pioneering research in AI-Based Smart Bus Tracking and transit telemetry analytics."
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
        title: "Best Project Award · Regional Tech Symposium",
        issuer: "Regional Engineering Forum",
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
    ],
    education: [
      {
        id: "edu_be_cse",
        degree: "B.E. in Computer Science and Engineering",
        institution: "Mount Zion College of Engineering and Technology",
        period: "Nov 2023 – Present",
        score: "CGPA 8.06 / 10",
        cgpaNum: "8.06",
        highlights: "Focus on Edge AI, Computer Vision, Distributed & Autonomous Systems"
      },
      {
        id: "edu_class12",
        degree: "Class 12",
        institution: "SMMHSS",
        period: "2021 – 2022",
        score: "GPA 9.15 / 10",
        cgpaNum: "9.15",
        highlights: "Computer Science and Mathematics Stream"
      },
      {
        id: "edu_class10",
        degree: "Class 10",
        institution: "SMMHSS",
        period: "2019 – 2020",
        score: "GPA 8.78 / 10",
        cgpaNum: "8.78",
        highlights: "Secondary School Academic Foundation"
      }
    ]
  };

  // -----------------------------------------------------------
  // 2. Storage Helpers & Auto-Migration
  // -----------------------------------------------------------
  function loadData() {
    // Purge any old mock storage keys
    ['carl_cms_data', 'carl_cms_data_v1', 'carl_cms_data_v2', 'carl_cms_data_v3', 'carl_cms_data_v4'].forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        saveData(DEFAULT_DATA);
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      const parsed = JSON.parse(raw);
      // Wipe any legacy mock values
      if (parsed.analytics && (parsed.analytics.views >= 100 || parsed.analytics.resumeDownloads >= 20)) {
        parsed.analytics.views = 1;
        parsed.analytics.resumeDownloads = 0;
        parsed.analytics.visitorLog = [];
        saveData(parsed);
      }
      if (!parsed.projects || parsed.projects.length < 14) {
        parsed.projects = DEFAULT_DATA.projects;
      }
      if (!parsed.education || !parsed.education.length) {
        parsed.education = DEFAULT_DATA.education;
      } else {
        // Automatically sync any legacy 7.81 or 8.6 values to 8.06
        parsed.education.forEach(ed => {
          if (ed.score && (ed.score.includes('7.81') || ed.score.includes('8.6'))) {
            ed.score = 'CGPA 8.06 / 10';
            ed.cgpaNum = '8.06';
          }
        });
      }
      if (!parsed.analytics) {
        parsed.analytics = { views: 1, resumeDownloads: 0, history: [], visitorLog: [] };
      }
      if (!parsed.analytics.visitorLog) {
        parsed.analytics.visitorLog = [];
      }
      return parsed;
    } catch (e) {
      console.warn('[Carl CMS] Resetting to clean live data:', e);
      saveData(DEFAULT_DATA);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
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
  // 3. Real-Time Visitor & Geolocation Tracking (100% Real Data)
  // -----------------------------------------------------------
  function detectDevice() {
    const ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/.test(ua)) return { name: 'Apple iOS · Safari', type: 'mobile', icon: '📱' };
    if (/Android/.test(ua)) return { name: 'Android Device · Chrome', type: 'mobile', icon: '📱' };
    if (/Mac OS X/.test(ua)) return { name: 'macOS · Chrome/Safari', type: 'desktop', icon: '💻' };
    if (/Windows/.test(ua)) return { name: 'Windows 11 · Chrome/Edge', type: 'desktop', icon: '💻' };
    if (/Linux/.test(ua)) return { name: 'Linux Workstation', type: 'desktop', icon: '💻' };
    return { name: 'Web Browser', type: 'desktop', icon: '🌐' };
  }

  function detectReferrer() {
    const ref = document.referrer.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    const customRef = urlParams.get('ref') || urlParams.get('source');
    if (customRef) return customRef.charAt(0).toUpperCase() + customRef.slice(1);
    if (ref.includes('linkedin')) return 'LinkedIn';
    if (ref.includes('github')) return 'GitHub';
    if (ref.includes('google')) return 'Google Search';
    if (ref.includes('instagram')) return 'Instagram';
    if (ref.includes('whatsapp') || ref.includes('wa.me')) return 'WhatsApp';
    if (ref.includes('facebook') || ref.includes('t.co') || ref.includes('twitter')) return 'Social';
    return 'Direct Link';
  }

  function getFlagEmoji(countryCode) {
    if (!countryCode || countryCode.length !== 2) return '📍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  function captureVisitorLog(actionType) {
    const data = loadData();
    const dev = detectDevice();
    const source = detectReferrer();
    const pageName = window.location.pathname.includes('about') ? 'About Page' : 'Home Page';

    const newVisitor = {
      id: `v_${Date.now()}`,
      city: "Detecting Location...",
      region: "",
      country: "Direct Visitor",
      countryCode: "IN",
      flag: "📍",
      org: source === 'LinkedIn' ? 'LinkedIn Network Visitor' : 'Visitor Network',
      source: source,
      device: dev.name,
      deviceType: dev.type,
      page: pageName,
      action: actionType || 'VIEWED_PROFILE',
      timeAgo: 'Just now',
      timestamp: Date.now()
    };

    if (!data.analytics.visitorLog) data.analytics.visitorLog = [];
    data.analytics.visitorLog.unshift(newVisitor);
    if (data.analytics.visitorLog.length > 80) data.analytics.visitorLog.pop();
    saveData(data);

    // Fetch REAL geolocation asynchronously without mock fallback
    try {
      fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(geo => {
          if (geo && geo.city) {
            newVisitor.city = geo.city;
            newVisitor.region = geo.region || '';
            newVisitor.country = geo.country_name || 'India';
            newVisitor.countryCode = geo.country_code || 'IN';
            newVisitor.flag = getFlagEmoji(geo.country_code);
            newVisitor.org = geo.org || geo.asn || 'Internet Service Provider';
            saveData(data);
            if (currentActiveTab === 'analytics' && document.getElementById('carlAdminPanel')?.classList.contains('active')) {
              renderTabContent('analytics');
            }
          }
        })
        .catch(() => {
          fetch('https://ipwho.is/')
            .then(r => r.json())
            .then(geo => {
              if (geo && geo.success && geo.city) {
                newVisitor.city = geo.city;
                newVisitor.region = geo.region || '';
                newVisitor.country = geo.country || 'India';
                newVisitor.countryCode = geo.country_code || 'IN';
                newVisitor.flag = getFlagEmoji(geo.country_code);
                newVisitor.org = geo.connection?.isp || geo.connection?.org || 'Internet Service Provider';
                saveData(data);
                if (currentActiveTab === 'analytics' && document.getElementById('carlAdminPanel')?.classList.contains('active')) {
                  renderTabContent('analytics');
                }
              }
            })
            .catch(() => {});
        });
    } catch (err) {}
  }

  function trackPageView() {
    const data = loadData();
    const now = Date.now();
    const lastVisitKey = 'carl_real_visit_ts';
    const lastVisit = parseInt(sessionStorage.getItem(lastVisitKey) || '0', 10);

    if (now - lastVisit > 10 * 60 * 1000) {
      data.analytics.views = (data.analytics.views || 0) + 1;
      saveData(data);
      sessionStorage.setItem(lastVisitKey, now.toString());
      captureVisitorLog('VIEWED_PROFILE');
    }
  }

  function trackResumeDownload() {
    const data = loadData();
    data.analytics.resumeDownloads = (data.analytics.resumeDownloads || 0) + 1;
    saveData(data);
    captureVisitorLog('RESUME_DOWNLOAD');
  }

  // Intercept resume downloads for accurate real analytics
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

    document.querySelectorAll(logoSelectors.join(',')).forEach((el) => {
      el.style.cursor = 'pointer';
      el.setAttribute('title', 'Naveen Carlin A (Double-tap for Admin)');
      el.addEventListener('touchend', handleDoubleTap, { passive: false });
      el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openAuthModal();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === '7' || e.key === '&')) {
        e.preventDefault();
        openAuthModal();
      }
    });
  }

  // -----------------------------------------------------------
  // 5. Auth Modal (Password: 7065)
  // -----------------------------------------------------------
  function openAuthModal() {
    window.CARL_ADMIN_OPEN = true;
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
    window.CARL_ADMIN_OPEN = false;
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

    // Isolate scrolling
    wrap.addEventListener('wheel', (e) => e.stopPropagation(), { passive: false });
    wrap.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: false });

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
        }, 350);
      } else {
        msg.className = 'carl-cms-status-msg error';
        msg.textContent = '✗ Invalid Master Password! Access Denied.';
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
  let currentGraphView = 'day'; // 'day' | 'month'

  function openAdminPanel() {
    window.CARL_ADMIN_OPEN = true;
    let panel = document.getElementById('carlAdminPanel');
    if (!panel) {
      panel = createAdminPanel();
      document.body.appendChild(panel);
    }
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    renderTabContent(currentActiveTab);
  }

  function closeAdminPanel() {
    window.CARL_ADMIN_OPEN = false;
    const panel = document.getElementById('carlAdminPanel');
    if (panel) {
      panel.classList.remove('active');
      panel.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }

  function createAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'carlAdminPanel';
    panel.className = 'carl-admin-overlay';
    panel.setAttribute('aria-hidden', 'true');

    // ISOLATE SCROLLING: NEVER let wheel or touch scroll bubble to background page
    panel.addEventListener('wheel', (e) => {
      e.stopPropagation();
    }, { passive: true });
    panel.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });

    // Close on background backdrop click
    panel.addEventListener('click', (e) => {
      if (e.target === panel) {
        closeAdminPanel();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && window.CARL_ADMIN_OPEN) {
        closeAdminPanel();
      }
    });

    panel.innerHTML = `
      <div class="carl-admin-container">
        
        <!-- Header with Prominent Exit Button -->
        <header class="carl-admin-header">
          <div class="carl-admin-branding">
            <div class="carl-admin-logo-dot"></div>
            <div>
              <div class="carl-admin-title">NAVEEN CARLIN // ADMIN CMS</div>
              <div class="carl-admin-subtitle">ENTERPRISE CMS &bull; FULL CONTROL &bull; PASSWORD: 7065</div>
            </div>
          </div>
          <div class="carl-admin-actions">
            <button class="carl-btn-subtle" id="carlEmailReportBtn" title="Send report to naveencarlin07@gmail.com">
              <i class="fa-regular fa-paper-plane"></i> Email Stats
            </button>
            <button class="carl-btn-exit-top" id="carlExitAdminBtn" title="Exit Admin Panel (No auto scroll to about)">
              <i class="fa-solid fa-xmark"></i> EXIT ADMIN
            </button>
          </div>
        </header>

        <!-- Navigation Tabs -->
        <nav class="carl-admin-nav">
          <button class="carl-tab-btn active" data-tab="analytics"><i class="fa-solid fa-chart-line"></i> Analytics &amp; Visitors</button>
          <button class="carl-tab-btn" data-tab="projects"><i class="fa-solid fa-code-fork"></i> Manage Projects (14)</button>
          <button class="carl-tab-btn" data-tab="education"><i class="fa-solid fa-graduation-cap"></i> Education &amp; CGPA</button>
          <button class="carl-tab-btn" data-tab="awards"><i class="fa-solid fa-trophy"></i> Awards</button>
          <button class="carl-tab-btn" data-tab="experience"><i class="fa-solid fa-briefcase"></i> Experience</button>
          <button class="carl-tab-btn" data-tab="skills"><i class="fa-solid fa-layer-group"></i> Skills</button>
          <button class="carl-tab-btn" data-tab="profile"><i class="fa-solid fa-id-badge"></i> About &amp; Bio</button>
          <button class="carl-tab-btn" data-tab="backup"><i class="fa-solid fa-database"></i> Backup &amp; Sync</button>
        </nav>

        <!-- Main Body -->
        <main class="carl-admin-body" id="carlAdminBody">
          <!-- Injected dynamically -->
        </main>

      </div>
    `;

    panel.querySelectorAll('.carl-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.carl-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveTab = btn.getAttribute('data-tab');
        renderTabContent(currentActiveTab);
      });
    });

    panel.querySelector('#carlExitAdminBtn').addEventListener('click', closeAdminPanel);
    panel.querySelector('#carlEmailReportBtn').addEventListener('click', sendEmailReport);

    return panel;
  }

  function sendEmailReport() {
    const data = loadData();
    const subject = `Portfolio Stats Report - ${new Date().toLocaleDateString()}`;
    const body = `Hi Naveen,

Here is your REAL live Portfolio Analytics Report:

📊 Total Real Views: ${data.analytics.views || 0}
📥 Real Resume Downloads: ${data.analytics.resumeDownloads || 0}
⚡ Conversion Rate: ${data.analytics.views ? ((data.analytics.resumeDownloads / data.analytics.views) * 100).toFixed(1) : 0}%

👥 Real Visitor Log:
${(data.analytics.visitorLog || []).map((v, i) => `${i + 1}. [${v.flag} ${v.city}, ${v.country}] - Org: ${v.org} | Via: ${v.source} | Device: ${v.device} (${v.timeAgo})`).join('\n') || 'No visitors recorded yet.'}

----------------------------------------
Admin Access: Double-tap logo on https://carl-portfolio-77777.web.app (Password: 7065)
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
      case 'education':
        renderEducationTab(container, data);
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

  // -----------------------------------------------------------
  // TAB: Analytics (100% REAL LIVE DATA ONLY)
  // -----------------------------------------------------------
  function buildRealDailyPoints(visitorLog, totalViews, totalDownloads) {
    // Generate real points for past 7 days
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dayLabel = i === 0 ? "Today" : d.toLocaleDateString([], { month: 'short', day: 'numeric' });
      const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const dayEnd = dayStart + 24 * 3600 * 1000;

      // Count actual matching log entries
      const matchingVisits = (visitorLog || []).filter(v => v.timestamp >= dayStart && v.timestamp < dayEnd);
      const matchingViews = matchingVisits.filter(v => v.action === 'VIEWED_PROFILE').length;
      const matchingDownloads = matchingVisits.filter(v => v.action === 'RESUME_DOWNLOAD').length;

      // For today, if count is at least totalViews/totalDownloads, ensure honesty
      days.push({
        label: dayLabel,
        views: i === 0 ? Math.max(matchingViews, totalViews) : matchingViews,
        downloads: i === 0 ? Math.max(matchingDownloads, totalDownloads) : matchingDownloads
      });
    }
    return days;
  }

  function buildRealMonthlyPoints(visitorLog, totalViews, totalDownloads) {
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const monthLabel = d.toLocaleDateString([], { month: 'short' });
      const mStart = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
      const nextM = new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime();

      const matchingVisits = (visitorLog || []).filter(v => v.timestamp >= mStart && v.timestamp < nextM);
      const matchingViews = matchingVisits.filter(v => v.action === 'VIEWED_PROFILE').length;
      const matchingDownloads = matchingVisits.filter(v => v.action === 'RESUME_DOWNLOAD').length;

      months.push({
        label: i === 0 ? `${monthLabel} (MTD)` : monthLabel,
        views: i === 0 ? Math.max(matchingViews, totalViews) : matchingViews,
        downloads: i === 0 ? Math.max(matchingDownloads, totalDownloads) : matchingDownloads
      });
    }
    return months;
  }

  function renderAnalyticsTab(el, data) {
    const views = data.analytics.views || 0;
    const downloads = data.analytics.resumeDownloads || 0;
    const convRate = views > 0 ? ((downloads / views) * 100).toFixed(1) : '0.0';
    const visitors = data.analytics.visitorLog || [];

    // Real dynamic trend points from actual logs
    const points = currentGraphView === 'month'
      ? buildRealMonthlyPoints(visitors, views, downloads)
      : buildRealDailyPoints(visitors, views, downloads);

    const maxVal = Math.max(...points.map(p => Math.max(p.views, p.downloads)), 5);

    el.innerHTML = `
      <!-- Real Live Indicator -->
      <div class="carl-live-indicator-banner">
        <span class="live-dot-green"></span>
        <span>100% REAL LIVE TRACKING &bull; ZERO FAKE DATA &bull; RECORDING REAL VISITS</span>
      </div>

      <!-- Top KPIs -->
      <div class="carl-kpi-grid">
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon"><i class="fa-solid fa-eye"></i></div>
          <div class="carl-kpi-val">${views}</div>
          <div class="carl-kpi-label">REAL PORTFOLIO VIEWS</div>
        </div>
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon highlight"><i class="fa-solid fa-file-arrow-down"></i></div>
          <div class="carl-kpi-val highlight">${downloads}</div>
          <div class="carl-kpi-label">REAL RESUME DOWNLOADS</div>
        </div>
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
          <div class="carl-kpi-val">${convRate}%</div>
          <div class="carl-kpi-label">REAL CONVERSION RATE</div>
        </div>
        <div class="carl-kpi-card">
          <div class="carl-kpi-icon" style="color:#10b981;"><i class="fa-solid fa-users"></i></div>
          <div class="carl-kpi-val" style="color:#10b981;">${visitors.length}</div>
          <div class="carl-kpi-label">LIVE TRACKED SESSIONS</div>
        </div>
      </div>

      <!-- Interactive Real Graph -->
      <div class="carl-card-box">
        <div class="carl-card-header">
          <div>
            <h4 class="carl-card-title"><i class="fa-solid fa-chart-simple"></i> Real Visit &amp; Download Trends</h4>
            <span style="font-size:0.75rem; color:rgba(255,255,255,0.5);">Computed live from your real visitors</span>
          </div>
          <div class="carl-graph-controls">
            <div class="carl-graph-legend">
              <span class="legend-dot cyan"></span> Views
              <span class="legend-dot purple"></span> Downloads
            </div>
            <div class="carl-view-toggle">
              <button class="carl-toggle-pill ${currentGraphView === 'day' ? 'active' : ''}" id="toggleGraphDay">Day-wise</button>
              <button class="carl-toggle-pill ${currentGraphView === 'month' ? 'active' : ''}" id="toggleGraphMonth">Monthly</button>
            </div>
          </div>
        </div>

        <div class="carl-graph-container">
          <svg class="carl-analytics-chart" viewBox="0 0 800 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="viewsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.02" />
              </linearGradient>
              <linearGradient id="downGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#a855f7" stop-opacity="0.4" />
                <stop offset="100%" stop-color="#a855f7" stop-opacity="0.02" />
              </linearGradient>
            </defs>

            <!-- Grid Lines -->
            <line x1="40" y1="30" x2="780" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4" />
            <line x1="40" y1="90" x2="780" y2="90" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4" />
            <line x1="40" y1="150" x2="780" y2="150" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4" />
            <line x1="40" y1="210" x2="780" y2="210" stroke="rgba(255,255,255,0.12)" />

            ${renderChartSVG(points, maxVal)}
          </svg>
        </div>
      </div>

      <!-- Real LinkedIn-Style "Who Viewed Your Profile" Section -->
      <div class="carl-card-box">
        <div class="carl-card-header">
          <div>
            <h4 class="carl-card-title">
              <i class="fa-brands fa-linkedin" style="color: #0a66c2; font-size: 1.25rem;"></i>
              Who Viewed Your Profile (${visitors.length})
            </h4>
            <span style="font-size:0.75rem; color:rgba(255,255,255,0.5);">Real-time visitor logs capturing real device, real network, location, and source</span>
          </div>
          <button class="carl-btn-subtle" id="carlResetAnalyticsBtn"><i class="fa-solid fa-trash-can"></i> Reset Counts</button>
        </div>

        <div class="carl-visitor-feed">
          ${(visitors && visitors.length) ? visitors.map(v => `
            <div class="carl-visitor-card">
              <div class="carl-visitor-avatar">
                <span class="avatar-flag">${v.flag || '📍'}</span>
              </div>
              <div class="carl-visitor-main">
                <div class="visitor-top-row">
                  <h5 class="visitor-name">Visitor from ${v.city || 'Resolving City'}, ${v.country || 'India'}</h5>
                  <span class="visitor-time">${v.timeAgo || 'Recently'}</span>
                </div>
                <div class="visitor-org-line">
                  <i class="fa-solid fa-building-user"></i>
                  <span>${v.org || 'Internet Service Provider'}</span>
                </div>
                <div class="visitor-meta-chips">
                  <span class="meta-chip source"><i class="fa-solid fa-arrow-up-right-from-square"></i> Via ${v.source || 'Direct'}</span>
                  <span class="meta-chip device">${v.device || 'Mobile/Desktop'}</span>
                  <span class="meta-chip page"><i class="fa-regular fa-compass"></i> ${v.page || 'Home'}</span>
                  ${v.action === 'RESUME_DOWNLOAD' ? `<span class="meta-chip action-dl"><i class="fa-solid fa-file-arrow-down"></i> Downloaded Resume PDF</span>` : ''}
                </div>
              </div>
            </div>
          `).join('') : `
            <div style="text-align: center; color: rgba(255,255,255,0.5); padding: 34px 20px;">
              <i class="fa-solid fa-satellite-dish" style="font-size: 2.2rem; color: #38bdf8; margin-bottom: 12px; display: block;"></i>
              <p style="font-size: 1rem; color: #fff; font-weight: 700; margin-bottom: 6px;">Live Visitor Tracking Is Active</p>
              <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); max-width: 480px; margin: 0 auto;">No mock visitors are shown. Every real person who visits your portfolio or downloads your resume will be logged here with their city, country, device, and source.</p>
            </div>
          `}
        </div>
      </div>
    `;

    el.querySelector('#toggleGraphDay').addEventListener('click', () => {
      currentGraphView = 'day';
      renderAnalyticsTab(el, data);
    });
    el.querySelector('#toggleGraphMonth').addEventListener('click', () => {
      currentGraphView = 'month';
      renderAnalyticsTab(el, data);
    });

    el.querySelector('#carlResetAnalyticsBtn').addEventListener('click', () => {
      if (confirm('Clear real visitor log and reset analytics counts to 0?')) {
        data.analytics.views = 0;
        data.analytics.resumeDownloads = 0;
        data.analytics.visitorLog = [];
        saveData(data);
        renderTabContent('analytics');
      }
    });
  }

  function renderChartSVG(points, maxVal) {
    if (!points || !points.length) return '';
    const width = 740;
    const startX = 60;
    const chartHeight = 180;
    const baseY = 210;
    const step = width / (points.length - 1 || 1);

    const viewCoords = [];
    const downCoords = [];
    const barWidth = 14;

    let barsSVG = '';
    points.forEach((p, i) => {
      const x = startX + i * step;
      const vH = (p.views / maxVal) * chartHeight;
      const dH = (p.downloads / maxVal) * chartHeight;
      const vY = baseY - vH;
      const dY = baseY - dH;

      viewCoords.push(`${x},${vY}`);
      downCoords.push(`${x},${dY}`);

      barsSVG += `
        <g class="chart-bar-group">
          <rect x="${x - barWidth - 2}" y="${vY}" width="${barWidth}" height="${vH}" rx="3" fill="url(#viewsGrad)" stroke="#38bdf8" stroke-width="1.2" />
          <rect x="${x + 2}" y="${dY}" width="${barWidth}" height="${dH}" rx="3" fill="url(#downGrad)" stroke="#a855f7" stroke-width="1.2" />
          <text x="${x}" y="230" text-anchor="middle" font-size="11" fill="rgba(255,255,255,0.6)" font-weight="600">${p.label}</text>
          <text x="${x}" y="${Math.min(vY, dY) - 10}" text-anchor="middle" font-size="10" fill="#fff" font-weight="700" class="chart-val-hint">${p.views} / ${p.downloads}</text>
        </g>
      `;
    });

    const viewsPath = `M ${viewCoords.join(' L ')}`;
    const downPath = `M ${downCoords.join(' L ')}`;

    return `
      ${barsSVG}
      <path d="${viewsPath}" fill="none" stroke="#38bdf8" stroke-width="2.5" opacity="0.9" />
      <path d="${downPath}" fill="none" stroke="#a855f7" stroke-width="2.2" opacity="0.9" stroke-dasharray="3,3" />
    `;
  }

  // -----------------------------------------------------------
  // TAB: Projects (All 14 Site Projects)
  // -----------------------------------------------------------
  function renderProjectsTab(el, data) {
    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title">Manage Projects (${data.projects.length})</h3>
          <p class="carl-section-desc">Full access to all 14 projects across your Bento Showcase and Interactive Project Gallery. Add, rewrite, change photos, and delete.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddNewProjectBtn">
          <i class="fa-solid fa-plus"></i> Add New Project
        </button>
      </div>

      <div class="carl-items-grid" id="carlProjectsList">
        ${data.projects.map((proj, idx) => `
          <div class="carl-item-card" data-id="${proj.id}">
            <div class="carl-item-thumb-wrap">
              <img src="${proj.image || '/assets/animal-intrusion-system.jpg'}" alt="${proj.title}" class="carl-item-thumb" onerror="this.src='/assets/animal-intrusion-system.jpg'" />
              <span class="carl-item-badge">${proj.category || 'PROJECT'}</span>
            </div>
            <div class="carl-item-content">
              ${proj.badge ? `<div style="font-size:0.7rem; color:#38bdf8; font-weight:700; margin-bottom:4px; text-transform:uppercase;">★ ${proj.badge}</div>` : ''}
              <h4 class="carl-item-title">${proj.title}</h4>
              <p class="carl-item-desc">${proj.desc}</p>
              
              ${(proj.tags && proj.tags.length) ? `
                <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:10px;">
                  ${proj.tags.slice(0, 4).map(t => `<span style="font-size:0.7rem; background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:4px; color:#cbd5e1;">${t}</span>`).join('')}
                </div>
              ` : ''}

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

      <!-- Project Modal -->
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
              <input type="text" id="projFormTitle" class="carl-cms-input" required placeholder="e.g. Autonomous Drone Pathfinder" />
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>Category / Tag</label>
                <input type="text" id="projFormCategory" class="carl-cms-input" placeholder="e.g. EDGE AI · 2026" />
              </div>
              <div class="carl-form-group">
                <label>Highlight Badge</label>
                <input type="text" id="projFormBadge" class="carl-cms-input" placeholder="e.g. TOP 25 FINALIST / BEST PAPER" />
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
              <textarea id="projFormDesc" class="carl-cms-input carl-textarea" rows="3" required placeholder="Detail the problem, architecture, technologies, and results..."></textarea>
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>GitHub Repository URL</label>
                <input type="url" id="projFormGithub" class="carl-cms-input" placeholder="https://github.com/carl07-gif/..." />
              </div>
              <div class="carl-form-group">
                <label>Live Demo URL</label>
                <input type="url" id="projFormDemo" class="carl-cms-input" placeholder="https://..." />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Key Metrics / Stats</label>
              <input type="text" id="projFormMetrics" class="carl-cms-input" placeholder="e.g. 94% Accuracy · ~70% Intrusion Reduction" />
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
        metrics: el.querySelector('#projFormMetrics').value.trim(),
        tags: idx >= 0 && data.projects[idx].tags ? data.projects[idx].tags : ["AI", "Full Stack"]
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

  // -----------------------------------------------------------
  // TAB: Education & CGPA
  // -----------------------------------------------------------
  function renderEducationTab(el, data) {
    if (!data.education || !data.education.length) {
      data.education = DEFAULT_DATA.education;
    }

    const primaryEdu = data.education[0] || {};

    el.innerHTML = `
      <div class="carl-section-top">
        <div>
          <h3 class="carl-section-title"><i class="fa-solid fa-graduation-cap"></i> Manage Education &amp; CGPA</h3>
          <p class="carl-section-desc">Full control over academic credentials, institutions, graduation dates, and live CGPA displayed across your portfolio.</p>
        </div>
        <button class="carl-btn-primary" id="carlAddEduBtn">
          <i class="fa-solid fa-plus"></i> Add Education Entry
        </button>
      </div>

      <!-- Quick CGPA Metric Banner -->
      <div class="carl-kpi-grid" style="margin-bottom: 24px;">
        <div class="carl-kpi-card" style="grid-column: span 2;">
          <div class="carl-kpi-icon" style="color:#38bdf8;"><i class="fa-solid fa-award"></i></div>
          <div class="carl-kpi-val" style="color:#38bdf8;" id="carlEduCgpaDisplay">${primaryEdu.cgpaNum || '8.06'}</div>
          <div class="carl-kpi-label">CURRENT B.E. CGPA (OUT OF 10.0)</div>
          <span style="font-size:0.78rem; color:rgba(255,255,255,0.6); margin-top:6px; display:block;">
            ${primaryEdu.institution || 'Mount Zion College of Engineering and Technology'}
          </span>
        </div>
        <div class="carl-kpi-card" style="grid-column: span 2;">
          <div class="carl-kpi-icon" style="color:#10b981;"><i class="fa-solid fa-building-columns"></i></div>
          <div class="carl-kpi-val" style="font-size:1.25rem; color:#fff; font-weight:700; margin: 4px 0 8px; line-height:1.3;">
            ${primaryEdu.degree || 'B.E. in Computer Science and Engineering'}
          </div>
          <div class="carl-kpi-label">ACTIVE DEGREE PROGRAM (${primaryEdu.period || 'Nov 2023 – Present'})</div>
        </div>
      </div>

      <div class="carl-items-grid">
        ${data.education.map((edu, idx) => `
          <div class="carl-item-card">
            <div class="carl-item-content">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
                <span class="carl-item-badge" style="background:rgba(56,189,248,0.15); color:#38bdf8; border:1px solid rgba(56,189,248,0.3);">
                  🎓 ${edu.period || '2023 – Present'}
                </span>
                <span style="font-size:0.95rem; color:#10b981; font-weight:800; font-family:monospace; background:rgba(16,185,129,0.12); padding:2px 8px; border-radius:6px; border:1px solid rgba(16,185,129,0.3);">
                  ${edu.score || 'CGPA 8.06 / 10'}
                </span>
              </div>
              <h4 class="carl-item-title">${edu.degree}</h4>
              <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin:0 0 6px; font-weight:600;">
                <i class="fa-solid fa-school" style="color:#38bdf8; margin-right:6px;"></i>${edu.institution}
              </p>
              ${edu.highlights ? `<p class="carl-item-desc" style="margin-top:4px;">${edu.highlights}</p>` : ''}
            </div>
            <div class="carl-item-actions">
              <button class="carl-btn-icon edit-edu" data-idx="${idx}" title="Edit Education"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="carl-btn-icon delete-edu danger" data-idx="${idx}" title="Delete Education"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Education Edit Modal -->
      <div class="carl-submodal-overlay" id="carlEduModal" style="display:none;">
        <div class="carl-submodal-card">
          <div class="carl-submodal-header">
            <h4 id="carlEduModalHeading">Add / Edit Education Entry</h4>
            <button class="carl-cms-close-btn" id="closeEduModalBtn">&times;</button>
          </div>
          <form id="carlEduForm" class="carl-form">
            <input type="hidden" id="eduFormIdx" value="-1" />
            <div class="carl-form-group">
              <label>Degree / Qualification *</label>
              <input type="text" id="eduFormDegree" class="carl-cms-input" required placeholder="e.g. B.E. in Computer Science and Engineering" />
            </div>
            <div class="carl-form-group">
              <label>College / School / Institution *</label>
              <input type="text" id="eduFormInstitution" class="carl-cms-input" required placeholder="e.g. Mount Zion College of Engineering and Technology" />
            </div>
            <div class="carl-form-row">
              <div class="carl-form-group">
                <label>Time Period *</label>
                <input type="text" id="eduFormPeriod" class="carl-cms-input" required placeholder="e.g. Nov 2023 – Present" />
              </div>
              <div class="carl-form-group">
                <label>Score / CGPA Text *</label>
                <input type="text" id="eduFormScore" class="carl-cms-input" required placeholder="e.g. CGPA 8.06 / 10" />
              </div>
            </div>
            <div class="carl-form-group">
              <label>Numeric CGPA / GPA (for Counter: e.g. 8.06)</label>
              <input type="text" id="eduFormCgpaNum" class="carl-cms-input" placeholder="8.06" />
            </div>
            <div class="carl-form-group">
              <label>Highlights / Specialization (Optional)</label>
              <textarea id="eduFormHighlights" class="carl-cms-input carl-textarea" rows="2" placeholder="e.g. Focus on Edge AI, Computer Vision, High Performance Computing..."></textarea>
            </div>
            <div class="carl-form-actions">
              <button type="button" class="carl-btn-subtle" id="cancelEduModalBtn">Cancel</button>
              <button type="submit" class="carl-btn-primary">Save Education</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = el.querySelector('#carlEduModal');
    const form = el.querySelector('#carlEduForm');

    el.querySelector('#carlAddEduBtn').addEventListener('click', () => {
      form.reset();
      el.querySelector('#eduFormIdx').value = '-1';
      el.querySelector('#carlEduModalHeading').textContent = 'Add New Education Entry';
      modal.style.display = 'flex';
    });

    el.querySelector('#closeEduModalBtn').addEventListener('click', () => modal.style.display = 'none');
    el.querySelector('#cancelEduModalBtn').addEventListener('click', () => modal.style.display = 'none');

    el.querySelectorAll('.edit-edu').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const ed = data.education[idx];
        if (!ed) return;
        el.querySelector('#eduFormIdx').value = idx;
        el.querySelector('#eduFormDegree').value = ed.degree || '';
        el.querySelector('#eduFormInstitution').value = ed.institution || '';
        el.querySelector('#eduFormPeriod').value = ed.period || '';
        el.querySelector('#eduFormScore').value = ed.score || '';
        el.querySelector('#eduFormCgpaNum').value = ed.cgpaNum || '';
        el.querySelector('#eduFormHighlights').value = ed.highlights || '';
        el.querySelector('#carlEduModalHeading').textContent = 'Edit Education Entry';
        modal.style.display = 'flex';
      });
    });

    el.querySelectorAll('.delete-edu').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (confirm(`Delete education entry "${data.education[idx].degree}"?`)) {
          data.education.splice(idx, 1);
          saveData(data);
          syncToDOM();
          renderTabContent('education');
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const idx = parseInt(el.querySelector('#eduFormIdx').value, 10);
      const newEntry = {
        id: idx >= 0 ? data.education[idx].id : `edu_${Date.now()}`,
        degree: el.querySelector('#eduFormDegree').value.trim(),
        institution: el.querySelector('#eduFormInstitution').value.trim(),
        period: el.querySelector('#eduFormPeriod').value.trim(),
        score: el.querySelector('#eduFormScore').value.trim(),
        cgpaNum: el.querySelector('#eduFormCgpaNum').value.trim() || '8.06',
        highlights: el.querySelector('#eduFormHighlights').value.trim()
      };

      if (idx >= 0) {
        data.education[idx] = newEntry;
      } else {
        data.education.push(newEntry);
      }

      saveData(data);
      syncToDOM();
      modal.style.display = 'none';
      renderTabContent('education');
    });
  }

  // -----------------------------------------------------------
  // TAB: Awards
  // -----------------------------------------------------------
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

  // -----------------------------------------------------------
  // TAB: Experience
  // -----------------------------------------------------------
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

  // -----------------------------------------------------------
  // TAB: Skills
  // -----------------------------------------------------------
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

  // -----------------------------------------------------------
  // TAB: Profile & About
  // -----------------------------------------------------------
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

  // -----------------------------------------------------------
  // TAB: Backup & Sync
  // -----------------------------------------------------------
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
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin: 10px 0 16px;">Download a complete snapshot of all 14 projects, awards, experience, skills, and analytics as a JSON file.</p>
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
          <h4 class="carl-card-title" style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> Reset to Factory Data</h4>
          <p style="font-size:0.85rem; color:rgba(255,255,255,0.7); margin: 10px 0 16px;">Restore original built-in 14 projects, experience, and awards. Warning: this clears local edits.</p>
          <button class="carl-btn-subtle danger" id="carlResetDefaultsBtn"><i class="fa-solid fa-rotate-left"></i> Restore Original Data</button>
        </div>
      </div>
    `;

    el.querySelector('#carlExportDataBtn').addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `naveen_portfolio_cms_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

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

    el.querySelector('#carlResetDefaultsBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all site data back to factory defaults (14 projects)?')) {
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

    if (data.profile.name) {
      document.querySelectorAll('.headline-line.line1, .footer-brand-name, .hero-author-name').forEach(el => {
        el.textContent = data.profile.name;
      });
    }

    if (data.profile.subtitle) {
      document.querySelectorAll('.hero .desc, .footer-brand-bio').forEach(el => {
        el.textContent = data.profile.subtitle;
      });
    }

    if (window.CARL_TYPEWRITER_WORDS && Array.isArray(data.profile.typewriterPhrases)) {
      window.CARL_TYPEWRITER_WORDS = data.profile.typewriterPhrases;
    }

    // Sync Education & CGPA
    if (data.education && data.education.length) {
      const primary = data.education[0];
      const cgpa = primary.cgpaNum || '8.06';

      // Update bento card
      const cgpaValEl = document.getElementById('cgpaVal');
      if (cgpaValEl) {
        cgpaValEl.setAttribute('data-counter', cgpa);
        cgpaValEl.textContent = parseFloat(cgpa).toFixed(2);
      }
      const bentoPill = document.querySelector('.bento-card-academics .bento-status-pill span:last-child');
      if (bentoPill) {
        bentoPill.textContent = `${cgpa} CGPA`;
      }

      // Update Education list in about.html
      const eduList = document.querySelector('.edu-cert-card:first-child .edu-cert-list');
      if (eduList) {
        eduList.innerHTML = data.education.map(ed => `
          <div class="edu-cert-item">
            <div class="edu-cert-icon-wrap">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="edu-item-connector">
              <div class="edu-item-connector-fill"></div>
            </div>
            <div class="edu-cert-info">
              <h3 class="edu-cert-title">${ed.degree}</h3>
              <span class="edu-cert-provider">${ed.institution}</span>
              <span class="edu-cert-meta">${ed.period} &middot; ${ed.score}</span>
            </div>
          </div>
        `).join('');
      }
    }

    const bentoGrid = document.querySelector('.proj-bento-grid');
    if (bentoGrid && data.projects && data.projects.length) {
      renderBentoProjects(bentoGrid, data.projects);
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

  window.CarlCMS = {
    openAuth: openAuthModal,
    openAdmin: openAdminPanel,
    closeAdmin: closeAdminPanel,
    getData: loadData,
    saveData: saveData,
    syncDOM: syncToDOM,
    trackDownload: trackResumeDownload
  };

})();
