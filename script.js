const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", 
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", 
    "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", 
    "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", 
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", 
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", 
    "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", 
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", 
    "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", 
    "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", 
    "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", 
    "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", 
    "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", 
    "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", 
    "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", 
    "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", 
    "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", 
    "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", 
    "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", 
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", 
    "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", 
    "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

let selectedColors = [];
let secretColor = "";

function initializeGame() {
    const gameContainer = document.getElementById('game-container');
    const hintElement = document.getElementById('hint');

    gameContainer.innerHTML = "";
    hintElement.textContent = "";

    selectedColors = getRandomColors(colors, 10);

    secretColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

    selectedColors.forEach(color => {
        const button = document.createElement('button');
        button.textContent = color;
        button.className = 'color-button';
        button.style.backgroundColor = color;
        button.onclick = () => checkColor(color);
        gameContainer.appendChild(button);
    });

    document.body.style.backgroundColor = "black";
}

function getRandomColors(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function checkColor(color) {
    const hintElement = document.getElementById('hint');
    if (color === secretColor) {
        document.body.style.backgroundColor = secretColor;
        hintElement.textContent = "Parabéns! Você acertou!";
    } else {
        // Dica
        if (color < secretColor) {
            hintElement.textContent = "Dica: A cor está depois de " + color + " na ordem alfabética.";
        } else {
            hintElement.textContent = "Dica: A cor está antes de " + color + " na ordem alfabética.";
        }
    }
}

document.getElementById('reset-button').onclick = initializeGame;

initializeGame();
