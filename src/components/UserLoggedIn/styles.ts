import styled from 'styled-components';
import { CircularButton } from '@/styles/utils';

export const UserProfile = styled.div`
  > div {
    width: 32px;
    height: 32px;
    margin: 0 8px;
    img {
      border-radius: 50%;
    }
  }
  padding: 1px 6px;
`;

export const ExtendsButton = styled(CircularButton)`
  margin-right: 8px;
`;
