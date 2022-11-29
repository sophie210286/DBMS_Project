import { Box, Button, Input, Typography } from '@mui/material'

function signin() {
    return (
        <Box maxWidth='xl' minHeight={'100vh'} sx={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box width={'150%'} height="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box component="form" minWidth={'32vw'} minHeight="60vh" sx={{ backgroundColor: 'white', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant="h3" sx={{fontWeight: 'bold'}} color="black">CDMS</Typography>
                    <Box sx={{marginY: '10px', width: '100%'}}>
                        <Input type="text" fullWidth placeholder='Email' />
                    </Box>
                    <Box sx={{marginY: '10px', width: '100%'}}>
                        <Input type="password" fullWidth placeholder='Password' />
                    </Box>
                    <Button variant="contained">Sign In</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default signin