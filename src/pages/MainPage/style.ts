import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .nickname-search-container {
    width: 33.5rem;
    margin: 2rem auto;
    form {
      display: flex;
      gap: 0.5rem;
    }
  }
  .contents {
    margin-top: 4rem;
    display: grid;
    gap: 3rem;
    .title {
      font-size: 1.8rem;
      font-weight: 600;
      span {
        font-size: 1.4rem;
        color: #666;
      }
    }
  }
  .dojang-list-container {
    border-radius: 0.4rem;
    overflow: hidden;
    font-size: 1.5rem;
    ul {
      border: 1px solid #eee;
      display: grid;
      margin: 2rem 0;
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 1.6rem;
        width: 30rem;

        .rank {
          width: 4rem;
          height: 4rem;
          background: antiquewhite;
          border: 0.1rem solid orange;
          color: chocolate;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        table {
          border-spacing: 0.8rem;
        }
      }
    }
  }
  .rank-list-container {
    .rank-title {
      font-size: 1.8rem;
      font-weight: 600;
      span {
        font-size: 1.4rem;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 2rem 0;
      li {
        gap: 1rem;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding: 1.6rem;
        border-radius: 0.4rem;
        color: #fff;
        font-weight: 600;
        background: linear-gradient(-180deg, #ffbc00, #ff9200);
      }
    }
  }
`;
