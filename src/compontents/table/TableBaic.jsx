import "./TableBaic.css"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein,payment,Status) {
  return { name, calories, fat, carbs, protein,payment,Status };
}

const rows = [
  createData(12090611, "Accer Nitro99", "obada", "1March", 758,"Cash on Delivery","Approved"),
  createData(12090612, "PlayStation", "Ali", "2April", 900,"Cash on Delivery","Approved"),
  createData(12019013, "Phone", "Musab", "2April", 35,"Online Payment","Active"),
  createData(12090614, "Phone", "Ahmad", "3May",40,"Cash on Delivery","Active"),
  createData(12090615, "Lenovo", "Adeal","4May", 80,"Online Payment","Approved"),
  createData(12090616, "Lenovo", "Adeal","19June", 93,"Cash on Delivery","Active"),
  createData(12090617, "Lenovo", "Ahmad","10June", 66,"Cash on Delivery","Approved"),
];

export default function TableBaic() {
  return (
    <div className="table">
         <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className="TableContainer">

        
        <TableHead>
          <TableRow >
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell" align="right">Product</TableCell>
            <TableCell className="tableCell" align="right">Customer</TableCell>
            <TableCell className="tableCell" align="right">Data</TableCell>
            <TableCell className="tableCell" align="right">Amount</TableCell>
            <TableCell className="tableCell" align="right">Payment Method</TableCell>
            <TableCell className="tableCell" align="right">Status</TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="TableCEll">
                {row.name}
              </TableCell>
              <TableCell align="right" className="TableCEll">{row.calories}</TableCell>
              <TableCell align="right" className="TableCEll">{row.fat}</TableCell>
              <TableCell align="right" className="TableCEll">{row.carbs}</TableCell>
              <TableCell align="right" className="TableCEll">{row.protein}</TableCell>
              <TableCell align="right" className="TableCEll">{row.payment}</TableCell>
              <TableCell align="right">
                <span className={`status ${row.Status}`}>{row.Status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
