import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const supabase = createClient(
  "https://eskipyyifhfiesqswjwu.supabase.co",
  `${import.meta.env.VITE_SUPABASE_KEY}`
);

const LoginComponent = () => {
 
  const { authenticate , getUserData } = useContext(AuthContext);


  const navigate = useNavigate();

  useEffect (() => { supabase.auth.onAuthStateChange(
    async (event) => {
      if (event == "SIGNED_IN") {
        // forward to success url
        authenticate()
        getUserData()

        // const origin = location.state?.intent?.pathname || "/success";
        // console.log(origin);
        // // navigate(origin); 
      }
    }
  );
 })




  // const login = () => {
  //   const password = Math.random().toString(36).substring(7);
  //   authenticate("user1", password);
  // };

  return (
      <>
       <Box align={"center"}>
        <Typography variant="h5">
          You must log in to view the protected pages
        </Typography>
        {/* <Button onClick={login}> Login </Button> */}
      </Box>

        <Box align={"center"} sx={{marginLeft: 85, marginRight: 0, width:500 }}>
        <Auth
         supabaseClient={supabase}
         appearance={{ theme: ThemeSupa }}
         theme="dark"
         providers={[]}

         />
      </Box>
      
      </>
     

    
  );
};

export default LoginComponent;
