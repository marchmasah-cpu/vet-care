// Бургер-меню
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');

  if (burger && mobileMenu && overlay) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  const authActions = document.getElementById('headerActions');
  if (authActions) {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      authActions.innerHTML = `
        <a href="account.html" class="btn btn-outline header__profile-btn">Личный кабинет</a>
        <a href="#" class="btn btn-outline header__logout-btn" id="logoutBtn">Выйти</a>
      `;
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('loggedIn');
          window.location.href = 'index.html';
        });
      }
    } else {
      authActions.innerHTML = '<a href="auth.html" class="btn btn-outline header__auth-btn">Войти</a>';
    }
  }

  const mobileAuth = document.getElementById('mobileAuth');
  if (mobileAuth) {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
      mobileAuth.innerHTML = `
        <a href="account.html" class="mobile-menu__link">Личный кабинет</a>
        <a href="#" class="mobile-menu__link" id="mobileLogoutBtn">Выйти</a>
      `;
      const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
      if (mobileLogoutBtn) {
        mobileLogoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('loggedIn');
          window.location.href = 'index.html';
        });
      }
    } else {
      mobileAuth.innerHTML = '<a href="auth.html" class="mobile-menu__link">Войти</a>';
    }
  }
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
} else {
  body.classList.remove('dark-theme');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}