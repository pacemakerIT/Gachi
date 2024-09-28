import React from 'react'
import { Box, useTheme } from '@mui/material'

interface Props {
    status: 'New' | 'Sales';
}

export default function ProgramCardStatus({ status }: Props) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '50px',
                color: theme.palette.info.light,
                backgroundColor:
                    status === 'New' ? '#01AD5A' :
                        status === 'Sales' ? '#F5813F' : '',
                padding: { xs: '2px', sm: '5px' },
                borderRadius: '4px',
                textAlign: 'center',
                zIndex: 1,
                fontSize: { xs: '0.875rem', sm: '1rem' },
            }}>
            {status}
        </Box>
    )
}
