import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';




export default function BasicTable({data, columns}) {




  return (
    <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:"20px", fontWeight:"bold"}}>Name</TableCell>
            
           
          </TableRow>
        </TableHead>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map(col => (
              <TableCell key={col.key}>
                {row[col.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
}
