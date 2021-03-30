import Image from 'next/image';

import styled from '@emotion/styled';

export type CardImgProps = {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
};

export const CardImg = styled(Image)<CardImgProps>`
  object-fit: cover;
  flex-grow: 0;
  border-top-left-radius: ${(props) =>
    props.left || props.top ? `calc(${props.theme.radii.default} - 1px)` : `0`};
  border-top-right-radius: ${(props) =>
    props.right || props.top ? `calc(${props.theme.radii.default} - 1px)` : `0`};
  border-bottom-right-radius: ${(props) =>
    props.right || props.bottom ? `calc(${props.theme.radii.default} - 1px)` : `0`};
  border-bottom-left-radius: ${(props) =>
    props.left || props.bottom ? `calc(${props.theme.radii.default} - 1px)` : `0`};
`;

export const CardImgOverlay = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  color: ${(props) => props.color};
  text-decoration: none;
`;