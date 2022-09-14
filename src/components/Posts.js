import React, { useEffect, useState } from "react";
import { Postitems } from "./Postitems";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    searchPosts(text, page);
  }, [text, page]);
  const getPosts = async (page) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    console.log("page", page);
    const data = await res.json();
    console.log(data);
    setPosts(data);
    setItems(100);
  };
  const searchPosts = async (text, page) => {
    if (text.length >= 3) {
      setPage(1);
      console.log("search post called", page);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${text}`
      );
      const data = await res.json();
      console.log(data);
      setPosts(data);
    } else {
      getPosts(page);
    }
  };
  return (
    <div className="container my-3">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <h1
        className="text-center"
        style={{ margin: "30px 0", textDecoration: "underline" }}
      >
        Posts
      </h1>
      <div className="row">
        {posts.map((e, i) => (
          <div className="col-md-4" key={e.id}>
            <Postitems
              title={e.title != null ? e.title : ""}
              body={e.body != null ? e.body.slice(0, 120) : ""}
              userId={e.userId}
            />
          </div>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={page + 1 > Math.ceil(items / 10)}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
