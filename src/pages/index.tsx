import Head from "next/head";
import Baner from "../components/Baner";
import MainComponent from "@/components/Main";
import ListComponent from "@/components/List";
import ContactComponent from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rehabilitacja Agnieszka Czapor</title>
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
