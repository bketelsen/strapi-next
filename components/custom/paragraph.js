const Paragraph = ({ block }) => {

    return (
        <div key={block.id}>
            <p key={block.id}>{block.content}</p>
        </div>
    );
};

export default Paragraph;
