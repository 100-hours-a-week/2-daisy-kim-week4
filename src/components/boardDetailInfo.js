import { getBoardDetails } from './boardDetailCountInfo.js';
import formatDate from '../helpers/formDate.js';
import { initPopupEvent } from '../events/popupBoard.js';

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
                              boardItem.userImageUrl === ''
                                ? '../assets/img/defaultProfile.png'
                                : `http://localhost:8080${boardItem.userImageUrl}`
                            }">
                        </div>
                        <div class="profile-name">${boardItem.userName}</div>
                        <div class="written-time">${formatDate(
                          boardItem.createdAt
                        )}</div>
                    </div>
                    <div class="board-item-info-right">
                      ${
                        boardItem.myBoard
                          ? `<a href="${boardItem.id}/post" data-link><button class="board-item-edit-button">
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

    initPopupEvent();
  } else {
    document.getElementById('container').innerHTML =
      '<p>게시글을 찾을 수 없습니다.</p>';
  }
}
export { getBoardDetailHeader };
