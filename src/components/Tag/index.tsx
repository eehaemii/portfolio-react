import * as S from "./styled";
import { IPropsTag } from "./interface";

export default function Tag({ message, themeType }: IPropsTag) {
  const safeThemeType = themeType ?? "HTML";
  return (
    <S.Tag themeType={safeThemeType}>
      {message ?? safeThemeType.toLowerCase()}
    </S.Tag>
  );
}
