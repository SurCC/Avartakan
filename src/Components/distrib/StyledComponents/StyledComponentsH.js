import styled from "@emotion/styled";

export const H1 = styled.div`
  color: ${(props) => (props.primary ? `#4F8D85` : `#F8F3D5`)};
  font-weight: 600;
  font-size: 48px;
  line-height: 57.6px;
`;

export const H2 = styled.div`
  color: ${(props) => (props.primary ? `#4F8D85` : `#F8F3D5`)};
  font-weight: 600;
  font-size: 36px;
  line-height: 43.2px;
`;
