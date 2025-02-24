const myPageToggle = () => {
  const myPageButton = document.querySelector('.profile-img');
  const toggle = document.getElementById('toggle-frame');

  let isLoad = false;
  myPageButton.addEventListener('click', () => {
    if (!isLoad) {
      toggle.innerHTML = `
                        <div class="edit-button">
                            <a href="../user/updateUserInfo.html" class="edit-button-text">
                                회원정보 수정
                            </a>
                        </div>
                        <div class="edit-button">
                            <a href="../user/updatePassword.html" class="edit-button-text">
                                비밀번호 수정
                            </a>
                        </div>
                        <div class="edit-button">
                            <a href="../user/login.html" class="edit-button-text">
                                로그아웃
                            </a>
                        </div>
                    `;
      toggle.style.display = 'block';
    } else {
      toggle.innerHTML = '';
      toggle.style.display = 'none';
    }
    isLoad = !isLoad;
  });
};

export { myPageToggle };
