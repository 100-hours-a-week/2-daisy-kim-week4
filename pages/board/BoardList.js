import { bindBoardListEvents } from '../../scripts/boardList.js';
import getUserInfo from '../../util/getUserInfoApi.js';

export default function BoardList() {
  const el = document.createElement('div');
  el.innerHTML = `
<header id="header" style="cursor: pointer">아무말 대잔치</header>
<div class="profile-icon">
  <img class="profile-img" id="profile-img" src="/assets/img/defaultProfile.png" />
</div>
<div id="toggle-frame"></div>
<div class="wrapper">
  <div class="board-list-page-title">
    안녕하세요,<br />아무말 대잔치 <b>게시판</b> 입니다.
  </div>
  <div class="write-board-button-container">
    <a href="/board/post" class="write-board-button" data-link> 게시글 작성 </a>
  </div>
  <div id="board-list"></div>
</div>
`;
  setTimeout(async () => {
    await bindBoardListEvents();
  });
  return el;
}
