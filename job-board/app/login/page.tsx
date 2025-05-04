import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { LoginForm } from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href={"/"} className="flex items-center gap-2 self-center">
          <Image src={Logo} alt="Logo" width={80} height={40} />
          <h1 className="text-2xl font-bold">
            Next<span className="text-primary">Job</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
