import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import Partner from "@components/layout/client/Partner";
import { find } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const ClientLayout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const PostCategory = await find("PostCategory");
  const PartnerData = await find("Partner");
  const ProductCategory = await find("ProductCategory");
  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header ProductCategory={ProductCategory} />
      </div>
      <div className="p:mt-[84px] d:mt-[145px] bg-gray-100">{children}</div>
      {/* <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>
      <TopFooter /> */}
      <Footer Category={PostCategory} />
      {/* <Partner Data={PartnerData} />
     
      <Copyright /> */}
    </div>
  );
};

export default ClientLayout;
