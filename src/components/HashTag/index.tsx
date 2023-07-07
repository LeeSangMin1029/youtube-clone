import { LinkHashtag } from './styles';

type HashTagProps = {
  substring: string;
};

const HashTag = ({ substring }: HashTagProps) => {
  return (
    <LinkHashtag>
      <a href={`https://www.youtube.com/hashtag/${substring.substring(1)}`}>
        {substring}
      </a>
    </LinkHashtag>
  );
};
export default HashTag;
