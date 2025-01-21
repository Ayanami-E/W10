import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()

  return (
    <header 
      className="header bg-gray-800 text-white p-4 flex justify-between items-center"
      data-testid="pg-header"
    >
      <h1 className="text-xl font-bold">Lorem Ipsum</h1>
      
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link to="/" className="text-white hover:underline">
              {t('Home')}
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline">
              {t('About')}
            </Link>
          </li>
          <li>
            <button 
              id="fi" 
              onClick={() => i18n.changeLanguage('fi')}
              className="text-white hover:underline bg-transparent border-none cursor-pointer"
            >
              FI
            </button>
          </li>
          <li>
            <button 
              id="en" 
              onClick={() => i18n.changeLanguage('en')}
              className="text-white hover:underline bg-transparent border-none cursor-pointer"
            >
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
