import React from "react";
import Carousel from "react-multi-carousel";
import { Box, Typography, styled, Button, Divider } from "@mui/material";
import Countdown from "react-countdown";
import {Link} from "react-router-dom"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Wrapper = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #7f7f7f;
`;
const Image = styled("img")({
  width: "auto",
  height: '150px',
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;
const renderer = ({ hours, minutes, seconds }) => {
  return (
    <Box variant="span">
      {hours}:{minutes}:{seconds} Left
    </Box>
  );
};
const Slide = ({ data, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Wrapper>
      <Deal>
        <Typography style={{ fontSize: 22, fontWeight: 600, marginRight: 35 }}>
          {title}
        </Typography>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <Button variant="contained" style={{ marginLeft: "auto" }}>
          View All
        </Button>
      </Deal>
      <Divider />

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
      >
        {data &&
          Array.isArray(data.products) &&
          data.products.map((product, index) => (
            <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "#212121", opacity: ".6" }}>
                {product.tagline}
              </Text>
            </Box>
            </Link>
          ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slide;
