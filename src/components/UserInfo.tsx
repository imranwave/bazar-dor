"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "session");
  const handleSIngOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
    toast.success("successfully SignOut!")
  };
  return (
    <div className="container mx-auto">
      {user ? (
        <div className="flex justify-center items-center gap-2">
          <div>
            <h2>{user.name}</h2>
          
          </div>
          <button onClick={handleSIngOut} className="btn btn-primary">
            SingOUt
          </button>
        </div>
      ) : (
        <div className="navbar-end flex gap-3">
          <Link href={`/signup`}>
            <button className="btn text-md">সাইন আপ</button>
          </Link>
          <Link href={`signin`}>
            {" "}
            <button className="btn bg-green-700 text-white text-md">
              সাইন ইন
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
