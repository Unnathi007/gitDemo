import { useState, useEffect,createContext} from 'react'
 
const MyUserName = createContext({name:"Abhigna"})
function UseFetchData(url) {
    const [data, setData] = useState(null);
 
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);
 
    return { data };
}
 
export {UseFetchData,MyUserName};