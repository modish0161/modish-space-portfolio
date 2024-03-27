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
        const solidityResponse = await axios.get('/contracts/Water and Waste Management.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Water and Waste Management - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Water and Waste Management</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Water and Waste Management Smart Contract&quot; marks a significant advancement in environmental stewardship through blockchain technology. Designed to support the critical sectors of water rights management and waste tracking, this platform leverages the Ethereum blockchain to ensure transparency, security, and efficiency. By tokenizing water rights and providing an immutable ledger for waste records, it enables a new level of precision and accountability in environmental resource management.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Water rights, a vital component of environmental conservation and management, are securely registered and managed within the blockchain, allowing for transparent and equitable trading. This feature not only simplifies the process of transferring water rights but also ensures that all transactions are conducted fairly and transparently, safeguarding this precious resource for future generations.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The platform also introduces a robust system for recording waste disposal activities, emphasizing the importance of sustainable waste management practices. By enabling users to record waste types, quantities, and disposal methods, and to mark waste as recycled, it fosters a culture of recycling and responsible waste management. This functionality highlights the contract&apos;s commitment to supporting environmental sustainability efforts and promoting a circular economy.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Incorporating advanced privacy-preserving technologies such as zk-SNARKs, the contract is poised to offer secure and private transactions, ensuring that sensitive data remains confidential while benefiting from blockchain&apos;s transparency. This balance of privacy and transparency is crucial for the wide adoption of blockchain in environmental resource management.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Water and Waste Management Smart Contract&quot; represents a visionary approach to managing Earth&apos;s resources. It not only provides a scalable and secure platform for water rights and waste management but also serves as a cornerstone for building a sustainable future. By harnessing the power of blockchain technology, this smart contract paves the way for innovative solutions to some of the most pressing environmental challenges, promoting conservation, sustainability, and responsible stewardship of our planet.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Water and Waste Management.sol & Water and Waste Management - readme.md</h2>

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
