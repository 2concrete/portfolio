"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
      setLoadingImage(false);
    };

    getImage();
  }, [refresh, apiKey, apiUrl]);

  if (imageUrl) {
    return (
      <div>
        {imageUrl && (
          <>
            <div className="relative">
              <Image
                loading="eager"
                src={imageUrl}
                alt="Image of cat"
                onLoad={() => setImageLoaded(true)}
                width={300}
                height={300}
                preload={true}
                style={{
                  width: 250,
                  height: 250,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
              {loadingImage && (
                <AiOutlineLoading3Quarters
                  className={`${loadingImage && "animate-spin"} absolute bottom-2 left-2`}
                />
              )}
              <AnimatePresence>
                {imageLoaded && (
                  <motion.button
                    key="refresh-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ opacity: 0.7 }}
                    className="cursor-pointer flex items-center gap-2 absolute right-0"
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
