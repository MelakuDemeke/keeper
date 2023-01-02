import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Notes from "./Notes";
import note from "../notes";


function App(){
    return <div>
    <Header />
    {note.map(n=><Notes id={n.key} title={n.title} content={n.content}/>)}
    <Footer />
    </div>
}

export default App