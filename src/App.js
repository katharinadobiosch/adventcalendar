import "./App.css";
import Door from "./patterns/Door";
import Snow from "./patterns/Snow";

function App() {
    return (
        <div className="site-wrapper">
            <main>
                <Snow />
                <Door />
            </main>
        </div>
    );
}

export default App;
