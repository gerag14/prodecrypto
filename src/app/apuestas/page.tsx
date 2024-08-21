"use client";

import BetTable from "@/components/table/betTable";
import BetForm from "@/components/forms/BetForm";
import PotCard from "@/components/card/potCard";

import { useState } from "react";

import { Box } from "@mui/material";
import matches from "./data";

export default function Home() {
  // Estado para guardar los checkboxes seleccionados y el monto apostado
  const [bets, setBets] = useState(
    matches.reduce(
      (acc, match) => ({
        ...acc,
        [match.id]: {
          localWin: false,
          draw: false,
          visitorWin: false,
          amount: 10,
        },
      }),
      {}
    )
  );

  // Función para manejar cambios en los checkboxes
  const handleCheckboxChange = (id, type) => {
    setBets((prevBets) => ({
      ...prevBets,
      [id]: {
        ...prevBets[id],
        [type]: !prevBets[id][type],
      },
    }));
  };

  // Función para calcular el monto total de la apuesta
  const calculateTotalBet = () => {
    // Calcular la cantidad total de combinaciones seleccionadas por el usuario
    const totalCombinations = Object.values(bets).reduce(
      (total, { localWin, draw, visitorWin }) => {
        let count = 0;
        if (localWin) count += 1;
        if (draw) count += 1;
        if (visitorWin) count += 1;
        return total * (count || 1); // Si no se selecciona nada, consideramos 1 como cantidad
      },
      1
    );

    // Calcular el importe total abonado multiplicando las combinaciones por el monto de la apuesta
    const totalAmount =
      totalCombinations * Object.values(bets)[0]?.amount || 10;

    return totalAmount;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar la apuesta
    alert(`Apuesta total: ${calculateTotalBet()} pesos`);
  };

  return (
    <div className="flex justify-center text-center">
      <div className="max-w-5xl">
        <PotCard
          amount_uxd={"10.000"}
          amount_btc={"0.170000"}
          buttonApostar={false}
        />
        <h1 className="text-2xl font-bold mb-4">
          Predicciones de la Próxima Fecha
        </h1>
        <h6 className="text-2xl font-bold mb-4">
          Inicio de la fecha 14: 02/08/2024 - Fin de la fecha: 04/08/2024
        </h6>

        <Box>
          <BetTable
            matches={matches}
            bets={bets}
            onCheckboxChange={handleCheckboxChange}
          />
        </Box>
        <BetForm totalBet={calculateTotalBet()} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
