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
        const solidityResponse = await axios.get('/contracts/Healthcare.sol');
        setSolidityCode(solidityResponse.data);

        // Fetch README.md content
        const readmeResponse = await axios.get('/contracts/Healthcare - readme.md');
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
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Zero-Blockchain.xyz - Smart Contract for Healthcare</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About the Smart Contract</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                The &quot;Patient Records Management&quot; smart contract represents a significant leap forward in the digitalization of healthcare records, utilizing blockchain technology to ensure the secure and private management of patient data. This innovative solution empowers healthcare providers to create and manage encrypted patient health records with an unprecedented level of data security and privacy. By embedding patient records on the blockchain, it provides a robust framework for maintaining the integrity and confidentiality of sensitive health information.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                A cornerstone feature of this smart contract is its consent management capability, which places patients at the center of their healthcare journey. Patients have the autonomy to update their health records and manage consent for data sharing, thereby enhancing the transparency and trust in patient-provider interactions. This pivotal function underscores the contract’s dedication to patient empowerment and data protection, aligning with global privacy standards.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Additionally, the contract incorporates precise timestamp tracking for each record update, offering clear visibility into the history and activity of patient records. This feature not only facilitates accurate record-keeping but also serves as a critical tool for auditing and compliance, ensuring that all modifications are transparently logged and easily retrievable.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Through functionalities designed for record retrieval, including accessing individual records, total records, and records associated with a specific patient, the contract enhances data management and operational transparency for healthcare providers. This streamlined access to health records simplifies the management of patient data, enabling more efficient healthcare delivery and improved patient outcomes.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Deployed on the Ethereum blockchain, the &quot;Patient Records Management&quot; smart contract is poised to transform healthcare record-keeping, offering a secure, transparent, and patient-centered approach to managing health data. This initiative marks a pivotal step towards integrating blockchain technology into healthcare, paving the way for more secure, efficient, and patient-friendly health data management practices.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Smart Contract - PatientRecords</h2>
        <div className="flex flex-col items-center py-12 bg-gray-100 dark:bg-gray-850">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-20 pl-20">Healthcare.sol & Healthcare - readme.md</h2>

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
