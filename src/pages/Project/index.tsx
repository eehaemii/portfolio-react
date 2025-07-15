import { useEffect, useRef, useState } from "react";
import * as S from "./styled";
import Card from "@/components/Card";
import { IPropsCard } from "@/components/Card/interface";

export const Project = () => {
  const [projectList, setProjectList] = useState<IPropsCard[]>([]);
  const BATCH_SIZE = 4;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // 각 카드별로 ref와 isVisible 상태를 관리
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardVisible, setCardVisible] = useState<boolean[]>([]);

  // 프로젝트 데이터 fetch
  useEffect(() => {
    fetch("/data/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data);
        setCardVisible(Array(data.length).fill(false));
      });
  }, []);

  // 무한 스크롤: 마지막 카드가 보이면 다음 N개 추가
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 2, projectList.length));
        }
      },
      { threshold: 1 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, projectList.length]);

  // 각 카드별로 Intersection Observer 적용
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, visibleCount);
    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      if (cardVisible[idx]) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
    });
  }, [visibleCount, cardVisible]);

  const visibleProjects = projectList.slice(0, visibleCount);

  return (
    <S.Section>
      <S.MainTitle>Project</S.MainTitle>
      <S.ProjectWrap>
        {visibleProjects.map((item, idx) => {
          const isLast = idx === visibleProjects.length - 1;
          return (
            <S.CardWrapper
              key={item.title}
              ref={(el) => {
                cardRefs.current[idx] = el;
                if (isLast) loadMoreRef.current = el;
              }}
            >
              <Card
                idx={idx}
                isVisible={cardVisible[idx]}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                href={item.href}
                list={item.list}
              />
            </S.CardWrapper>
          );
        })}
      </S.ProjectWrap>
    </S.Section>
  );
};
