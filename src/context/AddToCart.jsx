import { createContext,  useEffect,  useState } from "react";


 

  export const CardContext = createContext()




 function CartontextProvider({children}) {


    const [user1, setUser1] = useState([ ])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
      if (user1.length > 0) { // Ensure there's data to save
          localStorage.setItem('user1', JSON.stringify(user1));
      }
  }, [user1]);

  // Load user1 from local storage when the component mounts
  useEffect(() => {
      const item2 = localStorage.getItem('user1');
      if (item2) {
          setUser1(JSON.parse(item2)); // Set the user data
          setLoading(false); // Set loading to false after data is retrieved
      } else {
          setLoading(false); // Set loading to false if no data found
      }
  }, []);


    function addItemToCart(item) {

      const arr = user1

      const itemIndex = user1.findIndex((data)=> data.id == item.id)
      if (itemIndex == -1) {
          {
            arr.push({...item, quantity : 1})
          }
      }else{
arr[itemIndex].quantity++
      }
      setUser1([...arr])

   }


    function MinusItemToCart(id ) {

      const arr = user1

      const itemIndex = user1.findIndex((data)=> data.id == id)
    
arr[itemIndex].quantity--
      
      setUser1([...arr])

   }


      function removeItemToCart(id) {
         const arr = user1

         const itemIndex = user1.findIndex((data)=> data.id == id)

         arr.splice(itemIndex, 1)
         setUser1([...arr])
         

      }

         function ItemAdded(id) {

            const arr = user1
      
            const itemIndex = user1.findIndex((data)=> data.id == id)
            if (itemIndex == -1) {
              return null
            }else{
      return arr[itemIndex]
            }
      
         }

      
      
    
    return(
<CardContext.Provider value={{user1 , addItemToCart,removeItemToCart ,ItemAdded,MinusItemToCart}}>
{children}
</CardContext.Provider>
        
        
    )
    
 }

 export default CartontextProvider