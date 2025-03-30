export default function goMainAction() {
  const goMain = document.getElementById('header');
  if (!goMain) return;

  goMain.addEventListener('click', () => {
    history.pushState(null, null, '/board');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
}
