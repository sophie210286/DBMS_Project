import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleSignUp = (e:any) => {
    e.preventDefault();
    router.push("/signup")
  }
  const handleSignIn = (e:any) => {
    e.preventDefault();
    router.push("/signin")
  }

  return (
    <Box maxWidth={'xl'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} height='100vh'>
        <Typography variant="h3" sx={{ fontWeight: 'bold', padding: '2rem' }} >Crime Data Management System</Typography>
        <Box sx={{display: 'flex',  }}>
          <Button variant="contained" sx={{marginX: '1rem'}} onClick={handleSignUp}>Sign Up</Button>
          <Button variant="contained" sx={{marginX: '1rem'}} onClick={handleSignIn}>Login In</Button>
        </Box>
    </Box>
  )
}