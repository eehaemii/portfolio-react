import styled from "styled-components";
import { theme } from "@/styles/theme";

export const Section = styled.section`
  padding: ${theme.size.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.size.md};
    padding-bottom: ${theme.size.xl};
  }
`;

export const MainTitle = styled.h2`
  font-family: var(--font-pretendard);
  font-weight: 700;
  font-size: 2rem;
  color: ${theme.colors.primary};
`;

export const CareerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.size.md};
  margin-top: ${theme.size.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.size.sm};
  width: 125px;
  margin: 28px auto 0;
  padding: ${theme.size.sm} ${theme.size.md};
  border-radius: 25px;
  border: 2px solid ${theme.colors.blue};
  background: transparent;
  color: ${theme.colors.blue};
  cursor: pointer;
  transition: all 0.3s ease;
`;
