import React, { useMemo } from 'react'
import './DataGrid.css'
import MaterialReactTable from 'material-react-table'
import { userData } from '../../data'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const DataGrid = () => {
    
    //column for datagrid react material
    //set as userData coming from dummy data
    const columns = useMemo(() => [
        {
            accessorKey: "name.firstName",
            header: "First Name"
        },
        {
            accessorKey: "name.lastName",
            header: "Last Name"
        },
        {
            accessorKey: "address",
            header: "Address"
        },
        {
            accessorKey: "city",
            header: "City"
        },
        {
            accessorKey: "state",
            header: "State"
        }
    ])

    // theme for theme provider
    const theme = useMemo(() => createTheme({
        palette: {
            mode: "dark"
        }
    }))

    return (
        <div className='table-container'>
            <ThemeProvider theme={theme}> {/* using theme provider for dark view */}
                <MaterialReactTable columns={columns} data={userData} />
            </ThemeProvider>

        </div>
    )
}

export default DataGrid;
