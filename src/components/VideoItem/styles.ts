import styled from 'styled-components';
import { Interact } from '../CoverInteract/styles';

export const VideoDetails = styled.div`
  display: flex;
  > a {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    margin-top: 12px;
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  margin: 0 8px 40px 8px;
  border-radius: 4px;
  ${Interact} .fill,
  ${Interact} .stroke {
    margin: -4px;
  }
`;

export const YoutuberData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  a {
    color: #606060;
  }
  > div {
    display: flex;
  }
`;

export const Description = styled.div`
  line-height: 20px;
  padding-right: 24px;

  h3 {
    display: block;
    a {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      max-height: 4.4rem;
      margin: 12px 0 4px 0;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
    }
  }
`;
