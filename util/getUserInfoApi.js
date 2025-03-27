const getUserInfo = async () => {
  try {
    const response = await fetch('http://localhost:8080/user', {
      credentials: 'include',
    });
    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUserInfo;
