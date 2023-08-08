import React, { useContext} from 'react';
import { AuthContext } from '../../contexts/authContext';
import Typography  from '@mui/material/Typography';
import  Button  from '@mui/material/Button';
import Box from '@mui/material/Box'

const LoginComponent = () => {
  const { authenticate } = useContext(AuthContext);


const login = () => {
  const password = Math.random().toString(36).substring(7);
  authenticate('user1' , password);
};

return (
  <Box align={'center'}>
    <Typography variant="h5">
      You must log in to view the protected pages
    </Typography>
    <Button onClick={login} > Login </Button>
  </Box>
)
};

export default LoginComponent;