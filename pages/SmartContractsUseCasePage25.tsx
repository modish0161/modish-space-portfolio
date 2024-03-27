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
        const solidityResponse = await axios.get('/contracts/Tourism and Hospitality.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Tourism and Hospitality - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Tourism and Hospitality</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Decentralized Booking and Dynamic Pricing for Tourism and Hospitality&quot; smart contract introduces an innovative blockchain solution to modernize the tourism and hospitality sectors. By leveraging the Ethereum blockchain, this platform enables service providers to create customizable listings for their offerings, from hotel rooms to tours, with dynamic pricing and availability. It empowers users to make secure and transparent bookings directly on the blockchain, using ERC20 tokens as a flexible and universal payment method.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                This groundbreaking contract facilitates a decentralized booking mechanism, eliminating intermediaries and reducing fees for both providers and consumers. It ensures a fair, competitive marketplace where pricing can adjust in real-time based on demand, seasonality, and other market dynamics. The platform&apos;s design caters to the unique needs of the tourism industry, providing a robust infrastructure for managing reservations, payments, and customer engagement.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Key to this platform is its booking confirmation process, which secures transactions and guarantees service delivery. Providers can confirm bookings, triggering an automated, secure transfer of funds, ensuring trust and reliability in every transaction. This process not only streamlines operations for service providers but also enhances the booking experience for users, fostering confidence in the decentralized ecosystem.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Additional functionalities, including dynamic pricing adjustments, booking modifications, and cancellations, can be seamlessly integrated, offering flexibility and convenience to both providers and consumers. The contract&apos;s design prioritizes user experience and operational efficiency, making it an ideal solution for a wide range of tourism and hospitality applications.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Decentralized Booking and Dynamic Pricing for Tourism and Hospitality&quot; smart contract is a testament to the transformative potential of blockchain technology in reshaping industries. It not only simplifies the booking process but also introduces a new level of transparency, security, and efficiency to the tourism and hospitality sectors, promising an enhanced experience for providers and travelers alike.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC20</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Tourism and Hospitality.sol & Tourism and Hospitality - readme.md</h2>

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
