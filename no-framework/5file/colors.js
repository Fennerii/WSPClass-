const baseColors = {
    red:    { r: 255, g: 0,   b: 0   },
    blue:   { r: 0,   g: 0,   b: 255 },
    green:  { r: 0,   g: 255, b: 0   },
    yellow: { r: 255, g: 255, b: 0   },
    white:  { r: 255, g: 255, b: 255 }
};

function mixColors(selected) {
    if (selected.length === 0) return { r: 255, g: 255, b: 255 };

    let total = { r: 0, g: 0, b: 0 };

    selected.forEach(color => {
        total.r += color.r;
        total.g += color.g;
        total.b += color.b;
    });

    return {
        r: clamp(Math.round(total.r / selected.length), 0, 255),
        g: clamp(Math.round(total.g / selected.length), 0, 255),
        b: clamp(Math.round(total.b / selected.length), 0, 255)
    };
}
