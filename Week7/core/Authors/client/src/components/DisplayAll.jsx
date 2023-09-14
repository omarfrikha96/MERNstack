import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors")
      .then((response) => {
        console.log(response.data);
        setAllAuthors(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:5000/api/authors/${id}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filteredAuthors = allAuthors.filter((author) => {
          return author._id !== id;
        });
        setAllAuthors(filteredAuthors);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };

  return (
    <div className="container">
        <div className="row justify-content-md-center">
        <div className="col-6" style={{textAlign : "left"}}>
          <Link to="/new" >Add an author</Link>
          <p style={{color :"violet"}} >We have quotes by:</p>
   
          </div>
        </div>
        <div className="row justify-content-md-center">
        <div className="col-6">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions Available</th>
              </tr>
            </thead>
            <tbody>
               {allAuthors
               .sort((a, b)=>{
                 return a.Name.localeCompare(b.Name);        //   sort by alphabet
               })
               .map((author) => {
                return (
                  <tr key={author._id}>
                    <td>
                    <Link to={`/element/${author._id}`}>
                        {author.Name}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/edit/${author._id}`} className="btn btn-primary">
                        Edit
                      </Link>
                      &nbsp;&nbsp;
                      <button
                        onClick={() => handleDeleteAuthor(author._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }).sort()}
            </tbody>
</table>
          </div>
        </div>
      
    </div>

  );
};

export default DisplayAll;