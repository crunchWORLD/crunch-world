import {useEffect, useState} from "react"

 const useFetch = (url) =>{
    const [state, setState] = useState([])
    useEffect(() =>{
          fetch(url)
          .then((response) => response.json())
          .then((result) =>{
              setState(result)
              
          })
           }, [url, setState])
    return state;
        }

        export default useFetch;