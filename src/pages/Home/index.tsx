import { useEffect } from "react";
import * as S from "./styled";

export const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              // setSkillsVisible(true);
            }, 300);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    return () => observer.disconnect();
  }, []);

  return (
    <S.Main>
      <h1 className="blind">개인 포트폴리오 입니다.</h1>

      <S.HeroContent>
        <S.Greeting className="greeting">안녕하세요 👋</S.Greeting>
        <S.Name className="name">이해미</S.Name>
        <S.Title className="title">Frontend Developer</S.Title>
        <S.Description>
          사용자 경험을 중시하는 프론트엔드 개발자입니다
        </S.Description>
      </S.HeroContent>
    </S.Main>
  );
};
