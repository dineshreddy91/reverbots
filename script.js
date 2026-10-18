document.querySelector("#year").textContent = new Date().getFullYear();

function emailLink() {
  const link = document.createElement("a");
  link.className = "email";
  link.href = "mailto:evan@reverebots.com";
  link.textContent = "evan@reverebots.com";
  return link;
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-contact]");
  if (!button) return;
  const shown = emailLink();
  button.replaceWith(shown);
  for (const node of document.querySelectorAll("[data-contact]")) node.replaceWith(emailLink());
  shown.focus();
});
