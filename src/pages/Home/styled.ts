import styled, { keyframes } from "styled-components";
import { theme } from "@/styles/theme";

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.size.md};
  align-items: center;

  height: 100vh;
  padding: ${theme.size.xl};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
    height: 100%;
  }
`;

export const HeroContent = styled.section`
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const Greeting = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.2s forwards;
`;
export const Name = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.4s forwards;
`;
export const Title = styled.p`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.6s forwards;
`;
export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.8s forwards;
`;

// 스킬
export const Skills = styled.section`
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 1.2s forwards;
`;
export const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
`;

export const SkillsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

interface SkillCardProps {
  hovered: boolean;
}

export const SkillCard = styled.li<SkillCardProps>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
  ${({ hovered }) =>
    hovered &&
    `
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transform: scale(1.03);
    `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    &:not(:first-of-type) {
      margin-top: ${theme.size.md};
    }
  }
`;

export const SkillIcon = styled.p`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SkillName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

export const SkillDescription = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

export const SkillLevel = styled.p`
  margin-top: 1rem;
  background: rgba(255, 255, 255, 0.2);
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
`;

interface SkillProgressProps {
  animated: boolean;
  width: string;
}

export const SkillProgress = styled.p<SkillProgressProps>`
  height: 100%;
  background: white;
  border-radius: 3px;
  width: ${({ animated, width }) => (animated ? width : "0%")};
  transition: width 2s ease-out;
`;
