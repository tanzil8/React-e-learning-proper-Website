import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/utils";

// Create context here
export const UserContext = createContext(); 

function UserContextProvider({ children }) {
  const [UserInfo, setUserInfo] = useState([]);

  // Fetch product data in useEffect to prevent infinite loop
  useEffect(() => {
    async function User() {
      const querySnapshot = await getDocs(collection(db, "buyNowInfo"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setUserInfo(data); // Update state with fetched data
    }

    User(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <UserContext.Provider value={{ UserInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
