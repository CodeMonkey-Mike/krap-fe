import React from 'react';
import styled from 'styled-components';
import { buttonStyle, colorStyle, buttonSize } from 'src/theme';

export interface IButtonProps {
  children?: React.ReactChild | React.ReactNode;
  onClick?: (e: any) => void;
  color?: string;
  variant?: string;
  size?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
}

const ButtonStyled = styled.button<IButtonProps>`
  cursor: pointer;
  ${buttonStyle}
  ${colorStyle}
  ${buttonSize}
  width: ${({ width }) => (width ? width : '100%')};
  ${({ disabled }) => (disabled ? 'pointer-events: none; opacity: 0.6;' : '')}
`;

export const Button = ({ children, onClick, ...props }: IButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  );
};
