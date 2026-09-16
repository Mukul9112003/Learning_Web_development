import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import './App.css'


function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Navbar />
        <Sidebar />
        <Dashboard />
        <Footer />
      </main>
    </div>
  );
}

export default App
