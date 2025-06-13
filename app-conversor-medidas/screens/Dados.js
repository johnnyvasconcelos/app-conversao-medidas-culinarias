import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
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
  const pesoPorIngredienteColher = (ingredienteLabel) => {
    if (ingredienteLabel === "Açúcar Refinado") return "18g";
    if (ingredienteLabel === "Farinha de Trigo") return "14g";
    if (ingredienteLabel === "Açúcar Cristal") return "17g";
    if (ingredienteLabel === "Arroz Cru") return "16g";
    if (ingredienteLabel === "Azeitonas sem Caroço") return "4,3g";
    if (ingredienteLabel === "Carne Moída Crua") return "24g";
    if (ingredienteLabel === "Creme de Avelã") return "24g";
    if (ingredienteLabel === "Feijão Cru") return "18g";
    if (ingredienteLabel === "Frango Desfiado") return "18g";
    if (ingredienteLabel === "Grãos de Milho Cozidos")
      return "15g (40 unidades)";
    if (ingredienteLabel === "Líquidos") return "15ml";
    if (ingredienteLabel === "Manteiga") return "18g";
    if (ingredienteLabel === "Mel") return "15ml (18g)";
    if (ingredienteLabel === "Pó de Café") return "9g";
    if (ingredienteLabel === "Sal") return "18g";
    return "0g";
  };
  const pesoPorIngredienteCopo = (ingredienteLabel) => {
    if (ingredienteLabel === "Açúcar Refinado") return "195g";
    if (ingredienteLabel === "Farinha de Trigo") return "140g";
    if (ingredienteLabel === "Açúcar Cristal") return "140g";
    if (ingredienteLabel === "Arroz Cru") return "210g";
    if (ingredienteLabel === "Azeitonas sem Caroço") return "95g (22 unidades)";
    if (ingredienteLabel === "Creme de Avelã") return "270g";
    if (ingredienteLabel === "Carne Moída Crua") return "138g";
    if (ingredienteLabel === "Feijão Cru") return "170g";
    if (ingredienteLabel === "Frango Desfiado") return "110g";
    if (ingredienteLabel === "Grãos de Milho Cozidos") return "130g";
    if (ingredienteLabel === "Líquidos") return "190ml";
    if (ingredienteLabel === "Manteiga") return "158g";
    if (ingredienteLabel === "Mel") return "190ml (237g)";
    if (ingredienteLabel === "Pó de Café") return "60g";
    if (ingredienteLabel === "Sal") return "192g";
    return "0g";
  };
  const pesoPorIngredienteXicara = (ingredienteLabel) => {
    if (ingredienteLabel === "Açúcar Refinado") return "220g";
    if (ingredienteLabel === "Farinha de Trigo") return "140g";
    if (ingredienteLabel === "Açúcar Cristal") return "175g";
    if (ingredienteLabel === "Arroz Cru") return "180g";
    if (ingredienteLabel === "Azeitonas sem Caroço")
      return "130g (30 unidades)";
    if (ingredienteLabel === "Carne Moída Crua") return "172g";
    if (ingredienteLabel === "Creme de Avelã") return "350g";
    if (ingredienteLabel === "Feijão Cru") return "250g";
    if (ingredienteLabel === "Frango Desfiado") return "128g";
    if (ingredienteLabel === "Grãos de Milho Cozidos") return "190g";
    if (ingredienteLabel === "Líquidos") return "240ml";
    if (ingredienteLabel === "Manteiga") return "200g";
    if (ingredienteLabel === "Mel") return "240ml (300g)";
    if (ingredienteLabel === "Pó de Café") return "90g";
    if (ingredienteLabel === "Sal") return "243g";
    return "0g";
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
  if (ingredienteLabel == "Farinha de Trigo") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 10).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 14).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 5).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 2.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 115).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 140).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 35).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = 0;
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      } else {
        calcularConversoes(140 * calculo);
        valorQuilos = (0.14 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(35 * calculo);
      valorQuilos = (0.035 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(115 * calculo);
      valorQuilos = (0.115 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(14 * calculo);
      valorQuilos = (0.014 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(10 * calculo);
      valorQuilos = (0.01 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(5 * calculo);
      valorQuilos = (0.005 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(2.5 * calculo);
      valorQuilos = (0.0025 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Açúcar Refinado") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 195).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 220).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 64).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = 0;
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      } else {
        calcularConversoes(220 * calculo);
        valorQuilos = (0.2 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(64 * calculo);
      valorQuilos = (0.064 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(195 * calculo);
      valorQuilos = (0.195 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(18 * calculo);
      valorQuilos = (0.018 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(12 * calculo);
      valorQuilos = (0.012 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(6 * calculo);
      valorQuilos = (0.006 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(3 * calculo);
      valorQuilos = (0.003 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
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
          •{" "}
          {ingredienteLabel === "Azeitonas sem Caroço"
            ? "1 Unidade"
            : "1 Colher (Sopa)"}{" "}
          ={" "}
          <Text style={styles.destaque}>
            {pesoPorIngredienteColher(ingredienteLabel)}
          </Text>
          {"\n"}• 1 Copo Americano ={" "}
          <Text style={styles.destaque}>
            {pesoPorIngredienteCopo(ingredienteLabel)}
          </Text>
          {"\n"}• 1 Xícara (Chá) ={" "}
          <Text style={styles.destaque}>
            {pesoPorIngredienteXicara(ingredienteLabel)}
          </Text>
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
