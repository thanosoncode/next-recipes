import Head from "next/head";
import MealList from "../components/MealList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next-Recipes</title>
        <meta name="description" content="Search your favorite foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MealList />
    </>
  );
}
