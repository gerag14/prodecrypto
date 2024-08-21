import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const BetForm = ({ totalBet, onSubmit }) => {
  return (
    <Box style={{ margin: '1rem' }}>
      <form onSubmit={onSubmit}>
        <h3 className="text-lg font-bold mb-4">Monto Total de Apuesta: {totalBet} pesos</h3>
        <Button type="submit" variant="contained" color="primary">
          Crear Apuesta
        </Button>
      </form>
    </Box>
  );
};

export default BetForm;