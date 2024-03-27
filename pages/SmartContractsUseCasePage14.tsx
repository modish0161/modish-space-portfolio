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
        const solidityResponse = await axios.get('/contracts/Agriculture-Forestry-Fishing.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Agriculture-Forestry-Fishing - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Agriculture-Forestry-Fishing</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;AgriProductTraceabilityAndAgreement&quot; smart contract represents a pioneering step forward in agricultural technology and blockchain integration, offering a robust framework for the tokenization, traceability, and secure transaction of agricultural products. Developed on the Ethereum blockchain, this contract leverages ERC721 tokens to immortalize agricultural products as unique digital assets, facilitating transparent and traceable pathways from farm to consumer.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Beyond product tokenization, the contract introduces an advanced agreement and escrow system designed to secure transactions between farmers and distributors. This ensures that payments are only released upon confirmed delivery of products, effectively minimizing disputes and fostering trust among participants in the agricultural supply chain. The contract&apos;s flexibility in agreement management underscores its potential to revolutionize how agricultural transactions are conducted.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Integral to the contract is its capacity for dynamic metadata management, allowing for real-time updates to product information without compromising the integrity of the original registration. This feature is pivotal in adapting to the evolving nature of agricultural products and market demands, ensuring that all stakeholders have access to the most current and accurate product data.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At its core, the &quot;AgriProductTraceabilityAndAgreement&quot; smart contract is designed with security, efficiency, and transparency in mind. It sets a new standard for agricultural transactions, promoting a more sustainable, trustworthy, and efficient supply chain. As we continue to explore and expand its functionalities, including potential integration with zero-knowledge proofs for enhanced privacy and security, the contract stands as a testament to our commitment to leveraging blockchain technology for societal and environmental good.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deploying cutting-edge solutions like this smart contract underscores our dedication to innovation in the intersection of technology and agriculture. It represents not just a step forward for our company, Zero-Blockchain.xyz, but also for the global agricultural sector, marking the beginning of a new era in product traceability, transaction security, and supply chain transparency. Join us in embracing this transformative journey, where technology serves as the backbone of sustainable and efficient agricultural practices.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Agriculture-Forestry-Fishing.sol & Agriculture-Forestry-Fishing - readme.md</h2>

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
