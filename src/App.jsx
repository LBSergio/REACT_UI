import React, {useState, useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import { Seacher } from './components/Seacher';
import { UserCard } from './containers/userCard';
import { getGitHubUser } from './services/users';

export const App = () =>{
    const [inputUser, setInputUser] = useState('octocat');
    const [userStater, setUserState] = useState('inputUser');
    const [notFound, setNotFound] = useState(false);

    const gettingUser = async (user) =>{
        const userResponse = await getGitHubUser(user);

        if(userStater === 'octocat')
            localStorage.setItem('octocat',userResponse);

        if(userResponse.message === 'Not Found'){
            const { octocat } = localStorage;
            setInputUser(octocat);
            setNotFound(true);
        }else{
            setUserState(userResponse);
            setNotFound(false);
        };

        if(userResponse.message !== 'Not Found' && inputUser !== 'octocat'){
            setNotFound(false);
        }
    }

    useEffect(()=> {
        gettingUser(inputUser);
    },
    [inputUser])

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
            {
                notFound == true
                ? <Typography sx={{
                    marginTop: '30px',
                    fontWeight: 'bold',
                    fontSize: 'x-large'
                }}> 
                    THE USER DOESN´T EXIST 
                </Typography>
                : <UserCard userStater={userStater}/>
            }
        </Container>
    )
};