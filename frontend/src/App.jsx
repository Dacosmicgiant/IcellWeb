import { ThemeProvider } from './context/ThemeContext';
import { Routes } from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
          <Routes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
