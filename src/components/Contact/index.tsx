import React from "react";
import styles from "./contact.module.scss";
const ContactComponent = () => {
  return (
    <div className={styles.container}>
      <h2>Rzeszów ul. Podwisłocze 21</h2>
      <h3>
        Zapraszam od poniedziałku do piątku w godzinach 8:00 - 20:00 po
        wcześniejszym umówieniu telefonicznym.
      </h3>
      <h3>tel. 517-806-136</h3>
      <h3>
        Dla klientów parking bezpłatny. (po zarejstrowaniu samochodu na tablecie
        znajdujacym się w środku budynku na wprost od wejścia)
      </h3>
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.080012741444!2d22.004965415884605!3d50.028596525551805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa55d7ee8117%3A0xfc0ab56262630c70!2sPodwis%C5%82ocze%2021%2C%2035-309%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1679411254331!5m2!1spl!2spl"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.infoBox}></div>
    </div>
  );
};

export default ContactComponent;
