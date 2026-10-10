"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
     if (data) {
      toast.success("successfully SingIn!");
    }
    if (error) {
      toast.error("something is went wrong");
    }
  };
  const handleSingInWithGoogel=async()=>{
    const data=await authClient.signIn.social({
      provider:'google'
    })
  }
  const handelGitHub=async()=>{
    const data=await authClient.signIn.social({
      provider:'github'
    })
  }
  return (
    <div className="container mx-auto my-5">
      <div className="text-center my-5">
        <h1 className="text-3xl font-semibold">সাইন ইন</h1>
        <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 mx-auto">
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="you@example.com"
          />
          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />

          <button className="btn mt-4 bg-green-600 text-white font-semibold">
            সাইন ইন
          </button>
          <div className="divider">অথবা</div>
          <div className="flex gap-2 mx-auto">
            <button onClick={handleSingInWithGoogel} className="btn">google দিয়ে চালিয়ে যান</button>
            <button onClick={handelGitHub} className="btn">github দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-center my-3 text-md">
            অ্যাকাউন্ট আছে? সাইন ইন করুন
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
