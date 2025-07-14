import { EThemeTag } from "@/interfaces/common";

export interface IPropsTag {
  message?: string;
  themeType: EThemeTag;
}

export type TThemeInfo = {
  [key in EThemeTag]: {
    border: string;
    background: string;
  };
};
