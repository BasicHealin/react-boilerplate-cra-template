import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  console.log("code", process.env.REACT_APP_SECRET_CODE);

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      {t("Welcome-to-React")}
      <button onClick={() => handleLanguage("fr")}>Change to fr</button>
      <button onClick={() => handleLanguage("en")}>Change to eng</button>
    </div>
  );
};

export default Home;
