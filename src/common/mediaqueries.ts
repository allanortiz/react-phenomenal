import { css } from 'styled-components';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

let down: any = {};
let up: any = {};

for (let breakpoint of breakpoints) {
  down[breakpoint] = (...styles: any) =>
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints[breakpoint]}px) {
        ${css(...styles)}
      }
    `;
  up[breakpoint] = (...styles: any) =>
    css`
      @media (min-width: ${({ theme }) => theme.breakpoints[breakpoint]}px) {
        ${css(...styles)}
      }
    `;
}

const mediaqueries = {
  down: down,
  up: up,
};

export default mediaqueries;
