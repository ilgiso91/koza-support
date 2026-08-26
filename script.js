const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Menüyü aç");
    mobileMenu.hidden = true;
  };

  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "Menüyü kapat" : "Menüyü aç");
    mobileMenu.hidden = !willOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
}

document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll(".faq-list details[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const openLinkedFaq = () => {
  const linkedFaq = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (linkedFaq instanceof HTMLDetailsElement) linkedFaq.open = true;
};

openLinkedFaq();
window.addEventListener("hashchange", openLinkedFaq);

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
