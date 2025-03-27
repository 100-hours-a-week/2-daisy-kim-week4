import { bindLoginEvents } from '../../scripts/login.js';

export default function Login() {
  const el = document.createElement('div');
  el.innerHTML = `
<header>아무말 대잔치</header>
<div class="wrapper">
  <div class="login-title">로그인</div>
  <form class="login-wrapper">
    <div class="login-input-wrapper">
      <div class="login-item">
        <div class="login-item-title">이메일</div>
        <input
          class="login-item-input"
          type="text"
          placeholder="이메일을 입력하세요"
          id="email-input"
        />
        <div class="help-text" id="email-helper-text"></div>
      </div>
      <div class="login-item">
        <div class="login-item-title">비밀번호</div>
        <input
          class="login-item-input"
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="pw-input"
        />
        <div class="help-text" id="pw-helper-text"></div>
      </div>
    </div>
    <button class="login-button" type="submit">로그인하기</button>
  </form>
  <a class="go-to-signup" href="/signup" data-link>회원가입</a>
</div>
`;
  setTimeout(() => {
    bindLoginEvents();
  });
  return el;
}
