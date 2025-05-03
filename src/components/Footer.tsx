import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-accent text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <div className="text-center">
            <p className="font-bold">Trimagnetix</p>
            <p className="text-sm mt-1"> {currentYear} Trimagnetix. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
