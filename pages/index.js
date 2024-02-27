import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Home() {
  const apiCall = async () => {
    try {
      let response = await axios.get("/api/sso");
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={() => apiCall()}>Click</button>
    </div>
  );
}
