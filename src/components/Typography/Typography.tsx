import React from 'react'
import styled from 'styled-components';
import { Box } from 'components/Box';
import { TypographyProps as StyledSystemTypographyProps } from 'styled-system';
import theme from 'core/theme';

// type Align = 'inherit'
//   | 'left'
//   | 'center'
//   | 'right'
//   | 'justify';

type Variant = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption';
  // | 'caption'
  // | 'button'
  // | 'overline'
  // | 'srOnly'
  // | 'inherit';

// const VariantMapping = { 
//   h1: 'h1', 
//   h2: 'h2', 
//   h3: 'h3', 
//   h4: 'h4', 
//   h5: 'h5', 
//   h6: 'h6', 
//   subtitle1: 'h6', 
//   subtitle2: 'h6', 
//   body1: 'p', 
//   body2: 'p',
// }

type TypographyProps = {
  variant: Variant;
  component?: any;
} & StyledSystemTypographyProps;

const Text = styled(Box)<TypographyProps>`
`;

const Typography: React.FC<TypographyProps> = ({
  variant,
  component = theme.typography.variantMapping[variant],
  fontFamily = theme.typography.font,
  fontSize = `${theme.typography.size[variant]}px`,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  children
}) => {
  return (
    <Text as={component} 
      fontFamily={fontFamily} 
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      fontStyle={fontStyle}>
      {children}
    </Text>
  )
}

export default Typography;
