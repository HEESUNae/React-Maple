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
      display: grid;
      margin: 2rem 0;
      grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
      gap: 2rem;
      li {
        display: flex;
        flex-direction: column;
        border: 0.1rem solid antiquewhite;

        .rank {
          height: 3rem;
          display: flex;
          align-items: center;
          text-align: center;
          background: antiquewhite;
          color: chocolate;
          display: grid;
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
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      gap: 2rem;
      margin-top: 2rem;
      li {
        gap: 1rem;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding: 1.6rem;
        border-radius: 0.4rem;
        font-weight: 600;
        border: 0.1rem solid;
      }
    }
  }
`;
