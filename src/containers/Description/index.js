import React from 'react';
import { Stack, Typography } from '@mui/material';
import { PaperInformation } from '../../components/PaperInformation'
import { LocationInformation } from '../../components/LocationInformation'

export const Description = (props) => {
    const { userStater } = props;
    const { bio } = userStater;

    return(
        <>
            <Stack sx={{
                justifyContent: 'center'
            }}>
                {
                    bio != null 
                    ? <Typography 
                        component={"span"} 
                        variant='body1'
                    >
                        {bio}
                    </Typography> 
                    : <Typography 
                        component={"span"} 
                        variant='body1'
                    >
                        Not Available 
                    </Typography>
                }
            </Stack>
            <PaperInformation userStater={userStater}/>
            <LocationInformation userStater={userStater}/>
        </>
    )
}