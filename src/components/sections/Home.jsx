import { RevealOnScroll } from "../RevealOnScroll";
import sam from '../../assets/sam.jpg';


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Samuel lutepo
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Hi! I’m a passionate and hardworking Full-Stack Developer with a strong love for both web and mobile development. I enjoy bringing ideas to life through code and creativity, and I’m always ready to learn something new. Alongside software, I have a deep interest in electronics, especially working with microcontrollers like Arduino, where I build practical projects for fun and innovation.
            My ultimate goal is to design experiences that inspire imagination—whether it’s through a clean UI, smart functionality, or a clever piece of hardware. When I’m not coding, you’ll probably find me playing chess, diving into video games, or tinkering with electronics experiments.
          </p>
          <div className="p-3">
          <img src={sam} alt="My Photo" className="mx-auto block" width="300px" height="100px"/>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
