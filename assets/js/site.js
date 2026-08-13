const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}

const filters = document.querySelectorAll('[data-need]');
const result = document.querySelector('[data-need-result]');
const needCopy = {
  privacy: '优先核对数据收集、保留、共享、公司主体与独立审计，不要只看“无日志”四个字。',
  media: '先确认目标平台、地区和设备，再核对近期可用说明；任何解锁承诺都可能随平台策略变化。',
  work: '优先测试长时间连接、上传和会议稳定性，并确认公司设备是否允许安装第三方工具。',
  devices: '分别核对支持系统、安装方式与同时连接上限，这三个概念不能互相替代。',
  budget: '把优惠期、续费价、合约长度、退款条件和支付渠道合并计算，不只比较首月数字。'
};

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    if (result) result.textContent = needCopy[button.dataset.need];
  });
});

const reveals = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add('is-visible'));
}

