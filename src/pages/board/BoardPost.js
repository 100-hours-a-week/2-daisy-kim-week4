import { getBoardInfo } from '../../api/boardInfoApi.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import goMainAction from '../../events/header.js';
import getUserInfo from '../../api/getUserInfoApi.js';
import { navigateTo } from '../../router.js';

function createPostForm(boardItem) {
  const isEdit = !!boardItem;

  const titleValue = isEdit ? boardItem.title : '';
  const contentValue = isEdit ? boardItem.content : '';
  const imageFileName =
    isEdit && boardItem.imageUrl ? boardItem.imageUrl : '파일을 선택해주세요.';

  const buttonLabel = isEdit ? '수정하기' : '완료';

  const hiddenIdInput = isEdit
    ? `<input type="hidden" name="id" value="${boardItem.id}">`
    : '';

  return `
    <form class="post-wrapper">
      <div class="post-input-wrapper">
        <div class="title-item">
          <div class="post-item-title">제목*</div>
          <div class="post-titile-input-box">
            <input class="post-title-input" 
                   type="text" 
                   value="${titleValue}" 
                   placeholder="제목을 입력해주세요. (최대 26글자)">
          </div>
        </div>
        <div class="post-item">
          <div class="post-item-title">내용*</div>
          <div class="post-titile-input-box">
            <textarea class="content-input" placeholder="내용을 입력해 주세요.">${contentValue}</textarea>
          </div>
          <div class="help-text"></div>
        </div>
        <div class="post-image">
          <div class="post-image-title">이미지</div>
          <div class="file-input-wrapper">
            <label for="image-input" class="file-label">파일 선택</label>
            <span class="file-name">${imageFileName}</span>
            <input id="image-input" type="file" hidden />
          </div>
        </div>
      </div>
      ${hiddenIdInput}
      <input class="post-button" type="button" value="${buttonLabel}">
    </form>
  `;
}

function bindPostEvents(boardItem) {
  const isEdit = !!boardItem;
  const id = isEdit ? boardItem.id : null;

  const titleInput = document.querySelector('.post-title-input');
  const contentInput = document.querySelector('.content-input');
  const helpText = document.querySelector('.help-text');
  const postButton = document.querySelector('.post-button');

  setButtonColor();

  titleInput.addEventListener('input', () => {
    if (titleInput.value.length > 26) {
      titleInput.value = titleInput.value.slice(0, 26);
    }
    setButtonColor();
  });

  contentInput.addEventListener('input', () => {
    setButtonColor();
  });

  const fileInput = document.getElementById('image-input');
  const fileNameSpan = document.querySelector('.file-name');

  fileInput.addEventListener('change', () => {
    if (fileInput.files && fileInput.files.length > 0) {
      fileNameSpan.textContent = fileInput.files[0].name;
    } else {
      fileNameSpan.textContent = '파일을 선택해주세요.';
    }
  });

  postButton.addEventListener('click', async (e) => {
    if (postButton.style.backgroundColor !== 'rgb(127, 106, 238)') {
      e.preventDefault();
      if (helpText) {
        helpText.textContent = '*제목, 내용을 모두 작성해 주세요.';
      }
    } else {
      try {
        const formData = new FormData();
        formData.append('title', titleInput.value);
        formData.append('content', contentInput.value);

        if (fileInput.files && fileInput.files.length > 0) {
          formData.append('file', fileInput.files[0]);
        }

        if (!isEdit) {
          const response = await fetch('http://localhost:8080/board', {
            method: 'POST',
            credentials: 'include',
            body: formData,
          });
          console.log('POST 응답:', response);
        } else {
          const response = await fetch(`http://localhost:8080/board/${id}`, {
            method: 'PATCH',
            credentials: 'include',
            body: formData,
          });
          console.log('PATCH 응답:', response);
        }
        navigateTo('/board');
      } catch (error) {
        console.log(error);
      } finally {
        e.preventDefault();
      }
      console.log(isEdit ? '수정로직' : '작성로직');
    }
  });

  function setButtonColor() {
    if (titleInput.value.trim() && contentInput.value.trim()) {
      postButton.style.backgroundColor = '#7f6aee';
    } else {
      postButton.style.backgroundColor = '#aca0eb';
    }
  }
}

export default function BoardPost(params) {
  const el = document.createElement('div');
  el.innerHTML = `
    <header id="header" style="cursor: pointer">아무말 대잔치</header>
    <div id="go-back">
      <img class="go-back-img" src="../../assets/img/backButton.png" />
    </div>
    <div class="profile-icon">
      <img class="profile-img" src="../../assets/img/defaultProfile.png" />
    </div>
    <div id="toggle-frame"></div>
    <div class="wrapper">
      <div class="page-title">게시글 작성</div>
      <div id="container"></div>
    </div>
  `;

  setTimeout(async () => {
    myPageToggle();
    goMainAction();

    const user = await getUserInfo();

    if (user) {
      const headerImg = document.querySelector('.profile-img');
      if (headerImg && user.imageUrl) {
        headerImg.src = `http://localhost:8080${user.imageUrl}`;
      }
    }

    const backButton = document.getElementById('go-back');
    backButton?.addEventListener('click', () => {
      window.history.back();
    });

    const { id } = params || {};
    let boardItem = null;
    if (id) {
      boardItem = await getBoardInfo(id);
    }

    const container = document.getElementById('container');
    container.innerHTML = createPostForm(boardItem);

    bindPostEvents(boardItem);
  });

  return el;
}
