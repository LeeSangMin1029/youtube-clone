import styled from "styled-components";

export const VideoDetails = styled.div`
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
`;

export const StyledDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const YoutuberData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
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
`;

export const Description = styled.div`
  padding-right: 24px;
  h3 {
    margin: 12px 0 4px 0;
  }
`;

export const Thumbnails = styled.div`
  img {
    width: 344px;
    height: 194px;
    border-radius: 12px;
  }
`;
