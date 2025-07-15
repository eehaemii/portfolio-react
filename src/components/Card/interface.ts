import { EThemeTag } from "@/interfaces/common";

export interface ITagItem {
  theme: EThemeTag;
}

export interface IPropsCard {
  icon?: string;
  title?: string;
  desc?: string;
  list?: ITagItem[];
  href?: string;
}
