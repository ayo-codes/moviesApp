import React, {useEffect , useState} from 'react';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import Button  from '@mui/material/Button';
import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';



const supabase = createClient(
  "https://eskipyyifhfiesqswjwu.supabase.co",
  `${import.meta.env.VITE_SUPABASE_KEY}`
);


const SuccessComponent = () => {

  const { token } = useContext(AuthContext);
  const [user , setUser] = useState({});
  const navigate = useNavigate();


  useEffect(()=> {
    async function getUserData(){
      await supabase.auth.getUser().then((value) => {
          //value.data.user
          if (value.data?.user) {
            console.log(value.data.user);
            setUser(value.data.user);
          }
      })
    }

    getUserData();
  }, [])

  // useEffect(()=> {
  //   async function getUserToken(){
  //     await supabase.auth.getSession().then((value) => {
  //         //value.data.user
  //         if (value?.data?.session.access_token) {
  //           console.log(value?.data?.session.access_token);
  //           // setUser(value.data.user);
  //         }
  //     })
  //   }
  
  //   getUserToken();
  // }, [])

  // async function signOutUser(){
  //  const { error} = await supabase.auth.signOut();
  //  navigate("/");
  // }

return (
  <Box align={'center'}>
    { token ? 
    <>
        <Typography variant="h5">
      Welcome back {user.email} You've Logged in successfully
    </Typography>  
 
    </>
    :
    <>
            <Typography variant="h5">
      Logged out successfully
    </Typography> 
    <Button color="inherit" sx={{border: 1}} onClick={() => { navigate("/")}}> Go to Home </Button>
    </>
}
  </Box>


)
};

export default SuccessComponent;

