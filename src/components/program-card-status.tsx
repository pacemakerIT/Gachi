import { Box } from '@mui/material'
import React from 'react'

interface Props {
    status: 'New' | 'Sales';
}

export default function ProgramCardStatus({ status }: Props) {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '50px',
                color: '#fff',
                backgroundColor:
                    status === 'New' ? '#01AD5A' :
                        status === 'Sales' ? '#F5813F' : '',
                padding: { xs: '2px', sm: '5px' },
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', sm: '1rem' },
            }}>
            {status}
        </Box>
    )
}
