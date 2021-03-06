import { SideBarData } from "types/sidebarTypes";
import { displayablePosts } from "utils/getPost";
import { arrTags, arrCategories } from "utils/getTags";
import { SITE_CONFIG } from "data/config";
import { useTranslator } from "hooks/useTranslator";
import { staticPageRoutes } from "data/staticPageRoutes";
/**
 * @name sidebarDdata
 * @description The defination of sidebar
 * @see Icons https://google.github.io/material-design-icons/#getting-icons
 */
export const useSiderBarData = (): SideBarData => {
  const { setLanguage, translate, locale } = useTranslator();

  return {
    headImage: SITE_CONFIG.headImageUrl,
    name: SITE_CONFIG.author,
    motto: SITE_CONFIG.motto,
    links: [
      {
        title: "Home",
        desc: translate(locale.homepage),
        icon: "home",
        ...staticPageRoutes.home,
      },
      {
        title: "Archives",
        icon: "archive",
        desc: translate(locale.posts),
        subLinks: [
          {
            textLeft: "Posts",
            textRight: displayablePosts.length.toString(),
            desc: translate(locale.techArchives),
            ...staticPageRoutes.index,
          },
          {
            textLeft: "Categories",
            textRight: arrCategories.length.toString(),
            desc: translate(locale.categories),
            ...staticPageRoutes.categories,
          },
          {
            textLeft: "Tags",
            textRight: arrTags.length.toString(),
            desc: translate(locale.tags),
            ...staticPageRoutes.categories,
          },
        ],
      },
      {
        title: "About",
        icon: "person",
        desc: translate(locale.about),
        ...staticPageRoutes.aboutMe,
      },
      {
        title: "Language",
        icon: "translate",
        desc: translate(locale.language),
        subLinks: [
          {
            textLeft: "zh-CN",
            onClickSubLink: (): void => setLanguage("zh"),
          },
          {
            textLeft: "en-US",
            onClickSubLink: (): void => setLanguage("en"),
          },
        ],
      },
    ],
  };
};
