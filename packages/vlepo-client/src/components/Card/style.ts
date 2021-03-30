import { height, HeightProps, margin, MarginProps, width, WidthProps } from 'styled-system';

import styled from '@emotion/styled';

type BaseCardProps = { direction?: string };
export const BaseCard = styled.div<BaseCardProps>`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: ${(props) => props.theme.radii.default};
  box-shadow: ${(props) => props.theme.shadows.Card};
  display: flex;
  flex-direction: ${(props) => (props.direction === 'lr' ? 'row' : 'column')};
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const ConstrainedCard = styled(BaseCard)<WidthProps & HeightProps & MarginProps>`
  ${width}
  ${height}
  ${margin}
`;

export const OverlayLink = styled.a`
  font-size: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndices.CardLink};
`;