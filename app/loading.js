import Image from "next/image";
import React from "react";
import logo from "../public/Images/logoWithBg.png";


import styles from "../Components/Loading/loading.module.css";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background: "white",
        height: "80vh",
        wight: "100%",
        gap: "1.5rem",
      }}
    >
      <div style={{ width: "10rem", height: "10rem" }}>
        <Image width="100%" height="100%" src={logo} alt="logo pic" />
      </div>

      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
