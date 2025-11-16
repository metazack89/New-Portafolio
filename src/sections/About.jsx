import { useRef } from 'react';
import Card from '../components/Card';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">Sobre mí</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hola, soy Cristian Ortiz</p>
            <p className="subtext">
              En los últimos 2 años, he perfeccionado mis habilidades en desarrollo frontend y
              backend para entregar aplicaciones web dinámicas y funcionales.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">EL CÓDIGO ES ARTE</p>
            <Card
              size="small"
              style={{ rotate: '-35deg', top: '18%', left: '8%' }}
              text="Render Props"
              containerRef={grid2Container}
            />
            <Card
              size="small"
              style={{ rotate: '25deg', top: '65%', left: '45%' }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              size="small"
              style={{ rotate: '70deg', bottom: '28%', left: '77%' }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              size="small"
              style={{ rotate: '40deg', top: '65%', left: '8%' }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              size="small"
              style={{ rotate: '15deg', top: '12%', left: '48%' }}
              text="Clean Code"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '15deg', top: '70%', left: '78%' }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '15deg', top: '6%', left: '85%' }}
              image="assets/logos/javascript.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-25deg', top: '72%', left: '38%' }}
              image="assets/logos/tailwindcss.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-35deg', top: '3%', left: '5%' }}
              image="assets/logos/node.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Zona horaria</p>
            <p className="subtext">
              Directamente desde Marte, creando soluciones remotas para el planeta entero.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">¿Te gustaría iniciar un proyecto conmigo?</p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Stack tecnológico</p>
            <p className="subtext">
              Trabajo con un arsenal de lenguajes, frameworks y herramientas para dar vida a
              aplicaciones robustas, escalables y listas para cualquier reto.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
