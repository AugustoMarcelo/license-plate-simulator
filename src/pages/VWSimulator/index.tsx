import React from "react";

import { Input, Select } from "../../components/Form";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { CardContainer } from './styles';

const VWSimulator: React.FC = () => {
  const vehicleTypes = [
    { value: 1, label: "Motos até 199cc" },
    { value: 2, label: "Motos acima de 200cc" },
  ];

  const months = [
    { value: 12, label: "Janeiro" },
    { value: 11, label: "Fevereiro" },
    { value: 10, label: "Março" },
    { value: 9, label: "Abril" },
    { value: 8, label: "Maio" },
    { value: 7, label: "Junho" },
    { value: 6, label: "Julho" },
    { value: 5, label: "Agosto" },
    { value: 4, label: "Setembro" },
    { value: 3, label: "Outubro" },
    { value: 2, label: "Novembro" },
    { value: 1, label: "Dezembro" },
  ];

  return (
    <>
      <Header brand="volkswagen" />
      <div className="container">
        <CardContainer>
          <Card>
            <header>Emplacamento</header>
            <strong>R$ 0,00</strong>
          </Card>
          <Card>
            <header>IPVA</header>
            <strong>R$ 0,00</strong>
          </Card>
        </CardContainer>
        <form>
          <Select
            label="Tipo de veículo:"
            name="type_vehicle"
            options={vehicleTypes}
          />

          <Input label="Valor da NF:" name="nf_value" placeholder="R$ 0,00" />

          <Select label="Mês da NF:" name="nf_month" options={months} />
        </form>
      </div>
    </>
  );
};

export default VWSimulator;
