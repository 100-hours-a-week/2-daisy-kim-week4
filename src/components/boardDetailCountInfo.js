import changeCnt from '../helpers/cntIncludesK.js';

async function getBoardDetails(boardItem) {
  if (boardItem) {
    return `
      <div class="board-body">
          <img class="board-img" src="${
            boardItem.imageUrl === ''
              ? '../assets/img/warning.png'
              : `http://localhost:8080${boardItem.imageUrl}`
          }">
          <div class="board-content">${boardItem.content}</div>
          <div class="board-reaction-info">
              <button class="like-container" id="like-box">
                  <div class="like-cnt" id="likes">${changeCnt(
                    boardItem.likeCount
                  )}</div>
                  <div class="like-text">좋아요수</div>
              </button>
              <div class="like-container">
                  <div class="like-cnt">${changeCnt(boardItem.viewCount)}</div>
                  <div class="like-text">조회수</div>
              </div>
              <div class="like-container">
                  <div class="like-cnt">${changeCnt(
                    boardItem.commentCount
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
