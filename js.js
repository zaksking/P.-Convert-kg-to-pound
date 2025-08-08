function btnConvert() {
    const pound = document.getElementById('weightInput').value;
    const kg = pound * 0.453592;
    document.getElementById('answerKG').textContent = kg.toFixed(2);
}