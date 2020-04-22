import React from 'react'

const Loading = props => {
    return (
        <div style={styles.body}>
            <img style={styles.img} src="https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif"></img>
            <h1>Loading...</h1>
        </div>
    )
}

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
        height: "100px"
    }
};

export default Loading