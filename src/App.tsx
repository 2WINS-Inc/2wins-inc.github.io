import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { Header } from "./components";
import { HomePage, NotFoundPage } from "./pages";

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={HomePage}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Routes>
    </>
  );
};

export default App;
