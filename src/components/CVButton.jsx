import React from 'react';
import { MdOutlineSimCardDownload } from 'react-icons/md';

const CVButton = () => {
  return (
    <a
      href="../../public/assets/cv/CV_Spa.pdf"
      download
      className="fixed bottom-6 right-6 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-400 transition-all flex items-center justify-center text-2xl z-50"
    >
      <MdOutlineSimCardDownload />
    </a>
  );
};

export default CVButton;
