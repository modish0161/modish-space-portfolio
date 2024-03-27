import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../app/globals.css";
import Navbar from "@/components/main/Navbar2";
import Footer from "@/components/main/Footer";
import PulseBeam from '../components/main/PulseBeam';

export default function Home() {
  const [solidityCode, setSolidityCode] = useState<string | null>(null);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Solidity code
        const solidityResponse = await axios.get('/contracts/Manufacturing.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Manufacturing - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Manufacturing</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Product Lifecycle and Authenticity&quot; smart contract revolutionizes how products are tracked and authenticated, leveraging Ethereum&apos;s blockchain and the ERC-721 token standard. Designed for both businesses and consumers who value transparency, sustainability, and authenticity, this contract enables a new era of product traceability and environmental responsibility.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the core of this platform is the ERC-721 tokenization of products, allowing for the secure and immutable tracking of ownership and product history. Each product&apos;s journey from manufacturing through to potential recycling is recorded, promoting not only transparency but also encouraging sustainable practices by highlighting products that have been recycled.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The integration of dynamic metadata further enriches the information available for each product, linking to detailed certifications, lifecycle information, and even sustainability credentials stored off-chain. This approach ensures that a wealth of product information can be securely accessed and verified without overloading the blockchain.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Future plans to incorporate zk-SNARKs technology will introduce privacy-preserving mechanisms to verify the authenticity of products without disclosing sensitive information. This planned feature underscores the contract&apos;s commitment to privacy, allowing stakeholders to confirm product legitimacy securely.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Additionally, the contract includes mechanisms for assessing and documenting the environmental impact of products. By tracking metrics such as carbon footprint and sourcing sustainability, it aligns with global efforts towards environmental consciousness and offers consumers and businesses alike the data needed to make responsible choices.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deploying on the Ethereum blockchain, the &quot;Product Lifecycle and Authenticity&quot; contract is a testament to the power of blockchain technology in fostering a more transparent, sustainable, and authentic marketplace. It paves the way for responsible consumption and production, aligning closely with environmental sustainability goals and offering a model for future innovations in product lifecycle management.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Manufacturing.sol & Manufacturing - readme.md</h2>

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
