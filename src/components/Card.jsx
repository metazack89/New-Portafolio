import { motion } from 'motion/react';

const Card = ({ style, text, image, containerRef, size = 'normal' }) => {
  const sizeClass = size === 'small' ? 'scale-75' : 'scale-100';

  if (image && !text) {
    return (
      <motion.img
        className={`absolute w-15 cursor-grab ${sizeClass}`}
        src={image}
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={1}
      />
    );
  }

  return (
    <motion.div
      className={`absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm/60 w-[12rem] cursor-grab ${sizeClass}`}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
