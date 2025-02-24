const myPageToggle = () => {
  const myPageButton = document.querySelector('.profile-img');
  const toggle = document.getElementById('toggle-frame');

  let isLoad = false;
  myPageButton.addEventListener('click', () => {
    if (!isLoad) {
      toggle.innerHTML = `
                        <a href="../user/updateUserInfo.html" class="edit-button">
                            <div class="edit-button-text">
                                회원정보 수정
                            </div>
                        </a>
                        <a href="../user/updatePassword.html" class="edit-button">
                            <div class="edit-button-text">
                                비밀번호 수정
                            </div>
                        </a>
                        <a href="../user/login.html" class="edit-button">
                            <div class="edit-button-text">
                                로그아웃
                            </div>
                        </a>
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
