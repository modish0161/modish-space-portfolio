"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[12px] h-10 w-10" />
          <h1 className="Welcome-text text-[15px]">Fullstack Developer Portfolio</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience and knowledge you can count on.
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-s text-gray-400 my-5 max-w-[1300px]"
        >
          {/* Content wrapped in individual <p> tags without nesting */}
          <p>🚀 I am a Full Stack Software Engineer with a comprehensive background in Website, Mobile, and Software development. Take a moment to explore my diverse range of projects and skills. 🌐</p><br />
          <p>🌟 Matthew Collins: Innovator at the Intersection of FinTech, Design and Technological Creativity 🌟</p><br />
          <p>🎓 Education: I am currently pursuing a Master of Science in FinTech, building upon my Bachelor of Arts in Spatial Design and Architecture. 🏛️</p><br />
          <p>💼 Professional Expertise: With over 15 years of experience in architectural technology, have chosen to open the gates and go deeper into other aspects i am keen on, being finance, along with software engineering, I specialise in JavaScript, React.js, Solidity, and Web3 development, showcasing a versatile skill set that spans across multiple disciplines. 💡</p><br />
          <p>💠 Web3 Advocacy: As a Web3 enthusiast, I am deeply engaged with blockchain technology and decentralised finance, exploring how these innovations can revolutionise financial systems through advanced technology. 🔗</p><br />
          <p>📚 Writing and Entrepreneurship: My passion for financial literacy and innovation is evident through my roles as managing director and a contributing editor at moo-lah.io, along with being an author within the financial domain, where I share insights and knowledge. 📖</p><br />
          <p>🎨 Creative Technology: Merging technology with creativity, my work is displayed on platforms like machudesign.com and moo-lah.io, as well as through various artistic endeavors, illustrating my multifaceted approach to innovation. 🖌️</p><br />
          <p>📈 Lifelong Learning: I am dedicated to continually enhancing my skills and knowledge, as well as imparting wisdom through hands-on projects and professional development initiatives, embodying the spirit of a lifelong learner and educator. 🧠</p><br />
          <p>🌠 &quot;I am committed to driving innovation and excellence in the FinTech sector and beyond. Together, let&apos;s shape the future of finance.&quot; 🚀</p>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.9)}
        className="w-full h-full flex justify-center items-center"
        style={{ position: "absolute", left: "800px" }} // Adjust left value if needed
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={1300}
          width={1000}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
