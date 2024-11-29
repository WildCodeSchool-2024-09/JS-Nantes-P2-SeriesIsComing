import "../pages/ContactUs.css";
import type { FormEvent } from "react";
import { NavLink } from "react-router-dom";
import type { UserI } from "../assets/interfaces/UserI";
import useUser from "../utils/useUser";

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
          placeholder="Nom"
          name="userFirstName"
        />
        <input
          name="userLastName"
          className="user-input"
          type="text"
          placeholder="Prenom"
        />
        <input
          name="userMail"
          className="user-input"
          type="text"
          placeholder="Adresse mail"
        />
        <label htmlFor="seriesName">
          Des series que tu souhaites voir sur le site ?
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
          <label className="subscribe" htmlFor="newsletter">
            Abonne toi à notre newlester
          </label>
          <input type="checkbox" name="newsletter" />
        </article>

        <button type="submit" id="validation-button">
          Valide ta demande
        </button>
      </form>
      <NavLink to={"/about"}>
        <p id="legal-status">Mentions légales</p>
      </NavLink>
    </section>
  );
}

export default ContactUs;
