const ableColor = '#7f6aee';
const disableColor = '#aca0eb';
const disableColorRGB = 'rgb(217, 217, 217)';
const defaultColor = '#d9d9d9';

function commentSubmitButtonEvent() {
  const commentInput = document.querySelector('.comment-input');
  const commentButton = document.querySelector('.comment-register-button');
  commentInput.addEventListener('input', () => {
    if (commentInput.value.length > 0) {
      commentButton.style.background = ableColor;
    } else {
      commentButton.style.background = disableColor;
    }
  });
}

function likeButtonEvent() {
  const likes = document.getElementById('likes');
  const likeBox = document.getElementById('like-box');

  let isLike = false;
  if (getComputedStyle(likeBox).backgroundColor !== disableColorRGB) {
    isLike = true;
  }

  likeBox.addEventListener('click', () => {
    if (!isLike) {
      if (!likes.textContent.includes('k')) {
        likes.textContent = parseInt(likes.textContent) + 1;
      }
      likeBox.style.backgroundColor = disableColor;
      isLike = true;
    } else {
      if (!likes.textContent.includes('k')) {
        likes.textContent = parseInt(likes.textContent) - 1;
      }
      likeBox.style.backgroundColor = defaultColor;
      isLike = false;
    }
  });
}

export { commentSubmitButtonEvent, likeButtonEvent };
