import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {books} from './books'
import Book from './Book'
import Header from './Header'
import Footer from './Footer'


const BookList = () => {

  const removeItem = (id) => {
   // let newList = book.filter((book) => book.id !== id);
   // setBook(newList);
   var el = document.getElementById(id);
   el.remove();
  }

  return(
    <>
     <Header />
    <section className = "booklist">
     
      {books.map((book) => {
        const {id, img, title, author, link} = book
        return (
          <div id={id}>
          <Book img={img} title={title} author={author} link={link}> 
          <button type="button" className="btn1" onClick={() => removeItem(id)}>Remove</button>
          </Book>
          
          </div>
        )
      })}
    
    </section>
    <Footer />
    </>
  )
}






ReactDom.render(<BookList />, document.getElementById('root'))