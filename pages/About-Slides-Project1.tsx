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
import PulseBeam from './../components/main/PulseBeam';

// Define the main page component
export default function Home() {
  // Define projects for the 3D cards demo
  const projects = [
    {
      title: "Synthesis of Form & Function",
      description: `Leading Manchester's architecture with sustainable, tech-integrated solutions. Specialising in seamless design from inception to execution. Expertly navigating complex regulations to materialise innovative visions.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 1.png"
    },
    {
      title: "Architectural Ingenuity",
      description: `Machu Design excels in envelope solutions for landmark structures like Millennium Tower at Erie Basin, blending design with functionality. Machu Design delivers exceptional envelope work for Erie Basin's iconic Millennium Tower project.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 2.png"
    },
    {
      title: "Heritage Modernisation",
      description: `In Manchester's Dalton Court, Machu Design masterfully blends contemporary design with historical respect. Their innovative approach redefines the urban landscape, ensuring functionality coexists with aesthetic elegance, while honoring the past.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 3.png"
    },
    {
      title: "Millennium Tower Transformation",
      description: `Machu Design's expertise shines in the Millennium Tower project, blending visionary design with state-of-the-art technology for a revitalised Manchester skyline. Their work underscores innovation in modern urban development.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 4.png"
    },
    {
      title: "The Three Towers Revival",
      description: `Revitalisation of Manchester's Three Towers infuses new life into urban living. Their innovative approach marries functionality with contemporary aesthetics. These council blocks now offer cutting-edge design and improved livability in the city.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 5.png"
    },
    {
      title: "Oldham PFI Project",
      description: `Machu Design contributes to Oldham's PFI, crafting modern homes that respect both community needs and environmental aesthetics. Their role underscores a dedication to thoughtful urban renewal and architectural finesse.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 6.png"
    },
    {
      title: "Innovative Design",
      description: `Machu Design's role in the Millennium Tower project showcases their expertise in integrating diverse architectural technologies for residential and commercial spaces, elevating Manchester's architectural landscape.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 7.png"
    },
    {
      title: "Oldham Regeneration Initiative",
      description: `Machu Design leads the Oldham PFI project with innovative housing designs enhancing community living. Prioritising modern functionality and aesthetics, they craft spaces that harmonise with Oldham’s character and future growth.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 8.png"
    },
    {
      title: "Community-Centric Design",
      description: `Machu Design's Oldham initiative redefines community housing, blending practical modernity with the locality's character. Striving for a balance between new construction and heritage preservation, they reimagine community living.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 9.png"
    },
    {
      title: "Sustainable Community Living",
      description: `Machu Design reimagines Oldham's housing with modern design, prioritising community and sustainability. Their initiative propels neighborhood renewal, fostering vibrant, eco-friendly living spaces you would say are remarkable.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 10.png"
    },
    {
      title: "Oldham PFI Housing Innovation",
      description: `Machu Design's Oldham project exemplifies innovation in housing, blending sustainable design with modern amenities. They focus on community rejuvenation and smart urban planning, creating spaces that promise future-forward living experiences.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 11.png"
    },
    {
      title: "Community-Centric Development",
      description: `In Oldham's PFI project, Machu Design advances urban renewal, integrating open spaces with modern amenities for community enrichment. Their vision for social housing marries functionality with aesthetics, contributing to a vibrant, inclusive neighborhood.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 12.png"
    },
    {
      title: "Innovative Urban Living",
      description: `Revitalising Oldham's neighborhoods, Machu Design's PFI initiative introduces smart, community-focused housing, weaving modernity with convenience. The initiative redefines urban housing, offering a blueprint for future developments.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 13.png"
    },
    {
      title: "Community-Focused Structures",
      description: `Machu Design's work on the Oldham PFI initiative highlights modern housing with a focus on public amenities, green spaces, and efficient use of urban landscapes, reflecting our dedication to sustainable and inclusive architecture.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 14.png"
    },
    {
      title: "Residential Revitalisation",
      description: `Oldham PFI initiative illustrates a modernised residential development, prioritising communal spaces and sustainability, and showcasing our commitment to enhancing urban living through innovative design and thoughtful use of space.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 15.png"
    },
    {
      title: "Innovative Residential Design",
      description: "This slide showcases a residential project by Machu Design that illustrates our proficiency in integrating contemporary architectural methods with practical community planning, evolving community spaces with innovative design.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 16.png"
    },
    {
      title: "Innovative Residential Revamp",
      description: `Comprehensive redevelopment transforming housing with contemporary design. Prioritising community spaces for enhanced living standards. Focused on sustainability, functionality, and aesthetics. Tailored solutions for the modern day.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 17.png"
    },
    {
      title: "Detailed Design Coordination",
      description: `Expert architectural coordination and detailed planning for residential developments. Comprehensive site layouts and robust construction details aligned with regulatory standards. Ensuring precise coordinates for brick and block plan set-outs.`,
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 18.png"
    },
    {
      title: "Community-Centric Design",
      description: "Machu's Trehborth Road & Stratford Road project highlights our commitment to community-centered design, offering comprehensive planning and technical oversight to ensure spaces that are functional with the local environment.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 19.png"
    },
    {
      title: "Integrated Urban Development",
      description: "Showcasing Machu's expertise in urban development, the design work for Trehborth Road & Stratford Road by Machu combines technical precision with a focus on community integration, sustainability, and modern architectural trends.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 20.png"
    },
    {
      title: "Architectural Visualization & Management",
      description: "Leveraging CGI for vivid project previews and detailed execution plans. Our oversight ensures a harmonious blend of precision and innovation from start to finish. You can see this within the work.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 21.png"
    },
    {
      title: "3D Visualization & Terrain Analysis",
      description: "Machu excels in 3D visualization, offering comprehensive terrain and layout analysis for robust site planning. We ensure detailed accuracy and aesthetics from the ground up, with state-of-the-art CGI for realistic project simulations.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 22.png"
    },
    {
      title: "Technological Synergy in Architecture",
      description: "Machu Design is at the forefront of blending advanced technology with practical design. Our sustainable solutions contribute to Manchester’s evolving architecture, integrating complex designs into the urban fabric.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 23.png"
    },
    {
      title: "Architectural Technology Integration",
      description: "Machu Design pioneers in fusing high-tech solutions with functional architecture. Our innovative designs not only reshape Manchester’s skyline but also blend seamlessly with the city's existing urban fabric, nature and our very lives.",
      image: "/images/machudesign-images/machudesign.com - Arch-Tech - 25.png"
    }
  ];

  return (
    <main className="h-full w-full bg-black">
      <Navbar />
      <div className="flex flex-col gap-20 items-center">
        <h1 className="text-white text-center text-3xl font-bold mt-20 mb-0 px-6">machudesign.com</h1>
        {/* Photo Portfolio Section */}
        <section className="relative w-full overflow-hidden bg-gray-100 py-12 md:py-24 xl:py-32 dark:bg-gray-850">
          <div className="container px-4 space-y-12 md:space-y-16 xl:space-y-20 dark:text-gray-250 text-center mx-auto">
            <h2 className="text-lg font-bold tracking-tighter sm:text-lg md:text-xl lg:text-xl mx-auto">About Machu Design</h2>
            <div className="md:grid md:grid-cols-2 md:gap-16 text-justify">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At Machu Design, we bridge the gap between traditional architectural principles and the boundless possibilities of modern design. Established with a passion for creating spaces that inspire and resonate, our firm specialises in delivering architectural projects that embody both functionality and aesthetic brilliance.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Our website, www.machudesign.com, serves as a digital portfolio showcasing our commitment to excellence in architectural design. It features a meticulously curated selection of our projects, each illustrating our capability to blend innovative design solutions with environmental sensitivity and client-specific needs.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                From residential marvels to commercial masterpieces, Machu Design has carved a niche in transforming visions into tangible realities. Our projects section highlights our versatility across various domains, including bespoke home designs, efficient office spaces, and public structures that engage and empower communities.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Innovation lies at the heart of everything we do. Our design approach is deeply rooted in research and cutting-edge technology, enabling us to push boundaries and explore new horizons in architectural design. Whether it&apos;s sustainable living concepts or integrating smart technology into our projects, we are dedicated to pioneering solutions that address the challenges of contemporary living.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                At Machu Design, collaboration is key. We believe that great architecture is born from a synergy of ideas, and we are always eager to collaborate with clients, engineers, and designers to bring exceptional projects to life. Our website offers an insight into our design philosophy, services, and the collaborative process that underpins our work.
              </p>
              <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                Discover the latest projects, insights, and architectural trends through our website. Whether you&apos;re a potential client, a fellow architect, or simply an aficionado of innovative design, www.machudesign.com invites you to explore the world of Machu Design and be inspired.
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
