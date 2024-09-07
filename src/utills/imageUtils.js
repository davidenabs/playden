

export const getImageUrl = (imagePath) => {
    const baseUrl = process.env.REACT_APP_API_URL; 
    
    return imagePath.replace('http://127.0.0.1:8000/', baseUrl);
  };
  