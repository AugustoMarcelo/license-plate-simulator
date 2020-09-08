import React, { useState, ChangeEvent, useMemo } from "react";

import formatValue from "../../utils/formatValue";
import Constants from "./constants";

import { Input, Select } from "../../components/Form";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { CardContainer, CardFooter } from "./styles";

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
    type_vehicle: 1,
    nf_value: 0.00,
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

    const { nf_value, nf_month, type_vehicle } = data;
    const {
      ipva,
      seguro,
      taxa_detran,
      vistoria,
      placa,
      despachante,
      comissao_loja,
    } = Constants;

    const ipvaPercent = Number(type_vehicle) === 1 ? ipva.cc199 : ipva.cc200;
    const insurance =
      Number(type_vehicle) === 1 ? seguro.normal : seguro.obrigatorio;



    const calculedLicensePlate =
      ((nf_value * ipvaPercent) / 12) * nf_month +
      (insurance / 12) * nf_month +
      taxa_detran +
      vistoria +
      placa +
      comissao_loja +
      despachante;

    setLicensePlate(calculedLicensePlate);

    let tempInstallmentIpva = 0;

    if (
      Number(type_vehicle) === 1 &&
      ((nf_value * ipvaPercent) / 12) * nf_month >= 100
    ) {
      setInstallmentIpva((((nf_value * ipvaPercent) / 12) * nf_month) / 3);
      tempInstallmentIpva = (((nf_value * ipvaPercent) / 12) * nf_month) / 3;
    } else if (
      Number(type_vehicle) === 2 &&
      ((nf_value * ipvaPercent) / 12) * nf_month >= 100
    ) {
      setInstallmentIpva((((nf_value * ipvaPercent) / 12) * nf_month) / 3);
      tempInstallmentIpva = (((nf_value * ipvaPercent) / 12) * nf_month) / 3;
    } else {
      setInstallmentIpva(0);
    }

    if (tempInstallmentIpva > 0) {
      setTotalIpva(
        (((nf_value * ipvaPercent) / 12) * nf_month) / 3 +
          (seguro.obrigatorio / 12) * nf_month +
          vistoria +
          comissao_loja
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
              <div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <p key={index}>
                    <span>{index + 1}ª parcela</span>
                    <span>{installmentIpvaFormatted}</span>
                  </p>
                ))}
              </div>
            )}
            <CardFooter>
              {totalIpva > 0 ? (
                <>
                  <span>Total parcelado</span>
                  <strong>{totalIpvaFormatted}</strong>
                </>
              ) : (
                <strong>Não parcela</strong>
              )}
            </CardFooter>
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
            placeholder="R$ 0,00"
            type="number"
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
