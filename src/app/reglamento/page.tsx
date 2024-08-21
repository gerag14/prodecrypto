import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Types() {
  return (
    <div className="flex justify-center text-center">
      <div className="max-w-5xl">
        <Box>
          <Typography variant="h4" gutterBottom>
            Reglamento
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Pronósticos:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Los participantes debían predecir el resultado de una serie de
            partidos de fútbol.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Categorías de Premios:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Los premios se distribuían en diferentes categorías según la
            cantidad de aciertos: - Primera categoría: Acierto en todos los
            partidos. - Segunda categoría: Acierto en todos menos uno. - Tercera
            categoría: Maxima cantidad de aciertos
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fondo de Premios:
          </Typography>
          <Typography variant="body1" gutterBottom>
            El total del dinero recaudado por la venta de boletos (menos una
            parte destinada a impuestos y costos operativos) constituía el fondo
            de premios. Este fondo se repartía entre las distintas categorías.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Distribución del Premio:
          </Typography>
          <Typography variant="body1" gutterBottom>
            La mayor parte del fondo de premios se destinaba a la primera
            categoría. Las categorías inferiores recibían porcentajes menores
            del fondo de premios. Cantidad de Ganadores: Si había varios
            ganadores en una categoría, el premio de esa categoría se dividía
            entre ellos. Si no había ganadores en una categoría, el premio
            correspondiente podía acumularse para la próxima semana (pozo
            acumulado). Cantidad de Apuestas: Función del Casillero: Este
            casillero indicaba el número total de combinaciones de resultados
            (apuestas) que el jugador estaba realizando en ese cartón: Si el
            jugador eligió un solo resultado para cada uno de los 13 partidos,
            la cantidad de apuestas sería 1. Si eligió 2 resultados posibles en
            un partido y 1 en los demás, la cantidad de apuestas sería 2.
            Ejemplo Completo: Partidos: 13 Selecciones del Jugador: Partido 1: 1
            Partido 2: 1 Partido 3: 1 y X (2 apuestas) Partido 4: 1 Resto de los
            partidos: 1 cada uno Cantidad de Apuestas: 1×1×2×1×1×...×1=2 Costo
            por Apuesta: $1 Importe Abonado: 2 apuestas×1 peso=2 pesos
          </Typography>
        </Box>
      </div>
    </div>
  );
}
