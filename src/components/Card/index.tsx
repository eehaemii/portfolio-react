import * as S from "./styled";
import { IPropsCard } from "@/components/Card/interface";
import { EThemeTag } from "@/interfaces/common";

import Tag from "@/components/Tag";

export default function Card({
  icon,
  title,
  desc,
  list,
  href,
  idx,
  isVisible,
}: IPropsCard & { idx: number; isVisible: boolean }) {
  return (
    <S.CardWrap $idx={idx} $isVisible={isVisible}>
      <>
        <S.CardList>
          <S.ContentBox>
            <S.IconBox>{icon}</S.IconBox>
            <S.Title>{title}</S.Title>
          </S.ContentBox>

          <S.Link href={href} target="_blank" rel="noopener noreferrer">
            🔗
          </S.Link>
        </S.CardList>

        <S.Description>{desc}</S.Description>
      </>

      <S.TagListBox>
        {list?.map((item: { theme: EThemeTag }, index: number) => (
          <Tag
            key={index}
            $themeType={item.theme}
            message={item.theme.toLowerCase()}
          />
        ))}
      </S.TagListBox>
    </S.CardWrap>
  );
}
