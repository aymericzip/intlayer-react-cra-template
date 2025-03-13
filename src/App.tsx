import logo from "./logo.svg";
import "./App.css";
import { IntlayerProvider, useIntlayer } from "react-intlayer";
import { LocaleSwitcher } from "./components/LocaleSwitcher";

function AppContent() {
  const content = useIntlayer("app");

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      {content.getStarted}
      <a
        className="App-link"
        href={content.reactLink.href.value}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.reactLink.content}
      </a>
    </header>
  );
}

function App() {
  return (
    <IntlayerProvider>
      {/* <IntlayerEditorProvider> */}
      <div className="App">
        {/* Pour utiliser correctement le hook useIntlayer, vous devez accéder à vos données dans un composant enfant */}
        <AppContent />
        <LocaleSwitcher />
      </div>
      {/* </IntlayerEditorProvider> */}
    </IntlayerProvider>
  );
}

export default App;
