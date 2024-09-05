import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzPluginData } from "./quartz/plugins/vfile"

// 跨所有页面共享的组件
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Home": "https://www.7wate.com",
      "Blog": "https://blog.7wate.com",
      GitHub: "https://github.com/7wate",
    },
  }),
}

// 单页显示的组件布局
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯", // 面包屑符号
      rootName: "Home", // 根元素名称
      resolveFrontmatterTitle: true, // 解析前置数据标题
      hideOnRoot: true, // 在根页面隐藏面包屑
      showCurrentPage: true, // 显示当前页面
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({
      title: "博客",
      limit: 3,
      showTags: false,
      filter: (data: QuartzPluginData) => {
        return data.filePath ? data.filePath.startsWith('content/Personal/Blog') : false
      }
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(Component.Explorer()),
  ],
}

// 列表页面显示的组件布局
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}