import React from "react";
import Call from "./icons/call";
import Address from "./icons/address";

const Contact = () => {
  return (
    <div
      className="mb-24 flex flex-col px-5 md:flex-row max-w-7xl md:items-center md:justify-center gap-10 md:mx-auto"
      id="contact"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-green font-bold">Contactez-nous</h3>
          <div className="flex gap-2">
            <div className="w-28 h-1 rounded-full bg-green" />
            <div className="w-11 h-1 rounded-full bg-green" />
            <div className="w-3 h-1 rounded-full bg-green" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl flex gap-3 text-blue font-semibold">
            <Call className="w-6 fill-green" />
            0522663518
          </p>
          <p className="flex items-center gap-3 text-blue font-semibold">
            <Address className="w-6 fill-green" />
            20, Rue Chemin Des Dahlias, Ain Sebâa-Casablanca
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.6680569967803!2d-7.546002424303285!3d33.58796687333526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzE2LjciTiA3wrAzMiczNi4zIlc!5e0!3m2!1sen!2sma!4v1717516564888!5m2!1sen!2sma"
        className="h-96 border-2 border-dashed md:w-[32rem] w-full border-green rounded-xl"
        loading="lazy"
      />
    </div>
  );
};

export default Contact;
