"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  userName: string;
  passWord: string;
};

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const { passWord, userName } = data;
    const response = await signIn("credentials", {
      userName,
      passWord,
      redirect: false,
    });

    if (response?.ok) {
      toast.success("با موفقیت وارد شدید", {
        position: "top-center",
      });
      router.push("/dashboard");
    } else {
      toast.error("نام کاربری یا رمز عبور اشتباه است!", {
        position: "top-center",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        placeholder="نام کاربری"
        {...register("userName", { required: true })}
        className="w-full border p-2 rounded"
      />
      {errors.userName && (
        <span className="text-red-500">رمز عبور اجباری است</span>
      )}
      <input
        type="password"
        {...register("passWord", { required: true })}
        placeholder="رمز عبور"
        className="w-full border p-2 rounded"
      />
      {errors.passWord && (
        <span className="text-red-500">رمز عبور اجباری است</span>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition my-4 disabled:bg-gray-500 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <div className="border border-r-gray-600 rounded-full w-4 h-4 mx-auto animate-spin"></div>
        ) : (
          "ورود"
        )}
      </button>
    </form>
  );
}
