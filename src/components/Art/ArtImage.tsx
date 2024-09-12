interface ArtImageProps {
  image: {
    name: string;
    description: string;
  };
}

export default function ArtImage({ image }: ArtImageProps) {
  return (
    <figure className="image-container" key={image.name}>
      <img
        src={image.name}
        className="art-image"
        alt={image.description}
        title={image.description}
      />
      <figcaption>{image.description}</figcaption>
    </figure>
  );
}
