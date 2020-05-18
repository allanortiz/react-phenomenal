import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { mediaqueries } from 'common';
import { Breakpoint } from 'common/mediaqueries';

type MaxWidth = Breakpoint | false;

type ContainerProps = {
  breakpoint: MaxWidth;
  component?: any;
  disableGutters?: boolean;
  fixed?: boolean;
};

const getMaxWidth = (
  breakpoint: MaxWidth,
  fixed: boolean,
  theme: any,
  currentBreakpoint: Breakpoint,
  nextBreakpoint?: Breakpoint
) => {
  if (!breakpoint) return 'none';

  if (
    !fixed ||
    !nextBreakpoint ||
    theme.breakpoints[breakpoint] < theme.breakpoints[currentBreakpoint]
  ) {
    return `${theme.breakpoints[breakpoint]}px`;
  }

  return `${theme.breakpoints[nextBreakpoint]}px`;
};

const StyledBox = styled(Box)<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: ${({ disableGutters }) => (disableGutters ? 'unset' : '24px')};
  padding-right: ${({ disableGutters }) => (disableGutters ? 'unset' : '24px')};

  ${mediaqueries.up.xl`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      getMaxWidth(breakpoint, fixed, theme, 'xl')};
  `}

  ${mediaqueries.down.xl`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      getMaxWidth(breakpoint, fixed, theme, 'xl', 'lg')};
  `};

  ${mediaqueries.down.lg`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      getMaxWidth(breakpoint, fixed, theme, 'lg', 'md')};
  `};

  ${mediaqueries.down.md`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      getMaxWidth(breakpoint, fixed, theme, 'md', 'sm')};
  `};

  ${mediaqueries.down.sm`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      getMaxWidth(breakpoint, fixed, theme, 'sm', 'xs')};
  `};
`;

const Container: React.FC<ContainerProps> = ({
  component,
  breakpoint = 'sm',
  disableGutters = false,
  fixed = false,
  children,
  ...props
}) => {
  return (
    <StyledBox
      as={component}
      breakpoint={breakpoint}
      disableGutters={disableGutters}
      fixed={fixed}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export default Container;
