import React from "react";
import Navbar from '../../components/Navbar/Navbar'

const Error404 = props => {
    return (
        <>
            <Navbar/>
            <div style={styles.body}>
                <h1 style={styles.title}>404</h1>
                <img style={styles.img} src="https://media.giphy.com/media/tJeGZumxDB01q/giphy.gif"></img>
                <h1>Paumanhin, ang pahina ay hindi matagpuan.</h1>
                <a href="/">Bumalik</a>
            </div>
        </>
    );
};

const styles = {
    body : {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        height: "100vh",
    },
    img : {
        height : "100px"
    },
    title : {
        fontWeight : 800,
        fontSize : "200px"
    }
};

export default Error404;
