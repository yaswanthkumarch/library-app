import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 20).map((item, index) => {
              return (
        //         <table>
        //             <thead>
        //     <td>author</td>
        //     <td>editioncount</td>
        //     <td>publish year</td>
        // </thead>
        // <tbody>      
        //   <tr key={index}>
        //   <td>  <span>{item.author.join(", ")}</span></td>
        // <td><span>{item.edition_count}</span></td>
        // <td><span>{item.first_publish_year}</span></td><span className='text-capitalize fw-7'>First Publish Year: </span>
        
        //   </tr>
          
        // </tbody></table>
  
                  
                  
                  
                  
                  <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList