import styled from 'styled-components';

export const Content = styled.div`
  user-select: none;
  padding: ${({ theme }) => theme.menu.item.padding};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ theme }) => theme.menu.flexDirection};
  height: ${({ theme }) => theme.menu.item.height};
`;

export const AssetWrapper = styled.div`
  ${({ theme }) => theme.menu.iconSpace};
  width: 24px;
  height: 24px;
`;

export const AssetTitle = styled.span`
  flex: auto;
  font-size: ${({ theme }) => theme.menu.item.fontSize};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ListItem = styled.li`
  position: relative;
  border-radius: 8px;
`;
