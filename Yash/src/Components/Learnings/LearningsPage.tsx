import { useEffect, useState } from "react";
import { PostDataCollection } from "./LocalLearningsCustomTypes.js";
import supabase from "../../../supabase.js";
import { TheVoid } from "../../GlobalCustomTypes.js";

export default function LearningsPage() {
  const [addPostFormOpen, setAddPostFormOpen] = useState(false);
  const [postData, setPostsData] = useState<PostDataCollection>([]);

  // Save post data to DB
  const savePost: TheVoid = async () => {
    // Input fields
    const titleField = document.getElementById("postTitle") as HTMLInputElement;
    const bodyField = document.getElementById("postBody") as HTMLInputElement;

    // Save post data
    await supabase.from("LearningPosts").insert({
      title: titleField.value,
      body: bodyField.value,
    });

    // Reset input fields
    titleField.value = "";
    bodyField.value = "";

    // Render post to user
    fetchPostsData();
  };

  // Retrieve post data from DB
  const fetchPostsData: TheVoid = async () => {
    const { data } = await supabase.from("LearningPosts").select();
    setPostsData(data);
  };

  useEffect(() => {
    fetchPostsData();
  }, []);

  return (
    <div className="learning-section">
      <button
        className="site-button"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setAddPostFormOpen(true);
        }}
      >
        Add Post
      </button>
      {addPostFormOpen && (
        <form className="add-post-form">
          <label htmlFor="postTitle">Title:</label>
          <input id="postTitle" type="text" autoComplete="off" />
          <br />
          <label htmlFor="postBody">Body:</label>
          <input id="postBody" type="text" autoComplete="off" />
          <br />
          <button className="site-button" type="button" onClick={savePost}>
            Submit
          </button>
        </form>
      )}
      {postData.map((post, idx) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
