import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../app/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import PulseBeam from '../components/main/PulseBeam';

export default function Home() {
  const [solidityCode, setSolidityCode] = useState<string | null>(null);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Solidity code
        const solidityResponse = await axios.get('/contracts/Energy Supply.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Energy Supply - readme.md');
        setReadmeContent(readmeResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Energy Supply</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Welcome to the digital showcase of Matthew Collins, a senior figure at the intersection of software engineering, blockchain innovation, and architectural design. With a career that spans over two decades, Matthew has established a formidable reputation in transforming complex visions into executed realities, leveraging a blend of technical brilliance and creative insight.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                This portfolio, accessible via <a href="https://modish-space-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">modish-space-portfolio.vercel.app</a> and <a href="https://machudesign-portfolio7.vercel.app/" target="_blank" rel="noopener noreferrer">machudesign-portfolio7.vercel.app</a>, encapsulates an array of projects that highlight Matthew&apos;s proficiency in harnessing cutting-edge technologies like Web3, Solidity, and smart contract development, alongside his architectural expertise in creating both digital and physical spaces that inspire.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Matthew&apos;s work as a Senior Software Engineer and Blockchain Developer is underpinned by an extensive command of languages and frameworks such as Python, JavaScript, React.js, and Solidity, among others. His portfolio illustrates a passion for Web3 Development, showcasing successful projects on blockchain platforms like Ethereum and Polygon, emphasizing decentralized applications that are secure, scalable, and innovative.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                In architectural technology, Matthew has led numerous projects from conceptual designs to completed structures, integrating sustainable practices with modern aesthetics. His role as a Senior Architectural Technologist and Managing Director of MachuDesign Ltd manifests through groundbreaking designs in commercial, residential, and public sector projects, reflecting a dedication to enhancing the built environment.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Beyond technical prowess, Matthew&apos;s portfolio also unveils his contribution to financial education and analysis. As an Editor-in-Chief and Financial Analyst for moo-lah.io, he has authored multiple finance books aimed at demystifying wealth building and investment strategies, emphasizing the synergy between financial acumen and technological innovation.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Discover a world where technology meets design, and innovation meets application. Whether you&apos;re interested in the future of blockchain, the evolution of architectural design, or the insights into financial success, Matthew Collins&apos;s portfolio offers a gateway to exploring these domains. Visit the websites to explore projects, insights, and the professional journey of a visionary at the forefront of technological and architectural innovation.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC20</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Energy Supply.sol & Energy Supply - readme.md</h2>

          </div>
          {/* Display Solidity code */}
          {solidityCode && (
            <div className="w-full overflow-auto">
              <pre className="text-xs md:text-sm lg:text-base xl:text-lg whitespace-pre-wrap">
                {solidityCode}
              </pre>
            </div>
          )}
          {/* Display README.md content */}
          {readmeContent && (
            <div className="w-full mt-8">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Smart Contract Description</h2>
              <div className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {readmeContent}
              </div>
            </div>
          )}
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
