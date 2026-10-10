// 每组标签只控制自己的面板，避免方法对比和补充材料图册互相隐藏。
for (const tablist of document.querySelectorAll('[role="tablist"]')) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  function activateTab(tab) {
    for (const item of tabs) {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    }
  }

  for (const tab of tabs) {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const index = tabs.indexOf(tab);
      const next = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs.at(-1) : tabs[(index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
      activateTab(next);
      next.focus();
    });
  }
}

// 浏览器不允许写入剪贴板时给出明确反馈，避免看似复制成功。
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

// 左侧目录只标记当前段落；不改变 URL 或滚动位置。
const links = [...document.querySelectorAll('.contents a')];
const targets = links.map(link => document.querySelector(link.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  for (const link of links) link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
}, { rootMargin: '-18% 0px -55% 0px' });
for (const target of targets) observer.observe(target);
