import { getStrapiMedia } from "../lib/media";
import Image, { Types } from "react-strapi-img";



const ImageWrapper = ({ imageFromStrapi }) => {

  return (
    <Image
    {...imageFromStrapi}
    prefix="https://content.brian.dev"
    />
  );
};

export default ImageWrapper;
