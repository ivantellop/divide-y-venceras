function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    return leftMax > rightMax ? leftMax : rightMax;
}

function handleMax() {
    const input = document.getElementById("inputArray").value.trim();

    if (!input.includes(",")) {
        document.getElementById("resultado").textContent = "Por favor, separa los números con comas.";
        return;
    }

    const parsed = input.split(",").map(num => parseFloat(num.trim()));

    if (parsed.some(isNaN)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa solo números válidos separados por comas.";
        return;
    }

    if (parsed.length < 2) {
        document.getElementById("resultado").textContent = "Ingresa al menos dos números.";
        return;
    }

    const max = findMax(parsed);
    const index = parsed.indexOf(max);
    document.getElementById("resultado").textContent = `El número máximo es: ${max} (posición ${index + 1})`;
}

function limpiar() {
    document.getElementById("inputArray").value = "";
    document.getElementById("resultado").textContent = "";
}
