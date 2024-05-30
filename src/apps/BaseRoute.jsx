import React from "react";
import { Route, Routes } from "react-router-dom";
import ChapterOne from "../modules/chapter-one/ChapterOne";
import ChapterTwo from "../modules/chapter-two/ChapterTwo";
import ChapterThree from "../modules/chapter-three/ChapterThree";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="chapter-one" element={<ChapterOne />}></Route>
        <Route path="chapter-two" element={<ChapterTwo />}></Route>
        <Route path="chapter-three" element={<ChapterThree />}></Route>
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h2>Home Page!</h2>;
};
