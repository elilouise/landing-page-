import React from 'react';
import Logo from './GradiusLogo';
import LinkList from './LinkList';
import SocialIcons from './SocialIcons';

interface FooterProps {
  companyLinks: string[];
  infoLinks: string[];
}

const Footer: React.FC<FooterProps> = ({ companyLinks, infoLinks }) => {
  return (
    <footer className="flex flex-col text-base font-medium text-black">
      <div className="flex overflow-hidden flex-col px-32 py-20 w-full border-t border-violet-100 border-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 items-start w-full max-md:flex-wrap">
          <div className="flex flex-col grow shrink items-start leading-6 min-w-[240px] w-[266px]">
            <Logo />
            <p className="self-stretch mt-6  text-gray-300">
              The first self-trained AI tutor for a truly personalized learning
              experience
            </p>
            <SocialIcons />
          </div>
          <LinkList title="Company" links={companyLinks} />
          <LinkList title="Info" links={infoLinks} />
        </div>
        <div className="self-stretch px-2.5 py-6 mt-20 w-full border-t text-gray-300 border-violet-100 border-opacity-10 max-md:mt-10 max-md:max-w-full">
          © 2025 Gradius.ai - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;