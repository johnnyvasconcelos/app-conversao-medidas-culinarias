import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function Home({ navigation }) {
  const [quantidade, setQuantidade] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [medida, setMedida] = useState("");

  const [fontsLoaded] = useFonts({
    "Custom-Regular": require("../assets/fonts/font-regular.ttf"),
    "Custom-Bold": require("../assets/fonts/font-bold.ttf"),
    "Custom-Bolder": require("../assets/fonts/font-bolder.ttf"),
  });

  const todasAsMedidas = [
    { label: "Colher (Sopa)", value: "colher-sopa" },
    { label: "Colher (Sobremesa)", value: "colher-sobremesa" },
    { label: "Colher (Chá)", value: "colher-cha" },
    { label: "Colher (Café)", value: "colher-cafe" },
    { label: "Xícara (Chá)", value: "xicara-cha" },
    { label: "Xícara (Café)", value: "xicara-cafe" },
    { label: "Copo Americano", value: "copo-americano" },
    { label: "Gramas", value: "gramas" },
    { label: "Quilos", value: "quilos" },
    { label: "Litros", value: "litros" },
    { label: "Mililitros", value: "mililitros" },
    { label: "Unidades", value: "unidades" },
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
    },
    "azeitonas-sem-caroco": {
      "xicara-cha": "130g (30 unidades)",
      "xicara-cafe": "34g (8 unidades)",
      "copo-americano": "95g (22 unidades)",
      gramas: "130g (30 unidades)",
      quilos: "0.1kg (30 unidades)",
      unidades: "4.3g",
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
      unidades: "0.42g",
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
    },
  };

  const medidaSelecionada = medida || "xicara-cha";
  const ingredienteSelecionado = ingrediente || "farinha-de-trigo";
  const quantidadeConvertida =
    valores[ingredienteSelecionado]?.[medidaSelecionada] ?? 0;

  const nomesMedidas = {
    "colher-sopa": "Colher (Sopa)",
    "colher-sobremesa": "Colher (Sobremesa)",
    "colher-cha": "Colher (Chá)",
    "colher-cafe": "Colher (Café)",
    "xicara-cha": "Xícara (Chá)",
    "xicara-cafe": "Xícara (Café)",
    "copo-americano": "Copo Americano",
    gramas: "Xícara (Chá)",
    quilos: "Xícara (Chá)",
    unidades: "Unidade",
    mililitros: "Xícara (Chá)",
    litros: "Xícara (Chá)",
  };
  const nomesIngredientes = {
    "acucar-refinado": "Açúcar Refinado",
    "farinha-de-trigo": "Farinha de Trigo",
    "acucar-cristal": "Açúcar Cristal",
    "arroz-cru": "Arroz Cru",
    "azeitonas-sem-caroco": "Azeitonas sem Caroço",
    "carne-moida": "Carne Moída Crua",
    "feijao-cru": "Feijão Cru",
    "frango-desfiado": "Frango Desfiado",
    "graos-de-milho": "Grãos de Milho Cozidos",
    liquidos: "Líquidos",
    manteiga: "Manteiga",
    mel: "Mel",
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
  } else if (ingrediente === "mel") {
    medidasFiltradas = todasAsMedidas.filter((m) => m.value !== "unidades");
  } else if (ingrediente === "azeitonas-sem-caroco") {
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
  }
  useEffect(() => {
    setQuantidade("");
  }, [medidaSelecionada]);
  const abrirTelaDados = () => {
    navigation.navigate("Dados");
  };

  if (!fontsLoaded) {
    return null;
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
        <Image
          source={require("../assets/images/tea.webp")}
          style={styles.tea}
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
            style={styles.select}
            selectedValue={ingrediente}
            onValueChange={(value) => {
              setIngrediente(value);
              setMedida("");
            }}
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
            <Picker.Item label="Feijão Cru" value="feijao-cru" />
            <Picker.Item label="Frango Desfiado" value="frango-desfiado" />
            <Picker.Item label="Grãos de Milho" value="graos-de-milho" />
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
            style={styles.select}
            selectedValue={medida}
            onValueChange={(value) => setMedida(value)}
          >
            <Picker.Item label="Selecione a medida..." value="" />
            {medidasFiltradas.map((m) => (
              <Picker.Item key={m.value} label={m.label} value={m.value} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Quantidade</Text>
        {["litros", "mililitros", "quilos", "gramas", "unidades"].includes(
          medidaSelecionada
        ) ? (
          <TextInput
            style={styles.input}
            placeholder="Ex: 1"
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
          />
        ) : (
          <View style={styles.selectView}>
            <Picker
              style={styles.select}
              selectedValue={quantidade}
              onValueChange={(itemValue) => setQuantidade(itemValue)}
            >
              {[
                "1/4",
                "1/3",
                "1/2",
                "1",
                "1 1/2",
                "2",
                "2 1/2",
                "3",
                "3 1/2",
                "4",
                "4 1/2",
                "5",
                "5 1/2",
              ].map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
            </Picker>
          </View>
        )}
        <Pressable style={styles.button} onPress={abrirTelaDados}>
          <Text style={styles.buttonText}>converter</Text>
        </Pressable>
        <Text style={styles.info}>
          {medidaSelecionada === "copo-americano" ? "Um" : "Uma"}{" "}
          <Text style={styles.destaque}>
            {nomesMedidas[medidaSelecionada] || "xícara de chá"}
          </Text>{" "}
          {medidaSelecionada === "unidades" ? "possui" : "comporta"}{" "}
          aproximadamente{" "}
          <Text style={styles.destaque}>{quantidadeConvertida}</Text> de{" "}
          <Text style={styles.destaque}>
            {nomesIngredientes[ingredienteSelecionado] || "Farinha de Trigo"}
          </Text>
          .
        </Text>
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
    paddingVertical: 22,
    width: "85%",
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
  input: {
    backgroundColor: "#fdeed3",
    borderColor: "#eccb9b",
    borderWidth: 3,
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
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
    color: "white",
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
  },
  destaque: {
    fontWeight: "700",
    color: "#7a750d",
  },
});
