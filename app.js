/* ============================================================
   BLOG TEMPLATE — RENDERING ENGINE
   Liest CONFIG und baut den Blog dynamisch auf.
   ============================================================ */

(function () {
  "use strict";

  // ── State ──────────────────────────────────────────────────
  let currentCategory = "all";
  let isLightMode = localStorage.getItem("blog-theme") === "light";

  // ── Init ───────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    renderNavbar();
    renderHero();
    renderCategories();
    renderPosts();
    renderFooter();
    setupThemeToggle();
    setupMenuToggle();
    setupBackButton();
    setupScrollAnimations();
  });

  // ── Theme ──────────────────────────────────────────────────
  function applyTheme() {
    const colors = isLightMode ? CONFIG.colors.light : CONFIG.colors.dark;
    const root = document.documentElement;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--bg", colors.bg);
    root.style.setProperty("--bg-card", colors.bgCard);
    root.style.setProperty("--bg-nav", colors.bgNav);
    root.style.setProperty("--text", colors.text);
    root.style.setProperty("--text-muted", colors.textMuted);
    root.style.setProperty("--border", colors.border);
    root.style.setProperty("--gradient1", colors.gradient1);
    root.style.setProperty("--gradient2", colors.gradient2);

    // Toggle icons
    const moonIcon = document.getElementById("icon-moon");
    const sunIcon = document.getElementById("icon-sun");
    if (moonIcon && sunIcon) {
      moonIcon.style.display = isLightMode ? "none" : "block";
      sunIcon.style.display = isLightMode ? "block" : "none";
    }
  }

  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      isLightMode = !isLightMode;
      localStorage.setItem("blog-theme", isLightMode ? "light" : "dark");
      applyTheme();
    });
  }

  // ── Mobile Menu ────────────────────────────────────────────
  function setupMenuToggle() {
    const btn = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");
    if (!btn || !links) return;
    btn.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  }

  // ── Navbar ─────────────────────────────────────────────────
  function renderNavbar() {
    // Logo
    const logo = document.getElementById("nav-logo");
    if (logo) logo.textContent = CONFIG.siteName;

    // Title
    document.title = CONFIG.siteName + " — " + CONFIG.siteTagline;

    // Nav Links
    const container = document.getElementById("nav-links");
    if (!container) return;
    container.innerHTML = "";

    CONFIG.navLinks.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      a.id = "nav-" + link.id;

      // Home link navigates back to blog view
      if (link.id === "home") {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          showHome();
        });
      }

      container.appendChild(a);
    });
  }

  // ── Hero ───────────────────────────────────────────────────
  function renderHero() {
    const hero = document.getElementById("hero");
    if (!hero || CONFIG.posts.length === 0) return;

    const post = CONFIG.posts[0]; // Featured post
    const categoryLabel = getCategoryLabel(post.category);

    hero.innerHTML = `
      <img class="hero-image" src="${post.image}" alt="${post.title}" loading="eager">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-badge">${categoryLabel}</span>
        <h1>${post.title}</h1>
        <p class="hero-excerpt">${post.excerpt}</p>
        <div class="hero-meta">
          <span>${post.author}</span>
          <span>·</span>
          <span>${formatDate(post.date)}</span>
          <span>·</span>
          <span>${post.readTime} Lesezeit</span>
        </div>
      </div>
    `;

    hero.addEventListener("click", () => showPost(post.id));
  }

  // ── Categories ─────────────────────────────────────────────
  function renderCategories() {
    const container = document.getElementById("category-pills");
    if (!container) return;
    container.innerHTML = "";

    CONFIG.categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "category-pill" + (cat.slug === currentCategory ? " active" : "");
      btn.textContent = cat.name;
      btn.addEventListener("click", () => {
        currentCategory = cat.slug;
        renderCategories();
        renderPosts();
      });
      container.appendChild(btn);
    });
  }

  // ── Posts Grid ──────────────────────────────────────────────
  function renderPosts() {
    const grid = document.getElementById("posts-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Skip first post (hero) and filter by category
    const filtered = CONFIG.posts.slice(1).filter((p) => {
      return currentCategory === "all" || p.category === currentCategory;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1 / -1; text-align: center; padding: 60px 0;">Keine Beiträge in dieser Kategorie.</p>`;
      return;
    }

    filtered.forEach((post, i) => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.style.transitionDelay = `${i * 80}ms`;

      const categoryLabel = getCategoryLabel(post.category);

      card.innerHTML = `
        <div class="card-image-wrapper">
          <img class="card-image" src="${post.image}" alt="${post.title}" loading="lazy">
          <span class="card-category">${categoryLabel}</span>
        </div>
        <div class="card-body">
          <h3>${post.title}</h3>
          <p class="card-excerpt">${post.excerpt}</p>
          <div class="card-meta">
            <span>${formatDate(post.date)}</span>
            <span class="read-time">${post.readTime}</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => showPost(post.id));
      grid.appendChild(card);
    });

    // Re-trigger scroll animations
    setupScrollAnimations();
  }

  // ── Single Post ────────────────────────────────────────────
  function showPost(id) {
    const post = CONFIG.posts.find((p) => p.id === id);
    if (!post) return;

    const content = document.getElementById("single-post-content");
    if (!content) return;

    const categoryLabel = getCategoryLabel(post.category);

    content.innerHTML = `
      <div class="single-post-header">
        <span class="single-post-category">${categoryLabel}</span>
        <h1>${post.title}</h1>
        <div class="single-post-meta">
          <span>${post.author}</span>
          <span>·</span>
          <span>${formatDate(post.date)}</span>
          <span>·</span>
          <span>${post.readTime} Lesezeit</span>
        </div>
      </div>
      <img class="single-post-image" src="${post.image}" alt="${post.title}">
      <div class="single-post-body">${post.content}</div>
    `;

    // Toggle views
    document.getElementById("hero").style.display = "none";
    document.getElementById("categories-bar").style.display = "none";
    document.getElementById("posts-section").style.display = "none";
    document.getElementById("single-post").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHome() {
    document.getElementById("hero").style.display = "flex";
    document.getElementById("categories-bar").style.display = "block";
    document.getElementById("posts-section").style.display = "block";
    document.getElementById("single-post").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setupBackButton() {
    const btn = document.getElementById("back-btn");
    if (!btn) return;
    btn.addEventListener("click", showHome);
  }

  // ── Footer ─────────────────────────────────────────────────
  function renderFooter() {
    const textEl = document.getElementById("footer-text");
    if (textEl) textEl.textContent = CONFIG.footerText;

    const linksEl = document.getElementById("footer-links");
    if (linksEl) {
      linksEl.innerHTML = "";
      CONFIG.navLinks.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.label;
        linksEl.appendChild(a);
      });
    }
  }

  // ── Scroll Animations ──────────────────────────────────────
  function setupScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".post-card").forEach((card) => {
      observer.observe(card);
    });
  }

  // ── Helpers ────────────────────────────────────────────────
  function getCategoryLabel(slug) {
    const cat = CONFIG.categories.find((c) => c.slug === slug);
    return cat ? cat.name : slug;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
})();
