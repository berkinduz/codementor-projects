function convert() {
  const degree = document.getElementById("convDegree").value || 1;
  const typeSelection = document.getElementById("typeSelect").value;

  let result =
    typeSelection === "fahrenheit" ? (degree - 32) * 0.55 : degree * 1.8 + 32;

  document.getElementById("convertResult").innerHTML = `${result} &degC`;
}
