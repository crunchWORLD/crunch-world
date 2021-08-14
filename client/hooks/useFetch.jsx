import {useEffect, useState} from "react"

export const useFetch = (url) =>{
    const [state, setState] = useState([])
    useEffect(() =>{
          fetch(url)
          .then((response) => response.json())
          .then((result) =>{
              setState(result)
              
          })
           }, [url])
    return state;
        }