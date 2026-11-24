const sandyReveals = document.querySelectorAll('.reveal');
const sandyObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    sandyObserver.unobserve(entry.target);
  }
}), { threshold: 0.12 });
sandyReveals.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  sandyObserver.observe(el);
});

const sandyProgress = document.querySelector('.progress');
window.addEventListener('scroll', () => {
  if (sandyProgress) {
    const pageHeight = document.documentElement.scrollHeight - innerHeight;
    sandyProgress.style.width = `${pageHeight > 0 ? (scrollY / pageHeight) * 100 : 0}%`;
  }
  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  let currentSection = '';
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 180) currentSection = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`));
  const portrait = document.querySelector('.portrait-wrap');
  if (portrait && innerWidth > 800) portrait.style.setProperty('--parallax', `${Math.min(scrollY * 0.055, 22)}px`);
}, { passive: true });

const sandyCursor = document.querySelector('.cursor-dot');
if (sandyCursor) {
  document.addEventListener('mousemove', (event) => {
    sandyCursor.style.left = `${event.clientX}px`;
    sandyCursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('a,.project,.skill').forEach((el) => {
    el.addEventListener('mouseenter', () => { sandyCursor.style.width = '18px'; sandyCursor.style.height = '18px'; });
    el.addEventListener('mouseleave', () => { sandyCursor.style.width = '8px'; sandyCursor.style.height = '8px'; });
  });
}

function sandyOpenResume(event) {
  event.preventDefault();
  let overlay = document.getElementById('sandy-resume-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sandy-resume-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Sandy Xiong Resume');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(8,12,16,.96);padding:24px 12px 40px;box-sizing:border-box;display:flex;flex-direction:column;';
    const bar = document.createElement('div');
    bar.style.cssText = 'width:min(1100px,100%);margin:0 auto 14px;display:flex;align-items:center;justify-content:space-between;gap:12px;background:#202124;color:#fff;padding:10px 14px;border-radius:8px;font:14px/1.3 Arial,sans-serif;box-shadow:0 2px 12px rgba(0,0,0,.25);';
    const title = document.createElement('span');
    title.textContent = 'Sandy Xiong Resume';
    const close = document.createElement('button');
    close.type = 'button';
    close.textContent = 'Close ✕';
    close.style.cssText = 'border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;border-radius:6px;padding:7px 10px;cursor:pointer;font:inherit;';
    close.addEventListener('click', () => { if (overlay) overlay.style.display = 'none'; document.body.style.overflow = ''; });
    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;align-items:center;gap:8px;';
    const download = document.createElement('a');
    download.href = './resources/Sandy-Xiong-Resume.pdf';
    download.download = 'Sandy-Xiong-Resume.pdf';
    download.textContent = 'Download PDF ↓';
    download.style.cssText = 'border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff;border-radius:6px;padding:7px 10px;text-decoration:none;font:inherit;';
    actions.append(download, close);
    bar.append(title, actions);
    const pdfFrame = document.createElement('iframe');
    pdfFrame.src = './resources/Sandy-Xiong-Resume.pdf?v=12#view=FitH';
    pdfFrame.title = 'Sandy Xiong Resume PDF';
    pdfFrame.style.cssText = 'width:min(920px,100%);flex:1;min-height:75vh;margin:0 auto;border:0;border-radius:10px;background:#fff;box-shadow:0 2px 18px rgba(0,0,0,.35);';
    overlay.append(bar, pdfFrame);
    document.addEventListener('keydown', (keyEvent) => {
      if (keyEvent.key === 'Escape' && overlay && overlay.style.display !== 'none') {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
    document.body.appendChild(overlay);
  } else {
    overlay.style.display = 'flex';
  }
  document.body.style.overflow = 'hidden';
}

function sandyOpenEmail(event) {
  event.preventDefault();
  const address = [115,97,110,100,121,95,120,121,111,111,106,115,64,104,111,116,109,97,105,108,46,99,111,109]
    .map((c) => String.fromCharCode(c)).join('');
  const composeUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(address)}`;
  const popup = window.open(composeUrl, '_blank', 'noopener');
  if (!popup) window.location.href = composeUrl;
}

document.querySelectorAll('.resume-link').forEach((link) => link.addEventListener('click', sandyOpenResume));
document.querySelectorAll('.email-link').forEach((link) => link.addEventListener('click', sandyOpenEmail));
