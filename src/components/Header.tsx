import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
    const date=new Date().toLocaleDateString("bn-BD",{
        dateStyle:"full"
    })
  return (
   <div className="bg-base-100 shadow-sm">
     <div className="container mx-auto">
      <div className="navbar ">
        <div className="navbar-start flex gap-2">
          <Link href={"/"}>
            <Image className="bg-green-500 p-3 rounded-2xl"
              alt="navbar-icon"
              width={50}
              height={50}
              src={"/logo-icon.png"}
            ></Image>
          </Link>
          <div>
            <h2 className="text-2xl font-semibold">বাজার দর</h2>
            <p className="text-gray-400">{date}</p>
          </div>
        </div>
        <div className="navbar-end flex gap-3">
          <a className="btn text-md">সাইন ইন</a>
          <a className="btn bg-green-700 text-white text-md">সাইন আপ</a>
        </div>
      </div>
    </div>
    <NavLinks></NavLinks>
   </div>
   
  );
};

export default Header;
