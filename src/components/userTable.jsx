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
      <Table sx={{ 
        
      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease", // smooth hover effect
    "&:hover": {
      boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
      transform: "translateY(-5px)", // optional: slight lift effect
    },
    //border: "1px solid #ccc",
     
      }} aria-label="simple table">
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
