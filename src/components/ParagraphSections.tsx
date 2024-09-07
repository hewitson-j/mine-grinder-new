interface ParagraphSectionsProps {
  paragraphs: string[];
}

export default function ParagraphSections({
  paragraphs,
}: ParagraphSectionsProps) {
  return (
    <div className="paragraph-sections">
      {paragraphs.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
}
