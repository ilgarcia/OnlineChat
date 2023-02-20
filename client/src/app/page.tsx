"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Inter } from "@next/font/google";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

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
      <section className="flex flex-col items-center relative z-10 shadow-lg p-3 rounded-lg bg-theme-100 opacity-95">
        <h1 className="mb-8 mt-6 font-semibold text-xl text-theme-900">Faça seu login</h1>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col items-center gap-8"
        >
          <Input
            {...register("username")}
            type={"text"}
            placeholder={"Username"}
            error={errors.username}
            size={"w-72"}
            icon={AiOutlineUser}
          />
          <Input
            {...register("password")}
            type={"password"}
            placeholder={"Password"}
            error={errors.password}
            size={"w-72"}
            icon={AiOutlineLock}
          />
          <button type="submit" className="mb-6 py-1 px-14 w-fit text-theme-700 font-medium border-2 border-theme-700 rounded-lg duration-500 hover:border-theme-700/60 hover:bg-theme-700/20">
            Login
          </button>
        </form>
      </section>
    </section>
  );
}
