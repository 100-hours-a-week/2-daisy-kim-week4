function getBoardList(boardItems) {
  const boardList = document.getElementById('board-list');
  const boardHTML = boardItems
    .map(
      (item) => `
                <div class="board-item" board-id="${item.id}">
                    <div class="board-title">${item.title}</div>
                    <div class="board-info">
                        <div class="board-info-simple">
                            <div class="like">좋아요 ${changeCnt(
                              item.likes
                            )}</div>
                            <div class="like">댓글 ${changeCnt(
                              item.commentsCnt
                            )}</div>
                            <div class="like">조회수 ${changeCnt(
                              item.views
                            )}</div>
                        </div>
                        <div class="time">${item.time}</div>
                    </div>
                    <hr class="line">
                    <div class="board-writer">
                        <img class="board-writer-profile-img" src="${
                          item.profileImg || '../assets/img/defaultProfile.png'
                        }" alt="프로필 이미지">
                        <div class="board-writer-profile-name">${
                          item.writer
                        }</div>
                    </div>
                </div>
            `
    )
    .join('');

  function changeCnt(cnt) {
    if (cnt > 100000) {
      return '100k';
    } else if (cnt > 10000) {
      return '10k';
    } else if (cnt > 1000) {
      return '1k';
    }
    return cnt;
  }

  boardList.innerHTML = boardHTML;

  const boardItemsElements = document.querySelectorAll('.board-item');
  boardItemsElements.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('board-id');
      window.location.href = `boardDetail.html?id=${id}`;
    });
  });
}

export { getBoardList };
