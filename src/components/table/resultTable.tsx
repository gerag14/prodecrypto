// components/BetTable.js
import React from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
} from "@mui/material";
import Image from "next/image";

const ResultTable = ({ matches }) => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "100%", margin: "1rem" }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Equipo Local</TableCell>
            <TableCell> Resultado </TableCell>
            <TableCell>Equipo Visitante</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((match, index) => (
            <TableRow key={index}>
              <TableCell>{match.date}</TableCell>
              <TableCell>
                <Box display="flex">
                  <Image
                    src={`/images/escudos/${match.img_localTeam}`}
                    width={17}
                    height={17}
                  />
                  {match.localTeam}
                </Box>
              </TableCell>
              <TableCell align="center">
                {match.result_localTeam} - {match.result_visitorTeam}
              </TableCell>
              <TableCell>
                <Box display="flex">
                  <Image
                    src={`/images/escudos/${match.img_visitorTeam}`}
                    width={17}
                    height={17}
                  />
                  {match.visitorTeam}
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultTable;
