import Login from './pages/user/Login.js';
import Signup from './pages/user/Signup.js';
import BoardList from './pages/board/BoardList.js';
import BoardDetail from './pages/board/BoardDetail.js';
import EditUserInfo from './pages/user/EditUserInfo.js';
import EditPassword from './pages/user/EditPassword.js';
import BoardPost from './pages/board/BoardPost.js';

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: Signup },
  { path: '/board', component: BoardList },
  { path: '/board/post', component: BoardPost },
  { path: '/board/:id', component: BoardDetail },
  { path: '/board/:id/post', component: BoardPost },
  { path: '/user/edit', component: EditUserInfo },
  { path: '/user/edit/password', component: EditPassword },
];

export function initRouter() {
  window.addEventListener('popstate', render);
  document.body.addEventListener('click', onLinkClick);
  render();
}

function onLinkClick(e) {
  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    navigateTo(link.href);
  }
}

export function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

function matchRoute(path) {
  for (const route of routes) {
    const paramNames = [];
    const regexPath = route.path.replace(/:([^/]+)/g, (_, key) => {
      paramNames.push(key);
      return '([^/]+)';
    });

    const regex = new RegExp(`^${regexPath}$`);
    const match = path.match(regex);
    if (match) {
      const params = paramNames.reduce((acc, name, i) => {
        acc[name] = match[i + 1];
        return acc;
      }, {});
      return { component: route.component, params };
    }
  }
  return { component: NotFound, params: {} };
}

function render() {
  const path = window.location.pathname;
  const { component, params } = matchRoute(path);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(component(params));
}
