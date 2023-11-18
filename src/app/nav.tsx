import Link from "next/link"
const Nav = () =>{
   return(
    <main className="container"> 
    <div>
        <img src="https://tse1.mm.bing.net/th?id=OIP.mahPIBrzPK7A8qAuvksHlgHaHa&pid=Api&P=0&h=220" alt="" />
        <h6>Hammad studio</h6>
    </div>
<ul>
<Link  href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact  </Link>
</ul>
</main>
)
}
export{Nav}