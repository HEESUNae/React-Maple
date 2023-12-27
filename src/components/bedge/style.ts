import styled from 'styled-components';

export const StyledBedge = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  color: white;
  display: inline-block;
  text-align: center;
  font-weight: 600;
`;
