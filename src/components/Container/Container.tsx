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

const StyledBox = styled(Box)<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: ${({ disableGutters }) => (disableGutters ? 'unset' : '24px')};
  padding-right: ${({ disableGutters }) => (disableGutters ? 'unset' : '24px')};

  ${mediaqueries.up.xl`
    max-width: ${({ breakpoint, theme }: any) =>
      !breakpoint
        ? 'none'
        : `${theme.breakpoints[breakpoint]}px`};
  `}

  ${mediaqueries.down.xl`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      !breakpoint
        ? 'none'
        : !fixed
        ? `${theme.breakpoints[breakpoint]}px`
        : theme.breakpoints[breakpoint] < theme.breakpoints.xl
        ? `${theme.breakpoints[breakpoint]}px`
        : `${theme.breakpoints.lg}px`};
  `}

  ${mediaqueries.down.lg`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      !breakpoint
        ? 'none'
        : !fixed
        ? `${theme.breakpoints[breakpoint]}px`
        : theme.breakpoints[breakpoint] < theme.breakpoints.lg
        ? `${theme.breakpoints[breakpoint]}px`
        : `${theme.breakpoints.md}px`};
  `}

  ${mediaqueries.down.md`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      !breakpoint
        ? 'none'
        : !fixed
        ? `${theme.breakpoints[breakpoint]}px`
        : theme.breakpoints[breakpoint] < theme.breakpoints.md
        ? `${theme.breakpoints[breakpoint]}px`
        : `${theme.breakpoints.sm}px`};
  `}

  ${mediaqueries.down.sm`
    max-width: ${({ breakpoint, fixed, theme }: any) =>
      !breakpoint
        ? 'none'
        : !fixed
        ? `${theme.breakpoints[breakpoint]}px`
        : theme.breakpoints[breakpoint] < theme.breakpoints.sm
        ? `${theme.breakpoints[breakpoint]}px`
        : `${theme.breakpoints.xs}px`};
  `}
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
