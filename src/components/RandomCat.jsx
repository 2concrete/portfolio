import { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { motion } from "framer-motion";

const RandomCat = () => {
  const api_key = import.meta.env.VITE_API_KEY;

  const [image, setImage] = useState({});
  const [rotation, setRotation] = useState(0);

  const getRandomImage = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=${api_key}`
    );
    const data = await response.json();
    setImage(data[0]);
  };

  const handleClick = () => {
    setRotation((prev) => prev + 720);
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="relative">
      {image.url && (
        <div>
          <div className="absolute top-0 left-0 m-1  opacity-60 hover:opacity-80 transition-all duration-300  ">
            <button
              className="cursor-pointer rounded bg-white w-8 h-8 flex justify-center items-center"
              onClick={() => {
                getRandomImage();
                handleClick();
              }}
            >
              <motion.div
                animate={{ rotate: rotation }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <FiRefreshCcw className="cursor-pointer" />
              </motion.div>
            </button>
          </div>
          <img
            className="rounded w-60 h-60 object-cover shadow-xl"
            src={image?.url}
          />
        </div>
      )}
    </div>
  );
};

export default RandomCat;
