import Image, { Types } from "react-strapi-img";



const DynamicImage = ({ block }) => {
  const { url, alternativeText, width, height, formats } = block.image;
  return (
    <Image
      // you could also spread all props like this: {...imageFromStrapi},
      // but for the purpose of demonstration I am adding them one by one
      style="w-full rounded-lg"
      url={url} // required
      alternativeText={alternativeText} // optional
      width={width} // optional
      height={height} // optional
      formats={formats} // optional
      prefix="https://content.brian.dev"

    />
  )
}
export default DynamicImage;