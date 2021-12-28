import "./App.css";
import Clock from "./app/Clock";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(https://source.unsplash.com/${window.innerWidth}x${window.innerHeight}/daily?scenic)`,
        height: "100vh",
      }}
    >
      <Clock />
      
    </div>
  );
}

export default App;
