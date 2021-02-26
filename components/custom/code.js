import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Code = ({ block }) => {

    return (

        <SyntaxHighlighter language={block.language} wrapLines={true}
            style={vs}>
            {block.content}
        </SyntaxHighlighter>

    );
};

export default Code;
