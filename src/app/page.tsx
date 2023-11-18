import Link from "next/link"
const Homepage = () => {
return(
  <main>
<div className="container">
 <img src="https://tse3.mm.bing.net/th?id=OIP.k0t0xCnDO3y8NZLsxM8M1wHaF7&pid=Api&P=0&h=220" alt="" />
 <h1>Welcome to my potfolio</h1>
 <h6>i will build website for you</h6>
 <ul>
 <Link href="/about"><button id="my2">About me</button></Link>
 </ul>
</div><hr />
<section id="mainsection">
  <h1>My Skills</h1>
  <div className="con">
  <div id="div1">
  <img src="https://tse1.mm.bing.net/th?id=OIP.LvA59wJi3O9jTMQQsw_cRAHaGp&pid=Api&P=0&h=220" alt="" />
  <p>
      Proficient in Next.js, I craft efficient,<br />
       server-rendered React applications with <br />
      modular components and optimized <br />
      client-side navigation. Committed <br />
       to clean, maintainable code for  <br />
       exceptional user experiences.
    </p>
  </div>
  <div id="div2">
    <img src="https://tse2.mm.bing.net/th?id=OIP.4glF2fFiHxZM5gliTO1Y7QHaGp&pid=Api&P=0&h=220" alt="" />
   <i>
   <p>
    I possess strong proficiency in TypeScript, <br />
    enabling me to create robust and type-safe <br />
    applications. My expertise extends to <br />
    leveraging TypeScript's static typing to catch <br />
    potential errors during development, ensuring <br/>
    a more stable and maintainable codebase. <br/>
    I am adept at defining and using interfaces, <br/>
    generics, and other advanced features that <br/>
    TypeScript offers. With a keen eye for clean <br/>
    code and a commitment to writing scalable <br/>
    applications, I bring a solid foundation in <br/>
    TypeScript to any development project.
  </p>
   </i>
  </div>
  <div id="div3">
    <img src="https://tse4.mm.bing.net/th?id=OIP.4kSdlOKEQqdYroo_Bdg_dAHaEK&pid=Api&P=0&h=220" alt="" />
    <p>
    I possess strong proficiency in Python, <br />
    enabling me to create robust and scalable <br />
    applications. My expertise extends to <br />
    leveraging Python's dynamic typing to provide <br />
    flexibility and ease of development, ensuring <br/>
    a more versatile codebase. <br/>
    I am adept at utilizing Python libraries and <br/>
    frameworks, such as NumPy, Pandas, and Django, <br/>
    to efficiently solve complex problems. With a <br/>
    focus on writing clean and readable code, I bring <br/>
    a solid foundation in Python to any development <br/>
    project.
  </p>
  </div>
  </div>
</section>

  </main>
)
}
export default Homepage