import { IoMailSharp, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="flex flex-col items-start mx-10 mb-5">
            <a href="mailto:robertocavazzana@robertocavazzana.it">
                <p className="text-start flex items-center gap-2 text-xs"><IoMailSharp />
                    robertocavazzana@robertocavazzana.it</p>
            </a>
            <a href="https://www.linkedin.com/in/robertocavazzana/" target="_blank" rel="noopener noreferrer">
                <p className="text-start flex items-center gap-2 text-xs"><IoLogoLinkedin />
                    in / robertocavazzana</p>
            </a>
        </div>
    )
}
export default Footer;


// noopener

// Impedisce alla nuova scheda (quella aperta col link) di accedere alla pagina che l’ha aperta tramite window.opener.
// Senza di esso, la nuova pagina potrebbe potenzialmente modificare o reindirizzare la pagina originale (un rischio di phishing o tabnabbing).
// ___________________________________________________________________________________________________________________________

// noreferrer

// Impedisce di inviare l’URL della pagina originale come “referrer” (cioè da dove proviene il click) al sito di destinazione.
// Aggiunge quindi privacy, ma rimuove anche i dati di provenienza per le statistiche o analytics.
// ___________________________________________________________________________________________________________________________