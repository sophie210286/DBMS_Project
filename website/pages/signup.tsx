import React from 'react'
import { Box, Button, Input, Typography } from '@mui/material'

function signup() {
  return (
            <Box maxWidth='xl' minHeight={'100vh'} sx={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box width={'50%'} height="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h2">Sign Up</Typography>
            </Box>
            <Box width={'50%'} height="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box component="form" minWidth={'38vw'} minHeight="60vh" sx={{ backgroundColor: 'white', borderRadius: '20px', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',  gap: '1rem' }}>
                    <Box>
                        <Input spellCheck="false" type='text' placeholder='First Name' />
                    </Box>
                    <Box>
                        <Input spellCheck="false" type='text' placeholder='Last Name' />
                    </Box>
                    <Box sx={{gridColumn: '1/3'}}>
                        <Input sx={{width: '100%'}} type='email' placeholder='Email' />
                    </Box>
                    <Box>
                        <Input type='password' placeholder='Password' />
                    </Box>
                    <Box>
                        <Input type='password' placeholder='Confirm Password' />
                    </Box>
                    <Box sx={{gridColumn: '1/3', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button variant='contained'>Sign Up</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
  )
}

export default signup