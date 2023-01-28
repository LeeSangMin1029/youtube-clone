import styled from "styled-components";

export const StyledContent = styled.main`
  margin-left: 72px;
  margin-top: 56px;
`;

export const Grid = styled.div`
  padding-top: 24px;
  display: grid;
`;

export const GridRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1800px;
  margin: 0 16px;
  > div {
    width: 344px;
    height: 294px;
    margin: 0 8px;
    margin-bottom: 40px;
  }
`;

export const Item = styled.div`
  &:hover {
    cursor: pointer;
  }
  > img {
    width: 344px;
    height: 194px;
    border-radius: 12px;
  }
  .detail {
    display: flex;
    height: 120px;
    flex: auto;
    > a {
      width: 36px;
      height: 36px;
      margin-right: 12px;
      margin-top: 12px;
      img {
        border-radius: 50%;
      }
    }
    .video-info {
      padding-right: 24px;
      h3 {
        margin: 12px 0 4px 0;
      }
    }
    .metadata {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      span {
        color: #606060;
        :nth-child(2):before {
          content: "•";
          margin: 0 4px;
        }
      }
      a {
        color: #606060;
      }
    }
  }
`;
