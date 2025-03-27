import goMainAction from '../events/header.js';
import { getBoard } from '../util/boardListApi.js';
import { myPageToggle } from '../components/myPageToggle.js';
import { getBoardList } from '../components/boardList.js';
import getUserInfo from '../util/getUserInfoApi.js';

export async function bindBoardListEvents() {
  try {
    // 사용자 정보 렌더링
    const userInfo = await getUserInfo();
    if (userInfo && userInfo.imageUrl) {
      const profileImg = document.getElementById('profile-img');
      if (profileImg) {
        profileImg.src = `http://localhost:8080${userInfo.imageUrl}`;
      }
    }

    // 게시글 목록 렌더링
    const boardItems = await getBoard();
    getBoardList(boardItems);

    // 기타 이벤트
    myPageToggle();
    goMainAction();
  } catch (err) {
    console.error('boardList 초기화 실패:', err);
  }
}
