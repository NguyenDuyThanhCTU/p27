import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import { find } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const CarData = await find("Car");
  const ServicesData = await find("Services");
  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header Car={CarData} Services={ServicesData} />
      </div>
      <div className="p:mt-[84px] d:mt-[145px] bg-gray-100">{children}</div>
      <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>
      <Footer Category={ServicesData} />

      <Copyright />
    </div>
  );
};

export default ClientLayout;
