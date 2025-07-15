import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardWrap = styled.div<{ $idx: number; $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.size.md} ${theme.size.lg};
  border-radius: 16px;
  background: ${theme.colors.white};
  box-shadow: 0px 1px 3px #dcdcdc;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(40px)"};
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $idx }) => Math.min($idx * 0.12, 0.6)}s,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)
      ${({ $idx }) => Math.min($idx * 0.12, 0.6)}s;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.size.md};

    // &:not(:first-of-type) {
    //   margin-top: ${theme.size.md};
    // }
  }
`;

export const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.size.sm};
`;

export const IconBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 6px;
  background-color: #f0f4ff;
  box-sizing: border-box;
  overflow: hidden;
`;
export const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5;
`;
export const Description = styled.p`
  display: -webkit-box;
  min-height: 50px;
  margin-top: ${theme.size.md};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: ${theme.size.md};
  line-height: 1.5;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
`;

export const TagListBox = styled.div`
  margin-top: ${theme.size.md};
`;
