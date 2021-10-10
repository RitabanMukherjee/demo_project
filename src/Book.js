import React from 'react'


const Book = ({img, title, author, link, children}) => {
    
    const clickHandler = () => {
      window.open(link)
    }


     return (
         <article className = "book">
           <img src={img} alt='' className="center"/>
           <h1 onClick={()=> console.log(title)}>{title}</h1>    
           <h4>{author}</h4>
           <button type="button" className="btn" onClick={clickHandler}>Check out on Amazon</button>
           {children}
         </article>
       )
   }

export default Book
