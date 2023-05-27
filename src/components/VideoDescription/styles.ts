import styled from 'styled-components';

export const StyledBoard = styled.div<{ isExtend: boolean }>`
  display: flex;
  max-width: 1280px;
  height: auto;
  white-space: pre-wrap;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-right: -12px;
  margin-top: 12px;
  line-height: 20px;
  cursor: ${({ isExtend }) => (isExtend ? 'default' : 'pointer')};
`;

export const Content = styled.div`
  flex: 1;
  margin: 12px;
`;

export const InfoTitle = styled.div`
  display: flex;
`;

export const Expander = styled.div<{ isExtend: boolean }>`
  cursor: pointer;
  border: none;
  display: inline-flex;
  ${({ isExtend }) => (isExtend ? 'margin-top: 2rem;' : 'margin-left: 4px;')};
`;

export const LinkHashtag = styled.span`
  a {
    color: #065fd4;
  }
`;

export const StretchContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
