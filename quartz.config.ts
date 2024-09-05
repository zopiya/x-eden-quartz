import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 X·Eden", // 页面标题
    enableSPA: true, // 启用单页应用
    enablePopovers: true, // 启用弹出框
    analytics: {
      provider: 'umami', host: 'https://umami.7wate.com/', websiteId: 'c061efdc-95dd-4d21-9d04-a1ffda0a85b9'
    },
    locale: "zh-CN", // 语言区域
    baseUrl: "wiki.7wate.com", // 基础 URL
    ignorePatterns: ["Obsidian", ".obsidian"], // 忽略的模式
    defaultDateType: "created", // 默认日期类型
    theme: {
      fontOrigin: "googleFonts", // 字体来源
      cdnCaching: true, // 启用 CDN 缓存
      typography: {
        header: "Noto Serif Simplified Chinese", // 标题字体
        body: "Source Sans Pro", // 正文字体
        code: "IBM Plex Mono", // 代码字体
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // 浅色
          lightgray: "#e5e5e5", // 浅灰色
          gray: "#b8b8b8", // 灰色
          darkgray: "#4e4e4e", // 深灰色
          dark: "#2b2b2b", // 深色
          secondary: "#284b63", // 次要颜色
          tertiary: "#84a59d", // 第三颜色
          highlight: "rgba(143, 159, 169, 0.15)", // 高亮颜色
          textHighlight: "#fff23688", // 文本高亮颜色
        },
        darkMode: {
          light: "#161618", // 浅色
          lightgray: "#393639", // 浅灰色
          gray: "#646464", // 灰色
          darkgray: "#d4d4d4", // 深灰色
          dark: "#ebebec", // 深色
          secondary: "#7b97aa", // 次要颜色
          tertiary: "#84a59d", // 第三颜色
          highlight: "rgba(143, 159, 169, 0.15)", // 高亮颜色
          textHighlight: "#b3aa0288", // 文本高亮颜色
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(), // 前置数据
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // 创建和修改日期
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light", // 浅色主题
          dark: "github-dark", // 深色主题
        },
        keepBackground: false, // 保持背景
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // Obsidian 风格的 Markdown
      Plugin.GitHubFlavoredMarkdown(), // GitHub 风格的 Markdown
      Plugin.TableOfContents(), // 目录
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }), // 链接爬取
      Plugin.Description(), // 描述
      Plugin.Latex({ renderEngine: "katex" }), // LaTeX 渲染
    ],
    filters: [Plugin.RemoveDrafts()], // 移除草稿
    emitters: [
      Plugin.AliasRedirects(), // 别名重定向
      Plugin.ComponentResources(), // 组件资源
      Plugin.ContentPage(), // 内容页面
      Plugin.FolderPage(), // 文件夹页面
      Plugin.TagPage(), // 标签页面
      Plugin.ContentIndex({
        enableSiteMap: true, // 启用站点地图
        enableRSS: true, // 启用 RSS
      }),
      Plugin.Assets(), // 资源
      Plugin.Static(), // 静态文件
      Plugin.NotFoundPage(), // 404 页面
    ],
  },
}

export default config