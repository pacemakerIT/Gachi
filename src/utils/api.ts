export const fetchData = async (endpoint: string) => {
    try {
      console.log(`Fetching data from: http://127.0.0.1:8000/${endpoint}`);
      const response = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch:', error);
      throw error; // 오류 재전파
    }
  };
  