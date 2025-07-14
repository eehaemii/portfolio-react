import styled from "styled-components";
import { theme } from "../../styles/theme";
import { IPropsBox } from "./interface";

export type Props = Partial<IPropsBox>;

export const LineCardWrap = styled.article<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: ${theme.size.md} ${theme.size.xl};
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 1px 3px #dcdcdc;
  text-align: left;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${theme.colors.secondary};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    &:not(:first-of-type) {
      margin-top: ${theme.size.md};
    }
  }
`;

export const CompanyData = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${theme.colors.lightGray};
`;

export const Line = styled.span`
  display: inline-block;
  width: 60px;
  height: 1px;
  margin: ${theme.size.sm} 0;
  background-color: ${theme.colors.lightGray};
`;

export const CompanyWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.size.md};
`;

export const CompanyName = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const PartTime = styled.span`
  display: inline-block;
  margin-left: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #f2f4f7;
  font-size: 0.6rem;
`;
