import styled, { keyframes } from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AccordionWrapper = styled(Accordion)``;

export const AccordionItemWrapper = styled(AccordionItem)``;

export const OpenIcon = styled.div``;
export const CloseIcon = styled.div`
  opacity: 0;
`;

export const AccordionTitleWrapper = styled(AccordionItemTitle)`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &[aria-selected='false'] {
    ${OpenIcon} {
      opacity: 0;
    }
    ${CloseIcon} {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }

  * {
    flex-grow: 1;
  }
`;

export const AccordionBodyWrapper = styled(AccordionItemBody)`
  animation: 0.35s ${fadeIn} ease-in;
  &.accordion__body--hidden {
    animation: 0.35s ${fadeIn} ease-in;
  }
`;

export const IconWrapper = styled.div`
  margin-left: 30px;
  width: 40px;
  position: relative;

  ${OpenIcon},
  ${CloseIcon} {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: 0.25s ease-in-out;
  }
`;
