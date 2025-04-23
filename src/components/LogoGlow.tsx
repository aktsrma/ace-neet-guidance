
import React from 'react';

const LogoGlow = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
      <div className="relative flex items-center">
        <img 
          src="/lovable-uploads/1af3b00d-a4f3-4f18-906d-1bb68f1ad3f6.png" 
          alt="NEET Ace Mentor" 
          className="h-16 md:h-20"
        />
      </div>
    </div>
  );
};

export default LogoGlow;
