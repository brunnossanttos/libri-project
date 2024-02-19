"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Wallpaper from "../assets/dosto-cut.png";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid box-animate w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3x1 font-semibold">Login</h1>
            <p className="mt-2 text-xs text-slate-400">
              See Your Growth and get consulting Growth
            </p>
          </div>
          <form>
            <Button className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full" variant='outline'>
               {' '}
              <FcGoogle />
              Sign in with Google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" type="email" id="email" placeholder="Email" />

            <Label htmlFor="email">Password*</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="Password" />
            
            <Button type="submit" className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700">
              Login
            </Button>
          </form>
          <p className="mt-4 text-xs text-slate-200">
            @2024 All rights reserved
          </p>
        </div>
        <div className="relative hidden md:block">
          <Image
            src={Wallpaper}
            className="object-cover"
            fill={true}
            alt="background image"
          />
        </div>
      </div>
    </main>
  );
}
