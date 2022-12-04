import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const TypeForm = () => {
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = [] 
        if (e.currentTarget.crimename.value.length < 3) {
            err = true
            arr.push("Crime name length should be greater than 2.")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/type", {
            crimename: e.currentTarget.crimename.value,
        }).catch(i => i.response)
        if (!res?.data) {
            arr.push("Internal server error");
            setErrors(arr)
            return
        }
        if ("error" in res.data) {
            setErrors([res.data.message])
            return
        }
        const remover = ["crimename"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='crimename'
                label={"Crime Name"}
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

export default TypeForm
