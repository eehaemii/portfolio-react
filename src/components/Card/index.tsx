import * as S from "./styled";
import { IPropsCard } from "@/components/Card/interface";
import { EThemeTag } from "@/interfaces/common";

import Tag from "@/components/Tag";

export default function Card({ icon, title, desc, list }: IPropsCard) {
  return (
    <S.CardWrap>
      <S.CardList>
        <li>
          <S.IconBox>{icon}</S.IconBox>
        </li>
        <li>
          <S.Title>{title}</S.Title>
          <S.Description>{desc}</S.Description>
        </li>
        <li>링크</li>
      </S.CardList>

      <div>
        {list?.map((item: { theme: EThemeTag }, index: number) => (
          <Tag
            key={index}
            themeType={item.theme}
            message={item.theme.toLowerCase()}
          />
        ))}
      </div>
    </S.CardWrap>
  );
}
