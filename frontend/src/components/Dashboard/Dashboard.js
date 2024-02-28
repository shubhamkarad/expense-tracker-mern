import React from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <InnerLayout>Dashboard</InnerLayout>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div``;
