import { Grid, GridRow, StyledContent, Item } from "./styles";
import TestImage from "@/images/imagess.webp";
import Channel from "@/images/channel.jpg";

const Content = () => {
  return (
    <StyledContent>
      <Grid>
        {Array.from(Array(5).keys()).map(() => (
          <GridRow>
            {Array.from(Array(5).keys()).map(() => (
              <Item>
                <img src={TestImage} alt="test" />
                <div className="detail">
                  <a href="#">
                    <img src={Channel} alt="testI" width="36px" height="36px" />
                  </a>
                  <div className="video-info">
                    <h3>
                      <a
                        href="#"
                        title="bj빵훈이 - 살기위해서(노을) 2절 레전드"
                      >
                        bj빵훈이 - 살기위해서(노을) 2절 레전드
                      </a>
                    </h3>
                    <div className="metadata">
                      <a href="#">유튜버 이름</a>
                      <div>
                        <span>조회수..회</span>
                        <span>..년전</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            ))}
          </GridRow>
        ))}
      </Grid>
    </StyledContent>
  );
};

export default Content;
