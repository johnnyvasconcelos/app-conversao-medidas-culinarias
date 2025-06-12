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
  const { ingredienteLabel, medidaLabel, quantidade } = route.params;
  useEffect(() => {}, []);
  const abrirTelaHome = () => {
    navigation.navigate("Home");
  };
  let valorAtual = 0;
  if (
    ingredienteLabel == "Farinha de Trigo" &&
    medidaLabel == "Xícara(s) (Chá)"
  ) {
    valorAtual = 140 * quantidade;
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
          <View style={styles.tr}>
            <Text style={styles.td1}>{valorAtual}</Text>
            <Text style={styles.td2}>Gramas</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td1}>40,0</Text>
            <Text style={styles.td2}>Colher(es) Sopa</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td1}>56,0</Text>
            <Text style={styles.td2}>Colher(es) Sobremesa</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td1}>112,0</Text>
            <Text style={styles.td2}>Colher(es) Chá</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td1}>224,0</Text>
            <Text style={styles.td2}>Colher(es) Café</Text>
          </View>
          <View style={styles.tr}>
            <Text style={styles.td1}>5,0</Text>
            <Text style={styles.td2}>Copo(s) Americano(s)</Text>
          </View>
          <View style={[styles.tr, styles.trLast]}>
            <Text style={styles.td1}>0,6</Text>
            <Text style={styles.td2}>Quilo(s)</Text>
          </View>
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
    padding: 10,
    borderRightWidth: 1,
    borderColor: "#cda571",
    width: "27%",
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
    width: "73%",
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
