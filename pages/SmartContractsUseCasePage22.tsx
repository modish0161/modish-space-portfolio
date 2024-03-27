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
        const solidityResponse = await axios.get('/contracts/Media and Entertainment.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Media and Entertainment - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Media and Entertainment</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Revolutionizing the media and entertainment industry, the &quot;Media Entertainment Smart Contract&quot; introduces a novel paradigm for digital collectibles and fan engagement. Utilizing the Ethereum blockchain, this contract empowers artists, musicians, filmmakers, and other content creators to mint unique non-fungible tokens (NFTs) for their works, enabling a direct and secure connection with their audience. Each NFT, representing digital artworks, music, videos, and more, ensures authenticity, ownership, and scarcity, enhancing the value of digital media like never before.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                A cornerstone of this contract is its sophisticated royalty distribution mechanism. By assigning specific royalty percentages to each NFT, it guarantees that creators receive their fair share of the proceeds from every secondary sale. This sustainable revenue model incentivizes creators to continue producing groundbreaking work while ensuring ongoing compensation for their contributions to the cultural landscape.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The contract&apos;s payment splitter feature further democratizes revenue distribution, fairly allocating earnings among all stakeholders, including artists, producers, and collaborators, based on predefined shares. This equitable approach to payment ensures that every contributor is rewarded for their role in the creative process, fostering a collaborative and supportive ecosystem within the media and entertainment industry.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Additional functionalities, such as the ability for NFT owners to update royalty percentages and withdraw accumulated royalties, offer unprecedented control and flexibility in managing digital assets. This not only empowers creators but also engages fans by providing them with unique, collectible pieces of their favorite content, thereby deepening the fan-creator connection.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum network, the &quot;Media Entertainment Smart Contract&quot; marks a significant leap forward in the integration of blockchain technology with the media and entertainment sector. It showcases the immense potential of NFTs to transform digital media into valuable, collectible assets, heralding a new era of creator compensation, fan engagement, and content valuation. This smart contract is not just a tool for transaction and ownership recording; it&apos;s a catalyst for innovation, creativity, and change in the digital age.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Media and Entertainment.sol & Media and Entertainment - readme.md</h2>

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
