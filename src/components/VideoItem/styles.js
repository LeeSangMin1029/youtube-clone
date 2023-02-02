import styled from "styled-components";

export const VideoDetails = styled.div`
  display: flex;
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
  position: relative;
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
  > div {
    display: flex;
  }
`;

export const Description = styled.div`
  padding-right: 24px;
  width: 100%;
  line-height: 20px;
  h3 {
    display: block;
    a {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 4.4rem;
      margin: 12px 0 4px 00;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
    }
  }
`;

export const Thumbnails = styled.div`
  a {
    display: flex;
    img {
      width: 344px;
      height: 194px;
      border-radius: 12px;
    }
  }
`;

export const InteractStyled = styled.div`
  display: inline-block;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -4px;
  border-radius: 4px;
  transition: opacity 0.2s linear;
  opacity: 0;
`;
