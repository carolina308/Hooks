import { useState } from "react";

export const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = (valor = 1) => {
    setContador(contador + valor);
  };

  const decrementar = (valor = 1) => {
    if (valor < 0 && contador - valor < 0) {
      setContador(0);
    } else {
      setContador(contador - valor);
    }
  };

  const resetear = () => {
    setContador(valorInicial);
  };

  // Devolver un objeto con los valores y funciones
  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};




