const procesarTexto = () => {
  const texto = document.getElementById("texto").value;

  const textoLimpio = texto.trim().replace(/\s+/g, " ").toLowerCase();
  const textoCorrecto =
    textoLimpio.charAt(0).toUpperCase() + textoLimpio.slice(1);

  const remplazoNumeros = replaceNumbersWithWords(textoCorrecto);
  document.getElementById("textoProcesado").innerHTML = remplazoNumeros;
};

function replaceNumbersWithWords(text) {
  const numberWords = {
    0: "cero",
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
  };

  return text.replace(/\d/g, (match) => numberWords[match]);
}
