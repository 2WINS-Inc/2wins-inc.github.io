import { lazy, type Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import HomePage from "./pages/HomePage";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const AIPage = lazy(() => import("./pages/AIPage"));
const DXPage = lazy(() => import("./pages/DXPage"));
const DXSupportPage = lazy(() => import("./pages/DXSupportPage"));
const NewsListPage = lazy(() => import("./pages/NewsListPage"));
const SocialCapitalPage = lazy(() => import("./pages/SocialCapitalPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ThanksPage = lazy(() => import("./pages/ThanksPage"));

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/services/ai" component={AIPage}></Route>
        <Route path="/services/dx" component={DXPage}></Route>
        <Route path="/services/dx/support" component={DXSupportPage}></Route>
        <Route path="/news" component={NewsListPage}></Route>
        <Route path="/thanks" component={ThanksPage}></Route>
        <Route path="/social-capital" component={SocialCapitalPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Routes>
    </>
  );
};

export default App;
