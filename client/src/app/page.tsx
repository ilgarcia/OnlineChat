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

export default function Page() {
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
      <section className="flex flex-col items-center relative z-10 shadow-2xl p-3 rounded-lg bg-white opacity-95">
        <h1 className="mb-8 mt-6 font-semibold text-xl text-theme-900">
          Faça seu login
        </h1>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-8 mb-4">
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
          </div>
          <div className="flex justify-between items-center w-full mb-6 px-1">
            <div>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-checkbox w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-1"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-theme-700"
              >
                Lembrar senha
              </label>
            </div>
            <a href="" className="text-sm text-theme-700">
              Forgot password?
            </a>
          </div>
          <div className="flex gap-2 mb-5">
            <button
              type="submit"
              className="py-1 mb-2 w-24 text-white font-medium border-2 border-theme-700 bg-gradient-to-r from-theme-700 to-theme-900  rounded duration-500 hover:contrast-200"
            >
              Login
            </button>
            <button
              type="submit"
              className="py-1 mb-2 w-24 text-theme-700 font-medium border-2 border-theme-700 rounded duration-500 hover:border-theme-700/60 hover:bg-theme-700/20"
            >
              Sing up
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
