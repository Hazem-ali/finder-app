// utils/colorUtils.js
export const calculateHoverColor = (bgColor) => {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    };
  
    // Calculate luminance of a color
    const luminance = ({ r, g, b }) => {
      const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });
      return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    };
  
    // Increase or decrease the brightness
    const adjustBrightness = ({ r, g, b }, amount) => {
      return {
        r: Math.min(255, Math.max(0, r + amount)),
        g: Math.min(255, Math.max(0, g + amount)),
        b: Math.min(255, Math.max(0, b + amount)),
      };
    };
  
    const rgbColor = hexToRgb(bgColor);
    const lum = luminance(rgbColor);
    const amount = lum > 0.5 ? -40 : 40; // Adjust brightness by 40
  
    const hoverColor = adjustBrightness(rgbColor, amount);
  
    // Convert RGB back to hex
    const rgbToHex = ({ r, g, b }) => {
      const toHex = (c) => c.toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
  
    return rgbToHex(hoverColor);
  };