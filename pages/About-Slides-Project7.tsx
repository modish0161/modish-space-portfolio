// Import necessary libraries and components
import "../app/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "@/components/main/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "../components/main/3d-card";
import Link from 'next/link';
import PulseBeam from '../components/main/PulseBeam';
import React from 'react';

// Define the main page component
export default function Home() {
  // Define projects for the 3D cards demo
  const projects = [
    {
      title: "THE ESSENCE OF SMART CONTRACTS",
      description: `Smart contracts represent self-executing contracts with the terms of the agreement directly written into lines of code. Zero-Blockchain.xyz harnesses these digital protocols to automate and enforce contract execution, driving efficiency and trust.`,
      image: "/images/Smarts Contracts & Solidity Programmming/1.webp",
      link: "/SmartContractsUseCasePage1",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "ENABLING TRUSTLESS TRANSACTIONS",
      description: `By facilitating transactions without intermediaries, smart contracts on Zero-Blockchain.xyz reduce overhead costs and eliminate the need for third-party verification, fostering a trustless environment where transactions are transparent and irreversible.`,
      image: "/images/Smarts Contracts & Solidity Programmming/2.webp",
      link: "/SmartContractsUseCasePage2",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "INNOVATION IN CONTRACT MANAGEMENT",
      description: `Zero-Blockchain.xyz is at the forefront of revolutionizing contract management, making contracts dynamic, programmable, and automated. Bringing efficiency to legal agreements and op's.`,
      image: "/images/Smarts Contracts & Solidity Programmming/3.webp",
      link: "/SmartContractsUseCasePage3",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "SECURITY AND COMPLIANCE",
      description: `Our commitment to security is unwavering, with smart contracts designed to be tamper-proof and transparent. We ensure compliance with regulatory standards, safeguarding all transactions and data on the blockchain.`,
      image: "/images/Smarts Contracts & Solidity Programmming/4.webp",
      link: "/SmartContractsUseCasePage4",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "DEMOCRATIZING THE ECONOMY",
      description: `Zero-Blockchain.xyz leverages smart contracts to democratize access to financial services, allowing individuals and businesses worldwide to engage in economic activities without barriers, thereby fostering global economic inclusion.`,
      image: "/images/Smarts Contracts & Solidity Programmming/5.webp",
      link: "/SmartContractsUseCasePage5",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "THE FUTURE OF DIGITAL AGREEMENTS",
      description: `We envision a future where smart contracts are the backbone of digital agreements across all sectors. Zero-Blockchain.xyz is dedicated to developing solutions that pave the way for this future, ensuring scalability, security, and user-friendliness.`,
      image: "/images/Smarts Contracts & Solidity Programmming/6.webp",
      link: "/SmartContractsUseCasePage6",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "CUTTING-EDGE TECHNOLOGY INTEGRATION",
      description: `Zero-Blockchain.xyz integrates the latest blockchain technologies, including Zero-Knowledge Proofs and Layer 2 scaling solutions, into smart contracts to enhance privacy, efficiency, and scalability.`,
      image: "/images/Smarts Contracts & Solidity Programmming/7.webp",
      link: "/SmartContractsUseCasePage7",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "EMPOWERING AUTONOMOUS ORGANIZATIONS",
      description: `Smart contracts are the building blocks for decentralized autonomous organizations (DAOs), enabling transparent and democratic governance structures.`,
      image: "/images/Smarts Contracts & Solidity Programmming/8.webp",
      link: "/SmartContractsUseCasePage8",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "ACCELERATING GLOBAL TRADE AND COMMERCE",
      description: `By streamlining complex trade processes and automating compliance and verification, smart contracts on Zero-Blockchain.xyz significantly reduce the time and cost associated with global trade.`,
      image: "/images/Smarts Contracts & Solidity Programmming/9.webp",
      link: "/SmartContractsUseCasePage9",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "PIONEERING IN PRIVACY AND DATA PROTECTION",
      description: `In an era where data privacy is paramount, Zero-Blockchain.xyz is pioneering the integration of advanced cryptographic techniques, such as Zero-Knowledge Proofs, into smart contracts.`,
      image: "/images/Smarts Contracts & Solidity Programmming/10.webp",
      link: "/SmartContractsUseCasePage10",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "BUILDING A SUSTAINABLE BLOCKCHAIN ECOSYSTEM",
      description: `Our approach goes beyond transactions; it's about building a sustainable, eco-friendly blockchain ecosystem. Smart contracts are key in automating and verifying compliance with standards and goals.`,
      image: "/images/Smarts Contracts & Solidity Programmming/11.webp",
      link: "/SmartContractsUseCasePage11",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "DRIVING INNOVATION THROUGH EDUCATION",
      description: `Zero-Blockchain.xyz is committed to driving blockchain innovation through education. By demystifying smart contracts and blockchain technology, we empower our users.`,
      image: "/images/Smarts Contracts & Solidity Programmming/12.webp",
      link: "/SmartContractsUseCasePage12",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "COLLABORATIVE DEVELOPMENT FOR GLOBAL SOLUTIONS",
      description: `We believe in the power of collaboration to solve global challenges. Zero-Blockchain.xyz invites developers, enterprises, and innovators to join us in creating smart contract solutions around.`,
      image: "/images/Smarts Contracts & Solidity Programmming/13.webp",
      link: "/SmartContractsUseCasePage13",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/"
    },
    {
      title: "AGRICULTURE, FORESTRY, AND FISHING",
      description: `Incorporating smart contracts for enhanced traceability and provenance, ensuring every step from farm to table is recorded on the blockchain. Automated agreements facilitate efficient transactions between stakeholders.`,
      image: "/images/Smarts Contracts & Solidity Programmming/14.webp",
      link: "/SmartContractsUseCasePage14",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Agriculture-Forestry-Fishing.sol"
    },
    {
      title: "CONSTRUCTION",
      description: `Smart contracts streamline the construction process from project management to supply chain transparency, automating milestone payments and material sourcing for increased efficiency and reduced disputes.`,
      image: "/images/Smarts Contracts & Solidity Programmming/15.webp",
      link: "/SmartContractsUseCasePage15",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Construction.sol"
    },
    {
      title: "EDUCATION",
      description: `Revolutionizing education through verifiable digital credentials and secure academic record-keeping, smart contracts foster trust and accessibility across educational institutions helping tomorrows children within our society.`,
      image: "/images/Smarts Contracts & Solidity Programmming/16.webp",
      link: "/SmartContractsUseCasePage16",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Education.sol"
    },
    {
      title: "ENERGY SUPPLY",
      description: `Facilitating peer-to-peer energy trading and carbon credit transactions, our smart contracts support sustainable energy distribution and accountability in carbon offsetting.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/17.webp",
      link: "/SmartContractsUseCasePage17",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Energy%20Supply.sol"
    },
    {
      title: "ENVIRONMENTAL CONSERVATION",
      description: `Blockchain technology underpins initiatives for carbon trading and conservation funding, ensuring transparent, verifiable participation in sustainability projects.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/18.webp",
      link: "/SmartContractsUseCasePage18",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Environmental%20Conservation.sol"
    },
    {
      title: "FINANCIAL SERVICES",
      description: `Smart contracts revolutionize financial transactions, from enhancing payment processing to securing loans and insurances, fostering transparency and efficiency within blockchain infrastructure.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/19.webp",
      link: "/SmartContractsUseCasePage19",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Financial%20Services.sol"
    },
    {
      title: "HEALTHCARE",
      description: `Implementing smart contracts for secure patient records management and pharmaceutical supply chain integrity, ensuring privacy and trust in healthcare services.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/20.webp",
      link: "/SmartContractsUseCasePage20",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Healthcare.sol"
    },
    {
      title: "MANUFACTURING",
      description: `Enhancing product lifecycle management and combatting counterfeit goods, smart contracts in manufacturing ensure authenticity and compliance with environmental standards.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/21.webp",
      link: "/SmartContractsUseCasePage21",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Manufacturing.sol"
    },
    {
      title: "MEDIA AND ENTERTAINMENT",
      description: `Empowering creators with fair royalty distribution and engaging fans through digital collectibles and NFTs, blockchain is reshaping the media landscape.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/22.webp",
      link: "/SmartContractsUseCasePage22",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Media%20and%20Entertainment.sol"
    },
    {
      title: "MINING AND QUARRYING",
      description: `Streamlining the mineral supply chain and land rights management, our smart contracts offer transparency and fairness in the mining sector.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/23.webp",
      link: "/SmartContractsUseCasePage23",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Mining%20and%20Quarrying.sol"
    },
    {
      title: "RETAIL AND E-COMMERCE",
      description: `From loyalty programs to verifying product authenticity, smart contracts in retail enhance customer trust and cross-brand collaboration.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/24.webp",
      link: "/SmartContractsUseCasePage24",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Retail%20and%20E-commerce.sol"
    },
    {
      title: "TOURISM AND HOSPITALITY",
      description: `Revolutionizing booking and dynamic pricing, blockchain technology offers a decentralized approach to travel, improving experiences and operational efficiency.\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/25.webp",
      link: "/SmartContractsUseCasePage25",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Tourism%20and%20Hospitality.sol"
    },
    {
      title: "TRANSPORTATION AND LOGISTICS",
      description: `Optimizing freight and cargo tracking and automating settlements, smart contracts bring unprecedented efficiency and transparency to logistics.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/26.webp",
      link: "/SmartContractsUseCasePage26",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Transportation%20and%20Logistics.sol"
    },
    {
      title: "WATER AND WASTE MANAGEMENT",
      description: `Managing water rights and waste tracking, blockchain solutions facilitate sustainable resource management and recycling practices.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/27.webp",
      link: "/SmartContractsUseCasePage27",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Water%20and%20Waste%20Management.sol"
    },
    {
      title: "PUBLIC SECTOR AND GOVERNMENT",
      description: `Blockchain is enhancing public trust with secure digital voting systems and transparent management of public records, modernizing governance.\n\n\n`,
      image: "/images/Smarts Contracts & Solidity Programmming/28.webp",
      link: "/SmartContractsUseCasePage28",
      link2: "https://github.com/modish0161/Smart-Contracts-Use-Cases---Zero-Blockchain-xyz---POW--POS/blob/main/Public%20Sector%20and%20Government.sol"
    }
  ];

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contracts - Use Cases</h1>
        {/* About Zero-Blockchain Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">Smart Contracts & Solidity Programming - Zero-Blockchain.xyz</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Zero-Blockchain.xyz epitomizes the convergence of traditional finance and cutting-edge blockchain technology, spearheading innovations that redefine digital transactions. Our expertise in Smart Contract programming and development on both the Ethereum Chain and our bespoke blockchain underscores our commitment to advancing the financial industry.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                With a foundation built on educational excellence, we strive to demystify blockchain technology for a diverse audience. Our comprehensive learning resources cater to everyone from blockchain novices to adept developers, facilitating widespread adoption and empowerment through knowledge.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our suite of services and platforms are tailor-made to address challenges across various sectors, including finance, healthcare, and supply chain management. We leverage practical case studies and success stories to illustrate the transformative impact of our blockchain solutions in enhancing operational efficiency, security, and transparency.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the heart of Zero-Blockchain&apos;s innovation is our relentless pursuit of the latest in Decentralized Applications - dApps and blockchain technologies. This commitment ensures that our offerings are consistently at the industry&apos;s forefront, equipping both individuals and businesses with the tools needed for success in the digital age.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                We view the future of blockchain as a collective endeavour, deeply engaging with our clients, partners, and the global community to integrate blockchain technology into everyday transactions. This collaborative approach is key to unlocking the full potential of blockchain and propelling the digital revolution forward.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Join us in exploring the boundless opportunities provided by blockchain technology. Discover how Zero-Blockchain.xyz can transform your industries experience through our innovative services, educational programs, and pioneering projects. Embark with us on a journey to redefine digital finance, making it more accessible, secure, and efficient for all.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Slides, Smart Contracts & Use Cases for Industry</h2>
        {/* 3D Cards Section */}
        <div className="py-0 mt-0 md:py-2 xl:py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-1">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var bg-white dark:bg-gray-800 rounded-lg p-6 mb-0">
                <CardBody>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{project.description}</div> {/* Corrected line */}
                  <div className="mt-2 w-full h-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={400}
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  {/* Add this container inside your CardBody to wrap both buttons */}
                  <div className="mt-4 flex justify-center gap-4 w-full md:w-auto">
                    <Link href={project.link} passHref>
                      <button className="px-4 py-2 bg-black border-2 border-gray-300 text-white rounded-lg w-full md:w-auto hover:scale-110 transition-transform duration-300">
                        View Smart Contract
                      </button>
                    </Link>
                    <Link href={project.link2} passHref>
                      <button className="px-4 py-2 bg-black border-2 border-gray-300 text-white rounded-lg w-full md:w-auto hover:scale-110 transition-transform duration-300">
                        GitHub Link
                      </button>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
        {/* PulseBeam Section */}
        <div className="w-full" style={{ background: 'transparent', marginTop: '5px' }}>
          <PulseBeam />
        </div>
      </div>
      <Footer />
    </main>
  );
}
