import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header/Header";
// import SliderComp from "@/components/home/SliderComp";
import BasicService from "@/components/home/BasicService";
import dynamic from "next/dynamic";
import axios from "axios";
import HeadComp from "@/components/shared/HeadComp";
import SliderComp from "@/components/home/SliderComp";
// import FeaturedProduct from "@/components/home/FeaturedProduct";

const FeaturedProduct = dynamic(
  async () => await import("@/components/home/FeaturedProduct"),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProduct }) {
  return (
    <>
      <HeadComp />
      <Header />
      <main className="main_container">
        <div className="row">
          <div className="col-lg-3">
            <h1>Catgories</h1>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="slider_container">
              <SliderComp />
              <BasicService />
            </div>
          </div>
        </div>

        <div className="featured">
          <FeaturedProduct featuredProduct={featuredProduct} />
        </div>
      </main>
    </>
  );
}
