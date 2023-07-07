import styled from 'styled-components';

export const CommentBox = styled.div`
  position: relative;
  display: flex;
  > img {
    border-radius: 50%;
    margin-right: 16px;
  }
`;

export const Input = styled.div`
  padding-bottom: 8px;
  input {
    outline: none;
    width: 100%;
    height: 20px;
    font-size: 14px;
    padding-bottom: 2px;
    border: none;
    border-bottom: 1px solid #909090;
    :focus ~ .underline:before {
      transform: scaleX(1);
    }
  }
  .underline {
    position: absolute;
    top: 22px;
    width: 100%;
    height: 2px;
  }
  .underline:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
