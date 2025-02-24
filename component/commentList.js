const commentListComponent = async (commentItems) => {
  const commentList = document.getElementById('comment-list');
  commentList.innerHTML = commentItems
    .map(
      (item, index) => `
            <div class="comment-item">
                <div class="comment-list-right">
                    <div class="comment-top">
                        <div class="comment-writer-profile">
                            <img class="comment-writer-profile-img" src="../assets/img/defaultProfile.png">
                        </div>
                        <div class="comment-writer-name">${item.writer}</div>
                        <div class="written-time">${item.time}</div>
                    </div>
                    <div class="comment-bottom">
                        ${item.content}
                    </div>
                </div>
                <div class="comment-buttons">
                  ${
                    item.isMyComent === true
                      ? `<button class="comment-edit" data-index="${index}">수정</button>
                    <button class="board-item-edit-button" id="comment-delete">삭제</button>`
                      : ''
                  }
                </div>
            </div>
            `
    )
    .join('');
};
export { commentListComponent };
