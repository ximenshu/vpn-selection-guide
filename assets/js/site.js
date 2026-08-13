const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? '打开导航' : '关闭导航');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '打开导航');
      nav.classList.remove('is-open');
    });
  });
}

const filters = document.querySelectorAll('[data-need]');
const result = document.querySelector('[data-need-result]');

const needCopy = {
  privacy: '优先核对收集哪些数据、保留多长时间、是否与第三方共享，以及运营主体和独立审计情况。',
  media: '先确认目标平台、使用地区和播放设备，再查看产品近期说明。平台规则变化可能影响实际可用性。',
  work: '优先测试长时间连接、文件上传和视频会议稳定性，并确认公司设备是否允许安装网络工具。',
  devices: '分别核对支持的操作系统、安装方式和同时连接数量，这三个条件不能互相替代。',
  budget: '同时计算首期价格、续费价格、合约长度、退款条件和支付渠道，不要只比较折算月价。'
};

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => {
      item.setAttribute('aria-pressed', 'false');
    });

    button.setAttribute('aria-pressed', 'true');

    if (result) {
      result.textContent = needCopy[button.dataset.need];
    }
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
  }, {
    threshold: 0.12
  });

  reveals.forEach((item) => {
    observer.observe(item);
  });
} else {
  reveals.forEach((item) => {
    item.classList.add('is-visible');
  });
}
