import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import styled from "styled-components";
import { colors } from "../styles/colors";

export const DropDownWrapper = styled.div<Props>`
  position: relative;
  display: inline-block;
  align-items: center;

  background-color: transparent;
  color: ${(props) => props.color};

  cursor: pointer;

  &:hover {
    & > div {
      display: flex;
    }
  }

  & > span {
    display: flex;
    align-items: center;
    padding: 12px;
  }
`;

export const DropDownContent = styled.div<Props>`
  position: absolute;
  z-index: 1;

  ${(props) =>
    props.disposion === "horizontal"
      ? `
      top: 0;
      left: 101%;
      `
      : `
      left: -20%;
      `}

  ${(props) =>
    props.maxHeight &&
    `
  max-height: ${props.maxHeight};
  overflow-y: auto;
  `}

  display: none;
  flex-direction: column;

  width: fit-content;
  min-width: 160px;
  color: ${colors.primary};

  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  & > a {
    &:hover {
      background-color: ${colors.primaryBackground};
    }
    text-decoration: none;
    color: ${colors.primary};
    display: block;
    padding: 16px;
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  disposion?: "horizontal" | "vertical";
  color?: string;
  trigger?: React.ReactNode;
  icon?: React.ReactNode;
  maxHeight?: string;
}

export const DropDown = ({
  children,
  title,
  disposion = "vertical",
  color = "white",
  trigger,
  icon,
  maxHeight,
  ...props
}: Props) => {
  return (
    <DropDownWrapper color={color} {...props}>
      <span>
        {title || trigger}
        {!icon &&
          (disposion === "vertical" ? (
            <IoMdArrowDropdown id="vertical" size={25} />
          ) : (
            <IoMdArrowDropright id="horizontal" size={25} />
          ))}

        {icon && icon}
      </span>
      <DropDownContent maxHeight={maxHeight} disposion={disposion}>
        {children}
      </DropDownContent>
    </DropDownWrapper>
  );
};
