"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginView() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error === "AccessDenied"
      ? "This email is not authorized to access this dashboard."
      : error
        ? "Something went wrong. Please try again."
        : "";

  return (
    <div className="flex w-full h-screen font-sans overflow-hidden bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fluidMove1 { 0% { transform: translate(0px, 0px) scale(1); } 50% { transform: translate(80px, 60px) scale(1.15); } 100% { transform: translate(0px, 0px) scale(1); } }
        @keyframes fluidMove2 { 0% { transform: translate(0px, 0px) scale(1.1); } 50% { transform: translate(-70px, -50px) scale(0.95); } 100% { transform: translate(0px, 0px) scale(1.1); } }
        @keyframes fluidMove3 { 0% { transform: translate(0px, 0px) scale(1); } 50% { transform: translate(60px, -70px) scale(1.2); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-enter { animation: slideUp 0.5s ease-out forwards; }
        .fluid-blob-1 { animation: fluidMove1 14s ease-in-out infinite; }
        .fluid-blob-2 { animation: fluidMove2 18s ease-in-out infinite; }
        .fluid-blob-3 { animation: fluidMove3 16s ease-in-out infinite; }
      `,
        }}
      />

      <div className="hidden md:block w-[60%] h-full relative bg-[#090d16] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#12082b] via-[#210e4a] to-[#0a1f24]" />
        <div
          className="fluid-blob-1 absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full opacity-90 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #8beb3a 0%, #43ca55 45%, transparent 70%)",
            filter: "blur(75px)",
          }}
        />
        <div
          className="fluid-blob-2 absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full opacity-95 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #7a22cf 0%, #48118d 50%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="fluid-blob-3 absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full opacity-70 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #299e74 0%, #1f5068 55%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center px-12 lg:px-20 bg-white relative z-20">
        <div className="w-full max-w-sm mx-auto animate-enter">
          <h2 className="text-[clamp(2rem,3vw,3rem)] font-black text-slate-900 tracking-tight mb-2">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-500 font-medium mb-12">
            Sign in with your Google account to continue.
          </p>

          {errorMessage && (
            <div className="text-rose-500 text-xs font-bold mb-6">
              {errorMessage}
            </div>
          )}

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 bg-[#111827] hover:bg-indigo-600 text-white font-bold py-4 rounded-full transition-colors text-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.9 32.3 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.3 2.7l6-6C33.5 6.5 29 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5 44.5 36.3 44.5 25c0-1.5-.2-3-.4-4.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c2.8 0 5.3 1 7.3 2.7l6-6C33.5 6.5 29 4.5 24 4.5c-7.7 0-14.3 4.4-17.7 10.2z"
              />
              <path
                fill="#4CAF50"
                d="M24 45.5c5.3 0 10-1.8 13.4-4.9l-6.2-5.2C29.2 37 26.7 38 24 38c-5.3 0-9.8-2.6-11.3-7l-6.5 5C9.6 41 16.3 45.5 24 45.5z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.7-3.7 5l6.2 5.2C40.9 35.9 44.5 30.9 44.5 25c0-1.5-.2-3-.4-4.5z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
