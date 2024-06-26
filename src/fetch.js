export const getWord = async () => {
  const response = await fetch('./api/new-word/', { method: 'GET' });
  const { word , definitions } = await response.json();
  return { word , definitions };
};

export const fetchIsWord = async word => {
  const body = { word };

  try {
    const response = await fetch('./api/check-word/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data.isWord;
  } catch (error) {
    return false;
  }
};
