import Head from "next/head";
import Baner from "../components/Baner";
import MainComponent from "@/components/Main";
import ListComponent from "@/components/List";
import ContactComponent from "@/components/Contact";
import "@fontsource/bebas-neue";
export default function Home() {
  return (
    <>
      <Head>
        <title>Rehabilitacja Agnieszka Czapor</title>
        <meta
          name="description"
          content="Zabiegi rehabilitacyjne, ulga w bólu, "
        />
        <meta
          name="keywords"
          content="Rehabilitacja, Rzeszów, Agnieszka Czapor, Udar, Złamanie, Fizjoterapia"
        />
        <meta name="author" content="Piotr Czapor" />
      </Head>
      <header>
        <Baner />
      </header>
      <main>
        <MainComponent />
        <ListComponent />
      </main>
      <footer>
        <ContactComponent />
      </footer>
    </>
  );
}
