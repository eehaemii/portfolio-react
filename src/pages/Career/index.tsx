import { useEffect, useState } from "react";

import * as S from "./styled";
import LineCard from "@/components/LineCard";
import { IPropsBox } from "@/components/LineCard/interface";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const Career = () => {
  const [CareerList, setCareerList] = useState<IPropsBox[]>([]);
  const [showAll, setShowAll] = useState(false);

  const visibleCareers = showAll ? CareerList : CareerList.slice(0, 4);
  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  useEffect(() => {
    fetch("/data/career.json")
      .then((res) => res.json())
      .then((data) => setCareerList(data));
  }, []);

  return (
    <S.Section>
      <S.MainTitle>Career</S.MainTitle>

      <S.CareerWrap>
        {visibleCareers.map((item) => {
          return (
            <LineCard
              key={item.companyName}
              period={item.period}
              companyName={item.companyName}
              partTime={item.partTime}
              list={item.list}
            />
          );
        })}
      </S.CareerWrap>

      <S.Button onClick={handleToggle}>
        {showAll ? (
          <>
            <FiChevronUp />
          </>
        ) : (
          <>
            <FiChevronDown />
          </>
        )}
      </S.Button>
    </S.Section>
  );
};
