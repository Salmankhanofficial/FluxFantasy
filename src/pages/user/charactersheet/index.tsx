import Charactersheet from "@/components/Charactersheet";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";

const index = () => {

  return (
    <Layout>
      <div className="px-6 pb-40 bg-black">
      <Charactersheet />
      </div>
      <div className="">
        <Footer className={"sm:!absolute"} />
      </div>
    </Layout>
  );
};

export default index;
