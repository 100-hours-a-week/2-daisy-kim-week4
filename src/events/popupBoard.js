export function initPopupEvent() {
  const popupHTML = `
    <div class="popup-overlay">
      <div class="popup-container">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="popup-select-buttons">
          <div class="cancel-button">취소</div>
          <div class="ok-button">확인</div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', popupHTML);

  const popupOverlay = document.querySelector('.popup-overlay');
  const popupContainer = document.querySelector('.popup-container');
  const deleteButton = document.getElementById('board-delete');
  const cancelButton = document.querySelector('.cancel-button');
  const okButton = document.querySelector('.ok-button');

  popupOverlay.style.display = 'none';
  popupContainer.style.display = 'none';

  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      popupOverlay.style.display = 'block';
      popupContainer.style.display = 'flex';
      popupContainer.querySelector('.line1').textContent =
        '게시글을 삭제하시겠습니까?';
      popupContainer.querySelector('.line2').textContent =
        '삭제한 내용은 복구할 수 없습니다.';
    });
  }

  cancelButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    popupContainer.style.display = 'none';
  });

  okButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
    popupContainer.style.display = 'none';
  });
}
