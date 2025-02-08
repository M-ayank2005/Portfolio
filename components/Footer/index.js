import React from 'react';
import { FaTwitter, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';

const Footer = () => {
  const socials = {
    twitter: "https://twitter.com",
    github: "https://github.com/M-ayank2005",
    email: "mailto:mrmishramayank2005@gmail.com",
    facebook: "https://facebook.com"
  };

  const username = "M-ayank2005"; // Replace with your actual github username

  return (
    <footer className="bg-dark-300 w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top section with username and copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-0">
            <h1 className="text-lg font-extrabold text-white">
              {username}
            </h1>
            <small className="text-gray-400 mt-2 sm:mt-0 sm:ml-4">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </small>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            {socials.twitter && (
              <SocialLink url={socials.twitter}>
                <FaTwitter className="w-5 h-5" />
              </SocialLink>
            )}
            {socials.github && (
              <SocialLink url={socials.github}>
                <FaGithub className="w-5 h-5" />
              </SocialLink>
            )}
            {socials.email && (
              <SocialLink url={socials.email}>
                <AiFillMail className="w-5 h-5" />
              </SocialLink>
            )}
            {socials.facebook && (
              <SocialLink url={socials.facebook}>
                <FaFacebook className="w-5 h-5" />
              </SocialLink>
            )}
          </div>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          <a href="mailto:mrmishramayank2005@gmail.com" 
             className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <AiFillMail className="w-5 h-5 text-indigo-400" />
            <span>Email</span>
          </a>
          <a href="tel:+918423137171"
             className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <AiFillPhone className="w-5 h-5 text-indigo-400" />
            <span>Phone</span>
          </a>
          <a href="https://www.linkedin.com/in/mayank-mishra-5372112ab"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5 text-indigo-400" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/M-ayank2005"
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5 text-indigo-400" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Built with love section */}
        <div className="text-center">
          <span className="text-sm text-gray-400">
            Built with <span className="text-red-500">❤️</span> by{' '}
            <a 
              href="https://github.com/M-ayank2005" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 underline"
            >
              Mayank
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ url, children }) => {
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;