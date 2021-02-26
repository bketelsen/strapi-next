const BlockQuote = ({ block }) => {

    return (
        <div key={block.id}>
            <figure>
                <blockquote>
                    <p>{block.content}</p>
                </blockquote>
                {block.author && <figcaption>{block.author}</figcaption>}
            </figure>
        </div>
    );
};

export default BlockQuote;
