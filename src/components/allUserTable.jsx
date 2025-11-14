import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Box, Pagination } from '@mui/material';





//const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({data, columns}) {

 // console.log("data",  data)
 // console.log("columns", columns)
  const rows = data;

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
      //  initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        //pagination
        
        checkboxSelection
        sx={{ border: 0 }}
      />

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Pagination
          
          color="primary"
          shape="rounded"
        />
      </Box>
      
    </Paper>
  );
}
