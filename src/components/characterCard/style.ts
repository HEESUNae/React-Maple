import styled from 'styled-components';

export const StyledCharacterCard = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
  table {
    th {
      padding: 0.3rem 1rem;
      background: linear-gradient(-180deg, #ffbc00, #ff9200);
      color: #fff;
      font-size: 1.4rem;
      border-radius: 0.4rem;
    }
    td {
      padding: 0 1rem;
    }
  }
`;
