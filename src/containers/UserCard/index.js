import { CardMedia, Grid, Stack } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation';
import { Description } from '../Description';
import React from 'react';

export const UserCard = (props) => {
    const{ userStater } = props;
    const { avatar_url } = userStater;
    return(
        <Grid 
            container 
            spacing={2}
            sx={{
                marginTop: '15px'
            }}
            >
            <Grid item xs={3}>
                <CardMedia
                    component='img'
                    image={avatar_url}
                    alt='GitHub User'
                    sx={{
                        borderRadius: '50%',
                        marginLeft: '5px',
                    }}
                />
            </Grid>
            <Grid item xs={9}>
                <Stack 
                    direction='column'
                    spacing={1}
                    sx={{
                        margin: '30px'
                    }}
                >
                    <PrincipalInformation userStater={userStater}/>
                    <Description userStater={userStater}/>
                </Stack>
            </Grid>  
        </Grid>
    )
}