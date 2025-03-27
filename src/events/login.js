import { validatePw } from '../helpers/pwHelperEvent.js';
import { validateEmail } from '../helpers/userValidationEvent.js';

export function bindLoginEvents() {
  const emailInput = document.getElementById('email-input');
  const emailHelper = document.getElementById('email-helper-text');
  const pwInput = document.getElementById('pw-input');
  const pwHelper = document.getElementById('pw-helper-text');
  const loginButton = document.querySelector('.login-button');

  function isActiveLoginButton() {
    if (
      validateEmail(emailInput.value) === '' &&
      validatePw(pwInput.value) === ''
    ) {
      loginButton.style.backgroundColor = '#7f6aee';
    } else {
      loginButton.style.backgroundColor = '#aca0eb';
    }
  }

  emailInput.addEventListener('input', () => {
    emailHelper.textContent = validateEmail(emailInput.value);
    isActiveLoginButton();
  });

  pwInput.addEventListener('input', () => {
    pwHelper.textContent = validatePw(pwInput.value);
    isActiveLoginButton();
  });

  loginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = pwInput.value;

    try {
      const res = await fetch('http://localhost:8080/user/authentication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('인증 실패');
      }

      const result = await res.json();

      if (result.id) {
        history.pushState(null, null, '/board');
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error('로그인 실패:', err);
      pwHelper.textContent = '*아이디 또는 비밀번호를 확인해 주세요.';
    }
  });
}
