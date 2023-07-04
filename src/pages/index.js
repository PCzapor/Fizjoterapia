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
        <title>
          Agnieszka Czapor - Profesjonalne Usługi Rehabilitacyjne w Rzeszowie
        </title>
        <meta
          name="description"
          content="Agnieszka Czapor oferuje profesjonalne usługi rehabilitacyjne w Rzeszowie, pomagając pacjentom wrócić do zdrowia po urazach i poprawić jakość życia."
        />
        <meta
          name="keywords"
          content="Agnieszka Czapor, Usługi rehabilitacyjne, Fizjoterapia, Rzeszów"
        />
        <meta name="author" content="Piotr Czapor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rehabilitacja.czapor.pl" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physiotherapy",
            name: "Agnieszka Czapor - Usługi Rehabilitacyjne",
            description:
              "Agnieszka Czapor oferuje profesjonalne usługi rehabilitacyjne w Rzeszowie, pomagając pacjentom wrócić do zdrowia po urazach i poprawić jakość życia.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Podwisłocze 21",
              addressLocality: "Rzeszów",
              addressRegion: "PL",
              postalCode: "35-309",
              addressCountry: "PL",
            },
            telephone: "Twój Numer Telefonu",
          })}
        </script>
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
