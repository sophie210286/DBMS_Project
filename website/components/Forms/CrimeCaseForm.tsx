import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'


const CrimeCaseForm = () => {
    const isNumeric = (value:string) => {
        return /^\d+$/.test(value);
    }
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = async(e:any) => {
        e.preventDefault()
        let err = false
        const arr: string[] = []
        if(e.currentTarget.city.value.length === 0 || e.currentTarget.city.value.length > 30 ){
            err = true
            arr.push("City length should be greater than 0 and less than 31")
        }
        if(e.currentTarget.street.value.length === 0 || e.currentTarget.street.value.length > 40 ){
            err = true
            arr.push("Street length should be greater than 0 and less than 41")
        }
        if(!isNumeric(e.currentTarget.zipcode.value)){
            err = true;
            arr.push("ZipCode should be a number")
        }
        if(e.currentTarget.zipcode.value.length > 6){
            err = true;
            arr.push("Max zipcode should be 6")
        }
        if(e.currentTarget.status.value !== "CLOSED" && e.currentTarget.status.value !== "OPEN"){
            err = true
            arr.push("Status should be OPEN or CLOSED")
        }
        if(!isNumeric(e.currentTarget.stationid.value)){
            err = true;
            arr.push("StationID should be a number")
        }
        if(!isNumeric(e.currentTarget.handlerid.value)){
            err = true;
            arr.push("Handler ID should be a number")
        }
        if(err){
            setErrors(arr)
            return 
        }
        const res = await axios.post("/api/crimecase",{
            city: e.currentTarget.city.value,
            street: e.currentTarget.street.value,
            zipcode: e.currentTarget.zipcode.value,
            occurdate: e.currentTarget.occurdate.value,
            occurtime: e.currentTarget.occurtime.value,
            status: e.currentTarget.status.value,
            stationid: e.currentTarget.stationid.value,
            handlerid: e.currentTarget.handlerid.value,
        }).catch(i => console.log("Error"))
        if(!res?.data){
            arr.push("Internal error");
            setErrors(arr)
            return
        }
        if("error" in res.data){
            setErrors([res.data.message])
            return
        }
        const remover = ["city", "street", "zipcode", "occurdate", "occurtime", "status", "stationid", "handlerid"]
        remover.forEach(i=> e.target[i].value = e.target[i].defaultValue)
        setErrors([])
    }
    const dval = {
        date: (new Date()).toLocaleString("en-CA", { year: 'numeric', month: '2-digit', day: '2-digit'})
    }
    return (
        <Box component={"form"} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: '10px' }} >
            <br />
            <TextField
                variant="standard"
                name='city'
                label={"City"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='street'
                type={"text"}
                label={"Street"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='zipcode'
                type="text"
                label={"Zip Code"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='occurdate'
                type="date"
                label="Occur Date"
                defaultValue={dval.date}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='occurtime'
                type="time"
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='status'
                label={"Status"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='stationid'
                label={"Station ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />
            <TextField
                variant="standard"
                name='handlerid'
                label={"Handler ID"}
                sx={{ input: { color: "white" }, "& .MuiFormLabel-root": { color: 'white' }, "& .MuiFormLabel-root.Mui-focused": { color: 'white' } }}
                required
            />

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Box>

           <Box>
            {errors.length > 0? errors.map((i:any, k:any) => {
                return <li key={k+"err"}>{i}</li>
            }): null}
            </Box> 

        </Box>
    )
}

export default CrimeCaseForm