
import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
  currentPage?: 'home' | 'portfolio' | 'services' | 'contact';
  navigateTo?: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, currentPage, navigateTo }) => {
  const logoUrl = "https://lh3.googleusercontent.com/pw/AP1GczMeZhP8dhPe1FqZ9pPOAg3Shz_uxFzt6vqktkdykKO9AymDimeLcFQSl_e1KJm3_RIoNWSId27-vq7mWF2iD_W4iwP6tQ1x7APAUnHNYJwj8IYwJGPPqwBq5oXbNAl9gqKBKg_zAvQs0rXaA2wBpb3brw=w2028-h2028-s-no-gm?authuser=0";

  const externalLinks = [
    { name: "Instagram", url: "https://www.instagram.com/contenaissance/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/108385521/" },
    { name: "YouTube", url: "https://www.youtube.com/@Contenaissance" },
    { name: "X (Twitter)", url: "https://x.com/contenaissance" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579738437856" }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="py-24 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <button 
          onClick={() => navigateTo?.('home')}
          className="flex items-center gap-4 group outline-none"
        >
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="h-[80px] md:h-28 w-auto object-contain transition-all duration-700 brightness-110"
          />
          <span className="text-sm font-bold tracking-[0.2em] uppercase font-sora text-white/70 group-hover:text-white transition-opacity">
            Contenaissance
          </span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 text-[10px] font-bold tracking-[0.4em] uppercase">
          <button onClick={() => navigateTo?.('services')} className="text-white/40 hover:text-white transition-all">Services</button>
          <button onClick={() => navigateTo?.('portfolio')} className="text-white/40 hover:text-white transition-all">Portfolio</button>
          {externalLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
          © {new Date().getFullYear()} Contenaissance AI Studios.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
