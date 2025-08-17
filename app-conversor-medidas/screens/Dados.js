import { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
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
    if (ingredienteLabel === "Líquidos") return "15ml(g)";
    if (ingredienteLabel === "Manteiga") return "18g";
    if (ingredienteLabel === "Mel") return "15ml (18g)";
    if (ingredienteLabel === "Pó de Café") return "9g";
    if (ingredienteLabel === "Sal") return "18g";
    return "0g";
  };
  const pesoPorIngredienteCopo = (ingredienteLabel) => {
    if (ingredienteLabel === "Açúcar Refinado") return "195g";
    if (ingredienteLabel === "Farinha de Trigo") return "115g";
    if (ingredienteLabel === "Açúcar Cristal") return "140g";
    if (ingredienteLabel === "Arroz Cru") return "210g";
    if (ingredienteLabel === "Azeitonas sem Caroço") return "95g (22 unidades)";
    if (ingredienteLabel === "Creme de Avelã") return "270g";
    if (ingredienteLabel === "Carne Moída Crua") return "138g";
    if (ingredienteLabel === "Feijão Cru") return "170g";
    if (ingredienteLabel === "Frango Desfiado") return "110g";
    if (ingredienteLabel === "Grãos de Milho Cozidos") return "130g";
    if (ingredienteLabel === "Líquidos") return "190ml(g)";
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
    if (ingredienteLabel === "Líquidos") return "240ml(g)";
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
  let valorOncas = 0;

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
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorXicaraCha = ((1000 * calculo) / 140).toFixed(2).replace(".", ",");
        valorQuilos = 0;
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 140).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
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
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 220).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 220).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
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
  } else if (ingredienteLabel == "Açúcar Cristal") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 11).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 17).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 5.5).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 2.75).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 140).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 175).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 51).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 175).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 175).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(175 * calculo);
        valorQuilos = (0.175 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(51 * calculo);
      valorQuilos = (0.051 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(140 * calculo);
      valorQuilos = (0.14 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(17 * calculo);
      valorQuilos = (0.017 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(11 * calculo);
      valorQuilos = (0.011 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(5.5 * calculo);
      valorQuilos = (0.0055 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(2.75 * calculo);
      valorQuilos = (0.00275 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Arroz Cru") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 10).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 16).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 5).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 2.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 140).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 180).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 61).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 210).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 210).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(210 * calculo);
        valorQuilos = (0.21 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(61 * calculo);
      valorQuilos = (0.061 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(180 * calculo);
      valorQuilos = (0.18 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(16 * calculo);
      valorQuilos = (0.016 * calculo).toFixed(2).replace(".", ",");
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
  } else if (ingredienteLabel == "Azeitonas sem Caroço") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 95).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 130).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 34).toFixed(2).replace(".", ",");
      valorUnidades = (pesoGramas / 4.3).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 210).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 130).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(130 * calculo);
        valorQuilos = (0.13 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(34 * calculo);
      valorQuilos = (0.034 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(95 * calculo);
      valorQuilos = (0.095 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Unidade(s)") {
      calcularConversoes(4.3 * calculo);
      valorQuilos = (0.0043 * calculo).toFixed(2).replace(".", ",");
      valorUnidades = 0;
    }
  } else if (ingredienteLabel == "Carne Moída Crua") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 24).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 9).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 4.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 138).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 172).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 50).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 172).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 172).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(172 * calculo);
        valorQuilos = (0.172 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(50 * calculo);
      valorQuilos = (0.05 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(138 * calculo);
      valorQuilos = (0.138 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(24 * calculo);
      valorQuilos = (0.024 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(18 * calculo);
      valorQuilos = (0.018 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(9 * calculo);
      valorQuilos = (0.009 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(4.5 * calculo);
      valorQuilos = (0.0045 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Creme de Avelã") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 16).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 24).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 8).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 4).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 270).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 350).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 102).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 350).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 350).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(350 * calculo);
        valorQuilos = (0.35 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(102 * calculo);
      valorQuilos = (0.102 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(270 * calculo);
      valorQuilos = (0.27 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(24 * calculo);
      valorQuilos = (0.024 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(16 * calculo);
      valorQuilos = (0.016 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(8 * calculo);
      valorQuilos = (0.008 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(4 * calculo);
      valorQuilos = (0.004 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Feijão Cru") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 170).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 250).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 72).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 250).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 250).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(250 * calculo);
        valorQuilos = (0.25 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(72 * calculo);
      valorQuilos = (0.072 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(170 * calculo);
      valorQuilos = (0.17 * calculo).toFixed(2).replace(".", ",");
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
  } else if (ingredienteLabel == "Frango Desfiado") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 110).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 128).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 37).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 128).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 128).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(128 * calculo);
        valorQuilos = (0.128 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(37 * calculo);
      valorQuilos = (0.037 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(110 * calculo);
      valorQuilos = (0.11 * calculo).toFixed(2).replace(".", ",");
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
  } else if (ingredienteLabel == "Grãos de Milho Cozidos") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 10).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 15).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 5).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 2.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 130).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 190).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 55).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 190).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 190).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(190 * calculo);
        valorQuilos = (0.19 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(55 * calculo);
      valorQuilos = (0.055 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(130 * calculo);
      valorQuilos = (0.13 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(15 * calculo);
      valorQuilos = (0.015 * calculo).toFixed(2).replace(".", ",");
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
    } else if (medidaLabel == "Unidade(s)") {
      calcularConversoes(0.42 * calculo);
      valorQuilos = (0.00042 * calculo).toFixed(2).replace(".", ",");
      valorUnidades = 0;
    }
  } else if (ingredienteLabel == "Líquidos") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = 0;
      valorMililitros = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 10).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 15).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 5).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 2.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 190).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 240).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 70).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 29.57).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "litros") {
        calcularConversoes(1000 * calculo);
        valorLitros = 0;
        valorXicaraCha = ((1000 * calculo) / 240).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "mililitros") {
        calcularConversoes(1 * calculo, 0);
        valorLitros = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 240).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(29.57 * calculo);
        valorQuilos = (0.2957 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(240 * calculo);
        valorLitros = (0.24 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(70 * calculo);
      valorLitros = (0.07 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(190 * calculo);
      valorLitros = (0.19 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(15 * calculo);
      valorLitros = (0.015 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(10 * calculo);
      valorLitros = (0.01 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(5 * calculo);
      valorLitros = (0.005 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(2.5 * calculo);
      valorLitros = (0.0025 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Manteiga") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 158).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 200).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 58).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 200).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 200).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(200 * calculo);
        valorQuilos = (0.2 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(58 * calculo);
      valorQuilos = (0.058 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(158 * calculo);
      valorQuilos = (0.158 * calculo).toFixed(2).replace(".", ",");
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
  } else if (ingredienteLabel == "Mel") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 237).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 300).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 87).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };

    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 300).toFixed(2).replace(".", ",");
        valorLitros = ((1000 * calculo) / 1260).toFixed(2).replace(".", ",");
        valorMililitros = (240 * ((1000 * calculo) / 300))
          .toFixed(2)
          .replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 300).toFixed(2).replace(".", ",");
        valorMililitros = (calculo / 1.26).toFixed(2).replace(".", ",");
        valorLitros = (calculo / 1260).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "litros") {
        calcularConversoes(1260 * calculo);
        valorLitros = 0;
        valorXicaraCha = ((1260 * calculo) / 300).toFixed(2).replace(".", ",");
        valorMililitros = (1000 * calculo).toFixed(2).replace(".", ",");
        valorQuilos = (1.26 * calculo).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "mililitros") {
        calcularConversoes(calculo * 1.26);
        valorLitros = (calculo / 1000).toFixed(2).replace(".", ",");
        valorMililitros = 0;
        valorXicaraCha = (calculo / 240).toFixed(2).replace(".", ",");
        valorQuilos = (1260 / calculo).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(300 * calculo);
        valorQuilos = (0.3 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
        valorMililitros = (240 * calculo).toFixed(2).replace(".", ",");
        valorLitros = ((240 * calculo) / 1000).toFixed(2).replace(".", ",");
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(87 * calculo);
      valorQuilos = (0.087 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
      valorMililitros = (70 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((70 * calculo) / 1000).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(237 * calculo);
      valorQuilos = (0.237 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
      valorMililitros = (190 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((190 * calculo) / 1000).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(18 * calculo);
      valorQuilos = (0.018 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
      valorMililitros = (15 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((15 * calculo) / 1000).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(12 * calculo);
      valorQuilos = (0.012 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
      valorMililitros = (10 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((10 * calculo) / 1000).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(6 * calculo);
      valorQuilos = (0.006 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
      valorMililitros = (5 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((5 * calculo) / 1000).toFixed(2).replace(".", ",");
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(3 * calculo);
      valorQuilos = (0.003 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
      valorMililitros = (2.5 * calculo).toFixed(2).replace(".", ",");
      valorLitros = ((2.5 * calculo) / 1000).toFixed(2).replace(".", ",");
    }
  } else if (ingredienteLabel == "Pó de Café") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 9).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 1.5).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 60).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 90).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 26).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 90).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 90).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(90 * calculo);
        valorQuilos = (0.09 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(26 * calculo);
      valorQuilos = (0.026 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(60 * calculo);
      valorQuilos = (0.06 * calculo).toFixed(2).replace(".", ",");
      valorCopoAmericano = 0;
    } else if (medidaLabel == "Colher(es) (Sopa)") {
      calcularConversoes(9 * calculo);
      valorQuilos = (0.009 * calculo).toFixed(2).replace(".", ",");
      valorColherSopa = 0;
    } else if (medidaLabel == "Colher(es) (Sobremesa)") {
      calcularConversoes(6 * calculo);
      valorQuilos = (0.006 * calculo).toFixed(2).replace(".", ",");
      valorColherSobremesa = 0;
    } else if (medidaLabel == "Colher(es) (Chá)") {
      calcularConversoes(3 * calculo);
      valorQuilos = (0.003 * calculo).toFixed(2).replace(".", ",");
      valorColherCha = 0;
    } else if (medidaLabel == "Colher(es) (Café)") {
      calcularConversoes(1.5 * calculo);
      valorQuilos = (0.0015 * calculo).toFixed(2).replace(".", ",");
      valorColherCafe = 0;
    }
  } else if (ingredienteLabel == "Sal") {
    const calcularConversoes = (pesoGramas, gramasExib = pesoGramas) => {
      valorGramas = pesoGramas;
      valorGramasExibicao = gramasExib.toFixed(2).replace(".", ",");
      valorColherSobremesa = (pesoGramas / 12).toFixed(2).replace(".", ",");
      valorColherSopa = (pesoGramas / 18).toFixed(2).replace(".", ",");
      valorColherCha = (pesoGramas / 6).toFixed(2).replace(".", ",");
      valorColherCafe = (pesoGramas / 3).toFixed(2).replace(".", ",");
      valorCopoAmericano = (pesoGramas / 192).toFixed(2).replace(".", ",");
      valorXicaraCha = (pesoGramas / 243).toFixed(2).replace(".", ",");
      valorXicaraCafe = (pesoGramas / 71).toFixed(2).replace(".", ",");
      valorOncas = (pesoGramas / 28.3495).toFixed(2).replace(".", ",");
    };
    if (medidaLabel == "Xícara(s) (Chá)") {
      if (medidaSelecionada == "quilos") {
        calcularConversoes(1000 * calculo);
        valorQuilos = 0;
        valorXicaraCha = ((1000 * calculo) / 243).toFixed(2).replace(".", ",");
      } else if (medidaSelecionada == "gramas") {
        calcularConversoes(1 * calculo, 0);
        valorQuilos = (0.001 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = (calculo / 243).toFixed(2).replace(".", ",");
        valorGramasExibicao = 0;
      } else if (medidaSelecionada == "oncas") {
        calcularConversoes(28.3495 * calculo);
        valorQuilos = (0.283495 * calculo).toFixed(2).replace(".", ",");
        valorOncas = 0;
      } else {
        calcularConversoes(243 * calculo);
        valorQuilos = (0.243 * calculo).toFixed(2).replace(".", ",");
        valorXicaraCha = 0;
      }
    } else if (medidaLabel == "Xícara(s) (Café)") {
      calcularConversoes(71 * calculo);
      valorQuilos = (0.071 * calculo).toFixed(2).replace(".", ",");
      valorXicaraCafe = 0;
    } else if (medidaLabel == "Copo(s) Americano(s)") {
      calcularConversoes(192 * calculo);
      valorQuilos = (0.192 * calculo).toFixed(2).replace(".", ",");
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

  if (medidaSelecionada == "gramas") {
    medidaLabel = "Grama(s)";
  } else if (medidaSelecionada == "quilos") {
    medidaLabel = "Quilo(s)";
  } else if (medidaSelecionada == "litros") {
    medidaLabel = "Litro(s)";
  } else if (medidaSelecionada == "mililitros") {
    medidaLabel = "Mililitro(s)";
  } else if (medidaSelecionada == "oncas") {
    medidaLabel = "Onça(s)";
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
            { valor: valorOncas, label: "Onça(s)" },
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
        <View style={styles.infoWrapper}>
          <Text
            style={[styles.info, styles.infoMargin]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            •{" "}
            {ingredienteLabel === "Azeitonas sem Caroço"
              ? "1 Unidade"
              : "1 Colher (Sopa)"}{" "}
            =
            <Text style={styles.destaque}>
              {" "}
              {pesoPorIngredienteColher(ingredienteLabel)}
            </Text>
          </Text>
          <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
            • 1 Copo Americano =
            <Text style={styles.destaque}>
              {" "}
              {pesoPorIngredienteCopo(ingredienteLabel)}
            </Text>
          </Text>
          <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
            • 1 Xícara (Chá) =
            <Text style={styles.destaque}>
              {" "}
              {pesoPorIngredienteXicara(ingredienteLabel)}
            </Text>
          </Text>
        </View>
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
    maxWidth: 480,
    marginTop: -20,
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
    paddingVertical: 7.5,
    borderRightWidth: 1,
    borderColor: "#cda571",
    width: "29%",
    fontWeight: 700,
    color: "#4c2e1c",
    fontSize: 14,
    textAlign: "center",
  },
  td2: {
    paddingVertical: 7.5,
    paddingHorizontal: 10,
    color: "#4c2e1c",
    fontSize: 14,
    backgroundColor: "#fcd9a3",
    width: "71%",
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
  teaDiv: {
    position: "absolute",
    bottom: -22,
    right: -28,
  },
  tea: {
    width: 83,
    height: 61.5,
  },
  infoWrapper: {
    marginTop: 15,
  },
  info: {
    fontStyle: "italic",
    color: "#647310",
    maxWidth: "88%",
    fontSize: 12,
  },
  destaque: {
    fontWeight: "700",
    color: "#7a750d",
  },
});
