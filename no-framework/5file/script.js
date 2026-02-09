const palette = document.getElementById("palette");
const resultColor = document.getElementById("resultColor");
const resultText = document.getElementById("resultText");
const clearBtn = document.getElementById("clearBtn");

let selectedColors = [];

// Create color buttons
for (const name in baseColors) {
    const btn = document.createElement("div");
    btn.className = "color-btn";
    btn.style.backgroundColor = name;
    btn.title = name;

    btn.addEventListener("click", () => {
        selectedColors.push(baseColors[name]);
        updateResult();
    });

    palette.appendChild(btn);
}

function updateResult() {
    const mixed = mixColors(selectedColors);
    const rgb = `rgb(${mixed.r}, ${mixed.g}, ${mixed.b})`;

    resultColor.style.backgroundColor = rgb;
    resultText.textContent = rgb;
}

clearBtn.addEventListener("click", () => {
    selectedColors = [];
    resultColor.style.backgroundColor = "#ffffff";
    resultText.textContent = "No colors selected";
});
