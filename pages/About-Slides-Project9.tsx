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
      title: "EMPOWER YOUR BUSINESS WITH TECH DEV OF TOMORROW",
      description: `At MODISH0161, we deliver forward-thinking software solutions that redefine business efficiency. Specializing in cutting-edge technologies, we empower your enterprise to lead at its core.`,
      image: "/images/Modish0161-Website/ModishSlides (1).png"
    },
    {
      title: "UNLEASHING POTENTIAL WITH AGILE SOFTWARE SOLUTIONS",
      description: `Our agile development methodologies at MODISH0161 ensure rapid deployment and scalability for software solutions that drive your business. Tailored agility for dynamic market demands.`,
      image: "/images/Modish0161-Website/ModishSlides (2).png"
    },
    {
      title: "SHAPING THE FUTURE WITH GLOBAL SOFTWARE INNOVATIONS",
      description: `MODISH0161's global software solutions are a beacon of innovation, designed to address complex challenges and lead industries towards a more interconnected and efficient future.`,
      image: "/images/Modish0161-Website/ModishSlides (3).png"
    },
    {
      title: "BUILDING TRUST WITH SECURE SOFTWARE SOLUTIONS",
      description: `Security is not an afterthought at MODISH0161. Our software development integrates robust security protocols to build trust and ensure your data's integrity, prioritizing your peace of mind.`,
      image: "/images/Modish0161-Website/ModishSlides (15).png"
    },
    {
      title: "REVOLUTIONIZING INDUSTRIES WITH AI AND ML INNOVATIONS",
      description: `Harness the power of Artificial Intelligence and Machine Learning with MODISH0161's revolutionary solutions, transforming data into actionable insights and creating smarter systems for any industry.`,
      image: "/images/Modish0161-Website/ModishSlides (13).png"
    },
    {
      title: "ACCELERATING SUCCESS THROUGH TECHNOLOGICAL EXCELLENCE",
      description: `Our unwavering commitment to technological excellence at MODISH0161 accelerates your success. Experience the pinnacle of modern software development and watch your business soar.`,
      image: "/images/Modish0161-Website/ModishSlides (6).png"
    },
    {
      title: "ELEVATE YOUR TEAM WITH NEXT-GEN DEVOPS",
      description: `MODISH0161's next-gen DevOps solutions elevate your team's efficiency, creating a seamless pipeline from development to deployment, optimized for continuous innovation.`,
      image: "/images/Modish0161-Website/ModishSlides (14).png"
    },
    {
      title: "ADVANCING TEAMS THROUGH CUTTING-EDGE DEVOPS SOLUTIONS",
      description: `Stay ahead with MODISH0161, where our cutting-edge DevOps solutions propel your team's capabilities, ensuring a competitive edge in a fast-evolving digital ecosystem.`,
      image: "/images/Modish0161-Website/ModishSlides (8).png"
    },
    {
      title: "TRANSFORM YOUR WORKFLOW WITH INNOVATIVE DEVOPS PRACTICES",
      description: `Revolutionize your workflow with MODISH0161. Our innovative DevOps practices streamline processes, fostering a culture of continuous improvement and rapid delivery.`,
      image: "/images/Modish0161-Website/ModishSlides (9).png"
    },
    {
      title: "UNLOCKING POTENTIAL WITH THE POWER OF NEXT-GENERATION DEVOPS",
      description: `Unlock the full potential of your business operations with MODISH0161's next-generation DevOps. Embrace a future where technology drives growth and innovation is standard.`,
      image: "/images/Modish0161-Website/ModishSlides (10).png"
    },
    {
      title: "DRIVING TEAM EXCELLENCE WITH FUTURE-FOCUSED DEVOPS",
      description: `With MODISH0161, drive your team towards excellence with our future-focused DevOps services. Experience the synergy of collaboration, automation, and cutting-edge technology.`,
      image: "/images/Modish0161-Website/ModishSlides (11).png"
    },
    {
      title: "CATAPULT YOUR TEAM TO THE FOREFRONT WITH MODISH DEVOPS",
      description: `MODISH0161 catapults your team to the forefront of innovation with our revolutionary DevOps approach, where adaptability meets the pinnacle of technological prowess.`,
      image: "/images/Modish0161-Website/ModishSlides (12).png"
    }
  ];

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">modish0161.com</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About MODISH 0161</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At MODISH 0161, we embody the fusion of creativity and technological innovation. Our ethos is centred around designing digital experiences that not only captivate but also function seamlessly across all platforms. As pioneers in the digital landscape, we offer comprehensive software injections, design, web development, branding, and digital marketing solutions.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our online presence at www.modish0161.com is a testament to our commitment to excellence and innovation in the digital realm. The site and even this project serves as a showcase of our diverse portfolio, reflecting our expertise in creating visually stunning and user-centric designs that drive engagement and deliver results.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                From sleek website designs to robust e-commerce platforms, MODISH 0161 has a proven track record of delivering projects that not only meet but exceed our clients’ expectations. Our project gallery highlights our versatility in working across a variety of industries, helping businesses establish a strong online presence and achieve their digital objectives.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Innovation is the cornerstone of our approach. We continuously explore the latest digital trends and technologies to ensure our projects set benchmarks in design and functionality. Whether it’s through immersive web experiences or strategic digital marketing campaigns, our goal is to set new standards in digital excellence.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Collaboration is at the core of our philosophy. We understand that the best digital solutions are created through a combination of expertise, creativity, and client input. Our approach to each project is highly collaborative, ensuring that we work closely with our clients to turn their vision into a digital reality.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                We invite you to explore our website, www.modish0161.com, to learn more about our services, design philosophy, and the innovative projects we have brought to life. Whether you are looking to embark on a new digital project or simply seeking inspiration, MODISH 0161 offers a window into the future of digital design and marketing.
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
