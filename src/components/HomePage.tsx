import roberto_profile from '../assets/profile_pic.png';
import wallpaper from '../assets/wallpaper_home.png'

const HomePage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-no-repeat bg-center bg-cover" 
        style={{backgroundImage: `url(${wallpaper})`}}>

            {/* BLOCCO FOTO + TITOLO */}
            <div className="w-full max-w-5xl flex items-center gap-10">
                <img
                    src={roberto_profile}
                    alt="Foto profilo Roberto Cavazzana"
                    className="w-48 h-auto"
                />

                <div>
                    <h1 className="text-8xl whitespace-nowrap">
                        Cavazzana Roberto
                    </h1>

                    <p className="text-xl mt-4">
                        "Fare bene insieme
                    </p>
                    <p className="text-xl">
                        TOGETHER, WE MAKE IT REAL"
                    </p>
                </div>
            </div>

            {/* BLOCCO TESTO BIO */}
            <div className="w-full bg-white text-black">
                <p className='max-w-5xl mx-auto'>
                    Geologo e imprenditore, nato a Badia Polesine nel 1961<br /><br />

                    Nel 2010 ho fondato Rete HET, creando una sinergia di imprese che integra società di ingegneria, studi professionali e
                    competenze specialistiche per offrire soluzioni innovative nei settori dell’edilizia, delle infrastrutture e dell’ambiente.<br /><br />

                    Nel 2025 ho acquisito il Cantiere Navale Vittoria, di cui sono oggi Presidente e Amministratore Delegato. Lo storico cantiere, che
                    nel 2027 celebrerà il suo centenario, rappresenta un’eccellenza nella costruzione di imbarcazioni militari e commerciali.<br /><br />

                    La mia visione si fonda su un principio chiaro e concreto: fare, fare bene, fare insieme. Lavoriamo per generare valore e
                    favorire uno sviluppo reale, fondato sulle persone e sul territorio.
                </p>
            </div>

        </div>
    );

}



// <a href="https://www.linkedin.com/in/robertocavazzana/" target="_blank" rel="noopener noreferrer">
//     <p className="text-start flex items-center gap-2">
//         in / robertocavazzana</p>
// </a>
// <a href="mailto:robertocavazzana@robertocavazzana.it">
//     <p className="text-start flex items-center gap-2">
//         robertocavazzana@robertocavazzana.it</p>

export default HomePage;