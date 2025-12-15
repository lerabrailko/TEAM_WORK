import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/myphotoS.jpg"} alt="_Solomia Radiuk_" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>_Solomia Radiuk_</h2>
          <p style={styles.position}>"UI/UX Designer"</p>
        </div>
      </div> 
      <div style={styles.card}>
        <img src={"/Cooling-Logo-PNG-Photo.png"} alt="_Taras_" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>_Koretskiy Taras_</h2>
          <p style={styles.position}>"UI/UX Designer"</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/oleh.jpg"} alt="_Oleh_" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>_Matsiuk Oleh_</h2>
          <p style={styles.position}>"Developer"</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/baby.jpg"} alt="_Illia_" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>_Illia Yavorskyi_</h2>
          <p style={styles.position}>"QA"</p>
        </div>
       </div>
      <div style={styles.card}>
              <img src={"/Valeria.jpg"} alt="_Brailko Valeriia_" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>_Brailko Valeriia_</h2>
          <p style={styles.position}>"Team lead"</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
    body: {
        display: "flex",
        flexWrap: "wrap",
    },
    card: {
        width: "150px",
        padding: "1em",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    photo: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    textContainer: {
        marginTop: "0.5em",
    },
    name: {
        fontSize: "1em",
        fontWeight: "bold",
        color: "#333",
        margin: "0",
    },
    position: {
        fontSize: "0.9em",
        color: "#6a0dad", // Same purple color as header
        margin: "0.5em 0 0 0",
    },
};

export default Body;