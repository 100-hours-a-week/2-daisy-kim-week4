const nickInput = document.getElementById('nick-input');

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (email.length === 0) {
    return '*이메일을 입력해 주세요.';
  } else if (email.length < 5 || email.length > 50 || !emailRegex.test(email)) {
    return '*올바른 이메일 주소 형식을 입력해 주세요.(예 : example@example.com)';
  }
  return '';
}
function validateNick(nickName) {
  const nl = nickName.length;

  const status = 200;
  if (status === 202) {
    return '*중복된 닉네임입니다.';
  } else {
    if (nl === 0) {
      return '*닉네임을 입력해 주세요.';
    } else if (nl >= 11) {
      return '*닉네임은 최대 10자까지 작성 가능합니다.';
    } else if (nickInput.value.includes(' ')) {
      return '*띄어쓰기를 없애주세요.';
    }
  }
  return '';
}

export { validateEmail, validateNick };
