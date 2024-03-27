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
        const solidityResponse = await axios.get('/contracts/Construction.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Construction - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Construction</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Construction Project Management&quot; smart contract introduces an unprecedented level of transparency, efficiency, and accountability into the construction industry. Built on the Ethereum blockchain and leveraging ERC721 tokens, this smart contract framework allows for the detailed management of construction projects, from inception through to completion, including the registration of ethically sourced materials.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                By incorporating zk-SNARKs technology, the contract uniquely verifies the ethical sourcing of materials without compromising sensitive information. This innovative approach not only enhances project transparency but also supports the construction industry&apos;s shift towards more sustainable and responsible practices.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The contract&apos;s features facilitate a comprehensive management system for construction projects, enabling project owners to track milestones and budget allocations seamlessly. Additionally, the milestone tracking capability is integral to the contract, ensuring that project progress is accurately documented and that milestone completions trigger appropriate actions, such as payment releases.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Material registration through the contract fosters a transparent supply chain, providing undeniable proof of the ethical sourcing of materials used in construction projects. This aspect not only aligns with global sustainability goals but also offers a competitive edge to projects committed to ethical standards.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Embracing the &quot;Construction Project Management&quot; smart contract signifies a step forward in the digital transformation of the construction industry. It exemplifies how blockchain technology can be applied to real-world scenarios, bringing about efficiency, transparency, and trust. As the construction industry continues to evolve, this smart contract stands as a beacon of innovation, demonstrating the practical benefits of integrating blockchain technology into the sector&apos;s foundational processes.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Construction.sol & Construction - readme.md</h2>

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
