import React, { Component } from "react"
class MiddleQuestion1 extends Component {

    render() {
        return (
            <div style={styles.flexContainer}>
                <div style={styles.contentContainer}>
                    <div style={styles.contentLeft}>
                        <div>
                            <img
                                src={"https://qph.fs.quoracdn.net/main-qimg-573142324088396d86586adb93f4c8c2"}
                                style={{ width: 150, borderRadius: "50%" }}
                                alt="Jessica Potter"
                            />
                            <p style={{ fontSize: 30, fontWeight: "bold" }}>Jessica Potter</p>
                            <p style={{ fontSize: 18, color: "gray" }}>Visual Artist</p>
                        </div>
                        <div style={styles.buttonContainer}>
                            <button class="button is-rounded" style={{ marginTop: 20 }}>Follow</button>
                            <button class="button is-rounded" style={{ marginTop: 10 }}>Message</button>
                        </div>
                    </div>
                    <div style={styles.contentRight}>
                        <div style={styles.card }>
                            <div style={styles.cardContent}>
                                <p style={styles.textScore}>523</p>
                                <p style={styles.text}>Posts</p>
                            </div>
                        </div>
                        <div style={{...styles.card, marginTop: 4}}>
                            <div style={styles.cardContent}>
                                <p style={styles.textScore}>1387</p>
                                <p style={styles.text}>Linkes</p>
                            </div>
                        </div>
                        <div style={{...styles.card, marginTop: 4}}>
                            <div style={styles.cardContent}>
                                <p style={styles.textScore}>146</p>
                                <p style={styles.text}>Follower</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    flexContainer: {
        height: 500,
        padding: 20,
        backgroundColor: "#F4A460"
    },
    contentContainer: {
        display: "flex",
        height: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 7px 0 rgba(128, 128, 128, 0.2), 0 3px 10px 0 rgba(128, 128, 128, 0.19)",
        borderRadius: 4,
        overflow: "hidden"
    },
    contentLeft: {
        width: "70%",
        margin: "auto",
        padding: 20
    },
    contentRight: {
        width: "30%",
        flexDirection: "column",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        height: "33.33%",
        justifyContent: "center",
        backgroundColor: "#FFDAB9",
    },
    cardContent: {
        alignSelf: "center",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        width: "20%",
        margin: "auto",
    },
    textScore: {
        fontSize: 30,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
        color: "gray"
    }
}

export default MiddleQuestion1