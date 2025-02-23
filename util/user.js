async function getUser() {
  try {
    const response = await fetch('../data/user.json');
    if (!response.ok) {
      throw new Error(`${response.status} 에러입니다.`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { getUser };
