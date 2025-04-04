document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const hexValue = document.getElementById("hexValue");
    const rgbValue = document.getElementById("rgbValue");

    colorPicker.addEventListener("input", function() {
        const selectedColor = colorPicker.value;
        hexValue.textContent = selectedColor;
        rgbValue.textContent = hexToRgb(selectedColor);
    });

    function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return rgb($ { r }, $ { g }, $ { b });
    }
});