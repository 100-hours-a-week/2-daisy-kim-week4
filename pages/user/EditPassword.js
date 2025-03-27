import goMainAction from '../../events/header.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import { pwHelperEvent } from '../../events/pwHelperEvent.js';
import getUserInfo from '../../util/getUserInfoApi.js';

export default function EditPassword() {
  const el = document.createElement('div');

  el.innerHTML = `
    <header id="header" style="cursor: pointer">아무말 대잔치</header>
    <div class="profile-icon">
      <img class="profile-img" src="../assets/img/defaultProfile.png" />
    </div>
    <div id="toggle-frame"></div>

    <div class="wrapper">
      <div class="page-pw-title">비밀번호 수정</div>
      <form class="edit-pw-wrapper">
        <div class="edit-pw-input">
          <div class="login-item">
            <div class="login-item-title">비밀번호*</div>
            <input
              class="login-item-input"
              type="password"
              placeholder="비밀번호를 입력하세요"
              id="pw-input"
            />
            <div class="help-text" id="pw-helper-text"></div>
          </div>
          <div class="login-item">
            <div class="login-item-title">비밀번호 확인*</div>
            <input
              class="login-item-input"
              type="password"
              placeholder="비밀번호를 한 번 더 입력하세요"
              id="pw-check"
            />
            <div class="help-text" id="pw-check-helper-text"></div>
          </div>
        </div>
        <input
          class="login-button"
          id="signup-button"
          type="submit"
          value="수정하기"
        />
      </form>
      <div class="edit-done" style="display: none">수정 완료</div>
    </div>
  `;

  setTimeout(async () => {
    goMainAction();
    myPageToggle();
    pwHelperEvent();

    const user = await getUserInfo();

    if (user) {
      const headerImg = el.querySelector('.profile-img');
      if (headerImg && user.imageUrl) {
        headerImg.src = `http://localhost:8080${user.imageUrl}`;
      }
    }

    const editDone = el.querySelector('.edit-done');
    const loginButton = el.querySelector('.login-button');

    loginButton.addEventListener('click', (event) => {
      event.preventDefault();

      if (loginButton.style.backgroundColor === 'rgb(127, 106, 238)') {
        editDone.style.display = 'flex';
      } else {
        editDone.style.display = 'none';
      }
    });
  });

  return el;
}
