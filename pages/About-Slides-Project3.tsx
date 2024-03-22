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
      title: "FinTech Innovation & Integration",
      description: `Leading the charge in Manchester's fin-tech with new, secure blockchain solutions. Specialising in the seamless integration of advanced FinTech from conceptual finance models to market-ready financial products. Expert in navigating the cryptocurrency regulations and next-gen financial platforms.`,
      image: "/images/moo-lah_io/MoolahSlides-1.webp"
    },
    {
      title: "Investment Strategies & Analysis",
      description: `Our expertise shines in offering sophisticated investment strategies for diverse portfolios, including analysis of market trends and comprehensive risk assessment. Delivering insights for assets ranging from traditional securities to new digital currencies, providing a competitive edge in dynamic markets.`,
      image: "/images/moo-lah_io/MoolahSlides-2.webp"
    },
    {
      title: "Blockchain Empowerment",
      description: `Revolutionising Manchester's financial scene, moo-lah.io employs blockchain to enhance transparency and efficiency. Our approach demystifies digital currencies and offers robust blockchain education, empowering individuals and businesses to participate confidently in the new economy.`,
      image: "/images/moo-lah_io/MoolahSlides-3.webp"
    },
    {
      title: "Cryptocurrency Market Insights",
      description: `We pride ourselvesavigating the volatility of cryptocurrency markets, moo-lah.io provides in-depth analysis and real-time insights. We decode market signals and trends to offer informed predictions, aiding investment decisions for a forward-thinking clientele.`,
      image: "/images/moo-lah_io/MoolahSlides-4.webp"
    },
    {
      title: "Economics Through Education",
      description: `Moo-lah.io is dedicated to economic empowerment by providing comprehensive financial literacy resources. We cover essential topics from budgeting to investing, promoting an informed public capable of making savvy financial decisions.`,
      image: "/images/moo-lah_io/MoolahSlides-5.webp"
    },
    {
      title: "Personal Finance Mastery",
      description: `Our platform serves as a beacon for personal finance mastery, offering tailored advice that ranges from managing debt to wealth accumulation strategies. Moo-lah.io stands as an ally in the journey towards financial independence.`,
      image: "/images/moo-lah_io/MoolahSlides-6.webp"
    },
    {
      title: "Sustainable Investment Solutions",
      description: `Championing sustainable investment, moo-lah.io aligns profit with purpose. We provide guidance on how to invest in green assets and socially responsible companies, contributing to a healthier planet and society while targeting financial returns.`,
      image: "/images/moo-lah_io/MoolahSlides-7.webp"
    },
    {
      title: "Financial Analytics & Reporting",
      description: `Harnessing advanced analytics, moo-lah.io transforms data into financial foresight. Our detailed reporting services support businesses and individuals in making informed decisions grounded in solid data interpretation.`,
      image: "/images/moo-lah_io/MoolahSlides-8.webp"
    },
    {
      title: "Wealth Management & Growth",
      description: `Our holistic approach to wealth management at moo-lah.io encompasses portfolio construction, tax planning, and estate management. We craft bespoke strategies that aim to protect and grow wealth over the long term.`,
      image: "/images/moo-lah_io/MoolahSlides-9.webp"
    },
    {
      title: "Strategic Financial Planning",
      description: `Moo-lah.io excels in creating strategic financial plans that cater to individual goals and organisations. From early retirement planning to education funding, we craft clear, actionable paths to achieve financial milestones.`,
      image: "/images/moo-lah_io/MoolahSlides-10.webp"
    },
    {
      title: "Corporate Financial Engineering",
      description: `Our expertise in corporate financial engineering allows businesses to unlock value through innovative financial structuring, risk management, and capital optimisation. Moo-lah.io is at the forefront of corporate financial transformation.`,
      image: "/images/moo-lah_io/MoolahSlides-11.webp"
    },
    {
      title: "Global Market Analysis",
      description: `Moo-lah.io offers expansive coverage of global markets, providing investors with the pulse of economic activities worldwide. We deliver insights that span across borders, aiding in diversified and informed global investment strategies.`,
      image: "/images/moo-lah_io/MoolahSlides-12.webp"
    }
  ];

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">Moo-lah.io</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About Moo-lah.io</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Moo-lah.io is the epitome of financial empowerment and insightful analysis in the digital age. Our commitment lies in demystifying finance through accessible, in-depth articles and resources that pave the way to financial freedom. Our holistic approach integrates the latest in financial trends, offering advice and strategies that are crucial for financial well-being.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At www.moo-lah.io, we&apos;ve cultivated a space where financial literacy meets practical application. Our platform is a cornucopia of financial knowledge, from beginner budgeting tips to complex investment strategies, reflecting our mission to foster an informed and financially savvy community.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our content ranges from real-time market analysis to evergreen financial wisdom, providing our audience with the resources they need to make informed decisions. Each article and financial tool offered on moo-lah.io is crafted to elevate the reader&apos;s financial acumen, with a proven track record of aiding individuals and businesses in navigating the financial landscape.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Innovation in financial communication is at the heart of what we do. Moo-lah.io constantly embraces cutting-edge financial technologies and analytical methods, ensuring that our readers are always ahead of the curve. Our commitment to clarity and accuracy sets a new standard in financial journalism and analysis.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                We believe that effective financial management is a collaborative effort. Moo-lah.io prides itself on engaging with a community of readers and experts to refine and tailor our content. This collaborative spirit is woven into each piece, ensuring that our advice is not only expert-driven but also community-focused.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Dive into the financial narrative at www.moo-lah.io to discover a plethora of articles and analysis that encapsulate the essence of smart money management. Whether you&apos;re crafting a personal investment portfolio or seeking economic insights, moo-lah.io is your premier destination for financial acumen and empowerment.
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
