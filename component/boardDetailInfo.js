import { changeCnt } from '../events/cntIncludesK.js';

async function getBoardDetail(boardItem) {
  if (boardItem) {
    const boardDetail = document.getElementById('container');
    boardDetail.innerHTML = `
            <div class="title-header">
                <div class="title">${boardItem.title}</div>
                <div class="board-item-info">
                    <div class="board-item-info-left">
                        <div class="profile-img">
                            <img class="profile-img" src="${
                              boardItem.profileImg === ''
                                ? '../assets/img/defaultProfile.png'
                                : boardItem.profileImg
                            }">
                        </div>
                        <div class="profile-name">${boardItem.writer}</div>
                        <div class="written-time">${boardItem.time}</div>
                    </div>
                    <div class="board-item-info-right">
                      ${
                        boardItem.isMyPost
                          ? `<button class="board-item-edit-button">
                            <a href="boardPost.html?id=${boardItem.id}">수정</a>
                        </button>
                        <button class="board-item-edit-button" id = "board-delete">
                            삭제
                        </button>`
                          : ''
                      }
                    </div>
                </div>
            </div>
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
                        <div class="like-cnt">${changeCnt(
                          boardItem.views
                        )}</div>
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
    document.getElementById('container').innerHTML =
      '<p>게시글을 찾을 수 없습니다.</p>';
  }
}
export { getBoardDetail };
