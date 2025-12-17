import roberto_profile from '../assets/profile_pic_2.png';
import wallpaper from '../assets/wallpaper_home.png'

const HomePage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-no-repeat bg-center bg-cover pt-8"
            style={{ backgroundImage: `url(${wallpaper})` }}>

            {/* BLOCCO FOTO + TITOLO */}
            <div className="w-full max-w-7xl flex items-center gap-10">
                <img
                    src={roberto_profile}
                    alt="Foto profilo Roberto Cavazzana"
                    className="w-70 h-auto"
                />

                <div>
                    <h1 className="text-8xl"
                    style={{fontFamily: 'Playfair Display Variable'}}>
                        Roberto Cavazzana
                    </h1>

                    <p className="text-4xl mt-4 text-start mt-7"
                    style={{fontFamily: 'Ballet Variable'}}>
                        " fare bene insieme"
                    </p>
                </div>
            </div>

            {/* BLOCCO TESTO BIO */}
            <div className="w-full bg-[#011c0c]/50 text-white shadow-xl">
                <p className='max-w-7xl mx-auto text-lg mt-5 mb-10'>
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

            <div className="flex justify-between w-full max-w-7xl text-md mb-5 ms-5 pt-3">

                <a href="mailto:robertocavazzana@robertocavazzana.it">
                    <p className="flex gap-2">
                        robertocavazzana@robertocavazzana.it</p>
                </a>

                <a href="https://www.linkedin.com/in/robertocavazzana/" target="_blank" rel="noopener noreferrer">
                    <p className="flex gap-2">
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