// Show an explicit fallback when clipboard access is unavailable.
document.getElementById('copy-citation').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(document.querySelector('#citation code').textContent);
    button.textContent = 'Copied';
  } catch {
    button.textContent = 'Select text to copy';
  }
  window.setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2500);
});

// Highlight the current section without changing the URL or scroll position.
const links = [...document.querySelectorAll('.contents a')];
const targets = links.map(link => document.querySelector(link.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  for (const link of links) link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
}, { rootMargin: '-18% 0px -55% 0px' });
for (const target of targets) observer.observe(target);
