import * as React from "react"
import CoolButton from "../components/CoolButton";
import Icons from "../components/Icons";
import { linkInformation } from "../content/site/links"
import { icons } from "../content/site/socialIcons";
import { NAME, JOB_TITLE } from "../content/data/titleDetails";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
        <div className="min-h-screen w-screen hidden lg:block overflow-hidden screen-background-style">
            <StaticImage src={'../../static/headshot.jpg'} className="!w-[20%] !rounded-3xl !mx-auto !mt-[8%] !z-50 !flex !justify-center !items-center"></StaticImage>

            <div className="w-full text-7xl flex justify-center primary-text p-5 pb-0">
                {NAME}
            </div>

            <div className="w-full text-3xl flex justify-center paragraph-text ">
                {JOB_TITLE}
            </div>

            <div className="flex justify-center -pl-7 pt-2">
                {linkInformation.filter((item) => "home" !== item.icon).map((item) => (
                            <CoolButton 
                            href={item.href}
                            icon={item.icon}
                            buttonTitle={item.title}
                            />
                        ))}
            </div>

            <div id="icons" className="z-50 left-0 absolute top-1/2 -mt-24 paragraph-color-bg bg-opacity-100 rounded-lg">
                {icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
            </div>  


        </div>

        {/* MOBILE */}
        <div className="min-h-screen w-screen lg:hidden overflow-hidden screen-background-style">

        <StaticImage src={'../../static/headshot.jpg'} className="!w-[50%] !rounded-3xl !mx-auto !mt-[8%] !z-50 !flex !justify-center !items-center"></StaticImage>
        <div className="w-full text-4xl text-center z-50 flex justify-center primary-text p-5">
            {NAME}
        </div>

        <div className="w-full text-2xl text-center z-50 flex justify-center paragraph-text ">
            {JOB_TITLE}
        </div>

        <div className="flex flex-wrap justify-center">
            {linkInformation.map((item) => (
                <CoolButton 
                href={item.href}
                icon={item.icon}
                buttonTitle={item.title}
                />
            ))}
        </div>

        <div id="icons" className="z-50 flex p-5 justify-center">
            {icons.map((item) => (
                <Icons 
                    name={item.name} 
                    href={item.href} 
                />
            ))}
        </div>
    </div>
</Layout>
)}