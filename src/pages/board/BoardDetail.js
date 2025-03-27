import goMainAction from '../../events/header.js';
import {
  commentSubmitButtonEvent,
  likeButtonEvent,
} from '../../events/buttonEvent.js';
import { getBoardInfo } from '../../api/boardInfoApi.js';
import { getComments } from '../../api/commentApi.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import { getBoardDetailHeader } from '../../components/boardDetailInfo.js';
import { commentListComponent } from '../../components/commentList.js';
import getUserInfo from '../../api/getUserInfoApi.js';
import postComment from '../../api/postCommentApi.js';

export default function BoardDetail(params) {
  const el = document.createElement('div');
  const { id } = params;

  el.innerHTML = `
    <div id="go-back">
      <img class="go-back-img" src="/assets/img/backButton.png" />
    </div>
    <header id="header" style="cursor: pointer">아무말 대잔치</header>

    <div class="profile-icon">
      <img class="profile-img" src="/assets/img/defaultProfile.png" />
    </div>
    <div id="toggle-frame"></div>

    <div class="wrapper">
      <div class="container" id="container"></div>
      <form class="comment-container">
        <div class="comment-input-box">
          <textarea
            placeholder="댓글을 남겨주세요!!"
            class="comment-input"
          ></textarea>
        </div>
        <input
          type="submit"
          class="comment-register-button"
          value="댓글 등록"
        />
      </form>
      <div id="comment-list"></div>
    </div>
    <div id="popup-overlay"></div>
  `;

  setTimeout(async () => {
    const user = await getUserInfo();
    if (user) {
      const headerImg = document.querySelector('.profile-img');
      if (headerImg && user.imageUrl) {
        headerImg.src = `http://localhost:8080${user.imageUrl}`;
      }
    }

    const backButton = document.getElementById('go-back');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.history.back();
      });
    }

    goMainAction();

    const boardItem = await getBoardInfo(id);
    getBoardDetailHeader(boardItem);

    const commentItems = await getComments(id);
    commentListComponent(commentItems);

    likeButtonEvent();
    myPageToggle();

    setTimeout(() => {
      commentSubmitButtonEvent();
    }, 100);

    document.querySelectorAll('.comment-edit').forEach((editButton) => {
      editButton.addEventListener('click', (event) => {
        const commentInput = document.querySelector('.comment-input');
        const commentButton = document.querySelector(
          '.comment-register-button'
        );
        const index = event.target.dataset.index;
        commentInput.value = commentItems[index].content;
        commentButton.style.background = '#7f6aee';
      });
    });

    const commentForm = document.querySelector('.comment-container');
    if (commentForm) {
      commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const content = document.querySelector('.comment-input').value.trim();

        if (!content) {
          alert('댓글을 입력하세요!');
          return;
        }

        await postComment(boardItem.id, { content });

        document.querySelector('.comment-input').value = '';
        const newComments = await getComments(boardItem.id);
        commentListComponent(newComments);
      });
    }
  });

  return el;
}
