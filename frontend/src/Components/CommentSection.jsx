import React, { useEffect, useState } from "react";
import { Button, Textarea } from "flowbite-react";

const CommentSection = ({ postId }) => {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5); // State to keep track of visible comments

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setComments([data, ...comments]);
      }
    } catch (error) {
      console.log(error.message, "Error while submitting comment");
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/comment/getcomment/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message, "Error while fetching comments");
      }
    };
    getComments();
  }, [postId]);

  const handleShowMore = () => {
    setVisibleComments((prev) => prev + 3); // Show 3 more comments
  };

  return (
    <section className="max-w-2xl mx-auto w-full p-3">
      <p className="text-[13px] my-2 ml-3">Comment as Anonymous</p>
      <form
        className="border border-teal-500 rounded-md p-3"
        onSubmit={handleSubmit}
      >
        <Textarea
          placeholder="Add a comment..."
          rows="3"
          maxLength="200"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <div className="flex justify-between items-center mt-5">
          <p className="text-gray-500 text-xs">
            {200 - comment.length} characters remaining
          </p>
          <Button gradientDuoTone="purpleToPink" type="submit">
            Submit
          </Button>
        </div>
      </form>
      {comments.length === 0 ? (
        <p className="text-sm my-5">No comments yet</p>
      ) : (
        <>
          <div className="text-sm my-5 flex items-center gap-1">
            <p>Comments</p>
            <div className="border border-gray-400 py-1 px-2 rounded-sm">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.slice(0, visibleComments).map((comment) => (
            <div
              key={comment._id}
              className="p-4 shadow-sm shadow-custom-shadow mb-2 rounded-md"
            >
              <p>
                Anonymous:{" "}
                <span className="font-medium ">
                  {comment.content.charAt(0).toUpperCase() +
                    comment.content.slice(1)}
                </span>
              </p>
            </div>
          ))}
          {visibleComments < comments.length && (
            <p
              onClick={handleShowMore}
              className="cursor-pointer text-[17px] text-center mt-8 text-teal-500 hover:text-teal-950 lg:text-xl"
            >
              Show More
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default CommentSection;
