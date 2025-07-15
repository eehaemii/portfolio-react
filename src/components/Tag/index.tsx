import * as S from "./styled";
import { IPropsTag } from "./interface";
import { EThemeTag } from "@/interfaces/common";

export default function Tag({ message, $themeType }: IPropsTag) {
  const safeThemeType = $themeType ?? EThemeTag.HTML;
  return (
    <S.Tag $themeType={safeThemeType}>
      {message ?? safeThemeType.toLowerCase()}
    </S.Tag>
  );
}
