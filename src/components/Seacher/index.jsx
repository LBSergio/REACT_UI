import React from 'react';
import { Stack, TextField, IconButton  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

export const Seacher = (props) =>{
    const { setInputUser } = props;

    const [valueInput, setValueInput] = React.useState('');

    const onSeachValueChange = (event) =>{
        const inputValue = event.target.value 
        setValueInput(inputValue);
    };
    
    const handleClick = () =>{
        setInputUser(valueInput);
    };

    return (
        <Stack direction='row' sx={{
            marginTop: '30px',
            width: '80%'            
        }}>
            <TextField id='Textfield'
                label='Github User' 
                variant='outlined'
                placeholder='LBSergio'
                size='small'
                value={valueInput}
                onChange={onSeachValueChange}
                sx={{
                    width: '90%',
                }}
            />
            <IconButton 
                onClick={
                    handleClick
                }
                size='small' 
                sx={{
                    left: '-45px'
                }}>
                <SearchIcon/>
            </IconButton>
        </Stack>
    )
}