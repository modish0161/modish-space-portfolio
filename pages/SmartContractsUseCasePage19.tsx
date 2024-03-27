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
        const solidityResponse = await axios.get('/contracts/Financial Services.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Financial Services - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Financial Services</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Financial Services Contract&quot; encapsulates a pioneering approach to digital finance, offering a spectrum of blockchain-based financial services tailored for a global audience. From facilitating secure cross-border payments to providing robust escrow services, issuing loans, and underwriting insurance policies, this smart contract serves as a foundational pillar for decentralized financial operations, harnessing the Ethereum blockchain&apos;s capabilities to redefine financial transactions&apos; efficiency, security, and transparency.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Central to the contract&apos;s innovation is its utilization of zk-SNARKs technology, ensuring privacy and compliance in cross-border payments. This feature exemplifies the contract&apos;s commitment to privacy-preserving financial transactions, offering users the confidence that their financial activities remain confidential and secure, while still adhering to regulatory standards. The contract&apos;s escrow service further underscores its utility in establishing trust in transactions, safeguarding funds until agreed-upon conditions are met.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Moreover, the contract facilitates decentralized lending through its loan issuance functionality, democratizing access to financial services. It also provides a framework for issuing insurance policies, offering financial protection against predefined risks. The incorporation of DAO governance allows for community-led decision-making, exemplifying the contract&apos;s versatility in adapting to diverse financial needs and preferences.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The issuance of stablecoins and the assessment of asset risks are integral components of the contract, enabling stable value transfer on the blockchain and informed risk management. The contract&apos;s capability to verify regulatory compliance further assures users and stakeholders of its operations&apos; legality and ethical standing, fostering an environment of trust and compliance within the blockchain ecosystem.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Financial Services Contract&quot; marks a significant advancement in blockchain technology&apos;s application in finance. It exemplifies the transformative potential of smart contracts in facilitating a wide range of financial services, from payments to insurance and beyond, offering a glimpse into the future of decentralized finance. This smart contract not only streamlines financial transactions but also introduces a new paradigm of financial services characterized by unparalleled security, efficiency, and transparency.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC20</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Financial Services.sol & Financial Services - readme.md</h2>

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
