import goMainAction from '../../events/header.js';
import popupEvent from '../../events/popupBoard.js';
import {
  commentSubmitButtonEvent,
  likeButtonEvent,
} from '../../events/buttonEvent.js';
import { getBoardInfo } from '../../util/boardInfoApi.js';
import { getComments } from '../../util/commentApi.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import { getBoardDetailHeader } from '../../components/boardDetailInfo.js';
import { commentListComponent } from '../../components/commentList.js';
import getUserInfo from '../../util/getUserInfoApi.js';

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
      <form action="boardDetail.html" class="comment-container">
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

  // 3) 렌더링 후 실행할 로직을 비동기로 (or setTimeout) 처리
  setTimeout(async () => {
    const user = await getUserInfo();
    if (user) {
      const headerImg = document.querySelector('.profile-img');
      if (headerImg && user.imageUrl) {
        headerImg.src = `http://localhost:8080${user.imageUrl}`;
      }
    }

    // 뒤로가기 버튼
    const backButton = document.getElementById('go-back');
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.history.back();
      });
    }

    // 메인 이동 로직
    goMainAction();

    // 게시글 정보 불러오기
    const boardItem = await getBoardInfo(id);
    // 게시글 헤더 렌더링
    getBoardDetailHeader(boardItem);

    // 댓글 목록 불러오기
    const commentItems = await getComments(id);
    commentListComponent(commentItems);

    // 좋아요 버튼 이벤트
    likeButtonEvent();
    // 마이페이지 토글 (프로필 아이콘 클릭)
    myPageToggle();

    // 댓글 등록 버튼 이벤트 (조금 늦게 실행)
    setTimeout(() => {
      commentSubmitButtonEvent();
    }, 100);

    // 수정 버튼(댓글)을 눌렀을 때 이벤트
    document.querySelectorAll('.comment-edit').forEach((editButton) => {
      editButton.addEventListener('click', (event) => {
        const commentInput = document.querySelector('.comment-input');
        const commentButton = document.querySelector(
          '.comment-register-button'
        );
        const index = event.target.dataset.index;
        // commentItems[index].content 등을 가져와서 폼에 반영
        commentInput.value = commentItems[index].content;
        commentButton.style.background = '#7f6aee';
      });
    });

    // 댓글 등록 시 새로고침할 때 hidden 데이터 추가
    const commentSubmit = document.querySelector('.comment-container');
    if (commentSubmit) {
      commentSubmit.innerHTML += `
        <input type="hidden" value="${boardItem.id}" name="id" />
      `;
    }
  });

  // 4) DOM 반환
  return el;
}
