const getComments = async function (postId) {
  try {
    const response = await fetch(
      `http://localhost:8080/board/${postId}/comment`,
      { credentials: 'include' }
    );
    if (!response.ok) {
      throw new Error(`${response.status} 에러입니다.`);
    }
    const comments = await response.json();
    console.log(comments);
    return comments;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export { getComments };
