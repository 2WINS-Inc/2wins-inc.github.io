import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import {
  AboutPage,
  AIPage,
  DXPage,
  HomePage,
  NewsPage,
  NotFoundPage,
  StrengthsPage,
} from "./pages";

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/services/ai" component={AIPage}></Route>
        <Route path="/services/dx" component={DXPage}></Route>
        <Route path="/news" component={NewsPage}></Route>
        <Route path="/strengths" component={StrengthsPage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Routes>
    </>
  );
};

export default App;
