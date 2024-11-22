import "../pages/ContactUs.css";
import type { FormEvent } from "react";
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
    <div className="div-contact-us">
      <section className="section-1">
        <form onSubmit={onSubmit} className="left-part">
          <input
            className="name_contact_user"
            type="text"
            placeholder="Nom"
            name="userFirstName"
          />
          <input
            name="userLastName"
            className="first_name-contact_user"
            type="text"
            placeholder="Prenom"
          />
          <input
            name="userMail"
            className="mail_contact_user"
            type="text"
            placeholder="Adresse mail"
          />
          <label htmlFor="seriesName">
            Des series que tu souhaite voire sur le site ?
          </label>
          <input
            type="text"
            placeholder="Nom d'une série"
            name="seriesName"
            id="seriesName"
          />

          <button type="submit">Valider</button>
        </form>
      </section>
      <section className="section-2">
        <div className="explain-contain">
          <textarea className="user-explain" placeholder="Exprime toi" />
        </div>
        <div className="buttons-contain">
          <button type="button">Abbone toi à notre newlester</button>
          <button type="button">Valide ta demande</button>
        </div>
      </section>
      <div className="mentions-contain">
        <button type="button">Mentions légales</button>
      </div>
    </div>
  );
}

export default ContactUs;
