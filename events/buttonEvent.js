function commentSubmitButtonEvent() {
  const commentInput = document.querySelector('.comment-input');
  const commentButton = document.querySelector('.comment-register-button');
  commentInput.addEventListener('input', () => {
    if (commentInput.value.length > 0) {
      commentButton.style.background = '#7f6aee';
    } else {
      commentButton.style.background = '#aca0eb';
    }
  });
}

function likeButtonEvent() {
  const likes = document.getElementById('likes');
  const likeBox = document.getElementById('like-box');

  let isLike =
    getComputedStyle(likeBox).backgroundColor === 'rgb(217, 217, 217)'
      ? false
      : true;

  likeBox.addEventListener('click', () => {
    if (!isLike) {
      if (!likes.textContent.includes('k')) {
        likes.textContent = parseInt(likes.textContent) + 1;
      }
      likeBox.style.backgroundColor = '#aca0eb';
      isLike = true;
    } else {
      if (!likes.textContent.includes('k')) {
        likes.textContent = parseInt(likes.textContent) - 1;
      }
      likeBox.style.backgroundColor = '#d9d9d9';
      isLike = false;
    }
  });
}

export { commentSubmitButtonEvent, likeButtonEvent };
