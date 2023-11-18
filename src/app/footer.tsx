import Link from "next/link"
const Footer = () =>{
    return(
        <footer>
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.mahPIBrzPK7A8qAuvksHlgHaHa&pid=Api&P=0&h=220" alt="" />
                <h4>Hammad Studio</h4>
                <h5>hammadrehman208@gmail.com</h5>
                <p>   | </p>
                <ul>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                </ul>
                
            </div>
        </footer>
    )
}
export{Footer}