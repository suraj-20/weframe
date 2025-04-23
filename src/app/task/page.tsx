import Header from "@/components/Header";
import NoDataFound from "@/components/NoDataFound";
import SubHeader from "@/components/SubHeader";
import React from "react";

const TaskPage = () => {
  return (
    <>
      <Header heading="Task" />
      <SubHeader />
      <NoDataFound content="No Task Found..." />
    </>
  );
};

export default TaskPage;
