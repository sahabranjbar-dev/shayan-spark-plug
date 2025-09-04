import Image from "next/image";
import LoginForm from "./components/loginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-12">
      {/* بخش فرم */}
      <div className="flex items-center justify-center p-8 bg-white border md:col-span-5">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6">ورود</h1>
          <LoginForm />
        </div>
      </div>

      {/* بخش عکس */}
      <div className="relative hidden md:block md:col-span-7">
        <Image
          src="/images/login-image.webp"
          alt="login page"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
