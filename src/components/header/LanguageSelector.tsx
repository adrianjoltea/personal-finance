import { useTranslation } from "react-i18next";
const LANGUAGES = [
  { code: "ro", lang: "Romanian" },
  { code: "en", lang: "English" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-btns">
      {LANGUAGES.map(lng => {
        return (
          <button
            className={`header-btns-btn ${
              lng.code === i18n.language ? "header-btns-selected" : ""
            }`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSelector;
