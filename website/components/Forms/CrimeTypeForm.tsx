import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios';

const CrimeTypeForm = () => {
    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        const hset1 = new Set(['240', '23F', '120', '23D', '220', '23A', '13A', '23C', '23H', '09A', '23G', '23E', '23B', '09B'])
        if (!e.currentTarget.typeid.value || !isNumeric(e.currentTarget.typeid.value)) {
            err = true;
            arr.push("Type ID should be a number")
        }
        if (!e.currentTarget.crimeid.value || !isNumeric(e.currentTarget.crimeid.value)) {
            err = true;
            arr.push("Crime ID should be a number")
        }
        if (!hset1.has(e.currentTarget.ibrcode.value)) {
            err = true
            arr.push("IBR code should be 240, 23F, 120, 23D, 220, 23A, 13A, 23C, 23H, 09A, 23G, 23E, 23B, 09B")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/crimetype", {
            typeid: e.currentTarget.typeid.value,
            crimeid: e.currentTarget.crimeid.value,
            ibrcode: e.currentTarget.ibrcode.value,
        
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
        const remover = ["typeid", "crimeid", "ibrcode"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='typeid'
                label={"Type ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white', borderColor: 'red' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='crimeid'
                label={"Crime ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white', borderColor: 'red' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='ibrcode'
                label={"IBR Code"}
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

export default CrimeTypeForm
