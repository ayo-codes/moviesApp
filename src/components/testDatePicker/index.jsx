import React from 'react';
import { useState } from 'react';
import { Box, Typography , TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const MuiDatePicker = () => {

  const [value , setValue] = useState(null);
  return (
    <Box>
      <Typography>
        MUI Date Picker Example 
      </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          label="Select date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>
    </Box>
  )
}

