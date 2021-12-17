import { Tab as TabComponent, TabList as TabListComponent, TabPanel as TabPanelComponent } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { colors } from "../styles/colors";

export const Tab = styled(TabComponent)`
  color: ${colors.primary};
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
  background-color: ${colors.primaryBackground};
  `}
`;

export const TabList = styled(TabListComponent)`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e6e6e6;
`;

export const TabPanel = styled(TabPanelComponent)`
    padding: 1rem;
    margin-bottom: 1rem;
`