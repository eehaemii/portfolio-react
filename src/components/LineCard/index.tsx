import * as S from "./styled";
import { IPropsBox } from "./interface";
import { EThemeTag } from "@/interfaces/common";

import Tag from "@/components/Tag";

export default function LineCard({
  period,
  companyName,
  partTime,
  list,
}: IPropsBox) {
  return (
    <S.LineCardWrap>
      <h2 className="blind">경력 목록</h2>
      <S.CompanyData>{period}</S.CompanyData>

      <S.Line />

      <S.CompanyWrap>
        <S.CompanyName>{companyName}</S.CompanyName>
        {partTime ? <S.PartTime>파트타임</S.PartTime> : null}
      </S.CompanyWrap>

      <div>
        {list?.map((item: { theme: EThemeTag }, index: number) => (
          <Tag
            key={index}
            themeType={item.theme}
            message={item.theme.toLowerCase()}
          />
        ))}
      </div>
    </S.LineCardWrap>
  );
}
