import goMainAction from '../../events/header.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import getUserInfo from '../../api/getUserInfoApi.js';
import { nickNameHelperEvent } from '../../helpers/nicknameHelperEvent.js';
import { initPopupEvent } from '../../events/popupMypage.js';

export default function EditUserInfo() {
  const el = document.createElement('div');

  el.innerHTML = `
    <header id="header" style="cursor: pointer">아무말 대잔치</header>
    <div class="profile-icon">
      <img class="profile-img" id="top-profile-img" src="../assets/img/defaultProfile.png" />
    </div>
    <div id="toggle-frame"></div>
    <div class="wrapper">
      <div class="page-info-title">회원 정보 수정</div>
      <form class="signup-wrapper" id="edit-user-info-wrapper"></form>
      <button class="withdraw">회원 탈퇴</button>
      <div class="edit-done" style="display: none;">수정 완료</div>
    </div>
    <div id="popup-overlay"></div>
  `;

  setTimeout(async () => {
    goMainAction();
    myPageToggle();

    const user = await getUserInfo();
    const formWrapper = el.querySelector('#edit-user-info-wrapper');

    if (user) {
      const topProfileImg = el.querySelector('#top-profile-img');
      if (topProfileImg && user.imageUrl) {
        topProfileImg.src = `http://localhost:8080${user.imageUrl}`;
      }

      // ✅ 회원 정보 폼 렌더링
      formWrapper.innerHTML = `
        <div class="signup-profile-container">
          <div class="signup-profile-title">
            <div class="signup-profile-text">프로필 사진</div>
            <div class="help-text" id="profile-img-helper"></div>
          </div>
          <div class="signup-profile-img">
            <img class="edit-profile-img" src="http://localhost:8080${user.imageUrl}" />
            <input type="file" id="signup-profile-img-input" hidden />
            <div class="custom-profile-edit-button">
              <label for="signup-profile-img-input" class="custom-file-label-edit">변경</label>
            </div>
            <img id="profile-preview" class="profile-img-preview" src="" alt="프로필 이미지" style="display: none;" />
          </div>
        </div>

        <div class="edit-user-info-input">
          <div class="login-item">
            <div class="login-item-title">이메일*</div>
            <div class="user-email" id="email">${user.email}</div>
          </div>
          <div class="login-item">
            <div class="login-item-title">닉네임*</div>
            <input class="login-item-input" type="text" placeholder="닉네임을 입력하세요" value="${user.name}" id="nick-input" />
            <div class="help-text" id="nick-helper-text"></div>
          </div>
        </div>

        <div class="edit-submit-button">
          <input class="login-button" id="signup-button" type="submit" value="수정하기" />
        </div>
      `;

      setTimeout(() => {
        nickNameHelperEvent();
      }, 100);

      initPopupEvent();
    } else {
      formWrapper.innerHTML = `<p>사용자 정보를 찾을 수 없습니다.</p>`;
    }
  });

  return el;
}
