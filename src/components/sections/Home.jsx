import { RevealOnScroll } from "../RevealOnScroll"; 
import sam from '../../assets/sam.jpg';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent leading-snug">
            Hi, I'm Samuel Lutepo
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto px-2">
            Hi! I’m a passionate and hardworking Full-Stack Developer with a strong love for both web and mobile development. I enjoy bringing ideas to life through code and creativity, and I’m always ready to learn something new. Alongside software, I have a deep interest in electronics, especially working with microcontrollers like Arduino, where I build practical projects for fun and innovation.

            My ultimate goal is to design experiences that inspire imagination—whether it’s through a clean UI, smart functionality, or a clever piece of hardware. When I’m not coding, you’ll probably find me playing chess, diving into video games, or tinkering with electronics experiments.
          </p>

          <div className="p-3">
            <img 
              src={sam} 
              alt="My Photo" 
              className="mx-auto rounded-xl w-48 h-48 sm:w-64 sm:h-64 object-cover shadow-lg transition hover:scale-105 duration-300"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="#projects"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-1 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-500 text-orange-500 py-3 px-6 rounded font-medium transition hover:-translate-y-1 hover:bg-orange-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
