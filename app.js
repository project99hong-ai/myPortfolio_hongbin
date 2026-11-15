const grid = document.querySelector("#work-grid");
const dialog = document.querySelector("#story-dialog");
const storyContent = document.querySelector("#story-content");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const categoryNames = { experience: "Experience", projects: "Project", leadership: "Leadership" };
let storyTrigger;

const artwork = {
  mckinsey: '<span class="art-overline">AX STRATEGY & AUTOMATION</span><span class="mck-name">시공간<br>SIGONGGAN</span><span class="mck-caption">AX STRATEGY PARTNER · SNU ENACTUS</span><span class="mck-lines"></span>',
  codyssey: '<span class="art-overline">INNOVATION ACADEMY · AI NATIVE</span><span class="mck-name">Codyssey<br>AI Native</span><span class="mck-caption">AI AGENT · MULTI-AGENT ORCHESTRATION</span><span class="mck-lines"></span>',
  nvidia: '<span class="art-overline">DEEP LEARNING INSTITUTE · AICE</span><span class="google-name">NVIDIA DLI</span><span class="google-note">5 CERTIFICATES · LLM / RAG / DIFFUSION</span><span class="google-shapes"><i></i><i></i><i></i><i></i></span>',
  google: '<span class="art-overline">OPERATIONS & WORKFLOW SYSTEM</span><span class="google-name">Repers</span><span class="google-note">EXCEL VBA & CALENDAR AUTOMATION.</span><span class="google-shapes"><i></i><i></i><i></i><i></i></span>',
  product: '<span class="art-corner">01 / AX WORKFLOW PIPELINE</span><span class="product-window"><span class="window-bar">•••</span><strong>AI Agent.<br>n8n Automation.</strong><span class="window-content"><i></i><i></i><i></i></span></span><span class="product-sticker">✳</span>',
  experiment: '<span class="art-corner">02 / AI EDUCATION</span><span class="experiment-note"><strong>Zero<br>to One<br>with AI</strong><span></span><span></span></span><span class="experiment-star">✶</span>',
  community: '<span class="community-title">from zero,<br>to store.</span><span class="community-people"><i></i><i></i><i></i></span><span class="community-spark">✳</span>',
  mentorship: '<span class="art-corner">PEER LEARNING & GLOBAL VOLUNTEERING</span><svg class="mentorship-path" viewBox="0 0 250 220" fill="none"><path d="M39 171c-34-56 74-22 62-69s-56 7-26 18S201 92 167 48" stroke="#98b1b3" stroke-width="2" stroke-dasharray="5 5"/><path d="m151 54 17-17 12 20-14-5Z" fill="#f7f5e8" stroke="#687f80" stroke-width="1.5" stroke-linejoin="round"/><path d="m192 111 3 9 9 1-7 6 2 9-8-5-8 4 2-9-6-6 9-1Z" fill="#d9c89c"/></svg><span class="mentorship-title">growing together.<br>beyond borders.</span>'
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
const techIcons = {
  "Claude Code": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#d97757" aria-hidden="true"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/></svg>',
  "ChatGPT / Codex": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#10a37f" aria-hidden="true"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>',
  "n8n": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#ea4b71" aria-hidden="true"><path d="M4.8 16.8c.45 0 .6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4H9c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6s.6-.15.6-.6V15c0-1.8.6-2.4 2.4-2.4h1.2c.45 0 .6-.15.6-.6s-.15-.6-.6-.6h-1.2c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H15c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H7.8c-1.8 0-2.4-.6-2.4-2.4V7.8c0-.45-.15-.6-.6-.6s-.6.15-.6.6V9c0 1.8-.6 2.4-2.4 2.4H.6c-.45 0-.6.15-.6.6s.15.6.6.6h1.2c1.8 0 2.4.6 2.4 2.4v1.2c0 .45.15.6.6.6"/></svg>',
  "Grok": '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="#f5f5f5" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19 19 5M9.5 5H19v9.5"/><circle cx="11" cy="13" r="6"/></svg>',
  "AI Agent / RAG": '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.5 7.2 6.2 15.8M13.5 7.2l4.3 8.6M7.5 18h9"/></svg>',
  "Figma": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#f24e1e" aria-hidden="true"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>',
  "Notion": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>',
  "Slack": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#e01e5a" aria-hidden="true"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  "ClickUp": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#7b68ee" aria-hidden="true"><path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z"/></svg>',
  "Canva": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#00c4cc" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.4 16.5c-1.2 1.1-2.9 1.7-4.6 1.7-3.4 0-5.8-2.4-5.8-5.8 0-3.8 2.8-6.6 6.5-6.6 2.2 0 3.9 1.1 4.4 2.7.2.6-.1 1.2-.7 1.4-.6.2-1.2-.1-1.4-.7-.3-.9-1.2-1.4-2.3-1.4-2.4 0-4.2 1.9-4.2 4.5 0 2.2 1.5 3.7 3.7 3.7 1.2 0 2.3-.4 3.2-1.2.4-.4 1.1-.4 1.5.1.4.5.3 1.2-.3 1.6z"/></svg>',
  "Excel & Google Sheets": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#34a853" aria-hidden="true"><path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"/></svg>',
  "PowerPoint": '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="#d24726" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/></svg>',
  "AICE Basic": '<svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z"/></svg>',
  "NVIDIA DLI (LLM · RAG · Diffusion)": '<svg class="tech-icon" viewBox="0 0 24 24" fill="#76b900" aria-hidden="true"><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"/></svg>'
};
const techRoot = document.querySelector("#tech-stack");
(portfolio.techStack || []).forEach(skill => {
  const pill = element("span", "tech-badge");
  pill.innerHTML = techIcons[skill] || `<span class="tech-dot" aria-hidden="true"></span>`;
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
    header.innerHTML = `<span class="category-index">${num} / ${key.toUpperCase()}</span><h3 class="category-title">${label}</h3><div class="category-controls"><span class="category-count">${String(cards.length).padStart(2, "0")}</span></div>`;
    const list = element("div", cards.length > 2 ? "category-cards is-scrollable" : "category-cards");
    list.append(...cards.map(renderCard));
    if (cards.length > 2) {
      const controls = header.querySelector(".category-controls");
      const prevBtn = element("button", "carousel-btn", "←");
      const nextBtn = element("button", "carousel-btn", "→");
      prevBtn.type = nextBtn.type = "button";
      prevBtn.setAttribute("aria-label", `Previous ${label}`);
      nextBtn.setAttribute("aria-label", `Next ${label}`);
      const step = () => (list.querySelector(".work-card")?.offsetWidth || 360) + 20;
      prevBtn.addEventListener("click", () => list.scrollBy({ left: -step(), behavior: "smooth" }));
      nextBtn.addEventListener("click", () => list.scrollBy({ left: step(), behavior: "smooth" }));
      controls.append(prevBtn, nextBtn);

      let isDown = false, startX = 0, scrollStart = 0, dragged = false;
      list.addEventListener("pointerdown", e => {
        if (e.pointerType === "touch" || e.button !== 0) return;
        isDown = true;
        dragged = false;
        startX = e.clientX;
        scrollStart = list.scrollLeft;
      });
      window.addEventListener("pointermove", e => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 6) {
          dragged = true;
          list.classList.add("is-dragging");
          list.scrollLeft = scrollStart - dx;
        }
      });
      window.addEventListener("pointerup", () => {
        if (!isDown) return;
        isDown = false;
        setTimeout(() => list.classList.remove("is-dragging"), 0);
      });
      list.addEventListener("click", e => {
        if (dragged) {
          e.stopPropagation();
          e.preventDefault();
          dragged = false;
        }
      }, true);
    }
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
function makeGithubDropdown(accounts, btnClass, innerHTML) {
  const wrap = element("div", "gh-menu-wrap");
  const btn = element("button", btnClass);
  btn.type = "button";
  btn.innerHTML = innerHTML;
  btn.setAttribute("aria-label", "GitHub");
  btn.setAttribute("aria-haspopup", "true");
  const menu = element("div", "gh-dropdown");
  accounts.forEach(acc => {
    const href = safeLink(acc.url);
    if (!href) return;
    const item = element("a", "gh-item");
    item.href = href;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.innerHTML = `<span><strong>${acc.label}</strong><small>${acc.note || ""}</small></span><span aria-hidden="true">↗</span>`;
    menu.append(item);
  });
  btn.addEventListener("click", e => {
    e.stopPropagation();
    wrap.classList.toggle("open");
  });
  wrap.append(btn, menu);
  return wrap;
}
document.addEventListener("click", () => {
  document.querySelectorAll(".gh-menu-wrap.open").forEach(el => el.classList.remove("open"));
});

const links = [
  ["GitHub", portfolio.github, false, "github"],
  ["LinkedIn", portfolio.linkedin, false, "linkedin"],
  ["Email", portfolio.email ? `mailto:${portfolio.email}` : "", true, "email"],
  ["Résumé ↗", portfolio.resume, false, null]
];
links.forEach(([label, value, allowMail, icon]) => {
  const isMulti = Array.isArray(value) && value.length > 0;
  const href = isMulti ? null : safeLink(value, allowMail);
  if (!isMulti && !href && !icon) return;
  if (isMulti) {
    contactLinks.append(makeGithubDropdown(value, "contact-icon", contactIcons[icon]));
  } else {
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
  }

  if (icon === "github" || icon === "linkedin") {
    if (isMulti) {
      headerSocials.append(makeGithubDropdown(value, "social-icon", contactIcons[icon]));
      heroCtas.append(makeGithubDropdown(value, "cta-pill cta-social", `${contactIcons[icon]}<span>${label}</span><span aria-hidden="true">▾</span>`));
    } else {
      const headerLink = element(href ? "a" : "span", "social-icon");
      headerLink.innerHTML = contactIcons[icon];
      headerLink.setAttribute("aria-label", href ? label : `${label} — add your details in content.js`);
      headerLink.title = href ? label : `Add your ${label} in content.js`;
      if (href) {
        headerLink.href = href;
        headerLink.target = "_blank";
        headerLink.rel = "noopener noreferrer";
      }
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
