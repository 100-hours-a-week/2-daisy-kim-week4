const nickNameHelperEvent = () => {
  const editDone = document.querySelector('.edit-done');
  const submitButton = document.querySelector('.login-button');
  const nickInput = document.getElementById('nick-input');
  const nickHelper = document.getElementById('nick-helper-text');

  nickInput.addEventListener('input', () => {
    nickHelper.textContent = '';
    editDone.style.display = 'none';
  });
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const status = 200; //나중에 수정api 호출에 따른 백엔드 response status로 받을 예정
    if (status == 202) {
      nickHelper.textContent = '*중복된 닉네임입니다.';
      editDone.style.display = 'none';
    } else {
      if (nickInput.value.length === 0) {
        nickHelper.textContent = '*닉네임을 입력해 주세요.';
        editDone.style.display = 'none';
      } else if (nickInput.value.length >= 11) {
        nickHelper.textContent = '*닉네임은 최대 10자까지 작성 가능합니다.';
        editDone.style.display = 'none';
      } else {
        nickHelper.textContent = '';
        editDone.style.display = 'flex';
      }
    }
  });
};
export { nickNameHelperEvent };
