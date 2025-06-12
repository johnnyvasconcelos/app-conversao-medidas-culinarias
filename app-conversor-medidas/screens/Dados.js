import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function Dados({ route, navigation }) {
  let {
    ingredienteLabel,
    medidaLabel,
    quantidade,
    calculo,
    medidaSelecionada,
  } = route.params;
  useEffect(() => {}, []);
  const abrirTelaHome = () => {
    navigation.navigate("Home");
  };
  let valorGramas = 0;
  let valorGramasExibicao = 0;
  let valorQuilos = 0;
  let valorColherSopa = 0;
  let valorColherSobremesa = 0;
  let valorColherCha = 0;
  let valorColherCafe = 0;
  let valorCopoAmericano = 0;
  let valorXicaraCha = 0;
  let valorXicaraCafe = 0;
  let valorLitros = 0;
  let valorMililitros = 0;
  let valorUnidades = 0;
  // cálculos
  if (ingredienteLabel == "Farinha de Trigo") {
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        valorGramas = 1000 * calculo;
      } else if (medidaSelecionada == "gramas") {
        valorGramas = 1 * calculo;
      } else {
        valorGramas = 140 * calculo;
        valorGramasExibicao = (140 * calculo).toFixed(2).replace(".", ",");
        valorColherSopa = (valorGramas / 14).toFixed(2).replace(".", ",");
        valorColherSobremesa = (valorGramas / 10).toFixed(2).replace(".", ",");
        valorColherCha = (valorGramas / 5).toFixed(2).replace(".", ",");
        valorColherCafe = (valorGramas / 2.5).toFixed(2).replace(".", ",");
        valorCopoAmericano = (valorGramas / 115).toFixed(2).replace(".", ",");
        valorQuilos = (0.14 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0 * calculo;
        valorXicaraCafe = (valorGramas / 40).toFixed(2).replace(".", ",");
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      valorGramas = 35 * calculo;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      valorGramas = 115 * calculo;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      valorGramas = 14 * calculo;
      valorGramasExibicao = (14 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = (valorGramas / 10).toFixed(2).replace(".", ",");
      valorColherCha = (valorGramas / 5).toFixed(2).replace(".", ",");
      valorColherCafe = (valorGramas / 2.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (valorGramas / 115).toFixed(2).replace(".", ",");
      valorQuilos = (0.014 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCha = (valorGramas / 140).toFixed(2).replace(".", ",");
      valorXicaraCafe = (valorGramas / 35).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      valorGramas = 10 * calculo;
      valorGramasExibicao = (10 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = (valorGramas / 14).toFixed(2).replace(".", ",");
      valorColherCafe = valorGramas / 2.5;
      valorColherCha = valorGramas / 5;
      valorXicaraCha = valorGramas / 140;
      valorCopoAmericano = valorGramas / 115;
      valorXicaraCafe = valorGramas / 35;
      valorQuilos = 0.01 * calculo;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      valorGramas = 5 * calculo;
    } else if (medidaLabel == "Colher(es) (Café)") {
      valorGramas = 2.5 * calculo;
    }
  }
  // medidaSelecionada
  if (medidaSelecionada == "gramas") {
    medidaLabel = "Grama(s)";
  } else if (medidaSelecionada == "quilos") {
    medidaLabel = "Quilo(s)";
  } else if (medidaSelecionada == "litros") {
    medidaLabel = "Litro(s)";
  } else if (medidaSelecionada == "mililitros") {
    medidaLabel = "Mililitro(s)";
  }
  return (
    <View style={styles.main}>
      <View style={styles.conversor}>
        <Image
          source={require("../assets/images/hat.webp")}
          style={styles.hat}
        />
        <Image
          source={require("../assets/images/spoon.webp")}
          style={styles.spoon}
        />
        <Text
          style={{
            fontFamily: "Custom-Bold",
            fontSize: 18,
            textAlign: "center",
            color: "#4c2e1c",
          }}
        >
          {quantidade} {medidaLabel} de {ingredienteLabel} equivale(m) a:
        </Text>
        <View style={styles.tabela}>
          {[
            { valor: valorColherSopa, label: "Colher(es) Sopa" },
            { valor: valorColherSobremesa, label: "Colher(es) Sobremesa" },
            { valor: valorColherCha, label: "Colher(es) Chá" },
            { valor: valorColherCafe, label: "Colher(es) Café" },
            { valor: valorXicaraCha, label: "Xícara(s) (Chá)" },
            { valor: valorXicaraCafe, label: "Xícara(s) (Café)" },
            { valor: valorCopoAmericano, label: "Copo(s) Americano(s)" },
            { valor: valorGramasExibicao, label: "Gramas" },
            { valor: valorQuilos, label: "Quilo(s)" },
            { valor: valorMililitros, label: "Mililitro(s)" },
            { valor: valorLitros, label: "Litro(s)" },
            { valor: valorUnidades, label: "Unidade(s)" },
          ]
            .filter((item) => item.valor !== 0)
            .map((item, index, array) => (
              <View
                key={item.label}
                style={[styles.tr, index === array.length - 1 && styles.trLast]}
              >
                <Text style={styles.td1}>{item.valor}</Text>
                <Text style={styles.td2}>{item.label}</Text>
              </View>
            ))}
        </View>
        <Text style={styles.info}>
          • 1 Colher (Sopa) = <Text style={styles.destaque}>14g</Text>
          {"\n"}• 1 Copo Americano = <Text style={styles.destaque}>115g</Text>
          {"\n"}• 1 Xícara (Chá) = <Text style={styles.destaque}>140g</Text>
        </Text>
        <Pressable onPress={abrirTelaHome} style={styles.teaDiv}>
          <Image
            source={require("../assets/images/back.webp")}
            style={styles.tea}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    paddingTop: 22,
    paddingBottom: 32,
    width: "86%",
  },
  tabela: {
    marginTop: 20,
    borderColor: "#cda571",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  tr: {
    flexDirection: "row",
    borderColor: "#cda571",
    borderBottomWidth: 1,
    borderRadius: 15,
  },
  trLast: {
    borderRadius: 0,
    borderBottomWidth: 0,
  },
  td1: {
    paddingVertical: 10,
    borderRightWidth: 1,
    borderColor: "#cda571",
    width: "29%",
    fontWeight: 700,
    color: "#4c2e1c",
    fontSize: 14,
    textAlign: "center",
  },
  td2: {
    padding: 10,
    color: "#4c2e1c",
    fontSize: 14,
    backgroundColor: "#fcd9a3",
    width: "71%",
  },
  spoon: {
    position: "absolute",
    width: 55,
    height: 67,
    top: -45,
    left: 30,
  },
  hat: {
    width: 80,
    height: 83,
    position: "absolute",
    top: -70,
    right: 40,
  },
  teaDiv: {
    position: "absolute",
    bottom: -25,
    right: -25,
  },
  tea: {
    width: 83,
    height: 61,
  },
  info: {
    marginTop: 15,
    fontStyle: "italic",
    color: "#647310",
    maxWidth: "88%",
  },
  destaque: {
    fontWeight: "700",
    color: "#7a750d",
  },
});
