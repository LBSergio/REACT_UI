import { Typography, Stack } from '@mui/material';
import React from 'react';

export const PrincipalInformation = (props) => {
    const { userStater } = props;
    const { 
        name,
        login,
        created_at
    } = userStater;

    return (
        <>
            <Stack 
                direction='row' 
                sx={{
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='subtitle2'>{created_at}</Typography>
            </Stack>
            <Typography variant='caption'>{`@${login}`}</Typography>
        </>
    )
}