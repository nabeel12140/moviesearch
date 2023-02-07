import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import reducer from "../reducer/apireducer";

const AppContext = createContext();

const API_M = `https://www.omdbapi.com/?apikey=f1e1c9d5`;
const initialization = {
  api_data: [],
  isLoading: false,
  isError:false,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialization);
  const [query, setquery] = useState("titanic")
  const [single,setsingle]=useState([]);
  const getApi = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await fetch(url);
      const data = await res.json();
      if(data.Response==="True"){
      dispatch({ type: "SET_DATA", payload: data })
      // console.log(data)
      console.log(query)
      }
      else if(data.Response==="False")
      {
        dispatch({type:"SET_ERROR"})
      }
    } catch (error) { 
      
      console.log(error)
    }
  }
  const getMovies=async(url)=>{
    const res = await fetch(url);
    const single = await res.json();
    console.log("api",single);
    setsingle(single);
  }
  useEffect(() => {
    // const time=setTimeout(()=>{
    getApi(`${API_M}&s=${query}`);
  // },2000)
  // return ()=> clearTimeout(time);

  }, [query]);

  return (
    <AppContext.Provider value={{ ...state, setquery, query,getMovies,single}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };