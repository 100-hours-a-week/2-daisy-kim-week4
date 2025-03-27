const getBoardInfo = async function (postId) {
  try {
    const response = await fetch(`http://localhost:8080/board/${postId}`, {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`${response.status} 에러입니다.`);
    }
    const board = await response.json();
    return board;
  } catch (error) {
    console.log(error);
    alert('게시글 목록을 찾을 수 없습니다.');
    return null;
  }
};
export { getBoardInfo };
