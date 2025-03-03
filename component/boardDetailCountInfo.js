import { changeCnt } from '../events/cntIncludesK.js';

async function getBoardDetails(boardItem) {
  if (boardItem) {
    return `
      <div class="board-body">
          <img class="board-img" src="${
            boardItem.contentImg === ''
              ? '../assets/img/warning.png'
              : boardItem.contentImg
          }">
          <div class="board-content">${boardItem.content}</div>
          <div class="board-reaction-info">
              <button class="like-container" id="like-box">
                  <div class="like-cnt" id="likes">${changeCnt(
                    boardItem.likes
                  )}</div>
                  <div class="like-text">좋아요수</div>
              </button>
              <div class="like-container">
                  <div class="like-cnt">${changeCnt(boardItem.views)}</div>
                  <div class="like-text">조회수</div>
              </div>
              <div class="like-container">
                  <div class="like-cnt">${changeCnt(
                    boardItem.commentsCnt
                  )}</div>
                  <div class="like-text">댓글</div>
              </div>
          </div>
      </div>
    `;
  } else {
    return '<p>게시글을 찾을 수 없습니다.</p>';
  }
}

export { getBoardDetails };
