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
        '1': {
            columns: [
                { field: "prisonname", headerName: 'Prison Name', width: 130 },
                { field: "city", headerName: 'City', width: 130 },
                { field: "totalcrimes", headerName: 'Total Crimes', width: 130 },
            ], rows: "custom", id: "rownum", needID: true
        },
        '2': {
            columns: [
                { field: "firstname", headerName: 'First Name', type: 'number', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "rank", headerName: 'Rank', width: 130 },
                { field: "numoftimes", headerName: 'Num of Times', type: 'number', width: 130 },
            ], rows: "custom", id: "rownum", needID: true
        },
        '3': {
            columns: [
                { field: "policeid", headerName: 'PoliceID', type: 'number', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "involved", headerName: 'Involved', type: 'number', width: 130 },
            ], rows: "police", id: "policeid", needID: false
        },
        '4': {
            columns: [
                { field: "crimename", headerName: 'Crime Name', type: 'number', width: 130 },
                { field: "totalcriminal", headerName: 'Total Criminal', width: 130 },
            ], rows: "4", id: "crimename", needID: false
        },
        '5': {
            columns: [
                { field: "firstname", headerName: 'First Name', width: 130 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "gender", headerName: 'City', width: 180 },
                { field: "race", headerName: 'Race', width: 130 },
                { field: "count", headerName: 'Count', type: 'number', width: 130 },
            ], rows: "custom", id: "rownum", needID: true
        },
        '6': {
            columns: [
                { field: "gender", headerName: 'Gender', width: 130 },
                { field: "avgage", headerName: 'Avg Age', type: 'number', width: 180 },
                { field: "firstname", headerName: 'First Name', width: 180 },
                { field: "lastname", headerName: 'Last Name', width: 130 },
                { field: "crimecount", headerName: 'Crime Count', type: 'number', width: 130 },
            ], rows: "custom", id: 'rownum', needID: true
        },
        '7': {
            columns: [
                { field: "city", headerName: 'City', type: 'number', width: 130 },
                { field: "totalfemale", headerName: 'Total Female', type: 'number', width: 130 },
                { field: "totalmale", headerName: 'Total Male', type: 'number', width: 130 },
            ], rows: "city", id: "city", needID: false
        },
        "": { columns: [], rows: "", id: '' }
    }
    return dataColumns[name]
}


const Reports = () => {
    const [query, setQuery] = React.useState('');
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([])
    const [question, setQuestion] = useState("")
    const [queryString, setQueryString] = useState("")
    const selected = useRef("");
    const handleChange = async (event: SelectChangeEvent) => {
        setQuery(event.target.value as string);
        const res = await fetch(`/api/queries?q=${selected.current}`).then(i => i.json()).catch(i => console.error(i))
        let temp = res.data
        if (table(selected.current).needID) {
            temp = res.data.map((i: any, k: any) => ({ ...i, rownum: k + 1 }))
        }
        setQuestion(res.question)
        setQueryString(res.query)
        setColumns(table(selected.current).columns)
        setRows(temp)
    }
    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '82vh', height: '100%', alignItems: 'center', flexDirection: 'column', }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Query</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={query}
                        label="Query"
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
                        <MenuItem onClick={() => selected.current = "1"} value={1}>#1</MenuItem>
                        <MenuItem onClick={() => selected.current = "2"} value={2}>#2</MenuItem>
                        <MenuItem onClick={() => selected.current = "3"} value={3}>#3</MenuItem>
                        <MenuItem onClick={() => selected.current = "4"} value={4}>#4</MenuItem>
                        <MenuItem onClick={() => selected.current = "5"} value={5}>#5</MenuItem>
                        <MenuItem onClick={() => selected.current = "6"} value={6}>#6</MenuItem>
                        <MenuItem onClick={() => selected.current = "7"} value={7}>#7</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <DrawerHeader />
            {selected.current ? <>
                <Box>
                    {question}
                </Box>
                <br />
                <Box sx={{ overflow: 'hidden', padding: '5px', width: '60vw', backgroundColor: '#3b3b3b', borderRadius: '10px' }}>
                    <Box sx={{ overflowX: 'scroll', paddingX: '20px' }}>
                        <pre>{queryString}</pre>
                    </Box>
                </Box>
                <br />

                <StickyHeadTable rows={rows} columns={columns} id={table(selected.current).id} />
            </> : null}
        </Box>
    )
}

export default Reports