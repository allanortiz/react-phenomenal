import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  // variant
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

type BoxProps = {
  as?: any;
} & SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  FlexboxProps &
  GridProps &
  BackgroundProps &
  BorderProps &
  PositionProps &
  ShadowProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

export default Box;
