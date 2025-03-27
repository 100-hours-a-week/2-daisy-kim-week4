import { bindLoginEvents } from '../../events/login.js';

export default function Signup() {
  const el = document.createElement('div');
  el.innerHTML = `
<header>아무말 대잔치</header>
<div id="go-back">
  <img class="go-back-img" src="../assets/img/backButton.png" />
</div>
<div class="wrapper">
  <div class="signup-title">회원가입</div>
  <form class="signup-wrapper">
    <div class="signup-profile-container">
      <div class="signup-profile-title">
        <div class="signup-profile-text">프로필 사진</div>
        <div class="help-text" id="profile-img-helper"></div>
      </div>
      <div class="signup-profile-img">
        <input type="file" id="signup-profile-img-input" />
        <label for="signup-profile-img-input" class="custom-file-label"
          >+</label
        >
        <img
          id="profile-preview"
          class="profile-img-preview"
          src=""
          alt="프로필 이미지"
          style="display: none"
        />
      </div>
    </div>
    <div class="signup-input-wrapper">
      <div class="login-item">
        <div class="login-item-title">이메일*</div>
        <input
          class="login-item-input"
          type="text"
          placeholder="이메일을 입력하세요"
          id="email-input"
        />
        <div class="help-text" id="email-helper-text"></div>
      </div>
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
      <div class="login-item">
        <div class="login-item-title">닉네임*</div>
        <input
          class="login-item-input"
          type="text"
          placeholder="닉네임을 입력하세요"
          id="nick-input"
        />
        <div class="help-text" id="nick-helper-text"></div>
      </div>
    </div>
    <input
      class="login-button"
      id="signup-button"
      type="submit"
      value="회원가입"
    />
  </form>
  <a class="go-to-signup" href="/login" data-link>로그인하러 가기</a>
</div>
`;
  setTimeout(() => {
    bindLoginEvents();
  });
  return el;
}
