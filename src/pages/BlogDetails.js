import { useParams, useHistory } from "react-router-dom";
import parser from 'html-react-parser';
import useFetch from "../useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8001/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8001/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        })
    }

    return (
        <main className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ parser(blog.body) }</div>

                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </main>
    );
}

export default BlogDetails;
