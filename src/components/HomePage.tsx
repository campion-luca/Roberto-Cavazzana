import roberto_profile from '../assets/profile_pic_2.png';
import wallpaper from '../assets/wallpaper_home.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";

// #f4f3f5 --> testo bianco
// #011c0c18 --> verde scuro sfondo

const HomePage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-no-repeat bg-center bg-cover pt-4"
            style={{ backgroundImage: `url(${wallpaper})` }}>


            <div className="max-w-7xl w-full flex flex-col sm:flex-row">

                {/* BLOCCO TITOLO */}
                <div className="order-1 flex flex-col items-center sm:order-2 lg:items-start">
                    <h1
                        className="text-6xl md:text-7xl lg:text-8xl text-center lg:text-left"
                        style={{ fontFamily: 'Playfair Display Variable' }}>

                        Roberto Cavazzana
                    </h1>

                    <div className="bg-linear-to-r from-[#011c0c18] via-[#011c0cff] to-[#011c0c18]/50 w-full text-center hidden sm:block mt-4">
                        <p
                            className="text-4xl lg:text-5xl"
                            style={{ fontFamily: 'Ballet Variable' }}>
                            " fare bene insieme"
                        </p>
                    </div>
                    <div className="hidden sm:block w-full h-0.5 bg-linear-to-r from-transparent via-[#a4ae95] via-95% to-transparent" />
                </div>

                {/* BLOCCO FOTO */}
                <div className="order-3 flex justify-center pt-3 sm:order-1 sm:ps-5 lg:order-0">
                    <img
                        src={roberto_profile}
                        alt="Foto profilo Roberto Cavazzana"
                        className="w-50 h-auto lg:w-70" />
                </div>

                {/* BLOCCO CITAZIONE */}
                <div className="order-2 w-fullflex flex-col items-center sm:hidden">
                    <div className="bg-[#011c0c]/50 w-full text-center lg:text-left mt-4">
                        <p
                            className="text-4xl lg:text-5xl"
                            style={{ fontFamily: 'Ballet Variable' }}>
                            " fare bene insieme"
                        </p>
                    </div>

                </div>

            </div>

            <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#a4ae95] via-90% to-transparent" />

            {/* BLOCCO DESCRIZIONE */}
            <div className="w-full bg-[#011c0c]/60 text-white shadow-xl">

                <p className='max-w-7xl mx-auto text-xs sm:text-base lg:text-lg mt-3 mb-10 px-6 text-justify'>
                    Geologo e imprenditore, nato a Badia Polesine.<br /><br />

                    Nel 2010 ho fondato Rete HET, creando una sinergia di imprese che integra società di ingegneria, studi professionali e
                    competenze
                    specialistiche per offrire soluzioni innovative nei settori dell’edilizia, delle infrastrutture e dell’ambiente.<br /><br />

                    Nel 2025 ho acquisito il Cantiere Navale Vittoria, di cui sono oggi Presidente e Amministratore Delegato. Lo storico cantiere, che
                    nel 2027 celebrerà il suo centenario, rappresenta un’eccellenza nella costruzione di imbarcazioni militari e commerciali.<br /><br />

                    La mia visione si fonda su un principio chiaro e concreto: fare, fare bene, fare insieme. Lavoriamo per generare valore e
                    favorire uno sviluppo reale, fondato sulle persone e sul territorio.
                </p>
            </div>
            <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#a4ae95] via-5% to-transparent" />


            {/* BLOCCO CONTATTI */}
            <div className="flex flex-col sm:flex-row sm:text-sm justify-between w-full max-w-7xl text-xs lg:text-md mb-5 ps-6 pt-3">

                <a href="mailto:robertocavazzana@robertocavazzana.it">
                    <p className="flex gap-2 items-center">
                        <MdMailOutline />
                        robertocavazzana@robertocavazzana.it</p>
                </a>

                <a href="https://www.linkedin.com/in/robertocavazzana/" target="_blank" rel="noopener noreferrer">
                    <p className="flex gap-2 items-center sm:pe-6">
                        <AiOutlineLinkedin />
                        in / robertocavazzana</p>
                </a>

            </div>

        </div>
    );

}

export default HomePage;


// noopener

// Impedisce alla nuova scheda (quella aperta col link) di accedere alla pagina che l’ha aperta tramite window.opener.
// Senza di esso, la nuova pagina potrebbe potenzialmente modificare o reindirizzare la pagina originale (un rischio di phishing o tabnabbing).
// ___________________________________________________________________________________________________________________________

// noreferrer

// Impedisce di inviare l’URL della pagina originale come “referrer” (cioè da dove proviene il click) al sito di destinazione.
// Aggiunge quindi privacy, ma rimuove anche i dati di provenienza per le statistiche o analytics.
// ___________________________________________________________________________________________________________________________