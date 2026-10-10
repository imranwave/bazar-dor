
const SignInPage = () => {
    return (
         <div className="container mx-auto my-5">
      <div className="text-center my-5">
        <h1 className="text-3xl font-semibold">সাইন ইন</h1>
        <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
      </div>
      <form action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 mx-auto">
         
          <label className="label">ইমেইল</label>
          <input type="email" className="input w-md" placeholder="you@example.com" />
          <label className="label">পাসওয়ার্ড</label>
          <input
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />
          

          <button className="btn mt-4 bg-green-600 text-white font-semibold">সাইন ইন</button>
          <div className="divider">অথবা</div>
          <div className="flex gap-2 mx-auto">
            <button className="btn">google দিয়ে চালিয়ে যান</button>
            <button className="btn">github দিয়ে চালিয়ে যান</button>
          </div>
          <p className="text-center my-3 text-md">অ্যাকাউন্ট আছে? সাইন ইন করুন</p>
        </fieldset>
          
      </form>
    </div>
    );
};

export default SignInPage;