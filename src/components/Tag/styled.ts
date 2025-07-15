import styled from "styled-components";
import { EThemeTag } from "@/interfaces/common";

export const Tag = styled.span<{ $themeType: EThemeTag }>`
  margin-right: 5px;
  padding: 4px 10px;
  border-radius: 10px;
  background: ${({ theme, $themeType }) => theme.tagColors[$themeType]};
  font-size: 0.7rem;
`;
