import Charactersheet from "@/components/Charactersheet";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();

  return (
    <Layout>
      <Charactersheet />
      <div className="">
        <Footer className={"sm:!absolute"} />
      </div>
    </Layout>
  );
};

export default index;
