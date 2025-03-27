const pwHelperEvent = () => {
  const pwInput = document.getElementById('pw-input');
  const pwHelper = document.getElementById('pw-helper-text');

  const pwCheck = document.getElementById('pw-check');
  const pwCheckHelper = document.getElementById('pw-check-helper-text');

  pwInput.addEventListener('input', () => {
    pwHelper.textContent = validatePw(pwInput.value);
    pwCheckHelper.textContent = validatePwCheck(pwCheck.value);
    pwEditButtonEvent();
  });

  pwCheck.addEventListener('input', () => {
    pwCheckHelper.textContent = validatePwCheck(pwCheck.value);
    pwEditButtonEvent();
  });
};

function validatePw(pw) {
  const pwRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  if (pw.length == 0) {
    return '*비밀번호를 입력해 주세요.';
  } else if (!pwRegex.test(pw)) {
    return '*비밀번호는 8자 이상 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';
  }
  return '';
}

function validatePwCheck(pw_check) {
  const pwInput = document.getElementById('pw-input');
  if (pw_check.length === 0) {
    return '*비밀번호를 한 번 더 입력해 주세요.';
  } else if (pw_check !== pwInput.value) {
    return '*비밀번호가 다릅니다.';
  }
  return '';
}

function pwEditButtonEvent() {
  const pwInput = document.getElementById('pw-input');
  const pwCheck = document.getElementById('pw-check');
  const loginButton = document.querySelector('.login-button');

  if (validatePw(pwInput.value) == '' && validatePwCheck(pwCheck.value) == '') {
    loginButton.style.backgroundColor = '#7f6aee';
  } else {
    loginButton.style.backgroundColor = '#aca0eb';
  }
}

export { pwHelperEvent, validatePw, validatePwCheck };
