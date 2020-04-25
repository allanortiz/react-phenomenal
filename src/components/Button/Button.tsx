import React from 'react';
import styled from 'styled-components';

type Variant =
  | 'default'
  | 'flat'
  | 'raised'
  | 'outlined'
  | 'underlined'
  | 'icon';

type Color = 'default' | 'primary' | 'accent';

type ButtonProps = {
  variant?: Variant;
  color?: Color;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  startIcon?: any;
  endIcon?: any;
};

const BasicButton = styled.button<ButtonProps>`
  background: none;
  border-radius: 2px;
  border: none;
  color: ${({ theme, color, disabled }) =>
    disabled
      ? 'rgba(0, 0, 0, 0.26)'
      : color === 'primary'
      ? theme.color.primary
      : color === 'accent'
      ? theme.color.accent
      : theme.color.text};
  cursor: pointer;
  font-family: ${({ theme }) => theme.text.font};
  font-size: ${({ theme }) => theme.text.size.body1};
  height: ${({ theme }) => theme.button.height}px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const FlatButton = styled(BasicButton)`
  background-color: ${({ theme, color, disabled }) =>
    disabled
      ? 'rgba(0, 0, 0, 0.12)'
      : color === 'primary'
      ? theme.color.primary
      : color === 'accent'
      ? theme.color.accent
      : theme.button.defaultColor};
  color: ${({ theme, color, disabled }) =>
    disabled
      ? 'rgba(0, 0, 0, 0.26)'
      : color === 'primary' || color === 'accent'
      ? 'white'
      : theme.color.text};
`;

const RaisedButton = styled(FlatButton)`
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

const OutlinedButton = styled(BasicButton)`
  border: solid 1px
    ${({ color, theme }) =>
      color === 'primary'
        ? theme.color.primary
        : color === 'accent'
        ? theme.color.accent
        : theme.button.defaultColor};
`;

const UnderlinedButton = styled(BasicButton)`
  text-decoration: underline;
`;

const IconButton = styled(BasicButton)``;

const getStyledButton = (variant: Variant) => {
  switch (variant) {
    case 'default':
      return BasicButton;
    case 'raised':
      return RaisedButton;
    case 'flat':
      return FlatButton;
    case 'outlined':
      return OutlinedButton;
    case 'underlined':
      return UnderlinedButton;
    case 'icon':
      return IconButton;
    default:
      return BasicButton;
  }
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  color = 'default',
  variant = 'default',
  disabled = false,
  children,
}) => {
  const StyledButton = getStyledButton(variant);

  return (
    <StyledButton
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {variant !== 'icon' && children}
    </StyledButton>
  );
};

export default Button;
