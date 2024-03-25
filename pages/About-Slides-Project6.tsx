// Import necessary libraries and components
import "../app/globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "@/components/main/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "../components/main/3d-card";
import Link from 'next/link'; // Assuming you're using Next.js Link for navigation
import PulseBeam from '../components/main/PulseBeam';

// Define the main page component
export default function Home() {
  // Define projects for the 3D cards demo
  const projects = [
    {
      title: "STREAMLINING DIGITAL BANKING",
      description: `Zero Bank is redefining digital banking by offering seamless, secure, and efficient online banking services. Our platform caters to the modern user's need for convenience and security, making financial management accessible anywhere, anytime.`,
      image: "/images/www_zero-bank_io/zero-bank (1).webp"
    },
    {
      title: "REVOLUTIONIZING PAY PROCESSING",
      description: `Leverage Zero Bank's cutting-edge payment processing solutions to facilitate faster, safer, and more cost-effective transactions. Our blockchain-based system ensures a superior transaction experience.`,
      image: "/images/www_zero-bank_io/zero-bank (2).webp"
    },
    {
      title: "CRAFTING THE FUTURE OF SAVINGS",
      description: `Discover innovative savings solutions with Zero Bank, where flexibility meets security. Our platform offers unique saving schemes that adapt to your lifestyle, coupled with blockchain security that guarantees peace of mind.`,
      image: "/images/www_zero-bank_io/zero-bank (3).webp"
    },
    {
      title: "UNLOCKING CRYPTOCURRENCY INVESTMENTS",
      description: `Zero Bank's platform demystifies cryptocurrency investments, making it easy for beginners and veterans alike to invest in crypto securely. Navigate the digital currency landscape with our insight tools.`,
      image: "/images/www_zero-bank_io/zero-bank (4).webp"
    },
    {
      title: "PERSONALIZED FINANCIAL ADVICE",
      description: `Benefit from AI-driven financial advice tailored to your personal goals and financial situation. Zero Bank combines data analytics with expert knowledge to offer personalized guidance that helps you make smarter financial decisions.`,
      image: "/images/www_zero-bank_io/zero-bank (5).webp"
    },
    {
      title: "ENHANCING LOAN ACCESSIBILITY",
      description: `Zero Bank transforms the loan process, making it more accessible and less cumbersome. With our platform, apply for loans with competitive rates and terms, designed to suit your financial needs without the traditional complexities.`,
      image: "/images/www_zero-bank_io/zero-bank (6).webp"
    },
    {
      title: "INTEGRATED WEALTH MANAGEMENT",
      description: `Our wealth management services provide a holistic view of your assets and investments, coupled with strategies tailored to your long-term financial objectives. Zero Bank leverages technology to optimize your portfolio's performance.`,
      image: "/images/www_zero-bank_io/zero-bank (7).webp"
    },
    {
      title: "EXPANDING FINANCIAL INCLUSION",
      description: `Zero Bank is committed to expanding financial inclusion by offering innovative banking solutions that reach underserved communities. Our technology bridges gaps, ensuring everyone has access to essential financial services.`,
      image: "/images/www_zero-bank_io/zero-bank (8).webp"
    },
    {
      title: "SECURE DIGITAL IDENTITY",
      description: `Protect and manage your digital identity with Zero Bank. Our blockchain-based identity verification system ensures that your digital footprint is secure, giving you control over how your personal data is shared and used.`,
      image: "/images/www_zero-bank_io/zero-bank (9).webp"
    },
    {
      title: "PIONEERING FINTECH INNOVATIONS",
      description: `At the forefront of FinTech, Zero Bank continually explores emerging technologies to introduce breakthrough financial products and services. Join us on a journey where innovation meets practical financial solutions.`,
      image: "/images/www_zero-bank_io/zero-bank (10).webp"
    },
    {
      title: "AGILE BUSINESS FINANCING",
      description: `Zero Bank revolutionizes business financing by providing agile, blockchain-backed funding solutions. Catering to startups and SMEs, our platform ensures quick, transparent, and fair access to capital, fueling growth and innovation.`,
      image: "/images/www_zero-bank_io/zero-bank (11).webp"
    },
    {
      title: "NEXT-GEN INSURANCE SERVICES",
      description: `Dive into the future of insurance with Zero Bank, where we leverage blockchain to offer transparent, efficient, and personalized insurance products. From health to property insurance, experience a seamless and trust-enhanced process.`,
      image: "/images/www_zero-bank_io/zero-bank (12).webp"
    },
    {
      title: "GLOBAL REMITTANCE REDEFINED",
      description: `Zero Bank transforms global remittance, making cross-border transactions faster, cheaper, and more secure. Our blockchain technology eliminates intermediaries, facilitating direct peer-to-peer transfers that empower familiesand community.`,
      image: "/images/www_zero-bank_io/zero-bank (13).webp"
    },
    {
      title: "REVOLUTIONARY CREDIT SCORING",
      description: `With Zero Bank's innovative credit scoring model, get fair and comprehensive evaluations based on blockchain data analytics. This approach provides a more accurate representation of creditworthiness, opening up new possibilities for financial inclusion.`,
      image: "/images/www_zero-bank_io/zero-bank (14).webp"
    },
    {
      title: "BLOCKCHAIN-BASED RETIREMENT PLANS",
      description: `Plan for the future confidently with Zero Bank's blockchain-based retirement solutions. Our platform offers secure, transparent, and flexible retirement planning options, ensuring your peace of mind.`,
      image: "/images/www_zero-bank_io/zero-bank (15).webp"
    },
    {
      title: "SUSTAINABLE INVESTING WITH IMPACT",
      description: `Zero Bank champions sustainable investing by integrating ESG (Environmental, Social, Governance) factors into investment decisions. Our platform allows you to invest in projects that not only offer financial returns but also create positive social impact.`,
      image: "/images/www_zero-bank_io/zero-bank (16).webp"
    }

  ]

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">zero-blockchain.xyz</h1>
        {/* About Zero-Blockchain Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About Zero Bank</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At the forefront of financial innovation, Zero Bank stands as a beacon of transformation in the digital banking landscape. Our dedication to fusing traditional banking excellence with the unprecedented potential of blockchain technology positions us as pioneers in a new era of financial services. We&apos;re not just participating in the blockchain revolution; we&apos;re leading it, crafting secure, efficient, and transparent banking solutions that transcend today&apos;s digital transaction boundaries.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Zero Bank&apos;s educational initiatives are the cornerstone of our strategy to demystify blockchain technology. By cultivating a comprehensive understanding from the ground up, we aim to foster widespread adoption and empower a global audience to harness the benefits of blockchain. From novice enthusiasts to advanced developers, our array of resources ensures that learning is accessible at every level.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our innovative platform and suite of services are meticulously designed to tackle real-world challenges, revolutionizing sectors from finance to healthcare, and supply chain management. Through practical case studies and compelling success stories, we showcase the transformative power of our blockchain solutions, demonstrating their impact on streamlining operations, enhancing security, and boosting efficiency.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Excellence in innovation is the hallmark of Zero Bank. Our relentless pursuit of the latest digital trends and technologies ensures that our offerings remain at the cutting edge, setting new industry standards. This commitment is driven by our vision to empower individuals and businesses alike with the tools to thrive in the digital economy.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At Zero Bank, we believe that the future of blockchain is a collaborative journey. Engaging closely with our clients, partners, and the broader community, we&apos;re co-creating a future where blockchain technology is integral to everyday financial transactions. By uniting our efforts, we can unlock blockchain&apos;s full potential and propel the digital revolution to new heights.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                We invite you to embark on this journey with us, exploring the vast possibilities that blockchain technology offers. Visit Zero Bank to discover how our services, educational programs, and innovative projects can redefine your banking experience. Join us as we chart a new course for digital finance, making it more inclusive, secure, and efficient for everyone.
              </p>
            </div>
          </div>
        </section>
        <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto text-white mb-0">Slides</h2>
        {/* 3D Cards Section */}
        <div className="py-0 mt-0 md:py-2 xl:py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-1">
            {projects.map((project, index) => (
              <CardContainer key={index} className="inter-var bg-white dark:bg-gray-800 rounded-lg p-6 mb-0">
                <CardBody>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="mt-2 w-full h-auto"> {/* Adjusted margin top */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1000}
                      height={400}
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
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
