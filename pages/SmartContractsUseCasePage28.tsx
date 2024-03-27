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
        const solidityResponse = await axios.get('/contracts/Public Sector and Government.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Public Sector and Government - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Public Sector and Government</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Public Records Contract&quot; represents a groundbreaking innovation by Zero-Blockchain.xyz, harnessing the power of blockchain technology to redefine public records management. This advanced solution, built on Ethereum and integrating Chainlink&apos;s oracles, aims to enhance the integrity, privacy, and efficiency of managing governmental records. By leveraging smart contracts, the platform ensures secure, transparent, and immutable record-keeping, augmented by off-chain data storage capabilities, Role-Based Access Control (RBAC), and future implementations of Zero-Knowledge Proofs (ZKP) for unmatched data verification.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                This contract is designed to facilitate a wide range of functionalities vital for modern public administration, including secure record addition, verification via ZKP (planned), and integration with Decentralized Identifiers (DIDs). Its architecture allows for the seamless addition of public records, their verification against external data sources, and the association of comprehensive data stored off-chain, thereby offering scalability without compromising the benefits of blockchain&apos;s security.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Zero-Blockchain.xyz&apos;s commitment to innovation is reflected in the deployment of this contract, emphasizing the potential of blockchain to transform public sector operations. The solution embodies a significant leap towards a future where governmental data management is decentralized, secure, and transparent, empowering public entities to operate more effectively in the digital age.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The Public Records Contract stands as a testament to Zero-Blockchain.xyz&apos;s expertise in blockchain development and its dedication to advancing public sector technology. It showcases a strategic application of Solidity programming, Chainlink&apos;s oracle network, and IPFS for off-chain storage, demonstrating a sophisticated approach to addressing the challenges of digital record-keeping in the public domain.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Embarking on this journey with Zero-Blockchain.xyz, stakeholders in the public sector are invited to explore the capabilities of the Public Records Contract. This venture not only symbolizes a significant enhancement in public records management but also aligns with the broader vision of leveraging cutting-edge technologies to foster a more efficient, transparent, and secure governance framework.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ChainlinkClient</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Public Sector and Government.sol & Public Sector and Government - readme.md</h2>

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
