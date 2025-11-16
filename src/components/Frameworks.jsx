import { OrbitingCircles } from './OrbitingCircles';

export function Frameworks() {
  const skills = [
    'auth0',
    'css3',
    'postman',
    'beekeeper',
    'mongo',
    'postgresql',
    'nodejs',
    'typescript',
    'firebase',
    'web3forms',
    'docker',
    'nextjs',
    'aws',
    'git',
    'github',
    'html5',
    'visualstudiocode',
    'threejs',
    'stripe',
    'javascript',
    'react',
    'tailwindcss',
    'vitejs',
  ];
  return (
    <div className="relative flex h-[18rem] w-full overflow-visible items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => <img src={src} className="duration-200 rounded-sm hover:scale-110" />;
