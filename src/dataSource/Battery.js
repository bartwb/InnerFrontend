const BASE_URL = "http://localhost:5002";

// Fetch all batteries
export const fetchBatteries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/battery`);
    if (!response.ok) {
      throw new Error("Failed to fetch batteries");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching batteries:", error);
    throw error; 
  }
};
