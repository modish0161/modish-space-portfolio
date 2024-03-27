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
        const solidityResponse = await axios.get('/contracts/Mining and Quarrying.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Mining and Quarrying - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Mining and Quarrying</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Mining and Quarrying Contract&quot; stands as a testament to the transformative power of blockchain technology in the mining and quarrying sector. This cutting-edge platform leverages Ethereum smart contracts to provide a comprehensive, secure, and immutable system for managing mineral batches, land rights, royalties, and compliance audits. By tokenizing mineral batches as unique ERC721 tokens, it ensures unparalleled traceability and transparency from extraction to market, heralding a new era of efficiency and trust in the industry.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Central to this innovation is the meticulous management of land rights, offering a clear, transparent record of mining entitlements on the blockchain. This not only simplifies the verification of land ownership and mining rights but also facilitates the direct and automatic compensation of landowners through a dynamic royalty payment system. This system adjusts royalty rates based on actual mineral extraction volumes, guaranteeing fair and equitable compensation.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Planned integration with zk-SNARKs technology underscores the contract&apos;s commitment to privacy and security, enabling the verification of mineral batches and land rights without compromising sensitive data. Additionally, the contract&apos;s robust audit trail feature records compliance audits, providing immutable evidence of environmental and regulatory adherence. This feature is instrumental in promoting industry accountability and supporting sustainable mining practices.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Implementing role-based access control (RBAC) further enhances the contract&apos;s security, ensuring that only authorized individuals can perform specific actions such as registering mineral batches, managing land rights, and conducting audits. This level of control is crucial in maintaining the integrity and reliability of the mining and quarrying operations.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Mining and Quarrying Contract&quot; exemplifies the potential of blockchain to revolutionize traditional industries. By ensuring the traceability of mineral batches, enforcing the rights of landowners, and upholding compliance with environmental standards, this platform sets a new benchmark for transparency, efficiency, and sustainability in the mining and quarrying industry. It represents not just a technological leap but a commitment to ethical and responsible resource extraction.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Mining and Quarrying.sol & Mining and Quarrying - readme.md</h2>

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
