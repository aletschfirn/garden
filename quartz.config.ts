import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Aletschfirn's garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "aletschfirn.github.io/garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Serif",
        body: "IBM Plex Sans",
        code: "JetBrains Mono",
      },
      colors: {
        darkMode: {
          background: "#050505",
          borders: "#7c6f64",
          heavyborders: "#3c3836",
          bodytext: "#343434",
          headertext: "#f0f0f0",
          linkcolor: "#7c6f64",
          hoverstate: "#fbf1c7",
          highlightedtext: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fbf1c7",
        },
        lightMode: {
          background: "#f0f0f0",
          borders: "#2c2c2c",
          heavyborders: "#a3a3a3",
          bodytext: "#3c3836",
          headertext: "#2c2c2c",
          linkcolor: "#a3a3a3",
          hoverstate: "#282828",
          highlightedtext: "#d3d3d3",
          textHighlight: "#504945",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
