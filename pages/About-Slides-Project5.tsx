// Import necessary libraries and components
import "../app/globals.css";
import Navbar from "@/components/main/Navbar2";
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
import Link from 'next/link'; // Assuming you're using Next.js Link for navigation
import PulseBeam from '../components/main/PulseBeam';

// Define the main page component
export default function Home() {
  // Define projects for the 3D cards demo
  const projects = [
    {
      title: "NAVIGATING THE BLOCKCHAIN REVOLUTION",
      description: `Zero-Blockchain pioneers the path to blockchain excellence, transforming digital transactions with unparalleled security, efficiency, and transparency. Join us in leading the blockchain movement.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (1).webp"
    },
    {
      title: "DEMYSTIFYING BLOCKCHAIN TECHNOLOGY",
      description: `Our educational initiatives aim to demystify blockchain for all. From beginners to advanced developers, we offer resources to empower your blockchain journey.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (2).webp"
    },
    {
      title: "REDEFINING FINANCE WITH BLOCKCHAIN",
      description: `Through innovative blockchain solutions, Zero-Blockchain is redefining finance, enhancing transactions, and securing data integrity across global markets. `,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (3).webp"
    },
    {
      title: "ENSURING DATA INTEGRITY IN HEALTHCARE",
      description: `Zero-Blockchain leverages blockchain technology to enhance data integrity and accessibility in healthcare, ensuring secure and efficient patient data management.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (4).webp"
    },
    {
      title: "TRANSFORMING SUPPLY CHAINS",
      description: `Our blockchain solutions offer unmatched transparency and efficiency in supply chain management, revolutionizing the way products are traced from origin to consumer.\n\nVisualize the journey of your products with our technology.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (5).webp"
    },
    {
      title: "FUTURE-PROOF YOUR BUSINESS WITH BLOCKCHAIN",
      description: `Embrace the future by integrating Zero-Blockchain's cutting-edge technologies into your business, setting new standards of excellence and innovation. Experience the next level of digital security.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (6).webp"
    },
    {
      title: "BLOCKCHAIN FOR SUSTAINABLE DEVELOPMENT",
      description: `Discover how Zero-Blockchain's solutions contribute to sustainable development goals by promoting transparency, efficiency, and ethical business practices.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (7).webp"
    },
    {
      title: "THE NEXT GEN OF SMART CONTRACTS",
      description: `Unlock the full potential of smart contracts with Zero-Blockchain, driving automation and efficiency in digital agreements and transactions. \n\nJoin the revolution for a more transparent, efficient, and secure financial system.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (8).webp"
    },
    {
      title: "DEVELOPING DECENTRALIZED APPLICATIONS (DAPPS)",
      description: `With Zero-Blockchain, create decentralized applications that redefine user autonomy, privacy, and security in the digital world.\n\nEmbrace the power of DApps to transform digital interactions and services.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (9).webp"
    },
    {
      title: "EMPOWERING THE BLOCKCHAIN PROFESSIONAL",
      description: `Join our career development programs to become a blockchain expert. Zero-Blockchain is shaping the professionals who will lead tomorrow's blockchain innovations.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (10).webp"
    },
    {
      title: "PIONEERING BLOCKCHAIN RESEARCH AND DEVELOPMENT",
      description: `Our R&D efforts push the boundaries of blockchain technology, exploring new possibilities for its application and adoption across industries. \nAdvancing blockchain's future.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (11).webp"
    },
    {
      title: "BUILDING A GLOBAL BLOCKCHAIN ECOSYSTEM",
      description: `Zero-Blockchain is at the heart of a growing global ecosystem, connecting innovators, businesses, and technologies to drive the blockchain revolution forward.`,
      image: "/images/www-zero-blockchain-xyz/ZeroBlockchain-xyxSlides (12).webp"
    }
  ];

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">zero-blockchain.xyz</h1>
        {/* About Zero-Blockchain Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About Zero-Blockchain</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At Zero-Blockchain, we are at the vanguard of the blockchain revolution, leveraging profound expertise to pioneer solutions that redefine the boundaries of digital transactions. Our commitment to innovation drives us to deliver unmatched security, efficiency, and transparency in the blockchain space.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Through our educational initiatives, we aim to demystify blockchain technology for a global audience, fostering a deeper understanding and facilitating widespread adoption. Our resources range from introductory materials to advanced courses, catering to learners at all levels.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our innovative platforms and solutions are designed to address real-world challenges, transforming industries such as finance, healthcare, and supply chain management. Through case studies and success stories, we showcase the transformative impact of our blockchain solutions.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                As a leader in the blockchain domain, Zero-Blockchain is committed to excellence, continuously exploring the latest digital trends and technologies. Our goal is not only to innovate but to set new standards in the digital economy, empowering businesses and individuals with cutting-edge blockchain solutions.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Collaboration is key to our philosophy. We believe in the power of working closely with our clients, partners, and the broader community to co-create the future of blockchain. Together, we can unlock the immense potential of blockchain technology and drive the digital revolution forward.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                We invite you to join us on this journey, exploring the vast possibilities of blockchain technology with Zero-Blockchain. Visit our website at zero-blockchain.xyz to learn more about our services, educational programs, and innovative projects.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Slides</h2>
        {/* 3D Cards Section */}
        <div className="py-0 mt-0 md:py-2 xl:py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-1">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var bg-white dark:bg-gray-800 rounded-lg p-6 mb-0">
                <CardBody>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="mt-2 w-full h-auto"> {/* Adjusted margin top */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={400}
                      className="rounded-xl object-cover w-full h-full"
                    />
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
