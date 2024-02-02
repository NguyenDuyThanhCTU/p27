"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const StorageProvider = ({ Products, PostsData, Config }: any) => {
  const { setProducts, setPosts, setConfig } = useData();

  useEffect(() => {
    setProducts(Products?.reverse());
  }, [Products]);

  useEffect(() => {
    setPosts(PostsData);
  }, [PostsData]);

  useEffect(() => {
    setConfig(Config);
  }, [Config]);

  return <div></div>;
};

export default StorageProvider;
