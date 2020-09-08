import React, { useState, ChangeEvent, useMemo } from "react";

import formatValue from "../../utils/formatValue";

import { Checkbox, Input, Select } from "../../components/Form";
import Card from "../../components/Card";
import Header from "../../components/Header";

import {
  CardContainer,
  CardOrganizer,
  CardFooter,
  UsedTransferContainer,
} from "./styles";
import Constants from "./constants";

const VWSimulator: React.FC = () => {
  const vehicleTypes = [
    { value: 1, label: "Seguro obrigatório (Normal)" },
    { value: 2, label: "Seguro obrigatório (Utilitário)" },
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
    nf_value: 0,
    nf_month: 0,
  });

  const [licensePlate, setLicensePlate] = useState(0);
  const [installmentIpva, setInstallmentIpva] = useState(0);
  const [totalIpva, setTotalIpva] = useState(0);
  const [totalIpvaForUsed, setTotalIpvaForUsed] = useState(0);

  const [usedTransfer, setUsedTransfer] = useState({
    subst_municipio: 0,
    alienacao: 0,
    subst_placa: 0,
  });

  const licensePlateFormatted = useMemo(() => {
    return formatValue(licensePlate);
  }, [licensePlate]);

  const installmentIpvaFormatted = useMemo(() => {
    return formatValue(installmentIpva);
  }, [installmentIpva]);

  const totalIpvaFormatted = useMemo(() => {
    return formatValue(totalIpva);
  }, [totalIpva]);

  const totalIpvaForUsedFormatted = useMemo(() => {
    return formatValue(totalIpvaForUsed);
  }, [totalIpvaForUsed]);

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
      placas,
      taxa_detran,
      despachante,
      servico_loja,
      vistoria,
    } = Constants;
    const insurance =
      Number(type_vehicle) === 1 ? seguro.normal : seguro.utilitario;

    const calculedLicensePlate =
      ((nf_value * ipva) / 12) * nf_month +
      (insurance / 12) * nf_month +
      placas +
      taxa_detran +
      despachante +
      servico_loja +
      vistoria;

    setLicensePlate(Math.ceil(calculedLicensePlate));

    const tempInstallmentIpva = (((nf_value * ipva) / 12) * nf_month) / 5;
    setInstallmentIpva(tempInstallmentIpva);

    setTotalIpva(Math.ceil(calculedLicensePlate - tempInstallmentIpva * 4));
  }

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    let newValue = Number(value) === 0 ? 1 : 0;

    const data = {
      ...usedTransfer,
      [name]: newValue,
    };

    setUsedTransfer({
      ...usedTransfer,
      [name]: newValue,
    });

    const {
      mudanca_municipio,
      aliencacao_fiduciaria,
      substituicao_placa,
      despachante,
      servico_loja_usados,
      transferencia,
      vistoria,
    } = Constants;

    const { subst_municipio, alienacao, subst_placa } = data;

    setTotalIpvaForUsed(
      Math.ceil(
        (subst_municipio === 1 ? mudanca_municipio : 0) +
          (subst_placa === 1 ? substituicao_placa : 0) +
          (alienacao === 1 ? aliencacao_fiduciaria : 0) +
          despachante +
          vistoria +
          transferencia +
          servico_loja_usados
      )
    );
  }

  return (
    <>
      <Header brand="volkswagen" />
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
                {Array.from({ length: 4 }).map((_, index) => (
                  <p key={index}>
                    <span>{index + 1}ª parcela</span>
                    <span>{installmentIpvaFormatted}</span>
                  </p>
                ))}
              </div>
            )}
            <CardFooter>
              <span>Total parcelado</span>
              <strong>{totalIpvaFormatted}</strong>
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
            type="number"
            step="any"
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
        <UsedTransferContainer>
          <Card>
            <header>Transferência de usados</header>
            <CardOrganizer>
              <Checkbox
                name="subst_municipio"
                label="Subst. Município"
                value={usedTransfer.subst_municipio}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                name="alienacao"
                label="Alienação"
                value={usedTransfer.alienacao}
                onChange={handleCheckboxChange}
              />
              <Checkbox
                name="subst_placa"
                label="Subst. de Placa"
                value={usedTransfer.subst_placa}
                onChange={handleCheckboxChange}
              />
            </CardOrganizer>
            <CardFooter>
              <span>Total com IPVA parcelado</span>
              <strong>{totalIpvaForUsedFormatted}</strong>
            </CardFooter>
          </Card>
        </UsedTransferContainer>
      </div>
    </>
  );
};

export default VWSimulator;
