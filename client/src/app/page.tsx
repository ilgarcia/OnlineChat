"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Inter } from "@next/font/google";

import { Input } from "../components/Input";
// import styles from './page.module.css'

const inter = Inter({ subsets: ["latin"] });

type LoginFormData = {
  username: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  username: yup.string().required("Por favor preencha o username."),
  password: yup.string().required("Por favor preencha o password."),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const submitForm: SubmitHandler<LoginFormData> = (data) => {
    console.log("Submit");
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-theme-900 ">
      <Image
        src={"/img/background.png"}
        alt={"Background"}
        fill
        sizes="100%"
        className="object-cover z-0"
      />
      <section className="flex flex-col relative z-10 shadow-lg p-2.5 rounded bg-theme-100">
        <h1 className="mb-5">Faça seu login</h1>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <Input
            {...register("username")}
            type={"text"}
            placeholder={"Username"}
            error={errors.username}
          />
          <Input
            {...register("password")}
            type={"password"}
            placeholder={"Password"}
            error={errors.password}
          />
          <button type="submit" className="mb-3">
            Login
          </button>
        </form>
      </section>
    </section>
  );
}
