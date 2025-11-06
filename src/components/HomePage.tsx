import fotoProfilo from '../assets/Roberto.jpeg';

const HomePage = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="grid grid-cols-1 justify-items-center mt-4">

                <img
                    src={fotoProfilo}
                    alt="Foto profilo di Roberto Cavazzana"
                    className="shadow-xl/40 w-60"
                />

                <p className="mt-6 mx-10 text-justify">
                    Nel 2010 ho fondato Rete HET, un gruppo di imprese che integra molteplici competenze
                    per creare soluzioni innovative nel settore dell’edilizia, delle infrastrutture e
                    dell’ambiente. Nel 2025 ho acquisito il Cantiere Navale Vittoria, specializzato in
                    imbarcazioni militari e commerciali.
                </p>

            </div>

            <p className="mt-5 px-10 py-1 bg-[#788d7a] text-black italic text-start
            border-b border-white/30 shadow-md">
                " Fare bene insieme,
                <br />
                TOGETHER WE MAKE IT REAL "
            </p>

            {/* c'era un 'me-15' per staccarlo dal bordo */}
            <div className="text-right text-black font-ballet text-xl me-5"
                style={{ fontFamily: '"Ballet Variable", cursive' }}>
                <p>Roberto</p>
            </div>
        </div>
    )
}

export default HomePage;