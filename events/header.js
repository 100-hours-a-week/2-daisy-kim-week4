export default function goMainAction() {
  const goMain = document.getElementById('header');
  if (!goMain) return; // 존재하지 않을 경우 대비

  goMain.addEventListener('click', () => {
    history.pushState(null, null, '/board');
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
}
