// 基本色
const color = {
  BLACK: "#333",
  WHITE: "#fff",
  GRAY: "#e1e2e1",
  GRAY_LIGHT: "#f5f5f5",
  GRAY_DARK: "#b7b7b7",
  TEAL: "#00bfa5",
  TEAL_LIGHT: "#5df2d6",
  TEAL_DARK: "#008e76",
  RED: "#d50000",
}

// アプリテーマ色
const theme_color = {
  BASE: color.GRAY_LIGHT,
  MAIN: color.TEAL,
  ACCENT: color.RED,
}

// 汎用フォント設定
const font = {
  SIZE_S: "1rem",
  SIZE_M: "2rem",
  SIZE_L: "3rem",
}

// 汎用ボタン設定
const button = {
  SIZE_S: "0.5rem 1.5rem",
  SIZE_M: "1rem 3rem",
  SIZE_L: "2rem 6rem",
}

const media = {
  NOT_SP: "min-width: 769px",
}

const Properties = {
  COLOR: color,
  THEME_COLOR: theme_color,
  FONT: font,
  BUTTON: button,
  MEDIA: media,
}

export default Properties