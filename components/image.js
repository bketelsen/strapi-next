import { getStrapiMedia } from "../lib/media";
import Image from 'next/image';


const ImageWrapper = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      width={image.width}
      height={image.height}
    />
  );
};

export default ImageWrapper;
