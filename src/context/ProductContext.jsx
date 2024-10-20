import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/utils";

// Create context here
export const ProductContext = createContext(); 

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  // Fetch product data in useEffect to prevent infinite loop
  useEffect(() => {
    async function fetchProductData() {
      const querySnapshot = await getDocs(collection(db, "Product"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setProduct(data); // Update state with fetched data
    }

    fetchProductData(); // Call the async function to fetch data
  }, []); // Empty dependency array ensures this only runs once on mount

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
