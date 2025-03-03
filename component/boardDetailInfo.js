import { getBoardDetails } from './boardDetailCountInfo.js';

async function getBoardDetailHeader(boardItem) {
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
                          ? `<a href="boardPost.html?id=${boardItem.id}"><button class="board-item-edit-button">
                            수정
                        </button></a>
                        <button class="board-item-edit-button" id = "board-delete">
                            삭제
                        </button>`
                          : ''
                      }
                    </div>
                </div>
            </div>
        `;
    boardDetail.innerHTML += await getBoardDetails(boardItem);
  } else {
    document.getElementById('container').innerHTML =
      '<p>게시글을 찾을 수 없습니다.</p>';
  }
}
export { getBoardDetailHeader };
