// Import React Modules
import type { FormEvent } from "react";
import { NavLink } from "react-router-dom";

// Import Custom Hook
import useUser from "../utils/useUser";

// Import Interfaces
import type { UserI } from "../assets/interfaces/UserI";

// Import Style
import "../pages/ContactUs.css";

function ContactUs() {
  const { user, setUser } = useUser();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.target) {
      const formData = new FormData(event.currentTarget);
      const formattedData: unknown = Object.fromEntries(formData.entries());
      setUser(formattedData as UserI);
      console.warn(user);
    }
  };

  return (
    <section className="section-contact-us">
      <h2>Contact nous via le forumlaire ci-dessous</h2>
      <form onSubmit={onSubmit} id="form-contact">
        <input
          className="user-input"
          type="text"
          placeholder="Prénom"
          name="userFirstName"
        />
        <input
          name="userLastName"
          className="user-input"
          type="text"
          placeholder="Nom"
        />
        <input
          name="userMail"
          className="user-input"
          type="text"
          placeholder="Adresse mail"
        />
        <label htmlFor="seriesName">
          Quelle série souhaiterais-tu voir sur notre site ?
        </label>
        <input
          type="text"
          placeholder="Nom d'une série"
          name="seriesName"
          id="seriesName"
          className="user-input"
        />
        <article className="user-comments">
          <label htmlFor="userComment">Renseigne ta demande ici :</label>
          <textarea name="userComment" />
        </article>

        <article id="newsletter">
          <label htmlFor="newsletter">Abonne toi à notre newlester</label>
          <input type="checkbox" name="newsletter" />
        </article>

        <button type="submit" id="validation-button">
          <p>Valide ta demande</p>
        </button>
      </form>
      <NavLink to={"/about"}>
        <p id="legal-status">Mentions légales</p>
      </NavLink>
    </section>
  );
}

export default ContactUs;
