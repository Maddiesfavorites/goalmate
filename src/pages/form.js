import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Inter } from '@next/font/google'
import styles from '<prefix>/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoh6qv647uodnh8.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks for signing up! Check your inbox for updates 😊`
        );
      })
      .catch((e) => console.error(e));
  }

  return (
    <main className={styles.main}>
    <form onSubmit={handleSubmit(onSubmit)}>
     <h1>Join our newsletter!</h1>
      
      <input {...register("firstname")} className={styles.input} placeholder="first name"></input>
      <input {...register("lastname")} className={styles.input} placeholder="last name"></input>
      <input {...register("email")} className={styles.input} placeholder="email"></input>
      <input {...register("goal1")} className={styles.input} placeholder="goal"></input>
      <input {...register("goal1")} className={styles.input} placeholder="goal"></input>
      <input {...register("goal1")} className={styles.input} placeholder="goal"></input>
    

      <button role="submit">{isSubmitting ? "Submitting" : "Submit"}</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
    </main>
  );
}