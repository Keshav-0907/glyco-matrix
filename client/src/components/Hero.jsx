import React from "react";

const Hero = () => {
  return (
    <div className="hero-main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "50%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Lectin{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex ", gap: "30px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="radio"
                  defaultChecked={true}
                  value={"Systematic Name"}
                />
                <p>Systematic Name</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="radio" value={"Protein Sequence"} />
                <p>Protein Sequence</p>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Lectin Name"
                style={{ width: "100%", padding: "2px" }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            Glycen{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div style={{ display: "flex ", gap: "30px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="radio"
                  defaultChecked={true}
                  value={"Systematic Name"}
                />
                <p>Systematic Name</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input type="radio" value={"IUPAC Name"} />
                <p>IUPAC Name</p>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter the glycans name...."
                style={{ width: "100%", padding: "2px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <button
          style={{
            padding: "10px 15px",
            fontSize: "20px",
            backgroundColor: "#F7941F",
            color: "white",
            border: "none",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Hero;
