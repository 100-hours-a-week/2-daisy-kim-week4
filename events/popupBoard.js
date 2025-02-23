const popupEvent = document.addEventListener('DOMContentLoaded', async () => {
  await fetch('../component/popUp.html')
    .then((response) => response.text())
    .then((html) => {
      document.getElementById('popup-overlay').innerHTML = html;

      const popupOverlay = document.getElementById('popup-overlay');
      const popup = popupOverlay.querySelector('.popup-container');
      const line1 = popup.querySelector('.line1');
      const line2 = popup.querySelector('.line2');
      let isComment = false;

      popup.style.display = 'none';

      setTimeout(() => {
        const boardDeleteButton = document.getElementById('board-delete');
        const commentDeleteButton = document.getElementById('comment-delete');

        if (boardDeleteButton) {
          boardDeleteButton.addEventListener('click', (event) => {
            line1.textContent = '게시글을 삭제하시겠습니까?';
            isComment = false;
            line2.textContent = '삭제한 내용은 복구 할 수 없습니다.';
            popupOverlay.style.display = 'block';
            popup.style.display = 'flex';
          });
        }
        if (commentDeleteButton) {
          commentDeleteButton.addEventListener('click', (event) => {
            line1.textContent = '댓글을 삭제하시겠습니까?';
            isComment = true;
            line2.textContent = '삭제한 내용은 복구 할 수 없습니다.';
            popupOverlay.style.display = 'block';
            popup.style.display = 'flex';
          });
        }
        popupOverlay.addEventListener('click', (event) => {
          if (event.target.matches('.cancel-button, .ok-button')) {
            document.getElementById('popup-overlay').style.display = 'none';
            document.querySelector('.popup-container').style.display = 'none';
          }
        });
      }, 100);
    })
    .catch(() => {
      console.error('delete 버튼을 찾을 수 없습니다.');
    });
});

export default popupEvent;
