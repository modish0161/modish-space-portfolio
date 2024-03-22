import React from "react";
import Image from "next/image";
import Link from "next/link"; // Correct import for Link component
import { CardBody, CardContainer, CardItem } from "./3d-card";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 mt-10 mb-1">
        My Projects
      </h1>
    </div>
  );
};

export function ThreeDCardDemo() {
  // Define the number of cards to display
  const numberOfCards = 12; // 3 columns * 4 rows = 12 cards

  const projects = [
    {
      title: "www.machudesign.com",
      description: "Innovative architecture, transforming spaces with precision.",
      image: "/images/machudesign-images/machudesign_com-Project-Opening-Page1.png",
      SlidesAndInfoRoute: "/About-Slides-Project1",
      signUpRoute: "https://www.machudesign.com",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.modish0161.com",
      description: "Crafting the Future, Code by Code.",
      image: "/images/Modish0161-Website/Modish-Website-Opening_Project_Page.png",
      SlidesAndInfoRoute: "/About-Slides-Project2",
      signUpRoute: "https://www.modish0161.com",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.moo-lah.io",
      description: "Navigate Finance, Accelerate Success. Grow Your Wealth, One Click at a Time ",
      image: "/images/moo-lah_io/moo-lah_io-Project-Opening-Page1.png",
      SlidesAndInfoRoute: "/About-Slides-Project3",
      signUpRoute: "https://www.moo-lah.io",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.zeroartnft.com",
      description: "Zero Art NFT: Revolutionising the digital art scene.",
      image: "/images/zero-art-nft/zero-art-nft-opening-page.png",
      SlidesAndInfoRoute: "/About-Slides-Project4",
      signUpRoute: "https://www.zeroartnft.com",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.zero-blockchain.xyz",
      description: "Beyond Blockchain: Where Innovation Meets Reality, Shaping Tomorrow's Blockchain, Today. ",
      image: "/images/www-zero-blockchain-xyz/zero-blockchain_xyz-Project-Opening-Page1.png",
      SlidesAndInfoRoute: "/About-Slides-Project5",
      signUpRoute: "https://www.zero-blockchain.xyz",
      signUpRouteTarget: "_blank",
      signUpRoute1: "https://www.zero-blockchain.xyz",
      signUpRoute1Target: "_blank",
      signUpRoute2: "https://blockchain-zero-js.vercel.app/",
      signUpRoute2Target: "_blank"
    },
    {
      title: "www.zero-bank.io",
      description: "Zero Bank transforms banking for the digital age.",
      image: "/images/www_zero-bank_io/zero-bank-opening-page.png",
      SlidesAndInfoRoute: "/About-Slides-Project6",
      signUpRoute: "https://zero-bank.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "Smarts Contracts & Solidity Programmming",
      description: "Creating secure Smart Contracts with Solidity on the Ethereum Blockchain.",
      image: "/images/Smarts Contracts & Solidity Programmming/Smart contracts modish portfolio Logo.webp",
      SlidesAndInfoRoute: "/About-Slides-Project7",
      signUpRoute: "https://github.com/modish0161/ZeroLang-SmartContract-Test",
      signUpRouteTarget: "_blank",
      signUpRoute1: "https://www.zero-blockchain.xyz",
      signUpRoute1Target: "_blank",
      signUpRoute2: "https://blockchain-zero-js.vercel.app/",
      signUpRoute2Target: "_blank"
    },
    {
      title: "Portfolio - No. 7",
      description: "Project Exploring Use Cases Within Web Development HTML/CSS",
      image: "/images/machudesign-portfolio7/machudesign-portfolio7-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project8",
      signUpRoute: "https://machudesign-portfolio7.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.zero-art.com",
      description: "A GREAT SELECTION AT ZERO ART",
      image: "/images/ZERO-ART/ZERO-ART-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project9",
      signUpRoute: "https://zeroartcuration.wixsite.com/zero-art",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.CannaBeeDee.com",
      description: "CannaBeeDee offers premium CBD products for wellness, embodying quality and care.",
      image: "/images/CannaBeeDee-Com/CannaBeedee-Com_OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project10",
      signUpRoute: "https://cannabeedee.wixsite.com/mysite",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.ReguSync.com",
      description: "ReguSync enhances chat experiences with AI and integrates PDFs for streamlined communication.",
      image: "/images/ReguSync/ReguSync1.webp",
      SlidesAndInfoRoute: "/About-Slides-Project11",
      signUpRoute: "https://regusync.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.zero-gpt",
      description: "A Language Learning Model (LLM) Based on OPEN AI GPT-3.5 turbo",
      image: "/images/zero-gpt/Zero-Gpt-Logo.webp",
      SlidesAndInfoRoute: "/About-Slides-Project12",
      signUpRoute: "https://zero-gpt-clone.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "www.design-zero.com",
      description: "A Full Stack AI SaaS Platform with Next js 14, TypeScript, Stripe",
      image: "/images/Design-Zero/Design-ZeroBanner - OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project13",
      signUpRoute: "https://github.com/modish0161/DesignZero",
      signUpRouteTarget: "_blank"
    },
    {
      title: "Phoenix Industry Project Landing Page - Skills City Boot Camp",
      description: "3d Globe Landing Page to represent Social Values In ESG & Carbon Emissions.",
      image: "/images/Phoenix_LANDING-PAGE/Phoenix_LANDING-PAGE-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project14",
      signUpRoute: "https://my-hdivsago5-matthew-collins-projects.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "Phoenix Industry Project - Software Application - Skills City Boot Camp",
      description: "Software Application Development for Phoenix - Microsoft Partner",
      image: "/images/Phoenix-Dashboard/Phoenix-Dashboard-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project15",
      signUpRoute: "https://www.phoenixs.co.uk/",
      signUpRouteTarget: "_blank"
    },
    {
      title: "No-Brainer - A Website For AI Chat Experience",
      description: "A Modern UI/UX Website with React & Tailwind CSS",
      image: "/images/No-Brainer/No-Brainer-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project16",
      signUpRoute: "https://no-brainer-flax.vercel.app",
      signUpRouteTarget: "_blank"
    },
    {
      title: "Modish0161 Space-Portfolio - Full Stack Development Experience.",
      description: "Providing the best project experience and knowledge you can count on.",
      image: "/images/modish0161-space-portfolio/Modish0161-Space-Portfolio-OPENING PAGE.png",
      SlidesAndInfoRoute: "/About-Slides-Project17",
      signUpRoute: "https://modish-space-portfolio.vercel.app/",
      signUpRouteTarget: "_blank"
    },
    {
      title: "Fior Ribelle - Redefining Fashion with Couture Elegance",
      description: "Elegant couture fashion brand for the modern trendsetter.",
      image: "/images/Fior Ribelle/Fior Ribelle Opening page.png",
      SlidesAndInfoRoute: "/About-Slides-Project18",
      signUpRoute: "https://fiorribelle2014.wixsite.com/mysite",
      signUpRouteTarget: "_blank"
    },
    // Add more projects here...
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 mt-20 mb-1">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-4">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="relative overflow-hidden rounded-lg shadow-lg border border-purple-500 bg-transparent border-opacity-100 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-[48rem] h-auto p-6">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-gray-400 dark:text-purple-300"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-white whitespace-nowrap"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                  width={1000}
                  height={800}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                {/* Link to the "Try now" route for each project */}
                <Link href={project.SlidesAndInfoRoute}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold"
                  >
                    Slides & info →
                  </CardItem>
                </Link>
                {/* Conditionally render the Chain-JS link */}
                {project.signUpRoute1 && (
                  <Link href={project.signUpRoute1}>
                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold">
                      Zero-Blockchain-Python-V1
                    </CardItem>
                  </Link>
                )}
                {/* Conditionally render the Chain-JS link */}
                {project.signUpRoute1 && (
                  <Link href={project.signUpRoute2}>
                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold">
                      Zero-Blockchain-Javascript-V1
                    </CardItem>
                  </Link>
                )}
                {/* Link to the "Sign up" route for each project */}
                <Link href={project.signUpRoute} target="_blank" rel="noopener noreferrer">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-xs font-bold"
                  >
                    Go To Site
                  </CardItem>
                </Link>

              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default ThreeDCardDemo;
