"use client";

import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name:string,email:string,image:string,password:string};
    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });
    if(data){
        console.log(data);
    }
    if(error){
        console.log(error);
    }
 
  };
  return (
    <div className="container mx-auto my-5">
      <div className="text-center my-5">
        <h1 className="text-3xl font-semibold">অ্যাকাউন্ট তৈরি করুন</h1>
        <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 mx-auto">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="মো: রহিম উদ্দিন"
          />
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
          <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            name="confirmPassword"
            type="password"
            className="input w-md"
            placeholder="আবার লেখুন"
          />

          <button
            type="submit"
            className="btn mt-4 bg-green-600 text-white font-semibold"
          >
            একাউন্ট তৈরি করুন
          </button>
          <div className="divider">অথবা</div>
          <div className="flex gap-2 mx-auto">
            <button className="btn">google দিয়ে চালিয়ে যান</button>
            <button className="btn">github দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-center my-3 text-md">
            অ্যাকাউন্ট আছে? সাইন ইন করুন
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
