import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/contact.css"

export default function ContactPage() {

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre es demasiado corto")
      .required("El nombre es obligatorio"),

    email: Yup.string()
      .email("Email inválido")
      .required("El email es obligatorio"),

    message: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .required("El mensaje es obligatorio"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Enviado:", values);
    resetForm();

    const toast = document.getElementById("contact-toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contacto</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="span" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <Field id="message" name="message" as="textarea" rows="4" />
            <ErrorMessage name="message" component="span" className="error" />
          </div>

          <button type="submit" className="contact-btn">
            Enviar mensaje
          </button>

        </Form>
      </Formik>

      <div id="contact-toast" className="contact-toast">
        ¡Mensaje enviado con éxito!
      </div>
    </section>
  );
}
