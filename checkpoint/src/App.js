import React from "react";
import Profile from "./profil/profile";
import "./App.css";

function App() {
    const handleAlert = (name) => {
        alert (`Hi, I am a $(name)`)
    }
    return (
        <div>
            <Profile
                FullName="mohamed aloui"
                Bio=" hamem sayela béja nord 9052 "
                Profession="Etudient chez Go My Code "
               handleAlert={handleAlert}
            >
                <div>
                    <img src="image1.jpg" alt="alt" style={{ width:300 }} />
                </div>
            </Profile>
        </div>
    );
}

export default App;
