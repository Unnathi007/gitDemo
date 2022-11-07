// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";
 
// const UserContext = createContext();
 
// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");
 
//   return (
// <UserContext.Provider value={user}>
// <h1>{`Hello ${user}!`}</h1>
// <Component2 />
// </UserContext.Provider>
//   );
// }
 
// function Component2() {
//   const user = useContext(UserContext);
//   return (
// <>
// <h1>Component 2</h1>
// <h2>{`Hello ${user} again!`}</h2>
// <Component3 />
// </>
//   );
// }
 
// function Component3() {
//   const user = useContext(UserContext);
//   return (
// <>
// <h1>Component 3</h1>
// <h2>{`Hello ${user} again!`}</h2>
// <Component4 />
// </>
//   );
// }
 
// function Component4() {
//   const user = useContext(UserContext);
//   return (
// <>
// <h1>Component 4</h1>
// <h2>{`Hello ${user} again!`}</h2>
// <Component5 />
// </>
//   );
// }
 
// function Component5() {
//   const user = useContext(UserContext);
 
//   return (
// <>
// <h1>Component 5</h1>
// <h2>{`Hello ${user} again!`}</h2>
// </>
//   );
// }
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);