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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${theme.size.md};

  height: 100vh;
  padding: ${theme.size.xl};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  @media (max-width: ${theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

export const HeroContent = styled.section`
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;
  }
`;

export const Greeting = styled.p`
  margin-bottom: ${theme.size.md};
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.2s forwards;
`;

export const Title = styled.p`
  margin-bottom: ${theme.size.xl};
  font-size: ${theme.size.xxl};
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.4s forwards;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.size.xl};
  }
`;
export const Description = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.8s forwards;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.size.md};
  }
`;
