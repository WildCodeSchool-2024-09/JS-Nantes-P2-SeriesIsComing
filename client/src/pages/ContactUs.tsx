import "../pages/ContactUs.css";
function ContactUs() {
  return (
    <div className="div-cu">
      <section className="section-1">
        <div className="left-part">
          <input className="name-cu" type="text" placeholder="Nom" />
          <input className="first-name-cu" type="text" placeholder="Prenom" />
          <input className="mail-cu" type="text" placeholder="Adresse mail" />
        </div>
        <div className="right-part">
          <p>Des series que tu souhaite voire sur le site ?</p>
          <input type="text" placeholder="Nom d'une série" />
          <input type="text" placeholder="" />
        </div>
      </section>
      <section className="section-2">
        <div className="explain-zone">
          <input
            className="user-explain"
            type="text"
            placeholder="Exprime toi"
          />
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
