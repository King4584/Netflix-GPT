import React, { useState } from 'react';

const Footer = () => {
  // State to handle the visibility of each section on medium devices
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showAccountSupport, setShowAccountSupport] = useState(false);
  const [showFollowUs, setShowFollowUs] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4
              className="font-bold mb-2 cursor-pointer md:mb-0"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
            >
              Quick Links
            </h4>
            <ul className={`md:block ${showQuickLinks ? 'block' : 'hidden'} lg:block`}>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Home</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Movies</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">TV Shows</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">New & Popular</p></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4
              className="font-bold mb-2 cursor-pointer md:mb-0"
              onClick={() => setShowAccountSupport(!showAccountSupport)}
            >
              Account & Support
            </h4>
            <ul className={`md:block ${showAccountSupport ? 'block' : 'hidden'} lg:block`}>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Account Settings</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Help Center</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Contact Us</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">FAQ</p></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4
              className="font-bold mb-2 cursor-pointer md:mb-0"
              onClick={() => setShowFollowUs(!showFollowUs)}
            >
              Follow Us
            </h4>
            <ul className={`md:block ${showFollowUs ? 'block' : 'hidden'} lg:block`}>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Facebook</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Twitter</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Instagram</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Newsletter</p></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
            <h4
              className="font-bold mb-2 cursor-pointer md:mb-0"
              onClick={() => setShowLegal(!showLegal)}
            >
              Legal
            </h4>
            <ul className={`md:block ${showLegal ? 'block' : 'hidden'} lg:block`}>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</p></li>
              <li><p href="#"  className="text-gray-400 hover:text-white cursor-pointer">Cookie Policy</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-400">© 2024 Netflix GPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
