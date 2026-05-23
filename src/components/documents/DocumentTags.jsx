const DocumentTags = ({
  tags = [],
}) => {

  return (
    <div className="flex flex-wrap gap-2">

      {tags.map((tag, index) => (

        <div
          key={index}
          className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
        >

          {tag}

        </div>

      ))}

    </div>
  );
};

export default DocumentTags;