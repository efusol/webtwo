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
`

const MainPhoto = () => {
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
    </MainPhotoBlock>
  );
};

export default MainPhoto;