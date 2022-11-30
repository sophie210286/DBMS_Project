import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const InvestigateForm = () => {
    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        if (!e.currentTarget.crimeid.value || !isNumeric(e.currentTarget.crimeid.value)) {
            err = true;
            arr.push("Crime ID should be a number")
        }
        if (!e.currentTarget.policeid.value || !isNumeric(e.currentTarget.policeid.value)) {
            err = true;
            arr.push("Police ID should be a number")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/investigate", {
            crimeid: e.currentTarget.crimeid.value,
            policeid: e.currentTarget.policeid.value,
            startdate: e.currentTarget.startdate.value,
            enddate: e.currentTarget.enddate.value,
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
        const remover = ["crimeid", "policeid", "startdate", "enddate"]
        remover.forEach(i => e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }
    const dval = {
        date: (new Date()).toLocaleString("en-CA", { year: 'numeric', month: '2-digit', day: '2-digit' })
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
                name='policeid'
                label={"Police ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white', borderColor: 'red' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='startdate'
                type="date"
                label="Start Date"
                defaultValue={dval.date}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='enddate'
                type="date"
                label="End Date"
                defaultValue={dval.date}
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

export default InvestigateForm
