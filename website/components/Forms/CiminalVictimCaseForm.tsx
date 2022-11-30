import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const CriminalVictimCaseForm = () => {
    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        if (e.currentTarget.crimeid.value && !isNumeric(e.currentTarget.crimeid.value)) {
            err = true;
            arr.push("Crime ID should be a number")
        }
        if (e.currentTarget.criminalid.value && !isNumeric(e.currentTarget.criminalid.value)) {
            err = true;
            arr.push("Criminal ID should be a number")
        }
        if (e.currentTarget.victimid.value && !isNumeric(e.currentTarget.victimid.value)) {
            err = true;
            arr.push("Victim ID should be a number")
        }
        if (!e.currentTarget.prisonyears.value || !isNumeric(e.currentTarget.prisonyears.value)) {
            err = true;
            arr.push("Prison years should be a number")
        }
        if (Number(e.currentTarget.prisonyears.value) < 0 || Number(e.currentTarget.prisonyears.value) > 200) {
            err = true;
            arr.push("Prison years should be between 1 and 200")
        } 
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/criminalvictimcase", {
           crimeid: e.currentTarget.crimeid.value, 
           criminalid: e.currentTarget.criminalid.value, 
           victimid: e.currentTarget.victimid.value, 
           prisonyears: e.currentTarget.prisonyears.value 
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
        const remover = ["crimeid", "criminalid", "victimid", "prisonyears"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }
    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='crimeid'
                label={"Crime ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white', borderColor: 'red' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='criminalid'
                label={"Criminal ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='victimid'
                type={"text"}
                label={"Victim ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='prisonyears'
                type="text"
                label={"Prison Years"}
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

export default CriminalVictimCaseForm
