"use client";

import ResultTable from "@/components/table/resultTable";
import PremiosTable from "@/components/table/premiosTable";

import { useState } from "react";

import { Box } from "@mui/material";
import matches from "./data";

export default function Home() {
  return (
    <div className="flex justify-center text-center">
      <div className="max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Resultados de la Fecha</h1>
        <Box>
          <PremiosTable />
          <ResultTable matches={matches} />
        </Box>
      </div>
    </div>
  );
}
