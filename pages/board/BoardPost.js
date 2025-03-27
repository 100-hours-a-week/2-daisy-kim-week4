import { getBoardInfo } from '../../util/boardInfoApi.js';
import { myPageToggle } from '../../components/myPageToggle.js';
import goMainAction from '../../events/header.js';
import getUserInfo from '../../util/getUserInfoApi.js';

// 👉 form HTML을 생성하는 함수: "수정 모드" vs "작성 모드" 차이만 if문으로 처리
function createPostForm(boardItem) {
  const isEdit = !!boardItem; // boardItem이 있으면 수정 모드, 없으면 작성 모드

  // 타이틀/컨텐츠 기본값
  const titleValue = isEdit ? boardItem.title : '';
  const contentValue = isEdit ? boardItem.content : '';
  // 이미지 파일명 표시
  const imageFileName =
    isEdit && boardItem.imageUrl ? boardItem.imageUrl : '파일을 선택해주세요.';

  // 버튼 표시
  const buttonLabel = isEdit ? '수정하기' : '완료';

  // hidden input: 수정 모드에서만 id 전달
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
      <input class="post-button" type="submit" value="${buttonLabel}">
    </form>
  `;
}

function bindPostEvents(boardItem) {
  // 제목, 내용, 버튼, 헬퍼 텍스트 가져오기
  const titleInput = document.querySelector('.post-title-input');
  const contentInput = document.querySelector('.content-input');
  const helpText = document.querySelector('.help-text');
  const postButton = document.querySelector('.post-button');

  // 초기 버튼색 설정
  setButtonColor();

  // 제목 입력 제한 & 버튼색
  titleInput.addEventListener('input', () => {
    if (titleInput.value.length > 26) {
      titleInput.value = titleInput.value.slice(0, 26);
    }
    setButtonColor();
  });

  // 내용 입력
  contentInput.addEventListener('input', () => {
    setButtonColor();
  });

  // 등록/수정 버튼
  postButton.addEventListener('click', (e) => {
    // 버튼이 비활성이라면
    if (postButton.style.backgroundColor !== 'rgb(127, 106, 238)') {
      e.preventDefault();
      if (helpText) {
        helpText.textContent = '*제목, 내용을 모두 작성해 주세요.';
      }
    } else {
      // 👉 여기에서 API 호출, 폼 전송 로직 등 수행 (생략)
      // e.preventDefault();  // SPA 완전 적용 시
      // console.log(isEdit ? '수정로직' : '작성로직');
    }
  });

  // 내부 함수: 버튼 색 결정
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

  // 렌더링 후 로직
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

    // 뒤로가기 버튼
    const backButton = document.getElementById('go-back');
    backButton?.addEventListener('click', () => {
      window.history.back();
    });

    // id 파라미터 추출
    const { id } = params || {};
    let boardItem = null;
    if (id) {
      boardItem = await getBoardInfo(id);
    }

    // 폼 생성
    const container = document.getElementById('container');
    container.innerHTML = createPostForm(boardItem);

    // 이벤트 바인딩
    bindPostEvents(boardItem);
  });

  return el;
}
