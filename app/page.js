'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { PopularCardsFragment } from "./components/CardListSection/PopularCardsFragment";
import { CardsList } from "./components/CardListSection/CardsList";
import { NewCardsFragment } from "./components/CardListSection/NewCardsFragment";
import { getGamesByCategory } from "./data/data-itils";
import { useEffect } from "react";
import { authorize } from "./api/api-utils";
import { endpoints } from "./api/config";
import { useGetDataByCategory } from "./api/api-hooks";
import { CardsListSection } from "./components/CardListSection/CardsListSection";

export default function Home() {
  const popularGame = useGetDataByCategory(
    endpoints.games,
    "popular"
  );
  const newGame = useGetDataByCategory(
    endpoints.games,
    "new"
  );
  return (
    <main className="main">
      <Banner />
      {popularGame  && <CardsListSection id="popular"  type="slider" title="Популярные" data={popularGame}></CardsListSection>}
      {newGame && <CardsListSection id="new" type="slider" title="Новинки" data={newGame}></CardsListSection>}
      <Promo />
    </main>
  );
}
