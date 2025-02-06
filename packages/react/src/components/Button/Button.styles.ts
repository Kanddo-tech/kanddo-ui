import styled from 'styled-components';
import { borderRadius, sizes, transitions } from '@kanddo-ui/core';
import { colors, spacing, typography } from '@kanddo-ui/core';

import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
    padding: ${spacing.small};
    font-size: ${typography.fontSize};
    font-family: ${typography.fontFamily};
    background-color: ${colors.primary[500]};
    color: ${colors.text};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: ${transitions.color};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
    border-radius: ${({ rounded }) => borderRadius(sizes[rounded || 'medium'])};
    border: none;
`;