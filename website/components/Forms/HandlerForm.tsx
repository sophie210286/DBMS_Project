import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const HandlerForm = () => {
    
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        const emailtester = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const hset1 = new Set(["ADMIN", "USER"])
        if (e.currentTarget.firstname.value.length === 0 || e.currentTarget.firstname.value.length > 20) {
            err = true
            arr.push("First Name length should be greater than 0 and less then 21")
        }
        if (e.currentTarget.lastname.value.length === 0 || e.currentTarget.lastname.value.length > 20) {
            err = true
            arr.push("Last Name length should be greater than 0 and less then 21")
        }
        if (!emailtester.test(e.currentTarget.email.value) || e.currentTarget.email.value.length === 0 || e.currentTarget.email.value.length > 50) {
            err = true
            arr.push("Email length should be greater than 0 and less then 51")
        }
        if (e.currentTarget.password.value.length < 5 || e.currentTarget.password.value.length > 150) {
            err = true
            arr.push("Password should be greater than 5 and less then 150")
        }
        if (!hset1.has(e.currentTarget.role.value)) {
            err = true
            arr.push("Role should be USER or ADMIN")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/handler", {
            firstname: e.currentTarget.firstname.value,
            lastname: e.currentTarget.lastname.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            role: e.currentTarget.role.value,
        }).catch(i => i.response)
        if (!res?.data) {
            arr.push("Error");
            setErrors(arr)
            return
        }
        if ("error" in res.data) {
            setErrors([res.data.message])
            return
        }
        const remover = ["firstname", "lastname", "email", "password", "role"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='firstname'
                label={"First Name"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='lastname'
                type={"text"}
                label={"Last Name"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                label={"Email"}
                name='email'
                type={"email"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                label={"Password"}
                name='password'
                type="password"
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                label={"Role"}
                name='role'
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Box>

            <Box>
                {errors.length > 0 ? errors.map((i: any, k: any) => {
                    return <li key={k + "err"}>{i}</li>
                }) : null}
            </Box>

        </Box>
    )
}

export default HandlerForm