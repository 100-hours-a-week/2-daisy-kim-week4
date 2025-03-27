import changeCnt from '../helpers/cntIncludesK.js';
import formatDate from '../helpers/formDate.js';

export function getBoardList(boardItems) {
  const boardList = document.getElementById('board-list');

  if (!boardList) return;

  const boardHTML = boardItems
    .map(
      (item) => `
        <div class="board-item" data-id="${item.id}">
          <div class="board-title">${item.title}</div>
          <div class="board-info">
            <div class="board-info-simple">
              <div class="like">좋아요 ${changeCnt(item.likeCount)}</div>
              <div class="like">댓글 ${changeCnt(item.commentCount)}</div>
              <div class="like">조회수 ${changeCnt(item.viewCount)}</div>
            </div>
            <div class="time">${formatDate(item.createdAt)}</div>
          </div>
          <hr class="line" />
          <div class="board-writer">
            <img
              class="board-writer-profile-img"
              src="${
                `http://localhost:8080${item.userImageUrl}` ||
                '/assets/img/defaultProfile.png'
              }"
              alt="프로필 이미지"
            />
            <div class="board-writer-profile-name">${item.userName}</div>
          </div>
        </div>
      `
    )
    .join('');

  boardList.innerHTML = boardHTML;

  const boardItemsElements = document.querySelectorAll('.board-item');
  boardItemsElements.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      history.pushState(null, null, `/board/${id}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  });
}
