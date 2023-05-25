"use client";
import React, { useState } from "react";
// import Carousel from "./components/indexfavorites";
// import Movielist from "./components/movie_list";
import { FavoriteContext } from "./context/FavoritesContext";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";

const Carousel = dynamic(() => import("./components/indexfavorites"));
const Movielist = dynamic(() => import("./components/movie_list"));

export default function Home({ Component, pageProps }) {
  const [favoriteChanged, setFavoriteChanged] = useState(false);

  return (
    <>
      <link href="/dist/output.css" rel="stylesheet" />
      <ToastContainer />

      <FavoriteContext.Provider value={{ favoriteChanged, setFavoriteChanged }}>
        <Carousel />
        <Movielist />
      </FavoriteContext.Provider>
    </>
  );
}
