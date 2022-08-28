import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__cp">
        © {new Date().getFullYear()} Braden Wright
      </div>
    </footer>
  );
};

export default Footer;
