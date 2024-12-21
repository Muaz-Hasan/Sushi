// components/ScrollingImages.jsx
import Image from "next/image";
import styles from "./ScrollingImages.module.css";

const ScrollingImages = () => {
  const row1Images = Array.from({ length: 6 }, (_, i) => `/template.jpeg`);
  const row2Images = Array.from({ length: 6 }, (_, i) => `/template.jpeg`);
  const row3Images = Array.from({ length: 6 }, (_, i) => `/template.jpeg`);
  // const row1Images = Array.from(
  //   { length: 6 },
  //   (_, i) => `/images/row1-img${i + 1}.jpg`
  // );
  // const row2Images = Array.from(
  //   { length: 6 },
  //   (_, i) => `/images/row2-img${i + 1}.jpg`
  // );
  // const row3Images = Array.from(
  //   { length: 6 },
  //   (_, i) => `/images/row3-img${i + 1}.jpg`
  // );

  return (
    <div className="h-screen flex flex-col justify-center items-center pointer-events-none">
      <div className={styles.wrapper}>
        {row1Images.map((src, index) => (
          <div
            key={index}
            className={`${styles.itemLeft} ${styles[`item${index + 1}`]}`}
          >
            <Image
              src={src}
              width={500}
              height={500}
              alt={`Row 1 Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className={styles.wrapper}>
        {row2Images.map((src, index) => (
          <div
            key={index}
            className={`${styles.itemRight} ${styles[`item${index + 1}`]}`}
          >
            <Image
              src={src}
              width={500}
              height={500}
              alt={`Row 2 Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className={styles.wrapper}>
        {row3Images.map((src, index) => (
          <div
            key={index}
            className={`${styles.itemLeft} ${styles[`item${index + 1}`]}`}
          >
            <Image
              src={src}
              width={500}
              height={500}
              alt={`Row 3 Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;
