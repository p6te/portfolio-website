import React from "react";
import SectionLayout from "./SectionLayout";
import ExperienceItem from "../ExperienceItem";

const ExperienceData = [
  {
    time: "01.2023 - 06.2023",
    company: "Softserve inc.",
    position: "Junior Web Developer",
    description:
      "Worked on a white-label product involving a series of interconnected microservices aimed at improving the user experience across various finance and crypto investment platforms. The key features of these products included crypto wallet functionality,  transaction handling, Know Your Customer (KYC) and Know Your Business (KYB) processes, multiple payment methods, integration with users' banks, and UI customization for all products.",
    enviroment: [
      "Jira",
      "Azure DevOps",
      "MS Teams",
      "Confluence",
      "WebStorm",
      "SharePoint",
    ],
    technologies: [
      "TypeScript",
      "ReactJs",
      "Material-UI",
      "Formik & Yup",
      "i18next",
      "Jest",
      "React Testing Library",
      "REST API",
      "Axios",
    ],
    isRightSide: false,
  },
  {
    time: "08.2022 - 12.2022",
    company: "Softserve inc.",
    position: "Trainee Web Developer",
    description:
      "Building web application directed to manage and create NFT content with own tokenization. Main future is created and mint NFTs with public and private content. Selling them on the market, between other similar platforms, and inside. Handling crypto wallet and managing transactions in crypto and fiat.",
    enviroment: [
      "Jira",
      "Azure DevOps",
      "MS Teams",
      "Confluence",
      "WebStorm",
      "SharePoint",
    ],
    technologies: [
      "TypeScript",
      "ReactJs",
      "Redux",
      "Material-UI",
      "Formik & Yup",
      "i18next",
      "Jest",
      "React Testing Library",
      "Cypress",
      "REST API",
      "Axios",
      "Storybook",
    ],
    isRightSide: true,
  },
];
export default function Experience({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SectionLayout title="Experience" {...props}>
      <div className="mt-1 flex flex-col gap-10 md:mt-12 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <ExperienceItem {...ExperienceData[0]} />
        </div>
        <div className="flex-1 lg:pt-60">
          <ExperienceItem {...ExperienceData[1]} />
        </div>
      </div>
    </SectionLayout>
  );
}
