import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  //   const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    // addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={(e) => handelSubmit(e)}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
