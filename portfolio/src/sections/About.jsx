import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button.jsx';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const cardsRef = useRef([]); 

  useGSAP(() => {
    
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8, y: 50 }, 
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%', 
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('khushalvyas21@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space mt-50 my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
      
        <div ref={(el) => (cardsRef.current[0] = el)} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Khushal Vyas</p>
              <p className="grid-subtext">
                With experience in web development, I have contributed to creating dynamic and responsive websites, ensuring seamless user experiences and optimal performance.
              </p>
            </div>
          </div>
        </div>

        
        <div ref={(el) => (cardsRef.current[1] = el)} className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/code-512.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain brightness-40" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have experience working with various technologies and tools to develop efficient, scalable, and user-friendly applications.
              </p>
            </div>
          </div>
        </div>

        
        <div ref={(el) => (cardsRef.current[2] = el)} className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Pune, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

      
        <div ref={(el) => (cardsRef.current[3] = el)} className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am driven by the challenge of solving problems and creating impactful solutions through code. With a strong focus on continuous learning, I actively explore new technologies and enhance my skills to build efficient and user-friendly applications.
              </p>
            </div>
          </div>
        </div>

        
        <div ref={(el) => (cardsRef.current[4] = el)} className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">khushalvyas21@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
