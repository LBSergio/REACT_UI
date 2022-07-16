import React from 'react';
import {Container} from '@mui/material';
import { Seacher } from './components/Seacher';

export const App = () =>{
    const [inputUser, setInputUser] = React.useState('octocat');
    const [userStater, userState] = React.useState('inputUser');

    return(
        <Container sx={{
            background: 'whitesmoke',
            widht: '80vw',
            height: '500px',
            borderRadius: '16px',
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Seacher setInputUser={setInputUser}/>
        </Container>
    )
};