const grid = document.querySelector("#work-grid");
const dialog = document.querySelector("#story-dialog");
const storyContent = document.querySelector("#story-content");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const categoryNames = { experience: "Experience", projects: "Project", leadership: "Leadership" };
let storyTrigger;

const artwork = {
  mckinsey: '<span class="art-overline">STRATEGY & PROBLEM SOLVING</span><span class="mck-name">McKinsey<br>& Company</span><span class="mck-caption">BUSINESS ANALYST</span><span class="mck-lines"></span>',
  google: '<span class="art-overline">EXPERIENCE / YOUR STORY HERE</span><span class="google-name">Google</span><span class="google-note">A DIFFERENT WAY TO THINK.</span><span class="google-shapes"><i></i><i></i><i></i><i></i></span>',
  product: '<span class="art-corner">01 / A PRODUCT STORY</span><span class="product-window"><span class="window-bar">•••</span><strong>Small problem.<br>Thoughtful solution.</strong><span class="window-content"><i></i><i></i><i></i></span></span><span class="product-sticker">✳</span>',
  experiment: '<span class="art-corner">02 / A SMALL EXPERIMENT</span><span class="experiment-note"><strong>what if<br>we tried<br>this?</strong><span></span><span></span></span><span class="experiment-star">✶</span>',
  community: '<span class="community-title">better,<br>together.</span><span class="community-people"><i></i><i></i><i></i></span><span class="community-spark">✳</span>',
  mentorship: '<span class="art-corner">A LITTLE GUIDANCE GOES A LONG WAY</span><svg class="mentorship-path" viewBox="0 0 250 220" fill="none"><path d="M39 171c-34-56 74-22 62-69s-56 7-26 18S201 92 167 48" stroke="#98b1b3" stroke-width="2" stroke-dasharray="5 5"/><path d="m151 54 17-17 12 20-14-5Z" fill="#f7f5e8" stroke="#687f80" stroke-width="1.5" stroke-linejoin="round"/><path d="m192 111 3 9 9 1-7 6 2 9-8-5-8 4 2-9-6-6 9-1Z" fill="#d9c89c"/></svg><span class="mentorship-title">a little nudge.<br>a new beginning.</span>'
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function safeLink(value, allowMail = false) {
  if (!value) return null;
  const url = new URL(value, location.href);
  if (url.protocol === "https:" || url.protocol === "http:" || (allowMail && url.protocol === "mailto:")) return url.href;
  throw new Error(`Unsupported link protocol: ${url.protocol}`);
}

function renderCard(card) {
  const article = element("article", "work-card");
  article.dataset.category = card.category;
  const button = element("button", "card-button");
  button.type = "button";
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-controls", "story-dialog");
  button.setAttribute("aria-label", `Read ${card.title}: ${card.subtitle}`);
  const art = element("span", `card-art art-${card.art}`);
  art.setAttribute("aria-hidden", "true");
  art.innerHTML = artwork[card.art];
  const heading = element("span", "card-heading");
  const arrow = element("span", "card-arrow", "↗");
  arrow.setAttribute("aria-hidden", "true");
  heading.append(element("span", "card-title", card.title), arrow);
  const tags = element("span", "card-tags");
  card.tags.forEach(tag => tags.append(element("span", "", tag)));
  button.append(art, heading, element("span", "card-subtitle", card.subtitle), tags, element("span", "card-period", card.period));
  button.addEventListener("click", () => openStory(card, button));
  article.append(button);
  return article;
}

const categoryMeta = [
  ["experience", "01", "Experience"],
  ["projects", "02", "Projects"],
  ["leadership", "03", "Leadership"]
];

function setActiveTab(filter) {
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function scrollToCategory(filter) {
  if (filter !== "all" && filter !== "path" && !Object.hasOwn(categoryNames, filter)) throw new Error(`Unknown category: ${filter}`);
  setActiveTab(filter);
  const target = filter === "all"
    ? document.querySelector("#work")
    : filter === "path"
      ? document.querySelector("#path")
      : document.querySelector(`#section-${filter}`);
  if (target) {
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
}

function openStory(card, trigger) {
  storyTrigger = trigger;
  storyContent.replaceChildren();
  const title = element("h2", "", card.title);
  title.id = "story-title";
  storyContent.append(
    element("p", "dialog-category", categoryNames[card.category]),
    title,
    element("p", "dialog-subtitle", `${card.subtitle} · ${card.period}`),
    element("p", "dialog-summary", card.summary)
  );
  if (card.example) storyContent.append(element("span", "example-label", "Writing outline — replace with your own story"));
  card.sections.forEach(([heading, copy]) => {
    const section = element("section", "story-section");
    section.append(element("h3", "", heading), element("p", "", copy));
    storyContent.append(section);
  });
  const href = safeLink(card.href);
  if (href) {
    const link = element("a", "story-link", "View the work ↗");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    storyContent.append(link);
  }
  dialog.showModal();
  dialog.scrollTop = 0;
}

document.querySelectorAll("[data-name]").forEach(node => { node.textContent = portfolio.name; });
document.title = `${portfolio.name} — my work`;
document.querySelector('meta[property="og:title"]').content = document.title;
document.querySelector(".site-header .wordmark").setAttribute("aria-label", `${portfolio.name}, home`);
document.querySelector('meta[name="description"]').content = `${portfolio.name} — experience, projects, and leadership.`;
document.querySelector("#intro").textContent = portfolio.intro;
if (portfolio.emoji) document.querySelector("#hero-emoji").textContent = portfolio.emoji;
const badgesRoot = document.querySelector("#floating-badges");
(portfolio.floatingEmojis || ["✨", "🚀", "💡", "🎨"]).forEach((item, idx) => {
  const badge = element("span", `emoji-badge badge-${idx + 1}`, item);
  badgesRoot.append(badge);
});
const techRoot = document.querySelector("#tech-stack");
(portfolio.techStack || []).forEach(skill => {
  const pill = element("span", "tech-badge");
  pill.innerHTML = `<span class="tech-dot" aria-hidden="true"></span>`;
  pill.append(document.createTextNode(skill));
  techRoot.append(pill);
});
grid.replaceChildren(
  ...categoryMeta.map(([key, num, label]) => {
    const cards = portfolio.cards.filter(c => c.category === key);
    const group = element("section", "category-group");
    group.id = `section-${key}`;
    group.dataset.categorySection = key;
    const header = element("div", "category-header");
    header.innerHTML = `<span class="category-index">${num} / ${key.toUpperCase()}</span><h3 class="category-title">${label}</h3><span class="category-count">${String(cards.length).padStart(2, "0")}</span>`;
    const list = element("div", "category-cards");
    list.append(...cards.map(renderCard));
    group.append(header, list);
    return group;
  })
);
document.querySelector('[data-filter="all"] span').textContent = String(portfolio.cards.length).padStart(2, "0");
filterButtons.forEach(button => button.addEventListener("click", () => scrollToCategory(button.dataset.filter)));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.find(e => e.isIntersecting);
    if (visible) setActiveTab(visible.target.dataset.categorySection);
  }, { rootMargin: "-25% 0px -60% 0px" });
  document.querySelectorAll("[data-category-section]").forEach(sec => observer.observe(sec));
}

const pathItemsRoot = document.querySelector("#path-items");
const pathTimeline = document.querySelector("#path-timeline");
const pathLineFill = document.querySelector("#path-line-fill");
if (pathItemsRoot && Array.isArray(portfolio.timeline)) {
  portfolio.timeline.forEach(item => {
    const row = element("article", "path-item");
    const year = element("div", "path-year", item.year);
    const node = element("div", "path-node");
    node.setAttribute("aria-hidden", "true");
    node.append(element("span", "path-dot"));
    const card = element("div", "path-card bento-box");
    const meta = element("div", "path-meta");
    meta.append(element("span", "path-badge", item.badge), element("span", "path-period", item.period));
    const role = element("h3", "path-role", item.title);
    const org = element("p", "path-org", item.subtitle);
    card.append(meta, role, org);
    if (Array.isArray(item.bullets) && item.bullets.length) {
      const ul = element("ul", "path-bullets");
      item.bullets.forEach(line => ul.append(element("li", "", line)));
      card.append(ul);
    }
    row.append(year, node, card);
    pathItemsRoot.append(row);
  });

  const rows = [...pathItemsRoot.querySelectorAll(".path-item")];
  const updatePathScroll = () => {
    const rect = pathTimeline.getBoundingClientRect();
    const triggerY = innerHeight * 0.68;
    const progress = Math.max(0, Math.min(1, (triggerY - rect.top) / Math.max(1, rect.height)));
    pathLineFill.style.height = `${(progress * 100).toFixed(1)}%`;
    rows.forEach((row, i) => {
      const dotRect = row.querySelector(".path-dot").getBoundingClientRect();
      row.classList.toggle("is-active", i === 0 || dotRect.top <= triggerY);
    });
  };
  window.addEventListener("scroll", updatePathScroll, { passive: true });
  window.addEventListener("resize", updatePathScroll, { passive: true });
  requestAnimationFrame(updatePathScroll);
}

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    event.preventDefault();
    dialog.close();
  }
});
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  if (storyTrigger && !storyTrigger.closest("[hidden]")) storyTrigger.focus({ preventScroll: true });
});

const contactLinks = document.querySelector("#contact-links");
const headerSocials = document.querySelector("#header-socials");
const heroCtas = document.querySelector("#hero-ctas");
const contactIcons = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3ZM9 9h3v1.6c.7-1.2 1.8-1.9 3.4-1.9 3.1 0 4.6 1.9 4.6 5.4V21h-3v-6.4c0-2.1-.7-3.1-2.2-3.1-1.8 0-2.8 1.2-2.8 3.5v6H9Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
};
const links = [
  ["GitHub", portfolio.github, false, "github"],
  ["LinkedIn", portfolio.linkedin, false, "linkedin"],
  ["Email", portfolio.email ? `mailto:${portfolio.email}` : "", true, "email"],
  ["Résumé ↗", portfolio.resume, false, null]
];
links.forEach(([label, value, allowMail, icon]) => {
  const href = safeLink(value, allowMail);
  if (!href && !icon) return;
  const link = element(href ? "a" : "span", "contact-icon");
  if (icon) link.innerHTML = contactIcons[icon];
  else link.textContent = label;
  link.setAttribute("aria-label", href ? label : `${label} — add your details in content.js`);
  link.title = href ? label : `Add your ${label} in content.js`;
  if (href) {
    link.href = href;
    if (!allowMail) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  } else {
    link.setAttribute("role", "img");
  }
  contactLinks.append(link);

  if (icon === "github" || icon === "linkedin") {
    const headerLink = link.cloneNode(true);
    headerLink.className = "social-icon";
    headerSocials.append(headerLink);

    const pill = element(href ? "a" : "span", "cta-pill cta-social");
    pill.innerHTML = `${contactIcons[icon]}<span>${label}</span><span aria-hidden="true">↗</span>`;
    pill.setAttribute("aria-label", href ? label : `${label} — add your details in content.js`);
    pill.title = href ? label : `Add your ${label} in content.js`;
    if (href) {
      pill.href = href;
      pill.target = "_blank";
      pill.rel = "noopener noreferrer";
    }
    heroCtas.append(pill);
  }
});
setActiveTab("all");

if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const hero = document.querySelector(".hero");
  window.addEventListener("pointermove", e => {
    hero.style.setProperty("--mx", ((e.clientX / innerWidth) - 0.5).toFixed(3));
    hero.style.setProperty("--my", ((e.clientY / innerHeight) - 0.5).toFixed(3));
  }, { passive: true });

  document.querySelectorAll(".bento-box, .work-card").forEach(el => {
    el.addEventListener("pointermove", e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });
}
