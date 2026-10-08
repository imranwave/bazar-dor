import Link from "next/link";
interface Navs{
    id:string
    slug:string
    nameBn:string
    icon:string
}
const NavLinks = async() => {
    const res=await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data:Navs[]=await res.json()
    return (
        <div className="container mx-auto flex gap-5 py-3">
            {
                data.map((d)=><Link key={d.id} href={d.slug}><button className=" hover:bg-gray-300 px-4 py-2 rounded">
                    {d.nameBn}
                    {d.icon}
                    </button></Link>)
            }
        </div>
    );
};

export default NavLinks;