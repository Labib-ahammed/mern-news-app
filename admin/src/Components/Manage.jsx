import { Button, Modal, Table, Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Manage = () => {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Adjust this number as needed
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${backend_url}/news/getnews?order=desc&limit=500`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error while fetching data:", error.message);
      }
    };
    fetchNews();
  }, []);

  const handleDeletePost = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `${backend_url}/news/deletenews/${postIdToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      setNews((prev) => prev.filter((post) => post._id !== postIdToDelete));
    } catch (error) {
      console.error("Error while deleting post:", error.message);
    }
  };

  // Calculate current news items for display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  // Change page handler
  const onPageChange = (page) => {
    if (page < 1 || page > Math.ceil(news.length / itemsPerPage)) return; // Prevent out-of-bounds
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="text-3xl text-center my-3 font-semibold">MANAGE NEWS</h1>
      <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300">
        {news.length > 0 ? (
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>News image</Table.HeadCell>
              <Table.HeadCell>News title</Table.HeadCell>
              <Table.HeadCell>News reporter</Table.HeadCell>
              <Table.HeadCell>News category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>Edit</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {currentItems.map((post) => (
                <Table.Row className="bg-white" key={post._id}>
                  <Table.Cell>
                    <img
                      src={post.imgUrl}
                      alt={post.title}
                      className="w-20 h-10 object-cover bg-gray-500"
                    />
                  </Table.Cell>
                  <Table.Cell className="font-medium text-gray-900 ">
                    <p>{post.title.substring(0, 17)}...</p>
                  </Table.Cell>
                  <Table.Cell>
                    <p>{post.author}</p>
                  </Table.Cell>
                  <Table.Cell className="font-medium text-gray-900">
                    <p>{post.category}</p>
                  </Table.Cell>
                  <Table.Cell className="cursor-pointer">
                    <p
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                    >
                      <FaTrash />
                    </p>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/update-post/${post._id}`}>
                      <FaPen />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          "No news found"
        )}
      </div>
        {console.log(news.length)}
      {/* Pagination Component */}
      {news.length > 0 && (
        <div className="flex justify-center mt-4 mb-20">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(news.length / itemsPerPage)}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      )}

      {/* Modal for Deletion Confirmation */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, Delete it
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Manage;
