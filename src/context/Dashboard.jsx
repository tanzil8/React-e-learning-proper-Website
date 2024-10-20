import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/utils";

export const DashboardContext = createContext(); // Create context here

function DashboardContextProvider({ children }) {
  const [dash, setDash] = useState([]);

  // Fetch dashboard data in useEffect to prevent infinite loop
  useEffect(() => {
    async function fetchDashboardData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setDash(data); // Update state with fetched data
    }

    fetchDashboardData(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <DashboardContext.Provider value={{ dash, setDash }}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContextProvider;
