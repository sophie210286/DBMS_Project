import React, { useRef, useState } from 'react'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import StickyHeadTable from './StickyHeadTable';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const table = (name: string) => {
    const dataColumns: { [key: string]: any } = {
        'criminal': {
            columns: [
                { field: "criminalid", headerName: 'CriminalID', type: 'number', id: true, width: 130 },
                { field: "firstname", headerName: 'First Name', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "dob", headerName: 'DOB', width: 200 },
                { field: "gender", headerName: "Gender", width: 130 },
                { field: "race", headerName: "Race", width: 150 },
            ], rows: "criminal", id: "criminalid", needID: false
        },
        'victim': {
            columns: [
                { field: "victimid", headerName: 'VictimID', type: 'number', width: 130 },
                { field: "firstname", headerName: 'First Name', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "dob", headerName: 'DOB', width: 200 },
                { field: "gender", headerName: "Gender", width: 130 },
                { field: "race", headerName: "Race", width: 150 },
            ], rows: "victim", id: "victimid", needID: false
        },
        'police': {
            columns: [
                { field: "policeid", headerName: 'PoliceID', type: 'number', width: 130 },
                { field: "firstname", headerName: 'First Name', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "rank", headerName: 'Rank', width: 130 },
                { field: "dob", headerName: 'DOB', width: 200 },
                { field: "joindate", headerName: "Join Date", width: 200 },
            ], rows: "police", id: "policeid", needID: false
        },
        'policestation': {
            columns: [
                { field: "stationid", headerName: 'StationID', type: 'number', width: 130 },
                { field: "name", headerName: 'Name', width: 130 },
                { field: "city", headerName: 'City', width: 180 },
            ], rows: "policestation", id: "stationid", needID: false
        },
        'prison': {
            columns: [
                { field: "prisonid", headerName: 'PrisonID', type: 'number', width: 130 },
                { field: "prisonname", headerName: 'Prison Name', width: 130 },
                { field: "city", headerName: 'City', width: 180 },
                { field: "capacity", headerName: 'Capacity', type: 'number', width: 130 },
            ], rows: "prison", id: "prisonid", needID: false
        },
        'crimecase': {
            columns: [
                { field: "crimeid", headerName: 'CrimeID', type: 'number', width: 130 },
                { field: "street", headerName: 'Street', width: 350 },
                { field: "city", headerName: 'City', width: 180 },
                { field: "zipcode", headerName: 'Zip Code', type: 'number', width: 130 },
                { field: "occurdate", headerName: 'Occur Date', width: 200 },
                { field: "occurtime", headerName: 'Occur Time', width: 130 },
                { field: "status", headerName: 'Status', width: 130 },
                { field: "stationid", headerName: 'StationID', type: 'number', width: 130 },
                { field: "handlerid", headerName: 'HandlerID', type: 'number', width: 130 },
            ], rows: "crimecase", id: 'crimeid', needID: false
        },
        'investigate': {
            columns: [
                { field: "rownum", headerName: 'Row Number', type: 'number', width: 130 },
                { field: "crimeid", headerName: 'CrimeID', type: 'number', width: 130 },
                { field: "policeid", headerName: 'PoliceID', type: 'number', width: 130 },
                { field: "startdate", headerName: 'Start Date', width: 200 },
                { field: "enddate", headerName: 'End Date', width: 200 },
            ], rows: "investigate", id: "rownum", needID: true
        },
        'crimetype': {
            columns: [
                { field: "rownum", headerName: 'Row Number', type: 'number', width: 130 },
                { field: "typeid", headerName: 'TypeID', type: 'number', width: 130 },
                { field: "crimeid", headerName: 'CrimeID', type: 'number', width: 130 },
                { field: "ibrcode", headerName: 'IBR Code', width: 180 },
            ], rows: "crimetype", id: "rownum", needID: true
        },
        'type': {
            columns: [
                { field: "typeid", headerName: 'TypeID', type: 'number', width: 130 },
                { field: "crimename", headerName: 'Crime Name', width: 200 },
            ], rows: "type", id: "typeid", needID: false
        },
        'criminalvictimcase': {
            columns: [
                { field: "rownum", headerName: 'Row Number', type: 'number', width: 130 },
                { field: "crimeid", headerName: 'CrimeID', type: 'number', width: 130 },
                { field: "criminalid", headerName: 'CriminalID', type: 'number', width: 130 },
                { field: "victimid", headerName: 'VictimID', type: 'number', width: 130 },
                { field: "prisonyears", headerName: 'Prison Years', width: 130 },
            ], rows: "criminalvictimcase", id: "rownum", needID: true
        },
        'handler': {
            columns: [
                { field: "handlerid", headerName: 'HandlerID', type: 'number', width: 130 },
                { field: "firstname", headerName: 'First Name', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "email", headerName: 'Email', width: 130 },
                { field: "password", headerName: 'Password', width: 600 },
            ], rows: "handler", id: "handlerid", needID: false
        },
        "": { columns: [], rows: "", id: '' }

    }
    return dataColumns[name]
}


const Tables = () => {
    const [selectTable, setSelectTable] = React.useState('');
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([])
    const selected = useRef("");
    const handleChange = async (event: SelectChangeEvent) => {
        setSelectTable(event.target.value as string);
        const res = await fetch(`/api/${selected.current}`).then(i => i.json()).catch(i => console.error(i))
        let temp = res.data
        if (table(selected.current).needID) {
            temp = res.data.map((i: any, k: any) => ({ ...i, rownum: k + 1 }))
        }
        setColumns(table(selected.current).columns)
        setRows(temp ? temp : [])
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '82vh', alignItems: 'center', flexDirection: 'column', }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Table</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectTable}
                        label="Table"
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                            color: "white",
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            '.MuiSvgIcon-root ': {
                                fill: "white !important",
                            }
                        }}
                    >
                        <MenuItem onClick={() => selected.current = "crimecase"} value={"Crime Case"}>Crime Case</MenuItem>
                        <MenuItem onClick={() => selected.current = "criminal"} value={"Criminal"}>Criminal</MenuItem>
                        <MenuItem onClick={() => selected.current = "victim"} value={"Victim"}>Victim</MenuItem>
                        <MenuItem onClick={() => selected.current = "police"} value={"Police"}>Police</MenuItem>
                        <MenuItem onClick={() => selected.current = "policestation"} value={"Police Station"}>Police Station</MenuItem>
                        <MenuItem onClick={() => selected.current = "prison"} value={"Prison"}>Prison</MenuItem>
                        <MenuItem onClick={() => selected.current = "investigate"} value={"Investigate"}>Investigate</MenuItem>
                        <MenuItem onClick={() => selected.current = "crimetype"} value={"Crime Type"}>Crime Type</MenuItem>
                        <MenuItem onClick={() => selected.current = "type"} value={"Type"}>Type</MenuItem>
                        <MenuItem onClick={() => selected.current = "criminalvictimcase"} value={"Criminal Victim Case"}>Criminal Victim Case</MenuItem>
                        <MenuItem onClick={() => selected.current = "handler"} value={"Handler"}>Handler</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <DrawerHeader />
            {selected.current ? <StickyHeadTable rows={rows} columns={columns} id={table(selected.current).id} /> : null}
        </Box>
    )
}

export default Tables