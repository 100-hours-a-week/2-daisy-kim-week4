const getBoardInfo = async function (postId) {
  try {
    const response = await fetch('../data/board.json');
    if (!response.ok) {
      throw new Error(`${response.status} 에러입니다.`);
    }
    const boards = await response.json();
    const boardItem = boards.boardItems.find(
      (item) => item.id === parseInt(postId)
    );
    return boardItem;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export { getBoardInfo };
