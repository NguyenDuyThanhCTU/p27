"use client";
import { useData } from "@context/DataProviders";
import React from "react";

const Introduction = ({ Data }: any) => {
  const markup = { __html: Data?.content };
  return (
    <>
      <div dangerouslySetInnerHTML={markup} className="text-[18px]  "></div>
    </>
  );
};

export default Introduction;
