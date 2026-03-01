import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
          <Header />
      
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to React 🚀</h2>
        <p>Now you are learning components!</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
