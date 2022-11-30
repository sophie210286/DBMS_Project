import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const PrisonForm = () => {
    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        if (e.currentTarget.prisonname.value.length < 2 || e.currentTarget.prisonname.value.length > 66) {
            err = true
            arr.push("Prison name length should be greater than 1 and less than 67")
        }
        if (e.currentTarget.city.value.length < 2 || e.currentTarget.city.value.length > 30) {
            err = true
            arr.push("City name length should be greater than 1 and less than 31")
        }
        if (!isNumeric(e.currentTarget.capacity.value)) {
            err = true;
            arr.push("Capacity should be a number")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/prison", {
            prisonname: e.currentTarget.prisonname.value,
            city: e.currentTarget.city.value,
            capacity: e.currentTarget.capacity.value,
        }).catch(i => console.log("Error"))
        if (!res?.data) {
            arr.push("Internal server error");
            setErrors(arr)
            return
        }
        if ("error" in res.data) {
            setErrors([res.data.message])
            return
        }
        const remover = ["prisonname", "city", "capacity"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='prisonname'
                label={"Prison Name"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='city'
                type={"text"}
                label={"City"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='capacity'
                type="text"
                label={"Capacity"}
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

export default PrisonForm