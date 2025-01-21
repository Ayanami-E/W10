import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../style/header.css"; // 确保 CSS 存在

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    console.log(`Switching to ${lng}`); // Debugging 日志
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <h1>{t("My Website")}</h1>
      <nav>
        <ul>
          <li><Link to="/">{t("Home")}</Link></li>
          <li><Link to="/about">{t("About")}</Link></li>
          {/* 添加 Cypress 需要的按钮 ID */}
          <li><button id="fi" onClick={() => changeLanguage("fi")}>FI</button></li>
          <li><button id="en" onClick={() => changeLanguage("en")}>EN</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
