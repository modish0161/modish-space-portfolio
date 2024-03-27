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
        const solidityResponse = await axios.get('/contracts/Retail and E-commerce.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Retail and E-commerce - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Retail and E-commerce</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Loyalty Rewards Program&quot; smart contract represents a paradigm shift in the retail and e-commerce sectors, leveraging Ethereum blockchain technology to reimagine how loyalty points are issued, redeemed, and managed. This innovative contract allows businesses to create digital loyalty cards for customers as unique ERC721 tokens, each embedded with ERC20 tokens representing loyalty points. This approach not only enhances security and transparency but also introduces a level of flexibility and efficiency previously unattainable in traditional loyalty programs.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the core of this contract is the ability for businesses to issue loyalty cards with initial points, offering a seamless integration of loyalty rewards into the consumer experience. Customers can redeem their points directly through the blockchain, ensuring instant and verifiable transactions. This eliminates the complexities and inefficiencies associated with traditional points systems, fostering a direct and meaningful connection between businesses and their loyal customers.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The contract provides essential functions for businesses to maintain control over the loyalty cards, including the activation and deactivation of cards. This feature ensures businesses can manage their loyalty programs with precision, adapting to changing circumstances or customer behaviors. Additionally, the ability to update the rewards token offers unparalleled adaptability, allowing businesses to modify their reward strategies in response to market dynamics or strategic pivots.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                With each transaction timestamped and recorded on the blockchain, businesses gain valuable insights into loyalty card activity, enhancing their understanding of consumer habits and preferences. This data can inform targeted marketing strategies, personalized customer experiences, and refined loyalty programs, further solidifying customer relationships and driving brand loyalty.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deploying on the Ethereum network, the &quot;Loyalty Rewards Program&quot; smart contract ushers in a new era for customer loyalty programs, characterized by its decentralized nature, enhanced security, and the transformative potential of blockchain technology. It empowers retail and e-commerce businesses to reward their customers in a more transparent, secure, and efficient manner, paving the way for innovative loyalty solutions that align with the digital age.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contracts - ERC20 & ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Retail and E-commerce.sol & Retail and E-commerce - readme.md</h2>

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
