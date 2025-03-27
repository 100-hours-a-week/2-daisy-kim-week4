async function getBoard() {
  try {
    const response = await fetch('http://localhost:8080/board', {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`${response.status} 에러입니다.`);
    }
    const boards = await response.json();
    return boards;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { getBoard };
