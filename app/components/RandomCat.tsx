"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const RandomCat = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [imageUrl, setImageUrl] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getImage = async () => {
      setLoadingImage(true);
      const response = await fetch(`${apiUrl}?api_key=${apiKey}`);
      const data = await response.json();
      setImageUrl(data[0].url);
      setTimeout(() => {
        setLoadingImage(false);
      }, 1000);
    };

    getImage();
  }, [refresh, apiKey, apiUrl]);

  useEffect(() => {
    setImageLoaded(false);
  }, [imageUrl]);

  if (imageUrl) {
    return (
      <div>
        {imageUrl && (
          <>
            <div className="relative flex justify-center items-center border border-neutral-900 rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }} // ← Only fade in when loaded
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    loading="eager"
                    src={imageUrl}
                    alt="Image of cat"
                    onLoad={() => setImageLoaded(true)}
                    width={300}
                    height={300}
                    preload={true}
                    unoptimized
                    style={{
                      width: 250,
                      height: 250,
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {loadingImage && (
                  <motion.div
                    key="loading-spinner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex justify-center items-center"
                  >
                    <div className="rounded-full w-10 h-10 border-2 border-transparent border-t-neutral-700 border-r-neutral-700 border-b-neutral-700 animate-spin" />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {imageLoaded && (
                  <motion.button
                    key="refresh-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                    className="cursor-pointer flex items-center gap-2 absolute right-0 -bottom-6"
                    type="button"
                    onClick={() => {
                      setRefresh(!refresh);
                      setImageLoaded(false);
                    }}
                  >
                    click me
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    );
  }
};
export default RandomCat;
