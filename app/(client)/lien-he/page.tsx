import Contact from "@components/client/Contact/Contact";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await find("Config");
  const metaDataTag = metaTag.find((item: any) => item.id == "SEOconfig");
  return {
    title: `Liên Hệ - ${metaDataTag?.Title}`,
    description: metaDataTag?.Description,
    keywords: metaDataTag?.Keywords,
  };
}

const ContactPage = async () => {
  const HeaderData: any = await find("Config");
  const ContactData = HeaderData.find((item: any) => item.id === "contact");
  return (
    <div>
      <div className="w-[1100px] mx-auto">
        <Contact ContactData={ContactData} />
      </div>
    </div>
  );
};

export default ContactPage;
