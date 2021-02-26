const Code = ({ block }) => {

    return (
        <div key={block.id}>
            <pre>
                <code>
                    {block.content}
                </code>
            </pre>
        </div>
    );
};

export default Code;
