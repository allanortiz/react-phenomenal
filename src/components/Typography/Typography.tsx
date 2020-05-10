import React from 'react'
import styled from 'styled-components';
import { Box } from 'components/Box';
import { TypographyProps as StyledSystemTypographyProps } from 'styled-system';
import theme from 'core/theme';

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

type TypographyProps = {
  variant: Variant;
  component?: any;
} & StyledSystemTypographyProps;

const Text = styled(Box)`
  margin: 0 0 0.35em 0;
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
