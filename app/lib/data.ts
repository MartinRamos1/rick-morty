export async function getCharacters() {
    try {
      const randomPage = Math.floor(Math.random() * 42) + 1; 
  
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${randomPage}`
      );
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  }
  