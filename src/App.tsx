import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
          <AppRoutes />
  )
}

export default App

// IMPOSTO LA PAGINA, IL CONTENITORE COMPLESSIVO DELLA PAGINA :

// flex: imposta il contenitore come un flex container.
// flex-col: organizza gli elementi figli in colonna (dall’alto verso il basso).
// min-h-screen: imposta un’altezza minima pari all’intera altezza della finestra del browser (100vh).
// ___________________________________________________________________________________________________________________________


// PER FAR SI CHE IL CONTENUTO SI ALLARGHI IN BASE ALLO SPAZIO DISPONIBILE TRA HEADER E FOOTER :

// Il tag <main> indica semanticamente il contenuto principale della pagina.
// flex-grow (sempre di Tailwind) significa che questo elemento si espande per occupare tutto lo spazio disponibile tra l’header e il footer.
// ___________________________________________________________________________________________________________________________
