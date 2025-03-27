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
  const deleteButton = document.querySelector('.withdraw');
  const cancelButton = document.querySelector('.cancel-button');
  const okButton = document.querySelector('.ok-button');

  popupOverlay.style.display = 'none';
  popupContainer.style.display = 'none';

  if (deleteButton) {
    deleteButton.addEventListener('click', () => {
      popupOverlay.style.display = 'block';
      popupContainer.style.display = 'flex';
      popupContainer.querySelector('.line1').textContent =
        '회원탈퇴 하시겠습니까?';
      popupContainer.querySelector('.line2').textContent =
        '작성된 게시글과 댓글은 삭제됩니다.';
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
