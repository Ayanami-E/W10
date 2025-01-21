import { Link } from "react-router-dom";
import { useState } from "react";

interface Translation {
  Home: string;
  About: string;
  "This is the front page": string;
}

interface Translations {
  [key: string]: Translation;
}

const translations: Translations = {
  en: {
    'Home': 'Home',
    'About': 'About',
    'This is the front page': 'This is the front page'
  },
  fi: {
    'Home': 'Etusivu',
    'About': 'Tietoa Meistä',
    'This is the front page': 'Tämä on etusivu'
  }
};

const Header = () => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language][key as keyof Translation] || key;
  };

  return (
    <header 
      className="header bg-gray-800 text-white p-4 flex justify-between items-center" 
      data-testid="pg-header"
    >
      <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
      <nav>
        <ul className="flex gap-6 items-center">
          <li>
            <Link 
              to="/" 
              className="text-white hover:underline"
            >
              {t('Home')}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-white hover:underline"
            >
              {t('About')}
            </Link>
          </li>
          <li>
            <button 
              id="fi" 
              onClick={() => setLanguage('fi')}
              className="text-white hover:underline bg-transparent border-none cursor-pointer px-2"
            >
              FI
            </button>
          </li>
          <li>
            <button 
              id="en" 
              onClick={() => setLanguage('en')}
              className="text-white hover:underline bg-transparent border-none cursor-pointer px-2"
            >
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { translations };
export default Header;
