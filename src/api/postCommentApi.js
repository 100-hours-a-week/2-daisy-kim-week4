const postComment = async (id, content) => {
  try {
    const res = await fetch(`http://localhost:8080/board/${id}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(content),
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default postComment;
