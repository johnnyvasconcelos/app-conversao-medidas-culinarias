import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
export default function Home({ navigation }) {
  const [ingrediente, setIngrediente] = useState("");
  const [medida, setMedida] = useState("");
  const [erroVisible, setErroVisible] = useState(false);
  const especiais = [0.25, 0.33, 0.5];
  const [calculo, setCalculo] = useState(0.25);
  const [calculoVisivel, setCalculoVisivel] = useState("1/4");
  const formatarFracao = (valor) => {
    if (valor === 0.25) return "1/4";
    if (valor === 0.33) return "1/3";
    if (valor === 0.5) return "1/2";
    const inteiro = Math.floor(valor);
    const decimal = +(valor - inteiro).toFixed(2);
    if (decimal === 0.5) return `${inteiro} 1/2`;
    if (decimal === 0) return `${inteiro}`;
    return valor.toString();
  };
  const aumentar = () => {
    setCalculo((prev) => {
      let novoValor;
      const idx = especiais.indexOf(prev);
      if (idx !== -1 && idx < especiais.length - 1) {
        novoValor = especiais[idx + 1];
      } else if (prev < 1) {
        novoValor = 1;
      } else {
        novoValor = +(prev + 0.5).toFixed(2);
      }
      setCalculoVisivel(formatarFracao(novoValor));
      return novoValor;
    });
  };
  const diminuir = () => {
    setCalculo((prev) => {
      let novoValor;
      if (prev > 1) {
        novoValor = +(prev - 0.5).toFixed(2);
      } else if (prev === 1) {
        novoValor = especiais[especiais.length - 1];
      } else {
        const idx = especiais.indexOf(prev);
        if (idx > 0) {
          novoValor = especiais[idx - 1];
        } else {
          novoValor = especiais[0];
        }
      }
      setCalculoVisivel(formatarFracao(novoValor));
      return novoValor;
    });
  };
  const [fontsLoaded] = useFonts({
    "Custom-Regular": require("../assets/fonts/font-regular.ttf"),
    "Custom-Bold": require("../assets/fonts/font-bold.ttf"),
    "Custom-Bolder": require("../assets/fonts/font-bolder.ttf"),
  });
  function interpretarFracao(entrada) {
    entrada = entrada.replace(",", ".").trim();
    if (entrada.includes("/")) {
      const [numerador, denominador] = entrada.split("/").map(Number);
      if (!isNaN(numerador) && !isNaN(denominador) && denominador !== 0) {
        return numerador / denominador;
      }
    } else {
      const valor = parseFloat(entrada);
      if (!isNaN(valor)) {
        return valor;
      }
    }
    return NaN;
  }

  const todasAsMedidas = [
    { label: "Colher (Sopa)", value: "colher-sopa" },
    { label: "Colher (Sobremesa)", value: "colher-sobremesa" },
    { label: "Colher (Chá)", value: "colher-cha" },
    { label: "Colher (Café)", value: "colher-cafe" },
    { label: "Xícara (Chá)", value: "xicara-cha" },
    { label: "Xícara (Café)", value: "xicara-cafe" },
    { label: "Copo Americano", value: "copo-americano" },
    { label: "Unidades", value: "unidades" },
    { label: "Gramas (g)", value: "gramas" },
    { label: "Quilos (kg)", value: "quilos" },
    { label: "Litros", value: "litros" },
    { label: "Mililitros (ml)", value: "mililitros" },
    { label: "Onças (oz, fl oz)", value: "oncas" },
  ];

  const valores = {
    "acucar-refinado": {
      "colher-sopa": "18g",
      "colher-sobremesa": "12g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "220g",
      "xicara-cafe": "64g",
      "copo-americano": "195g",
      gramas: "220g",
      quilos: "0.2kg",
      oncas: "7.76oz",
    },
    "farinha-de-trigo": {
      "colher-sopa": "14g",
      "colher-sobremesa": "10g",
      "colher-cha": "5g",
      "colher-cafe": "2.5g",
      "xicara-cha": "140g",
      "xicara-cafe": "40g",
      "copo-americano": "115g",
      gramas: "140g",
      quilos: "0.1kg",
      oncas: "4.93oz",
    },
    "fermento-em-po": {
      "colher-sopa": "11g",
      "colher-sobremesa": "6.5g",
      "colher-cha": "3.25g",
      "colher-cafe": "1.12g",
      "xicara-cafe": "27g",
      gramas: "90g",
      quilos: "0.09kg",
      oncas: "3.18oz",
    },
    "fermento-biologico": {
      "colher-sopa": "10g",
      "colher-sobremesa": "7g",
      "colher-cha": "3.5g",
      "colher-cafe": "2g",
      "xicara-cafe": "45g",
      gramas: "140g",
      quilos: "0.14kg",
    },
    "acucar-cristal": {
      "colher-sopa": "17g",
      "colher-sobremesa": "11g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "175g",
      "xicara-cafe": "51g",
      "copo-americano": "140g",
      gramas: "175g",
      quilos: "0.2kg",
      oncas: "6.17oz",
    },
    "arroz-cru": {
      "colher-sopa": "16g",
      "colher-sobremesa": "10g",
      "colher-cha": "5g",
      "colher-cafe": "2.5g",
      "xicara-cha": "210g",
      "xicara-cafe": "61g",
      "copo-americano": "180g",
      gramas: "210g",
      quilos: "0.2kg",
      oncas: "7.41oz",
    },
    "azeitonas-sem-caroco": {
      "xicara-cha": "130g (30 unidades)",
      "xicara-cafe": "34g (8 unidades)",
      "copo-americano": "95g (22 unidades)",
      gramas: "130g (30 unidades)",
      quilos: "0.1kg (30 unidades)",
      unidades: "4.3g",
      oncas: "4.59oz (30 unidades)",
    },
    "biscoitos-de-maizena": {
      "xicara-cha": "84g (24 unidades)",
      "xicara-cafe": "28g (7.4 unidades)",
      "copo-americano": "66.5g (19.4 unidades)",
      gramas: "84g (24 unidades)",
      quilos: "0.08kg (24 unidades)",
      unidades: "3.5g",
      oncas: "2.96oz (24 unidades)",
    },
    "carne-moida": {
      "colher-sopa": "24g",
      "colher-sobremesa": "18g",
      "colher-cha": "9g",
      "colher-cafe": "4.5g",
      "xicara-cha": "172g",
      "xicara-cafe": "50g",
      "copo-americano": "138g",
      gramas: "172g",
      quilos: "0.2kg",
      oncas: "6.07oz",
    },
    "feijao-cru": {
      "colher-sopa": "18g",
      "colher-sobremesa": "12g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "250g",
      "xicara-cafe": "72g",
      "copo-americano": "170g",
      gramas: "250g",
      quilos: "0.2kg",
      oncas: "8,82oz",
    },
    "frango-desfiado": {
      "colher-sopa": "18g",
      "colher-sobremesa": "12g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "128g",
      "xicara-cafe": "37g",
      "copo-americano": "110g",
      gramas: "128g",
      quilos: "0.1kg",
      oncas: "4,52oz",
    },
    "graos-de-milho": {
      "colher-sopa": "15g (40 unidades)",
      "colher-sobremesa": "10g (26 unidades)",
      "colher-cha": "5g (13 unidades)",
      "colher-cafe": "2.5g (6 unidades)",
      "xicara-cha": "190g",
      "xicara-cafe": "55g",
      "copo-americano": "130g",
      gramas: "190g",
      quilos: "0.2kg",
      unidades: "0.042g",
      oncas: "6,7oz",
    },
    liquidos: {
      "colher-sopa": "15ml",
      "colher-sobremesa": "10ml",
      "colher-cha": "5ml",
      "colher-cafe": "2.5ml",
      "xicara-cha": "240ml",
      "xicara-cafe": "70ml",
      "copo-americano": "190ml",
      litros: "0.2 litros",
      mililitros: "240ml",
      gramas: "128g",
      quilos: "0.1kg",
      oncas: "8,12fl oz",
    },
    "leite-em-po": {
      "colher-sopa": "8g",
      "colher-sobremesa": "5g",
      "colher-cha": "2.5g",
      "colher-cafe": "1.2g",
      "xicara-cha": "120g",
      "xicara-cafe": "35g",
      "copo-americano": "95g",
      gramas: "120g",
      quilos: "0.1kg",
      oncas: "4.23oz",
    },
    oleo: {
      "colher-sopa": "15ml (13,8g)",
      "colher-sobremesa": "10ml (9,2g)",
      "colher-cha": "5ml (4,6g)",
      "colher-cafe": "2.5ml (2,3g)",
      "xicara-cha": "240ml (220,8g)",
      "xicara-cafe": "70ml (64,4g)",
      "copo-americano": "190ml (174,8g)",
      gramas: "220,8g",
      quilos: "0,22kg",
      mililitros: "240ml",
      litros: "0.2 litros",
      oncas: "8,12fl oz",
    },
    iogurte: {
      "colher-sopa": "15ml (16g)",
      "colher-sobremesa": "10ml (10,7g)",
      "colher-cha": "5ml (5,3g)",
      "colher-cafe": "2.5ml (2,7g)",
      "xicara-cha": "240ml (256g)",
      "xicara-cafe": "70ml (74,7g)",
      "copo-americano": "190ml (202,7g)",
      gramas: "256g",
      quilos: "0,25kg",
      mililitros: "240ml",
      litros: "0.2 litros",
      oncas: "8,12fl oz",
    },
    manteiga: {
      "colher-sopa": "18g",
      "colher-sobremesa": "12g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "200g",
      "xicara-cafe": "58g",
      "copo-americano": "158g",
      gramas: "200g",
      quilos: "0.2kg",
      oncas: "7,05oz",
    },
    mel: {
      "colher-sopa": "15ml (18g)",
      "colher-sobremesa": "10ml (12g)",
      "colher-cha": "5ml (6g)",
      "colher-cafe": "2.5ml (3g)",
      "xicara-cha": "240ml (300g)",
      "xicara-cafe": "70ml (87g)",
      "copo-americano": "190ml (237g)",
      gramas: "300g",
      quilos: "0.3kg",
      mililitros: "240ml",
      litros: "0.2 litros",
      oncas: "10.58oz",
    },
    "creme-de-avela": {
      "colher-sopa": "24g",
      "colher-sobremesa": "16g",
      "colher-cha": "8g",
      "colher-cafe": "4g",
      "xicara-cha": "350g",
      "xicara-cafe": "102g",
      "copo-americano": "270g",
      gramas: "350g",
      quilos: "0.3kg",
      oncas: "12.35oz",
    },
    "po-de-cafe": {
      "colher-sopa": "9g",
      "colher-sobremesa": "6g",
      "colher-cha": "3g",
      "colher-cafe": "1.5g",
      "xicara-cha": "90g",
      "xicara-cafe": "26g",
      "copo-americano": "60g",
      gramas: "90g",
      quilos: "0.09kg",
      oncas: "3.17oz",
    },
    "sal-comum": {
      "colher-sopa": "18g",
      "colher-sobremesa": "12g",
      "colher-cha": "6g",
      "colher-cafe": "3g",
      "xicara-cha": "243g",
      "xicara-cafe": "71g",
      "copo-americano": "192g",
      gramas: "243g",
      quilos: "0.2kg",
      oncas: "8.57oz",
    },
  };

  const medidaSelecionada =
    medida ||
    (ingrediente === "fermento-em-po" || ingrediente === "fermento-biologico"
      ? "colher-sopa"
      : "xicara-cha");
  const ingredienteSelecionado = ingrediente || "farinha-de-trigo";
  let quantidadeConvertida = 0;

  if (
    valores[ingredienteSelecionado] &&
    valores[ingredienteSelecionado][medidaSelecionada] !== undefined
  ) {
    if (ingredienteSelecionado === "acucar-refinado") {
      const multiplicadores = {
        "colher-sopa": { fator: 18, unidade: "g" },
        "colher-sobremesa": { fator: 12, unidade: "g" },
        "colher-cha": { fator: 6, unidade: "g" },
        "colher-cafe": { fator: 3, unidade: "g" },
        "xicara-cha": { fator: 220, unidade: "g" },
        "xicara-cafe": { fator: 64, unidade: "g" },
        "copo-americano": { fator: 195, unidade: "g" },
        gramas: { fator: 220, unidade: "g" },
        quilos: { fator: 0.22, unidade: "kg" },
        oncas: { fator: 7.76, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = medida.fator * calculo + medida.unidade;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "acucar-cristal") {
      const multiplicadores = {
        "colher-sopa": { fator: 17, unidade: "g" },
        "colher-sobremesa": { fator: 11, unidade: "g" },
        "colher-cha": { fator: 5.5, unidade: "g" },
        "colher-cafe": { fator: 2.75, unidade: "g" },
        "xicara-cha": { fator: 175, unidade: "g" },
        "xicara-cafe": { fator: 51, unidade: "g" },
        "copo-americano": { fator: 140, unidade: "g" },
        gramas: { fator: 175, unidade: "g" },
        quilos: { fator: 0.175, unidade: "kg" },
        oncas: { fator: 6.18, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "arroz-cru") {
      const multiplicadores = {
        "colher-sopa": { fator: 16, unidade: "g" },
        "colher-sobremesa": { fator: 10, unidade: "g" },
        "colher-cha": { fator: 5, unidade: "g" },
        "colher-cafe": { fator: 2.5, unidade: "g" },
        "xicara-cha": { fator: 210, unidade: "g" },
        "xicara-cafe": { fator: 61, unidade: "g" },
        "copo-americano": { fator: 180, unidade: "g" },
        gramas: { fator: 210, unidade: "g" },
        quilos: { fator: 0.21, unidade: "kg" },
        oncas: { fator: 7.41, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos") {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(2)}${
          medida.unidade
        }`;
      } else if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "azeitonas-sem-caroco") {
      const multiplicadores = {
        "xicara-cha": { peso: 130, unidades: 30, unidade: "g" },
        unidades: { peso: 4.3, unidade: "g" },
        "xicara-cafe": { peso: 34, unidades: 8, unidade: "g" },
        "copo-americano": { peso: 95, unidades: 22, unidade: "g" },
        gramas: { peso: 130, unidades: null, unidade: "g" },
        quilos: { peso: 0.13, unidades: null, unidade: "kg" },
        oncas: { fator: 4.59, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos" || medidaSelecionada === "unidades") {
        quantidadeConvertida = `${(medida.peso * calculo).toFixed(1)}${
          medida.unidade
        }`;
      } else if (medida) {
        const pesoFinal = Math.round(medida.peso * calculo);
        const unidadesFinal = medida.unidades
          ? Math.round(medida.unidades * calculo)
          : null;

        quantidadeConvertida =
          `${pesoFinal}${medida.unidade}` +
          (unidadesFinal ? ` (${unidadesFinal} unidades)` : "");
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "biscoitos-de-maizena") {
      const multiplicadores = {
        "xicara-cha": { peso: 84, unidades: 24, unidade: "g" },
        unidades: { peso: 3.5, unidade: "g" },
        "xicara-cafe": { peso: 29, unidades: 7.14, unidade: "g" },
        "copo-americano": { peso: 66.5, unidades: 19.4, unidade: "g" },
        gramas: { peso: 84, unidades: null, unidade: "g" },
        quilos: { peso: 0.084, unidades: null, unidade: "kg" },
        oncas: { fator: 2.96, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos" || medidaSelecionada === "unidades") {
        quantidadeConvertida = `${(medida.peso * calculo).toFixed(1)}${
          medida.unidade
        }`;
      } else if (medida) {
        const pesoFinal = Math.round(medida.peso * calculo);
        const unidadesFinal = medida.unidades
          ? Math.round(medida.unidades * calculo)
          : null;

        quantidadeConvertida =
          `${pesoFinal}${medida.unidade}` +
          (unidadesFinal ? ` (${unidadesFinal} unidades)` : "");
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "carne-moida") {
      const multiplicadores = {
        "colher-sopa": { fator: 24, unidade: "g" },
        "colher-sobremesa": { fator: 18, unidade: "g" },
        "colher-cha": { fator: 9, unidade: "g" },
        "colher-cafe": { fator: 4.5, unidade: "g" },
        "xicara-cha": { fator: 172, unidade: "g" },
        "xicara-cafe": { fator: 50, unidade: "g" },
        "copo-americano": { fator: 138, unidade: "g" },
        gramas: { fator: 172, unidade: "g" },
        quilos: { fator: 0.172, unidade: "kg" },
        oncas: { fator: 6.08, unidade: "oz" },
      };

      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos") {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(2)}${
          medida.unidade
        }`;
      } else if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "creme-de-avela") {
      const multiplicadores = {
        "colher-sopa": { fator: 24, unidade: "g" },
        "colher-sobremesa": { fator: 16, unidade: "g" },
        "colher-cha": { fator: 8, unidade: "g" },
        "colher-cafe": { fator: 4, unidade: "g" },
        "xicara-cha": { fator: 350, unidade: "g" },
        "xicara-cafe": { fator: 102, unidade: "g" },
        "copo-americano": { fator: 270, unidade: "g" },
        gramas: { fator: 350, unidade: "g" },
        quilos: { fator: 0.35, unidade: "kg" },
        oncas: { fator: 12.35, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos") {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(2)}${
          medida.unidade
        }`;
      } else if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "po-de-cafe") {
      const multiplicadores = {
        "colher-sopa": { fator: 9, unidade: "g" },
        "colher-sobremesa": { fator: 6, unidade: "g" },
        "colher-cha": { fator: 3, unidade: "g" },
        "colher-cafe": { fator: 1.5, unidade: "g" },
        "xicara-cha": { fator: 90, unidade: "g" },
        "xicara-cafe": { fator: 26, unidade: "g" },
        "copo-americano": { fator: 60, unidade: "g" },
        gramas: { fator: 90, unidade: "g" },
        quilos: { fator: 0.09, unidade: "kg" },
        oncas: { fator: 3.17, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "sal-comum") {
      const multiplicadores = {
        "colher-sopa": { fator: 18, unidade: "g" },
        "colher-sobremesa": { fator: 12, unidade: "g" },
        "colher-cha": { fator: 6, unidade: "g" },
        "colher-cafe": { fator: 3, unidade: "g" },
        "xicara-cha": { fator: 243, unidade: "g" },
        "xicara-cafe": { fator: 71, unidade: "g" },
        "copo-americano": { fator: 192, unidade: "g" },
        gramas: { fator: 243, unidade: "g" },
        quilos: { fator: 0.243, unidade: "kg" },
        oncas: { fator: 8.57, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "mel") {
      const multiplicadores = {
        "colher-sopa": {
          fator: 18,
          litros: 15,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-sobremesa": {
          fator: 12,
          litros: 10,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cha": {
          fator: 6,
          litros: 5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cafe": {
          fator: 3,
          litros: 2.5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cha": {
          fator: 300,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cafe": {
          fator: 87,
          litros: 70,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "copo-americano": {
          fator: 327,
          litros: 190,
          unidade: "g",
          volumeUnidade: "ml",
        },
        litros: {
          fator: 0.3,
          litros: 0.24,
          unidade: "kg",
          volumeUnidade: " litros",
        },
        mililitros: {
          fator: 300,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        gramas: { fator: 300, litros: 240, unidade: "g", volumeUnidade: "ml" },
        quilos: {
          fator: 0.3,
          litros: 0.24,
          unidade: "kg",
          volumeUnidade: " litros",
        },
        oncas: {
          fator: 10.58,
          litros: 8.12,
          unidade: "oz",
          volumeUnidade: "fl oz",
        },
      };

      const medida = multiplicadores[medidaSelecionada];

      if (medida) {
        const isUnidadeGrande =
          medida.unidade === "kg" || medida.volumeUnidade.includes("litro");

        const peso = isUnidadeGrande
          ? (medida.fator * calculo).toFixed(2)
          : Math.round(medida.fator * calculo);

        const volume = isUnidadeGrande
          ? (medida.litros * calculo).toFixed(2)
          : Math.round(medida.litros * calculo);

        quantidadeConvertida = `${peso}${medida.unidade} (${volume}${medida.volumeUnidade})`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "oleo") {
      const multiplicadores = {
        "colher-sopa": {
          fator: 13.8,
          litros: 15,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-sobremesa": {
          fator: 9.2,
          litros: 10,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cha": {
          fator: 4.3,
          litros: 5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cafe": {
          fator: 2.3,
          litros: 2.5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cha": {
          fator: 220.8,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cafe": {
          fator: 64.4,
          litros: 70,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "copo-americano": {
          fator: 174.8,
          litros: 190,
          unidade: "g",
          volumeUnidade: "ml",
        },
        litros: {
          fator: 0.24,
          litros: 0.2208,
          unidade: " litros",
          volumeUnidade: "kg",
        },
        mililitros: {
          fator: 240,
          litros: 220.8,
          unidade: "ml",
          volumeUnidade: "g",
        },
        gramas: {
          fator: 220.8,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        quilos: {
          fator: 0.2208,
          litros: 0.24,
          unidade: "kg",
          volumeUnidade: " litros",
        },
        oncas: {
          fator: 7.8,
          litros: 8.12,
          unidade: "oz",
          volumeUnidade: "fl oz",
        },
      };

      const medida = multiplicadores[medidaSelecionada];

      if (medida) {
        const isUnidadeGrande =
          medida.unidade === "kg" || medida.volumeUnidade.includes("litro");

        const peso = isUnidadeGrande
          ? (medida.fator * calculo).toFixed(2)
          : Math.round(medida.fator * calculo);

        const volume = isUnidadeGrande
          ? (medida.litros * calculo).toFixed(2)
          : Math.round(medida.litros * calculo);

        quantidadeConvertida = `${peso}${medida.unidade} (${volume}${medida.volumeUnidade})`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "iogurte") {
      const multiplicadores = {
        "colher-sopa": {
          fator: 16,
          litros: 15,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-sobremesa": {
          fator: 10.7,
          litros: 10,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cha": {
          fator: 5.3,
          litros: 5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "colher-cafe": {
          fator: 2.7,
          litros: 2.5,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cha": {
          fator: 256,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "xicara-cafe": {
          fator: 74.7,
          litros: 70,
          unidade: "g",
          volumeUnidade: "ml",
        },
        "copo-americano": {
          fator: 174.8,
          litros: 190,
          unidade: "g",
          volumeUnidade: "ml",
        },
        litros: {
          fator: 0.24,
          litros: 0.256,
          unidade: " litros",
          volumeUnidade: "kg",
        },
        mililitros: {
          fator: 240,
          litros: 256,
          unidade: "ml",
          volumeUnidade: "g",
        },
        gramas: {
          fator: 256,
          litros: 240,
          unidade: "g",
          volumeUnidade: "ml",
        },
        quilos: {
          fator: 0.256,
          litros: 0.24,
          unidade: "kg",
          volumeUnidade: " litros",
        },
        oncas: {
          fator: 7.8,
          litros: 8.12,
          unidade: "oz",
          volumeUnidade: "fl oz",
        },
      };

      const medida = multiplicadores[medidaSelecionada];

      if (medida) {
        const isUnidadeGrande =
          medida.unidade === "kg" || medida.volumeUnidade.includes("litro");

        const peso = isUnidadeGrande
          ? (medida.fator * calculo).toFixed(2)
          : Math.round(medida.fator * calculo);

        const volume = isUnidadeGrande
          ? (medida.litros * calculo).toFixed(2)
          : Math.round(medida.litros * calculo);

        quantidadeConvertida = `${peso}${medida.unidade} (${volume}${medida.volumeUnidade})`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "manteiga") {
      const multiplicadores = {
        "colher-sopa": { fator: 18, unidade: "g" },
        "colher-sobremesa": { fator: 12, unidade: "g" },
        "colher-cha": { fator: 6, unidade: "g" },
        "colher-cafe": { fator: 3, unidade: "g" },
        "xicara-cha": { fator: 200, unidade: "g" },
        "xicara-cafe": { fator: 58, unidade: "g" },
        "copo-americano": { fator: 158, unidade: "g" },
        gramas: { fator: 200, unidade: "g" },
        quilos: { fator: 0.2, unidade: "kg" },
        oncas: { fator: 7.05, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "graos-de-milho") {
      const multiplicadores = {
        "colher-sopa": { fator: 15, unidades: 40, unidade: "g" },
        "colher-sobremesa": { fator: 10, unidades: 26, unidade: "g" },
        "colher-cha": { fator: 5, unidades: 13, unidade: "g" },
        "colher-cafe": { fator: 2.5, unidades: 6, unidade: "g" },
        "xicara-cha": { peso: 190, unidades: 450, unidade: "g" },
        unidades: { peso: 0.41, unidade: "g" },
        "xicara-cafe": { peso: 55, unidades: 130, unidade: "g" },
        "copo-americano": { peso: 130, unidades: 305, unidade: "g" },
        gramas: { peso: 190, unidades: null, unidade: "g" },
        quilos: { peso: 0.19, unidades: null, unidade: "kg" },
        oncas: { peso: 6.7, unidades: null, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medidaSelecionada === "quilos" || medidaSelecionada === "unidades") {
        quantidadeConvertida = `${(medida.peso * calculo).toFixed(1)}${
          medida.unidade
        }`;
      } else if (medida) {
        const pesoFinal = Math.round(medida.peso * calculo);
        const unidadesFinal = medida.unidades
          ? Math.round(medida.unidades * calculo)
          : null;

        quantidadeConvertida =
          `${pesoFinal}${medida.unidade}` +
          (unidadesFinal ? ` (${unidadesFinal} unidades)` : "");
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "liquidos") {
      const multiplicadores = {
        "colher-sopa": { fator: 15, unidade: "ml" },
        "colher-sobremesa": { fator: 10, unidade: "ml" },
        "colher-cha": { fator: 5, unidade: "ml" },
        "colher-cafe": { fator: 2.5, unidade: "ml" },
        "xicara-cha": { fator: 240, unidade: "ml" },
        "xicara-cafe": { fator: 70, unidade: "ml" },
        "copo-americano": { fator: 190, unidade: "ml" },
        gramas: { fator: 240, unidade: "g" },
        quilos: { fator: 0.24, unidade: "kg" },
        litros: { fator: 0.24, unidade: "litros" },
        mililitros: { fator: 240, unidade: "ml" },
        oncas: { fator: 8.12, unidade: "fl oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "frango-desfiado") {
      const multiplicadores = {
        "colher-sopa": { fator: 18, unidade: "g" },
        "colher-sobremesa": { fator: 12, unidade: "g" },
        "colher-cha": { fator: 6, unidade: "g" },
        "colher-cafe": { fator: 3, unidade: "g" },
        "xicara-cha": { fator: 128, unidade: "g" },
        "xicara-cafe": { fator: 37, unidade: "g" },
        "copo-americano": { fator: 110, unidade: "g" },
        gramas: { fator: 128, unidade: "g" },
        quilos: { fator: 0.128, unidade: "kg" },
        oncas: { fator: 4.52, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "feijao-cru") {
      const multiplicadores = {
        "colher-sopa": { fator: 18, unidade: "g" },
        "colher-sobremesa": { fator: 12, unidade: "g" },
        "colher-cha": { fator: 6, unidade: "g" },
        "colher-cafe": { fator: 3, unidade: "g" },
        "xicara-cha": { fator: 250, unidade: "g" },
        "xicara-cafe": { fator: 72, unidade: "g" },
        "copo-americano": { fator: 170, unidade: "g" },
        gramas: { fator: 250, unidade: "g" },
        quilos: { fator: 0.25, unidade: "kg" },
        oncas: { fator: 8.82, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "farinha-de-trigo") {
      const multiplicadores = {
        "colher-sopa": { fator: 14, unidade: "g" },
        "colher-sobremesa": { fator: 10, unidade: "g" },
        "colher-cha": { fator: 5, unidade: "g" },
        "colher-cafe": { fator: 2.5, unidade: "g" },
        "xicara-cha": { fator: 140, unidade: "g" },
        "xicara-cafe": { fator: 40, unidade: "g" },
        "copo-americano": { fator: 115, unidade: "g" },
        gramas: { fator: 140, unidade: "g" },
        quilos: { fator: 0.14, unidade: "kg" },
        oncas: { fator: 4.93, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "fermento-em-po") {
      const multiplicadores = {
        "colher-sopa": { fator: 11, unidade: "g" },
        "colher-sobremesa": { fator: 6.5, unidade: "g" },
        "colher-cha": { fator: 3.25, unidade: "g" },
        "colher-cafe": { fator: 1.12, unidade: "g" },
        "xicara-cafe": { fator: 27, unidade: "g" },
        gramas: { fator: 90, unidade: "g" },
        quilos: { fator: 0.09, unidade: "kg" },
        oncas: { fator: 3.18, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "fermento-biologico") {
      const multiplicadores = {
        "colher-sopa": { fator: 10, unidade: "g" },
        "colher-sobremesa": { fator: 7, unidade: "g" },
        "colher-cha": { fator: 3.5, unidade: "g" },
        "colher-cafe": { fator: 2, unidade: "g" },
        "xicara-cafe": { fator: 45, unidade: "g" },
        gramas: { fator: 140, unidade: "g" },
        quilos: { fator: 0.14, unidade: "kg" },
        oncas: { fator: 4.94, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    } else if (ingredienteSelecionado === "leite-em-po") {
      const multiplicadores = {
        "colher-sopa": { fator: 8, unidade: "g" },
        "colher-sobremesa": { fator: 5, unidade: "g" },
        "colher-cha": { fator: 2.5, unidade: "g" },
        "colher-cafe": { fator: 1.25, unidade: "g" },
        "xicara-cha": { fator: 120, unidade: "g" },
        "xicara-cafe": { fator: 35, unidade: "g" },
        "copo-americano": { fator: 95, unidade: "g" },
        gramas: { fator: 120, unidade: "g" },
        quilos: { fator: 0.12, unidade: "kg" },
        oncas: { fator: 4.23, unidade: "oz" },
      };
      const medida = multiplicadores[medidaSelecionada];
      if (medida) {
        quantidadeConvertida = `${(medida.fator * calculo).toFixed(0)}${
          medida.unidade
        }`;
      } else {
        quantidadeConvertida =
          valores[ingredienteSelecionado][medidaSelecionada];
      }
    }
  }

  const nomesMedidas = {
    "colher-sopa": "Colher(es) (Sopa)",
    "colher-sobremesa": "Colher(es) (Sobremesa)",
    "colher-cha": "Colher(es) (Chá)",
    "colher-cafe": "Colher(es) (Café)",
    "xicara-cha": "Xícara(s) (Chá)",
    "xicara-cafe": "Xícara(s) (Café)",
    "copo-americano": "Copo(s) Americano(s)",
    gramas: "Xícara(s) (Chá)",
    quilos: "Xícara(s) (Chá)",
    unidades: "Unidade(s)",
    mililitros: "Xícara(s) (Chá)",
    litros: "Xícara(s) (Chá)",
    oncas: "Xícara(s) (Chá)",
  };
  const nomesIngredientes = {
    "acucar-refinado": "Açúcar Refinado",
    "farinha-de-trigo": "Farinha de Trigo",
    "fermento-em-po": "Fermento em Pó",
    "acucar-cristal": "Açúcar Cristal",
    "arroz-cru": "Arroz Cru",
    "azeitonas-sem-caroco": "Azeitonas sem Caroço",
    "biscoitos-de-maizena": "Biscoitos de Maizena",
    "carne-moida": "Carne Moída Crua",
    "fermento-biologico": "Fermento Biológico",
    "feijao-cru": "Feijão Cru",
    "frango-desfiado": "Frango Desfiado",
    "graos-de-milho": "Grãos de Milho Cozidos",
    liquidos: "Líquidos",
    "leite-em-po": "Leite em Pó",
    manteiga: "Manteiga",
    mel: "Mel",
    oleo: "Óleo",
    iogurte: "Iogurte",
    "creme-de-avela": "Creme de Avelã",
    "po-de-cafe": "Pó de Café",
    "sal-comum": "Sal",
  };
  const medidasDisponiveis = Object.keys(valores[ingredienteSelecionado] || {});
  let medidasFiltradas = todasAsMedidas;
  if (
    ingrediente === "acucar-refinado" ||
    ingrediente === "acucar-cristal" ||
    ingrediente === "arroz-cru" ||
    ingrediente === "carne-moida" ||
    ingrediente === "creme-de-avela" ||
    ingrediente === "farinha-de-trigo" ||
    ingrediente === "leite-em-po" ||
    ingrediente === "feijao-cru" ||
    ingrediente === "frango-desfiado" ||
    ingrediente === "manteiga" ||
    ingrediente === "po-de-cafe" ||
    ingrediente === "sal-comum"
  ) {
    medidasFiltradas = todasAsMedidas.filter(
      (m) =>
        m.value !== "unidades" &&
        m.value !== "litros" &&
        m.value !== "mililitros"
    );
  } else if (
    ingrediente === "fermento-em-po" ||
    ingrediente === "fermento-biologico"
  ) {
    medidasFiltradas = todasAsMedidas.filter(
      (m) =>
        m.value !== "unidades" &&
        m.value !== "litros" &&
        m.value !== "mililitros" &&
        m.value !== "quilos" &&
        m.value !== "copo-americano" &&
        m.value !== "xicara-cha"
    );
  } else if (ingrediente === "mel") {
    medidasFiltradas = todasAsMedidas.filter((m) => m.value !== "unidades");
  } else if (
    ingrediente === "azeitonas-sem-caroco" ||
    ingrediente === "biscoitos-de-maizena"
  ) {
    medidasFiltradas = todasAsMedidas.filter(
      (m) =>
        m.value !== "litros" &&
        m.value !== "mililitros" &&
        m.value !== "colher-sopa" &&
        m.value !== "colher-sobremesa" &&
        m.value !== "colher-cafe" &&
        m.value !== "colher-cha"
    );
  } else if (ingrediente === "graos-de-milho") {
    medidasFiltradas = todasAsMedidas.filter(
      (m) => m.value !== "litros" && m.value !== "mililitros"
    );
  } else if (ingrediente === "liquidos") {
    medidasFiltradas = todasAsMedidas.filter(
      (m) =>
        m.value !== "gramas" && m.value !== "quilos" && m.value !== "unidades"
    );
  } else if (ingrediente === "oleo" || ingrediente === "iogurte") {
    medidasFiltradas = todasAsMedidas.filter((m) => m.value !== "unidades");
  }
  useEffect(() => {
    setCalculoVisivel(formatarFracao(calculo));
  }, [calculo]);
  useEffect(() => {}, [medidaSelecionada]);
  const abrirTelaDados = () => {
    const ingredienteLabel = nomesIngredientes[ingrediente];
    const medidaLabel = nomesMedidas[medida];
    if (ingredienteLabel && medidaLabel) {
      navigation.navigate("Dados", {
        ingredienteSelecionado: ingrediente,
        ingredienteLabel,
        medidaSelecionada: medida,
        medidaLabel,
        quantidade: calculoVisivel,
        calculo,
      });
    } else {
      setErroVisible(true);
    }
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.main}>
      <View style={[styles.conversor, { transform: [{ translateY: -12 }] }]}>
        <Image
          source={require("../assets/images/hat.webp")}
          style={styles.hat}
        />
        <Image
          source={require("../assets/images/spoon.webp")}
          style={styles.spoon}
        />
        <Image
          source={require("../assets/images/tea.webp")}
          style={styles.tea}
        />

        <Text
          style={{
            fontFamily: "Custom-Bold",
            fontSize: 24.5,
            textAlign: "center",
            color: "#4c2e1c",
          }}
        >
          CONVERSOR DE MEDIDAS CULINÁRIAS
        </Text>
        <Text style={styles.label}>Selecione um Ingrediente</Text>
        <View style={styles.selectView}>
          <Picker
            style={styles.select}
            selectedValue={ingrediente}
            onValueChange={(value) => {
              setIngrediente(value);
              setMedida("");
            }}
            dropdownIconColor="#4c2e1c"
          >
            <Picker.Item label="Selecione o ingrediente" value="" />
            <Picker.Item label="Açúcar Refinado" value="acucar-refinado" />
            <Picker.Item label="Açúcar Cristal" value="acucar-cristal" />
            <Picker.Item label="Arroz Cru" value="arroz-cru" />
            <Picker.Item
              label="Azeitonas sem Caroço"
              value="azeitonas-sem-caroco"
            />
            <Picker.Item
              label="Biscoitos de Maizena"
              value="biscoitos-de-maizena"
            />
            <Picker.Item label="Carne Moída" value="carne-moida" />
            <Picker.Item label="Creme de Avelã" value="creme-de-avela" />
            <Picker.Item label="Farinha de Trigo" value="farinha-de-trigo" />
            <Picker.Item label="Feijão Cru" value="feijao-cru" />
            <Picker.Item
              label="Fermento Biológico Seco"
              value="fermento-biologico"
            />
            <Picker.Item
              label="Fermento Químico em Pó"
              value="fermento-em-po"
            />
            <Picker.Item label="Frango Desfiado" value="frango-desfiado" />
            <Picker.Item label="Grãos de Milho" value="graos-de-milho" />
            <Picker.Item label="Iogurte" value="iogurte" />
            <Picker.Item label="Líquidos" value="liquidos" />
            <Picker.Item label="Leite em Pó" value="leite-em-po" />
            <Picker.Item label="Manteiga" value="manteiga" />
            <Picker.Item label="Mel" value="mel" />
            <Picker.Item label="Óleo" value="oleo" />
            <Picker.Item label="Pó de Café" value="po-de-cafe" />
            <Picker.Item label="Sal Comum" value="sal-comum" />
          </Picker>
        </View>
        <Text style={styles.label}>Selecione a Medida</Text>
        <View style={styles.selectView}>
          <Picker
            style={styles.select}
            selectedValue={medida}
            onValueChange={(value) => setMedida(value)}
            dropdownIconColor="#4c2e1c"
          >
            <Picker.Item label="Selecione a medida..." value="" />
            {medidasFiltradas.map((m) => (
              <Picker.Item key={m.value} label={m.label} value={m.value} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Quantidade</Text>
        <View style={styles.calculoInput}>
          <Pressable
            onPress={diminuir}
            style={[styles.calculoBtn, styles.calculoBtnEsquerda]}
          >
            <Image
              source={require("../assets/images/diminuir.webp")}
              style={[styles.calculoImage, styles.calculoImageEsquerda]}
            />
          </Pressable>
          <TextInput
            style={styles.calcVisivel}
            value={calculoVisivel}
            onChangeText={(texto) => {
              setCalculoVisivel(texto);
              const numero = interpretarFracao(texto);
              if (!isNaN(numero)) {
                setCalculo(numero);
              }
            }}
            keyboardType="numeric"
          />
          <Pressable
            onPress={aumentar}
            style={[styles.calculoBtn, styles.calculoBtnDireita]}
          >
            <Image
              source={require("../assets/images/aumentar.webp")}
              style={[styles.calculoImage, styles.calculoImageDireita]}
            />
          </Pressable>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            abrirTelaDados();
          }}
        >
          <Text style={styles.buttonText}>converter</Text>
        </Pressable>
        <Modal transparent visible={erroVisible} animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: "#00000099",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#fdeed3",
                padding: 25,
                borderRadius: 12,
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                Selecione Ingrediente e Medida! ☕
              </Text>
              <Pressable
                onPress={() => setErroVisible(false)}
                style={{
                  backgroundColor: "#c9522b",
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Custom-Bold",
                  }}
                >
                  FECHAR
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.info}>
          {calculoVisivel}{" "}
          <Text style={styles.destaque}>
            {nomesMedidas[medidaSelecionada] || "xicara de chá"}
          </Text>{" "}
          {medidaSelecionada === "unidades" &&
          ingredienteSelecionado === "azeitonas-sem-caroco"
            ? "de azeitonas sem caroço "
            : ""}
          {medidaSelecionada === "unidades" &&
          ingredienteSelecionado === "graos-de-milho"
            ? "de grãos de milho cozidos "
            : ""}
          {medidaSelecionada === "unidades" ? "possui(em)" : "comporta(m)"}{" "}
          aproximadamente{" "}
          <Text style={styles.destaque}>{quantidadeConvertida}</Text>{" "}
          {medidaSelecionada === "unidades"
            ? ""
            : `de ${
                nomesIngredientes[ingredienteSelecionado] || "Farinha de Trigo"
              }`}
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  main: {
    backgroundColor: "#f0c993",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  conversor: {
    backgroundColor: "#f8e2be",
    borderColor: "#4c2e1c",
    borderWidth: 4,
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 22,
    width: "86%",
    marginTop: -20,
    maxWidth: 480,
  },
  spoon: {
    position: "absolute",
    width: 55,
    height: 67,
    top: -42,
    left: 30,
  },
  hat: {
    width: 80,
    height: 83,
    position: "absolute",
    top: -67,
    right: 40,
  },
  tea: {
    width: 83,
    height: 61.5,
    position: "absolute",
    bottom: -22,
    right: -28,
  },
  input: {
    backgroundColor: "#fdeed3",
    borderColor: "#eccb9b",
    borderWidth: 3,
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
  },
  calculoInput: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdeed3",
    borderColor: "#eccb9b",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderRadius: 8,
  },
  calcVisivel: {
    fontSize: 16,
    color: "#4c2e1c",
    height: 40,
    width: 80,
    textAlign: "center",
  },
  calculoBtn: {
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "#fdeed3",
    borderColor: "#eccb9b",
    marginTop: -8,
    marginBottom: -8,
    height: 45,
    alignItems: "center",
    borderWidth: 3,
  },
  calculoImageEsquerda: {
    width: 13,
    height: 12.5,
  },
  calculoImageDireita: {
    width: 13,
    height: 12.5,
  },
  calculoBtnEsquerda: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  calculoBtnDireita: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  calculoText: {
    fontSize: 20,
    fontWeight: 700,
    color: "#746d61",
  },
  selectView: {
    borderColor: "#eccb9b",
    borderWidth: 3,
    borderRadius: 8,
    overflow: "hidden",
    height: 45,
    justifyContent: "center",
  },
  select: {
    backgroundColor: "#fdeed3",
    borderRadius: 8,
    color: "#4c2e1c",
  },
  button: {
    backgroundColor: "#c9522b",
    padding: 12,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 17,
    fontFamily: "Custom-Bold",
    color: "#ffffff",
    textAlign: "center",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Custom-Bold",
    color: "#4c2e1c",
  },
  info: {
    marginTop: 15,
    fontStyle: "italic",
    color: "#647310",
    maxWidth: "88%",
    fontSize: 12,
  },
  destaque: {
    fontWeight: "700",
    color: "#7a750d",
  },
  modalButton: {
    backgroundColor: "#2dac99",
  },
});
