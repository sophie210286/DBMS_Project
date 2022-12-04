import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const CriminalForm = () => {
    const isNumeric = (value: string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e: any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        const hset1 = new Set(["Black", "White", "Latino", "Hispanic", "American Indian", "Asian", "Two or More Races"])
        if (e.currentTarget.firstname.value.length === 0 || e.currentTarget.firstname.value.length > 20) {
            err = true
            arr.push("First Name length should be greater than 0 and less than 21")
        }
        if (e.currentTarget.lastname.value.length === 0 || e.currentTarget.lastname.value.length > 20) {
            err = true
            arr.push("Last Name length should be greater than 0 and less than 21")
        }
        if (e.currentTarget.gender.value !== "Male" && e.currentTarget.gender.value !== "Female") {
            err = true
            arr.push("Gender should be Male or Female")
        }
        if (!hset1.has(e.currentTarget.race.value)) {
            err = true
            arr.push("Race should be Black, White, Latino, Hispanic, American Indian, Asian, Two or More Races.")
        }
        if (!isNumeric(e.currentTarget.prisonid.value)) {
            err = true;
            arr.push("Prison ID should be a number")
        }
        if (err) {
            setErrors(arr)
            return
        }
        const res = await axios.post("/api/criminal", {
            firstname: e.currentTarget.firstname.value,
            lastname: e.currentTarget.lastname.value, 
            gender: e.currentTarget.gender.value, 
            dob: e.currentTarget.dob.value, 
            race: e.currentTarget.race.value, 
            prisonid: e.currentTarget.prisonid.value 
        
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
        const remover = ["firstname", "lastname", "gender", "dob", "race", "prisonid"]
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
                name='gender'
                type="text"
                label={"Gender"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='dob'
                type="date"
                label="DOB"
                defaultValue={dval.date}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='race'
                label={"Race"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='prisonid'
                label={"Prison ID"}
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

export default CriminalForm