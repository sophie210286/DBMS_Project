import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import CustomForm from './Forms/CustomForm';

const CDMSForm = () => {
    const [selectTable, setSelectTable] = React.useState('');
    const [show, setShow] = React.useState(false)
    const handleChange = async (event: SelectChangeEvent) => {
        setSelectTable(event.target.value as string);
        setShow(true);
    };
    const selected = React.useRef('');

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '82vh', alignItems: 'center', flexDirection: 'column', }}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Forms</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectTable}
                        label="Forms"
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
            {show?
            <CustomForm tbname={selected.current} />:null}
            {/* <StickyHeadTable rows={rows} columns={columns} id={table(selected.current).id} /> */}
        </Box>
    )
}

export default CDMSForm