import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";

export default function App() {
  const [quantidade, setQuantidade] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [medida, setMedida] = useState("");

  const [fontsLoaded] = useFonts({
    "Custom-Regular": require("./assets/fonts/font-regular.ttf"),
    "Custom-Bold": require("./assets/fonts/font-bold.ttf"),
    "Custom-Bolder": require("./assets/fonts/font-bolder.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const valores = {
    "acucar-refinado": {
      "colher-sopa": 18,
      "colher-sobremesa": 12,
      "colher-cha": 6,
      "colher-cafe": 3,
      "xicara-cha": 220,
      "xicara-cafe": 64,
      "copo-americano": 195,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "farinha-de-trigo": {
      "colher-sopa": 14,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 140,
      "xicara-cafe": 40,
      "copo-americano": 115,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "acucar-cristal": {
      "colher-sopa": 17,
      "colher-sobremesa": 11,
      "colher-cha": 6,
      "colher-cafe": 3,
      "xicara-cha": 175,
      "xicara-cafe": 51,
      "copo-americano": 140,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "arroz-cru": {
      "colher-sopa": 0,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 210,
      "xicara-cafe": 61,
      "copo-americano": 180,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "azeitonas-sem-caroco": {
      "colher-sopa": 0,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 30,
      "xícara-cafe": 8,
      "copo-americano": 22,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
      unidades: 4.3,
    },
    "carne-moida": {
      "colher-sopa": 24,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 172,
      "xicara-cafe": 50,
      "copo-americano": 138,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "feijao-cru": {
      "colher-sopa": 0,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 250,
      "xicara-cafe": 72,
      "copo-americano": 170,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "frango-desfiado": {
      "colher-sopa": 18,
      "colher-sobremesa": 0,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 128,
      "xicara-cafe": 37,
      "copo-americano": 0,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "graos-de-milho": {
      "colher-sopa": 15,
      "colher-sobremesa": 10,
      "colher-cha": 5,
      "colher-cafe": 2.5,
      "xicara-cha": 190,
      "xicara-cafe": 55,
      "copo-americano": 130,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    liquidos: {
      "colher-sopa": 15,
      "colher-sobremesa": 10,
      "colher-cha": 5,
      "colher-cafe": 2.5,
      "xicara-cha": 240,
      "xicara-cafe": 70,
      "copo-americano": 190,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    manteiga: {
      "colher-sopa": 18,
      "colher-sobremesa": 12,
      "colher-cha": 6,
      "colher-cafe": 3,
      "xicara-cha": 0,
      "xicara-cafe": 0,
      "copo-americano": 0,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    mel: {
      "colher-sopa": 18,
      "colher-sobremesa": 12,
      "colher-cha": 6,
      "colher-cafe": 3,
      "xicara-cha": 300,
      "xicara-cafe": 87,
      "copo-americano": 237,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "creme-de-avela": {
      "colher-sopa": 24,
      "colher-sobremesa": 16,
      "colher-cha": 0,
      "colher-cafe": 0,
      "xicara-cha": 350,
      "xicara-cafe": 102,
      "copo-americano": 270,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "po-de-cafe": {
      "colher-sopa": 9,
      "colher-sobremesa": 6,
      "colher-cha": 3,
      "colher-cafe": 1.5,
      "xicara-cha": 90,
      "xicara-cafe": 26,
      "copo-americano": 60,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
    "sal-comum": {
      "colher-sopa": 18,
      "colher-sobremesa": 12,
      "colher-cha": 6,
      "colher-cafe": 3,
      "xicara-cha": 0,
      "xicara-cafe": 0,
      "copo-americano": 0,
      gramas: 0,
      quilos: 0,
      mililitros: 0,
    },
  };

  const medidaSelecionada = medida || "xicara-cha";
  const ingredienteSelecionado = ingrediente || "farinha-de-trigo";

  const quantidadeConvertida =
    valores[ingredienteSelecionado]?.[medidaSelecionada] ?? 0;

  const nomesMedidas = {
    "colher-sopa": "Colher de Sopa",
    "colher-sobremesa": "Colher de Sobremesa",
    "colher-cha": "Colher de Chá",
    "colher-cafe": "Colher de Café",
    "xicara-cha": "Xícara de Chá",
    "xicara-cafe": "Xícara de Café",
    "copo-americano": "Copo Americano",
    gramas: "Gramas",
    quilos: "Quilo",
    unidades: "Unidade",
    mililitros: "Miliitros",
    litros: "Litro",
  };

  const nomesIngredientes = {
    "acucar-refinado": "Açúcar Refinado",
    "farinha-de-trigo": "Farinha de Trigo",
    "acucar-cristal": "Açúcar Cristal",
    "arroz-cru": "Arroz Cru",
    "azeitonas-sem-caroco": "Azeitonas sem Caroço",
    "carne-moida": "Carne Moída",
    "feijao-cru": "Feijão Cru",
    "frango-desfiado": "Frango Desfiado",
    "graos-de-milho": "Grãos de Milho",
    liquidos: "Líquidos",
    manteiga: "Manteiga",
    mel: "Mel",
    "creme-de-avela": "Creme de Avelã",
    "po-de-cafe": "Pó de Café",
    "sal-comum": "Sal",
  };

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.conversor}>
        <Image
          source={require("./assets/images/hat.webp")}
          style={styles.hat}
        />
        <Image
          source={require("./assets/images/spoon.webp")}
          style={styles.spoon}
        />
        <Text
          style={{
            fontFamily: "Custom-Bold",
            fontSize: 25,
            textAlign: "center",
            color: "#4c2e1c",
          }}
        >
          CONVERSOR DE MEDIDAS CULINÁRIAS
        </Text>
        <Text style={styles.label}>Selecione um Ingrediente</Text>
        <View style={styles.selectView}>
          <Picker
            selectedValue={ingrediente}
            onValueChange={(itemValue) => setIngrediente(itemValue)}
            style={styles.select}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Açúcar Refinado" value="acucar-refinado" />
            <Picker.Item label="Açúcar Cristal" value="acucar-cristal" />
            <Picker.Item label="Arroz Cru" value="arroz-cru" />
            <Picker.Item
              label="Azeitonas sem Caroço"
              value="azeitonas-sem-caroco"
            />
            <Picker.Item label="Carne Moída" value="carne-moida" />
            <Picker.Item label="Creme de Avelã" value="creme-de-avela" />
            <Picker.Item label="Farinha de Trigo" value="farinha-de-trigo" />
            <Picker.Item label="Feijão Cru" value="fijao-cru" />
            <Picker.Item label="Frango Desfiado" value="frango-desfiado" />
            <Picker.Item
              label="Grãos de Milho Cozidos"
              value="graos-de-milho"
            />
            <Picker.Item label="Líquidos" value="liquidos" />
            <Picker.Item label="Manteiga" value="manteiga" />
            <Picker.Item label="Mel" value="mel" />
            <Picker.Item label="Pó de Café" value="po-de-cafe" />
            <Picker.Item label="Sal Comum" value="sal-comum" />
          </Picker>
        </View>
        <Text style={styles.label}>Selecione a Medida</Text>
        <View style={styles.selectView}>
          <Picker
            selectedValue={medida}
            onValueChange={(itemValue) => setMedida(itemValue)}
            style={styles.select}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Colher de Sopa" value="colher-sopa" />
            <Picker.Item label="Colher de Sobremesa" value="colher-sobremesa" />
            <Picker.Item label="Colher de Chá" value="colher-cha" />
            <Picker.Item label="Colher de Café" value="colher-cafe" />
            <Picker.Item label="Xícara de Chá" value="xicara-cha" />
            <Picker.Item label="Xícara de Café" value="xicara-cafe" />
            <Picker.Item label="Copo Americano" value="copo-americano" />
            <Picker.Item label="Gramas" value="gramas" />
            <Picker.Item label="Quilos" value="quilos" />
            <Picker.Item label="Litros" value="litros" />
            <Picker.Item label="Mililitros" value="mililitros" />
            <Picker.Item label="Unidades" value="unidades" />
          </Picker>
        </View>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 1"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <Text style={styles.button}>converter</Text>
        <Text style={styles.info}>
          Uma{" "}
          <Text style={styles.destaque}>
            {nomesMedidas[medidaSelecionada] || "xícara de chá"}
          </Text>{" "}
          comporta aproximadamente{" "}
          <Text style={styles.destaque}>{quantidadeConvertida}g</Text> de{" "}
          <Text style={styles.destaque}>
            {nomesIngredientes[ingredienteSelecionado] || "Farinha de Trigo"}
          </Text>
          .
        </Text>
        <Image
          source={require("./assets/images/tea.webp")}
          style={styles.tea}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f0c993",
    justifyContent: "center",
    alignItems: "center",
  },
  conversor: {
    width: 300,
    borderColor: "#4c2e1c",
    backgroundColor: "#f8e2be",
    borderWidth: 4,
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 22,
    transform: [{ translateY: -20 }],
  },
  input: {
    backgroundColor: "#fdeed3",
    borderColor: "#eccb9b",
    borderWidth: 3,
    paddingHorizontal: 15,
    height: 50,
    borderRadius: 8,
    fontFamily: "Custom-Regular",
    justifyContent: "center",
  },
  selectView: {
    borderColor: "#eccb9b",
    borderWidth: 3,
    borderRadius: 8,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
  },
  select: {
    backgroundColor: "#fdeed3",
    fontFamily: "Custom-Regular",
    fontFamily: "Custom-Regular",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#c9522b",
    padding: 12,
    color: "white",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 8,
    textTransform: "uppercase",
    fontSize: 17,
    fontFamily: "Custom-Bold",
  },
  h1: {
    marginBottom: 15,
    textAlign: "center",
    color: "#4c2e1c",
    textTransform: "uppercase",
    fontSize: 26,
    fontFamily: "Custom-Bold",
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
    fontFamily: "Custom-Regular",
    color: "#647310",
    maxWidth: "88%",
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
  tea: {
    width: 83,
    height: 61,
    position: "absolute",
    bottom: -25,
    right: -25,
  },
  destaque: {
    fontWeight: "700",
    color: "#7a750d",
  },
});
