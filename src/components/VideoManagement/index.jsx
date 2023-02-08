import {
  Container,
  Feedback,
  LikeButton,
  DisLikeButton,
  DownloadContainer,
  SharedButton,
  ClipButton,
  PlayerListSaveButton,
  MenuButton,
  OfflineButton,
} from "./styles";

const VideoManangement = () => {
  return (
    <Container>
      <Feedback>
        <LikeButton></LikeButton>
        <DisLikeButton></DisLikeButton>
      </Feedback>
      <DownloadContainer>
        <SharedButton></SharedButton>
        <OfflineButton></OfflineButton>
        <PlayerListSaveButton></PlayerListSaveButton>
        <ClipButton></ClipButton>
        <MenuButton></MenuButton>
      </DownloadContainer>
    </Container>
  );
};

export default VideoManangement;
