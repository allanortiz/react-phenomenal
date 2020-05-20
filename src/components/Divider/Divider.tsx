import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';

type DividerProps = {
  absolute?: boolean;
  component?: any;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'full' | 'middle';
};

const StyledBox = styled(Box)<DividerProps>`
  background-color: ${({ theme }) => theme.divider.backgroundColor};
  border: none;
  height: ${({ orientation }) => (orientation === 'vertical' ? '100%' : '1px')};
  list-style-type: none;
  margin: 0;
  width: ${({ orientation, variant }) =>
    variant === 'full'
      ? orientation === 'horizontal'
        ? '100%'
        : '1px'
      : 'inherit'};

  ${({ absolute }) =>
    absolute &&
    `
    botton: 0;
    left: 0;
    position: absolute;
  `}

  ${({ orientation, variant, theme }) =>
    variant !== 'middle'
      ? ``
      : orientation === 'horizontal'
      ? `
        margin-left: ${theme.space[4]}px;
        margin-right: ${theme.space[4]}px;
      `
      : `
        margin-top: ${theme.space[4]}px;
        margin-bottom: ${theme.space[4]}px;
      `}
`;

const Divider: React.FC<DividerProps> = ({
  absolute = false,
  component = 'hr',
  orientation = 'horizontal',
  variant = 'full',
}) => {
  return (
    <StyledBox
      as={component}
      absolute={absolute}
      orientation={orientation}
      variant={variant}
    />
  );
};

export default Divider;
