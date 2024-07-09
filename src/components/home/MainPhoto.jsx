import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MainPhotoBlock = styled.div`
position: relative;
  .top {
    margin-bottom: 200px;
    position: relative;
    .text1 {
      position: absolute;
      top: 100px;
      left: 100px;
      color: #fff;
      h1 {
        text-align: left;
      }
    }
    .text2 {
      position: absolute;
      top: 70%;
      right: 100px;
      color: #fff;
      h1 {
        text-align: left;
      }
      p {
        text-align: left;
        font-weight: bold;
        padding-bottom: 5px;
      }
    }
  }
  h1 {text-align: center;}
  .slide {
    position: relative;
    height: 40vw;
    width: 100%;
    background-position: center;
    background-size: cover;
    &.slide1 {background-image: url('./assets/image/business-img-1.jpg');}
    &.slide2 {background-image: url('./assets/image/business-img-2.jpg');}
    &.slide3 {background-image: url('./assets/image/business-img-3.jpg');}
    &.slide4 {background-image: url('./assets/image/business-img-4.jpg');}
    .text {
      position: absolute;
      bottom: 15%;
      left: 5%;
      color: #fff;
      h1 {
        text-align: left;
        font-size: 44px;
      }
    }
  }
  .slick-dots {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    li {
      display: inline-block;
      margin: 0 10px;
      button {
        width: 20px;
        height: 20px;
        background: rgb(241, 216, 220);
        border-radius: 50%;
        text-indent: -9999px;
        overflow: hidden;
      }
      &.slick-active {
        button {
        background: pink;
        }
      }
    }
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px; 
    color: pink;
    &.slick-prev {left: -50px; z-index:3}
    &.slick-next {right: -50px}
  }
`

const MainPhoto = () => {

  

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  };
  const option = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }
  return (
    <MainPhotoBlock>
      <div className="top">
        <img src="./assets/image/future-img-6.jpg" alt="" />
        <div className='text1'>
            <h1>
              지속가능한 미래를 위해 환경, 사회, 지배구조 등<br />
              오늘 한화가 할 수 있는 일들을 고민하고 실천합니다.
            </h1>
        </div>
        <div className="text2">
          <h1>더 나은 내일을 위해 미래를 연결합니다.</h1><br />
          <p>우리 사회와 지구가 앞으로도 지속가능한 발전을 이어갈 수 있도록</p>
          <p>오늘 할 수 있는 일들을 끊임없이 고민하고 실천합니다.</p>
          <p>한화는 오늘 우리의 선택과 행동이 내일의 모습을 만들어 간다고 믿습니다.</p>
        </div>
      </div>
      <h1>한화는 우리의 기술, 제품, 서비스를 통해<br />
        개인과 사회의 풍요로운 삶의 기반을 마련합니다.</h1>
      <Slider {...option} className='row'>
        <div className="slide slide1">
          <div className='text'>
            <p>우주항공 · 오션 · 방산</p><br />
            <h1>해저에서 우주로</h1><br />
            <p>인류의 미래를 향한 담대한 도전으로 모두가 꿈꾸던 우주 시대를 앞당깁니다.</p>
          </div>
        </div>
        <div className="slide slide2">
        <div className='text'>
            <p>에너지 ∙ 소재</p><br />
            <h1>지구를 위한 에너지로</h1><br />
            <p>인류의 내일을 위한 에너지 솔루션으로 지속가능한 에너지 전환을 이끌어갑니다.</p>
          </div>
        </div>
        <div className="slide slide3">
        <div className='text'>
            <p>금융</p><br />
            <h1>믿음직한 파트너로</h1><br />
            <p>시대를 이끄는 디지털 혁신으로 금융의 미래를 새롭게 정의합니다.</p>
          </div>
        </div>
        <div className="slide slide4">
        <div className='text'>
            <p>유통 ∙ 서비스</p><br />
            <h1>차별화된 서비스로</h1><br />
            <p>새로운 경험과 가치를 제공하는 라이프스타일 플랫폼 기업으로 도약합니다.</p>
          </div>
        </div>
      </Slider>
    </MainPhotoBlock>
  );
};

export default MainPhoto;