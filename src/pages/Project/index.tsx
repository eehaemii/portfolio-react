import { useEffect, useState } from "react";

import * as S from "./styled";
import Card from "@/components/Card";
import { IPropsCard } from "@/components/Card/interface";

export const Project = () => {
  const [ProjectList, setProjectList] = useState<IPropsCard[]>([]);

  useEffect(() => {
    fetch("/data/project.json")
      .then((res) => res.json())
      .then((data) => setProjectList(data));
  }, []);

  return (
    <S.Section>
      <S.MainTitle>Project</S.MainTitle>

      <S.ProjectWrap>
        {ProjectList.map((item) => {
          return (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              href={item.href}
              list={item.list}
            />
          );
        })}
      </S.ProjectWrap>
    </S.Section>
  );
};
