import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function createData(
  premio: string,
  descripcion: string,
  ganadores: string,
  monto: number
) {
  return { premio, descripcion, ganadores, monto };
}

const rows = [
  createData("Primer premio", "Todos los aciertos", "VACANTE", 0.1),
  createData("Segundo premio", "12 aciertos", "2 GANADORES", 0.05),
  createData("Sale o Sale", "9 o mas aciertos", "4 GANADORES", 0.008),
];

export default function PremiosTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "100%", margin: "1rem" }}
    >
      <Table aria-label="tabla de premios">
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Ganadores</TableCell>
            <TableCell align="right">Premio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.premio}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.premio}
              </TableCell>
              <TableCell>{row.descripcion}</TableCell>
              <TableCell>{row.ganadores}</TableCell>
              <TableCell align="right">
                BTC {row.monto.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
