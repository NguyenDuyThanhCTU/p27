import Image from "next/image";
import React from "react";
import RegisterForm from "./RegisterForm";

const Register = ({ Data }: any) => {
  return (
    <div className="bg-[rgba(163,219,129,.38)] py-10">
      <div className="d:w-[1200px] p:mx-2 d:mx-auto p:w-auto grid p:grid-cols-1 d:grid-cols-2 items-center gap-5">
        <div>
          <RegisterForm Data={Data} />
        </div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/taxihaiphong24h.appspot.com/o/editor%2F21.png?alt=media&token=dd576fce-bbe8-4240-a756-12a2310d9ffd"
            alt="Picture of the author"
            width={500}
            height={250}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
