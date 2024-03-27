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
                The &quot;Energy Supply and Carbon Credits&quot; smart contract introduces a groundbreaking approach to managing renewable energy trading and carbon credits on the blockchain. It empowers individuals and businesses to engage in peer-to-peer energy transactions, directly trading renewable energy tokens in a secure and transparent manner. This initiative is a key step towards democratizing energy distribution and fostering a more sustainable energy economy.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                A pivotal feature of this contract is its carbon credit issuance system, which incentivizes the production of renewable energy. By rewarding energy producers with carbon credits for their contributions to reducing carbon emissions, the contract aligns economic incentives with environmental goals. This mechanism not only encourages the adoption of renewable energy sources but also facilitates a market for carbon credits, enhancing environmental sustainability efforts.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Furthermore, the contract incorporates advanced technologies, including zk-SNARKs, to ensure the privacy of transactions. This feature enables the execution of private trades and carbon credit transactions, ensuring that sensitive financial and operational data remain confidential. The integration of zk-SNARKs technology underscores the contract&apos;s commitment to security and privacy, addressing key concerns in the blockchain space.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The contract also includes mechanisms for verifying the renewable nature of the energy being traded, ensuring that only certified renewable energy is part of the ecosystem. This verification process is crucial for maintaining the integrity of the environmental claims associated with energy trading and carbon credit issuance. It represents a significant step towards transparent and verifiable environmental sustainability in the energy sector.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Developed on the Ethereum blockchain, the &quot;Energy Supply and Carbon Credits&quot; smart contract serves as a testament to the potential of blockchain technology to drive positive change in the energy sector. By enabling peer-to-peer energy trading, automating carbon credit issuance, and ensuring transaction privacy, the contract provides a scalable and efficient framework for advancing renewable energy adoption and environmental sustainability. This initiative is a vital component of our commitment to leveraging technology for a greener planet.
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
