import styled from 'styled-components';

export const StyledEquipmentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  gap: 1rem;
  text-align: center;
  > li {
    border-radius: 0.4rem;
    border: 0.1rem solid #eee;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    figure {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.8rem;
    }
    .list-title {
      background: linear-gradient(45deg, #ffbc00, #ff9200);
      padding: 0.5rem 1rem;
      color: white;
      font-weight: 600;
    }
    .info {
      padding: 1rem 1rem 2rem;
      .grade {
        display: flex;
        justify-content: center;
      }
      .item {
        &-name {
          font-weight: 600;
          padding: 1rem 0;
        }
        &-options {
          font-size: 1.4rem;
          li {
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }
`;
