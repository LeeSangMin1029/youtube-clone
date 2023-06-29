import { useUserContext } from '@/context/UserContext';
import { Form, CommentBox, Input, Submit } from './styles';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import CommentCancel from '@/components/CommentCancel';
import CommentSubmit, { ColorHandle } from '@/components/CommentSubmit';

type CommentFormProps = {
  isReply: boolean;
  id: string;
};

const CommentForm = ({ isReply, id }: CommentFormProps) => {
  const { user } = useUserContext();
  const btnRef = useRef<ColorHandle>(null);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const defaultSrc =
    'https://yt3.ggpht.com/a/default-user=s48-c-k-c0x00ffffff-no-rj';
  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let resource;
      let data;
      if (isReply) {
        resource = 'comments';
        data = {
          textOriginal: value,
          parentId: id,
        };
      } else {
        resource = 'commentThreads';
        data = {
          videoId: id,
          topLevelComment: {
            snippet: {
              textOriginal: value,
            },
          },
        };
      }
      const fetched = await fetch(`/api/youtube/${resource}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          googleID: user.googleID,
          data,
        }),
      });
      console.log(fetched);
      setValue('');
      setFocus(false);
    },
    [value],
  );
  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  useEffect(() => {
    if (value) {
      btnRef.current?.activate();
    } else {
      btnRef.current?.deActivate();
    }
  }, [value, focus]);

  return (
    <CommentBox>
      <img
        draggable="false"
        height="40"
        width="40"
        src={user.isLoggedIn ? user.thumbnails : defaultSrc}
      />
      <Form onSubmit={onSubmit} id="form1">
        <Input>
          <input
            id="form1"
            onChange={onChange}
            onClick={() => setFocus(true)}
            placeholder={isReply ? '답글' : '댓글' + '추가...'}
            autoComplete="off"
            value={value}
          />
          <div className="underline" />
        </Input>
        {focus && (
          <Submit draggable={false}>
            <CommentCancel
              handleUp={() => {
                setFocus(false);
                setValue('');
              }}
            />
            <CommentSubmit ref={btnRef} isReply={false} />
          </Submit>
        )}
      </Form>
    </CommentBox>
  );
};

export default CommentForm;
