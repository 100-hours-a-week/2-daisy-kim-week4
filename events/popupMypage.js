const popupEvent = document.addEventListener('DOMContentLoaded', () => {
  fetch('../component/popUp.html')
    .then((response) => response.text())
    .then((html) => {
      document.getElementById('popup-overlay').innerHTML = html;
      const popupOverlay = document.getElementById('popup-overlay');
      const popup = popupOverlay.querySelector('.popup-container');

      const withdrawButton = document.querySelector('.withdraw');
      const line1 = popup.querySelector('.line1');
      const line2 = popup.querySelector('.line2');

      popup.style.display = 'none';

      withdrawButton.addEventListener('click', () => {
        line1.textContent = '회원탈퇴 하시겠습니까?';
        line2.textContent = '작성된 게시글과 댓글은 삭제됩니다.';
        popup.style.display = 'flex';
        popupOverlay.style.display = 'block';
      });

      popupOverlay.addEventListener('click', (event) => {
        if (event.target.matches('.cancel-button, .ok-button')) {
          document.getElementById('popup-overlay').style.display = 'none';
          document.querySelector('.popup-container').style.display = 'none';
        }
      });
    });
});

export default popupEvent;
