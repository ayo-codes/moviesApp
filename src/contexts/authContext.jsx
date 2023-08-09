import React, { useState, createContext } from "react";
import fakeAuth from "../auth/fakeAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const supabase = createClient(
  "https://eskipyyifhfiesqswjwu.supabase.co",
  `${import.meta.env.VITE_SUPABASE_KEY}`
);

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // useEffect(()=> {
  //   async function getUserToken(){
  //     const userToken = await supabase.auth.getSession().then((value) => {
  //         //value.data.user
  //         if (value?.data) {
  //           console.log(value.data?.session.access_token);
  //           // setUser(value.data.user);
  //         }
  //     })

  //     return userToken
  //   }
  //   getUserToken();

  // }, [])

  // useEffect(() => {
  //   async function getUserToken() {
  //     const userToken = await supabase.auth.getSession().then((value) => {
  //       //value.data.user
  //       if (value?.data?.session.access_token) {
  //         console.log(value?.data?.session.access_token);
  //         // setUser(value.data.user);
  //       }
  //     });

  //     return userToken;
  //   }

  //   getUserToken();
  // }, []);

  // const authenticate = async (username, password) => {
  //   const token = await fakeAuth(username, password);
  //   setToken(token);
  //   const origin = location.state?.intent?.pathname || "/";
  //   navigate(origin);
  // };

  const authenticate = async () => {
    await supabase.auth.getSession().then((value) => {
       if (value?.data?.session.access_token) {
        const token = value?.data?.session.access_token ; 
        setToken(token);
        console.log(token)
        const origin = location.state?.intent?.pathname || "/success";
        navigate(origin);    
     }
  
  });

}

async function signout(){
  console.log("signout clicked")
  const { error } = await supabase.auth.signOut();
  setToken(null);
  navigate("/success");
 }

 async function getUserData(){
  await supabase.auth.getUser().then((value) => {
      //value.data.user
      if (value.data?.user) {
        console.log(value.data.user);
        setUser(value.data.user);
      }
  })
}

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        signout,
        getUserData,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
