import styled from 'styled-components';

export const PlayerBoard = styled.div`
  margin-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const VideoDetail = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  max-width: 1270px;
  h1 {
    word-break: break-word;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    -webkit-box-orient: vertical;
    line-height: 25px;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

export const PlayerStyled = styled.div<{ height: string; width: string }>`
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
`;

export const ChannelInfo = styled.div`
  width: 628px;
  margin-right: 12px;
  margin-top: 12px;
  display: flex;
  a img {
    border-radius: 50%;
    margin-right: 12px;
    width: 40px;
    height: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      line-height: 20px;
    }
    span {
      line-height: 18px;
      font-size: 12px;
    }
  }
`;

export const BetweenContent = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
