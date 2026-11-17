(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Print / save as PDF
  var printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  // Theme toggle (light ↔ dark), remembered per visitor
  var themeBtn = document.getElementById('theme-btn');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() {
    return root.dataset.theme || (mq.matches ? 'dark' : 'light');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Highlight the current section in the sidebar nav
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var setActive = function (id) {
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
    setActive(sections[0].id);

    // Gentle reveal on scroll
    var targets = document.querySelectorAll('.sidebar-inner > *, .section-label, .lede, #about > p, .stats, .job, .project, .skill-group, .edu');
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          reveal.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add('reveal');
      if (el.closest('.sidebar')) el.style.transitionDelay = (i * 60) + 'ms';
      reveal.observe(el);
    });
  }
})();
