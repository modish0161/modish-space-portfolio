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
        const solidityResponse = await axios.get('/contracts/Environmental Conservation.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Environmental Conservation - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Environmental Conservation</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the heart of our commitment to environmental stewardship, the &quot;Environmental Conservation Contract&quot; stands as a beacon of innovation. Designed to harness the power of blockchain technology, this smart contract aims to incentivize and reward actions that contribute significantly to environmental conservation. By participating in predefined conservation activities, users are rewarded with tokens, fostering a culture of sustainability and active engagement in ecological preservation.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The contract features a dynamic action management system, allowing the contract owner to define and modify actionable conservation efforts. Each action is associated with a specified reward amount, encouraging participants to engage in meaningful environmental activities. This flexible framework ensures the contract remains relevant and aligned with evolving conservation needs and priorities.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                A pivotal component of this contract is its participant engagement mechanism. Users complete actions, earn rewards, and witness their positive impact on the environment firsthand. This direct engagement model not only rewards individual efforts but also cultivates a collective consciousness towards environmental conservation. The ability to withdraw earned rewards adds an additional layer of utility and gratification, enhancing user experience and participation.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Furthermore, the contract incorporates a deactivation feature, empowering the owner to adapt the system to changing environmental strategies and goals. This ensures that conservation efforts remain targeted and effective, driving impactful and sustainable outcomes. The &quot;Environmental Conservation Contract&quot; is more than a smart contract; it is a testament to the potential of blockchain technology to foster a greener, more sustainable world.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum blockchain, this contract represents a significant step forward in our journey towards environmental sustainability. It embodies our belief in leveraging innovative technologies for the greater good, marking a new era in conservation efforts. By participating in this initiative, users not only contribute to tangible environmental benefits but also become part of a global movement towards a more sustainable future.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC20</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Environmental Conservation.sol & Environmental Conservation - readme.md</h2>

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
