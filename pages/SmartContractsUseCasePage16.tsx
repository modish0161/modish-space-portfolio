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
        const solidityResponse = await axios.get('/contracts/Education.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Education - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Education</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Education Credential&quot; smart contract marks a transformative leap forward in the digital management of academic credentials, embracing the Ethereum blockchain&apos;s potential to revolutionize how educational achievements are recorded, verified, and shared. By issuing academic credentials as non-fungible tokens (NFTs), this contract ensures each credential&apos;s uniqueness, security, and permanence, laying the groundwork for a future where educational records are seamlessly accessible and verifiable across the globe.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the core of this innovation is the contract&apos;s ability to not only issue and mint credentials but also to verify their authenticity. This mechanism provides an unparalleled level of trust and transparency for educational institutions, students, and potential employers. The integration of detailed metadata with each credential opens up new avenues for sharing comprehensive educational achievements, including course details, grades, and extracurricular accomplishments, in a privacy-preserving manner.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Recognizing the dynamic nature of academic credentials, the smart contract offers functionalities for updating metadata, ensuring that credentials remain relevant and reflect any additional certifications or achievements acquired over time. This flexibility underscores the contract&apos;s role in supporting lifelong learning and professional development, facilitating a continuous and comprehensive record of an individual&apos;s educational journey.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Designed with security and user privacy at its heart, the &quot;Education Credential&quot; smart contract represents a significant step towards a future where educational achievements are digitally native, universally recognized, and effortlessly shared. Its deployment on the Ethereum blockchain not only guarantees the integrity and immutability of academic records but also sets a new standard for how educational accomplishments are acknowledged in the digital age.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                This smart contract is a testament to our commitment to leveraging cutting-edge blockchain technology to address real-world challenges. By simplifying the issuance, verification, and sharing of academic credentials, we are paving the way for more accessible, transparent, and efficient educational systems worldwide. Join us in redefining the future of education, where blockchain technology empowers learners, educators, and institutions with the tools they need for success in the 21st century.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - ERC721</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Education.sol & Education - readme.md</h2>

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
