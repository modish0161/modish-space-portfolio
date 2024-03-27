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
        const solidityResponse = await axios.get('/contracts/Transportation and Logistics.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Transportation and Logistics - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Transportation and Logistics</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Embracing the innovative potential of blockchain technology, the &quot;Transportation and Logistics Smart Contract&quot; offers a transformative solution for the industry, designed to enhance freight tracking and automate carrier settlements. This platform leverages the Ethereum blockchain to provide a secure, transparent, and efficient method for managing the entire freight lifecycle, from registration through delivery to automated settlements. By utilizing this contract, businesses can achieve unparalleled visibility and reliability in their logistics operations, ensuring timely and accurate deliveries.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At its core, the platform allows for the detailed registration of freight items, including unique tracking IDs, designated carriers, delivery timelines, and agreed-upon settlement amounts. This meticulous approach to freight management not only simplifies the tracking process but also instills confidence in all stakeholders by guaranteeing accountability and precision throughout the shipping journey.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                A critical feature of this smart contract is the streamlined delivery confirmation process, empowering designated carriers to verify the successful delivery of goods. This step activates the automated payment settlement mechanism, which efficiently transfers the specified settlement amount to the carrier, utilizing an ERC20 token. This automatic settlement process not only reduces administrative overhead but also reinforces trust between shippers and carriers by ensuring prompt and accurate compensation.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Transportation and Logistics Smart Contract&quot; represents a significant leap forward in digitalizing and optimizing logistics operations. It not only addresses common challenges such as payment disputes and tracking inefficiencies but also opens up new avenues for integrating advanced technologies like IoT devices for real-time tracking, enhancing the overall logistics ecosystem&apos;s efficiency and reliability.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                By marrying the immutable and transparent nature of blockchain technology with the dynamic requirements of modern transportation and logistics, this smart contract sets a new benchmark for operational excellence in the industry. It is not merely a tool for transaction management but a comprehensive platform that promises to revolutionize freight management, making logistics operations more streamlined, secure, and adaptable to the demands of global commerce.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC20</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Transportation and Logistics.sol & Transportation and Logistics - readme.md</h2>

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
