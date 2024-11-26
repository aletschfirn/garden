export interface ColorScheme {
  background: string
  borders: string
  heavyborders: string
  bodytext: string
  headertext: string
  linkcolor: string
  hoverstate: string
  highlightedtext: string
  textHighlight: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.background};
  --lightgray: ${theme.colors.lightMode.borders};
  --gray: ${theme.colors.lightMode.heavyborders};
  --darkgray: ${theme.colors.lightMode.bodytext};
  --dark: ${theme.colors.lightMode.headertext};
  --secondary: ${theme.colors.lightMode.linkcolor};
  --tertiary: ${theme.colors.lightMode.hoverstate};
  --highlight: ${theme.colors.lightMode.highlightedtext};
  --textHighlight: ${theme.colors.lightMode.textHighlight};
  --headerFont: "${theme.typography.header}", ${DEFAULT_SANS_SERIF};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.background};
  --lightgray: ${theme.colors.darkMode.borders};
  --gray: ${theme.colors.darkMode.heavyborders};
  --darkgray: ${theme.colors.darkMode.bodytext};
  --dark: ${theme.colors.darkMode.headertext};
  --secondary: ${theme.colors.darkMode.linkcolor};
  --tertiary: ${theme.colors.darkMode.hoverstate};
  --highlight: ${theme.colors.darkMode.highlightedtext};
  --textHighlight: ${theme.colors.darkMode.textHighlight};
}
`
}
