import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


export default function StickyHeadTable({ rows, columns, id }: { rows: any[], columns: any[], id: string }) {
    const [pagesize, setPageSize] = useState(5)
    // console.log(rows)
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pagesize}
            autoHeight
            sx={{ backgroundColor: 'white', width: '80%'}}
            rowsPerPageOptions={[5, 10, 20, 100]}
            getRowId={(row) => row[id]}
            onPageSizeChange={(pagesize) => setPageSize(pagesize)}
        />
    );
}