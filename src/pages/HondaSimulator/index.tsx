import React, { useState, ChangeEvent, useMemo } from "react";

import { Input, Select } from "../../components/Form";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { CardContainer } from "./styles";
import formatValue from "../../utils/formatValue";

const HondaSimulator: React.FC = () => {
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

  const [formData, setFormData] = useState({
    insurance: 15,
    detran_rate: 154,
    inspection: 50,
    plate: 120,
    company_comission: 200,
    forwarding_agent: 50,
    type_vehicle: 1,
    nf_value: 0,
    nf_month: 0,
  });

  const [licensePlate, setLicensePlate] = useState(0);
  const [installmentIpva, setInstallmentIpva] = useState(0);
  const [totalIpva, setTotalIpva] = useState(0);

  const licensePlateFormatted = useMemo(() => {
    return formatValue(licensePlate);
  }, [licensePlate]);

  const installmentIpvaFormatted = useMemo(() => {
    return formatValue(installmentIpva);
  }, [installmentIpva]);

  const totalIpvaFormatted = useMemo(() => {
    return formatValue(totalIpva);
  }, [totalIpva]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    const data = {
      ...formData,
      [name]: value,
    };

    setFormData({
      ...formData,
      [name]: value,
    });

    const {
      nf_value,
      nf_month,
      type_vehicle,
      insurance,
      detran_rate,
      inspection,
      plate,
      company_comission,
      forwarding_agent,
    } = data;

    const ipva = Number(type_vehicle) === 1 ? 0.025 : 0.03;
    // const seguro = data.type_vehicle === 1 ? 0 : 15;

    const calculedLicensePlate =
      ((nf_value * ipva) / 12) * nf_month +
      (insurance / 12) * nf_month +
      detran_rate +
      inspection +
      plate +
      company_comission +
      forwarding_agent;

    setLicensePlate(calculedLicensePlate);

    let tempInstallmentIpva = 0;

    if (Number(type_vehicle) === 1 && ((nf_value * ipva) / 12) * nf_month >= 100) {
      setInstallmentIpva((((nf_value * ipva) / 12) * nf_month) / 3);
      tempInstallmentIpva = (((nf_value * ipva) / 12) * nf_month) / 3;
    } else if (Number(type_vehicle) === 2 && ((nf_value * ipva) / 12) * nf_month >= 100) {
      setInstallmentIpva((((nf_value * ipva) / 12) * nf_month) / 3);
      tempInstallmentIpva = (((nf_value * ipva) / 12) * nf_month) / 3;
    } else {
      setInstallmentIpva(0);
    }

    if (tempInstallmentIpva > 0) {
      setTotalIpva(
        (((nf_value * ipva) / 12) * nf_month) / 3 +
          (insurance / 12) * nf_month +
          inspection +
          company_comission
      );
    } else {
      setTotalIpva(0);
    }
  }

  return (
    <>
      <Header brand="honda" />
      <div className="container">
        <CardContainer>
          <Card>
            <header>Emplacamento</header>
            <strong>{licensePlateFormatted}</strong>
          </Card>
          <Card>
            <header>IPVA</header>
            {installmentIpva > 0 && (
              <>
                <span>{`1ª parcela: ${installmentIpvaFormatted}`}</span>
                <span>{`2ª parcela: ${installmentIpvaFormatted}`}</span>
                <span>{`3ª parcela: ${installmentIpvaFormatted}`}</span>
              </>
            )}
            <strong>
              {totalIpva > 0 ? totalIpvaFormatted : "Não parcela"}
            </strong>
          </Card>
        </CardContainer>
        <form>
          <Select
            label="Tipo de veículo:"
            name="type_vehicle"
            options={vehicleTypes}
            value={formData.type_vehicle}
            onChange={handleInputChange}
          />

          <Input
            label="Valor da NF:"
            name="nf_value"
            type="number"
            placeholder="R$ 0,00"
            value={formData.nf_value}
            onChange={handleInputChange}
          />

          <Select
            label="Mês da NF:"
            name="nf_month"
            options={months}
            value={formData.nf_month}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
};

export default HondaSimulator;
