import "../pages/ContactUs.css";
function ContactUs() {
  return (
    <div className="div-contact-us">
      <section className="section-1">
        <div className="left-part">
          <input className="name_contact_user" type="text" placeholder="Nom" />
          <input
            className="first_name-contact_user"
            type="text"
            placeholder="Prenom"
          />
          <input
            className="mail_contact_user"
            type="text"
            placeholder="Adresse mail"
          />
        </div>
        <div className="right-part">
          <p>Des series que tu souhaite voire sur le site ?</p>
          <input type="text" placeholder="Nom d'une série" />
          <input type="text" />
        </div>
      </section>
      <section className="section-2">
        <div className="explain-contain">
          <input
            className="user-explain"
            type="text"
            placeholder="Exprime toi"
          />
        </div>
        <div className="buttons-contain">
          <button className="contact-button" type="button">
            Abbone toi à notre newlester
          </button>
          <button className="contact-button" type="button">
            Valide ta demande
          </button>
        </div>
      </section>
      <div className="mentions-contain">
        <button className="contact-button" type="button">
          Mentions légales
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
