import { EThemeTag } from "@/interfaces/common";

export interface ITagItem {
  theme: EThemeTag;
}

export interface IPropsBox {
  period?: string;
  companyName?: string;
  partTime?: boolean;
  list?: ITagItem[];
}
