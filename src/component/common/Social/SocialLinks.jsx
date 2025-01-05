import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/mdraselsharm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FaFacebook className="h-4 w-4" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/raselworshop"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600"
      >
        <FaGithub className="h-4 w-4" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rsmdraselmia/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-500"
      >
        <FaLinkedin className="h-4 w-4" />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/mdrasel_shar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400"
      >
        <FaTwitter className="h-4 w-4" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/c/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-500"
      >
        <FaYoutube className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SocialLinks;
