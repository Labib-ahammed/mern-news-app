import React, { useState, useRef, useMemo, useEffect } from "react";
import { initializeApp } from "firebase/app";
import JoditEditor from "jodit-react";
import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Spinner,
} from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const UpdatePost = () => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({ content: "" });
  const { postId } = useParams();



  const config = useMemo(
    () => ({
      placeholder: "Start typing...",
    }),
    []
  );

  const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_APIKEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: "mern-news-app.appspot.com",
    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  // Fetch existing post data
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/news/getnews?postId=${postId}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTitle(data[0].title);
        setAuthor(data[0].author);
        setCategory(data[0].category);
        setFormData({ content: data[0].description });
        if (data.imgUrl) {
          setFormData((prev) => ({ ...prev, imageUrl: data[0].imgUrl }));
        }
      } catch (error) {
        console.error("Error fetching post data:", error.message);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setImageLoading(true);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        alert("Uploaded successfully");
        // You may want to store the downloadURL in formData or state
        setFormData((prev) => ({ ...prev, imageUrl: downloadURL }));
        setImageLoading(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`https://newsnacterbackend.vercel.app/api/v1/news/updatenews/${postId}`, {
        method: "PUT", // Change to PUT for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          category,
          description: formData.content,
          imgUrl: formData.imageUrl,
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      alert("News updated successfully");
      navigate("/manage"); // Redirect after successful update
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false); // Ensure loading is reset on error
    }
  };

  return (
    <div className="container mx-auto px-3 min-h-screen">
      <h2 className="text-3xl text-center font-medium my-10">Update Post</h2>
      <form
        className="flex flex-col gap-6 mb-20 md:max-w-[700px] md:mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <Label className="mx-2">Title</Label>
          <TextInput
            className="border-2 border-gray-300 rounded-lg"
            placeholder="Enter Title..."
            id="title"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label className="mx-2">Author</Label>
          <TextInput
            className="border-2 border-gray-300 rounded-lg"
            placeholder="Enter Reporter Name..."
            required
            type="text"
            value={author}
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="politics">Politics</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="education">Education</option>
          <option value="environment">Environment</option>
        </Select>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            gradientDuoTone="purpleToPink"
            pill
            outline
            size="lg"
            onClick={handleFileUpload}
          >
            {imageLoading ? <Spinner /> : "Upload"}
          </Button>
        </div>

        <JoditEditor
          required
          ref={editor}
          onChange={(value) => setFormData({ ...formData, content: value })}
          config={config}
          value={formData.content}
        />

        <Button gradientDuoTone="purpleToPink" className="mt-5" type="submit">
          {loading ? <Spinner /> : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default UpdatePost;
