'use client'

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const session=authClient.useSession()
    console.log(session,'session');
  return (
   
      <div className="navbar-end flex gap-3">
        <a className="btn text-md">সাইন ইন</a>
        <a className="btn bg-green-700 text-white text-md">সাইন আপ</a>
     
    </div>
  );
};

export default UserInfo;
