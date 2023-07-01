import styled from 'styled-components';

export const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  > a {
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  a {
    width: fit-content;
    margin-right: 4px;
    margin-bottom: 2px;
    align-items: center;
    span {
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
    }
  }
`;

export const Description = styled.div`
  font-size: 14px;
  white-space: pre-line;
  overflow: hidden;
  max-height: calc(4 * 1em * 1.4);
  line-height: 1.4;
  text-overflow: ellipsis;

  :has(+ input:checked) {
    max-height: none;
  }
`;

export const Expander = styled.input`
  appearance: none;
  margin: 0;
  padding-top: 2px;
  width: fit-content;
  color: #606060;
  cursor: pointer;
  :before {
    content: '자세히 보기';
  }
  :checked:before {
    content: '간략히';
  }
  :hover {
    text-decoration: underline;
  }
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const UpdatedAt = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
  text-align: center;
`;

export const CommentInteract = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  gap: 2px;
`;
