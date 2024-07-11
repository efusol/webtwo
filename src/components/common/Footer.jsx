import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBlock = styled.div`
background: #fff;
padding-top: 50px;
border-top: 1px solid #e2e2e2;
@media screen and (max-width: 1024px){
		border-top: 0px solid #e2e2e2;
		}
	.footer {
		.depth1 {
		
		@media screen and (max-width: 1024px){
			display:none;
		}
			padding: 0 45px 50px 45px;
			border-bottom: 1px solid #e2e2e2;
			.big {
				display: flex;
				.list {
					padding-right: 90px;
					li {
						padding-bottom: 15px;
						a:hover {
							border-bottom: 1px solid #000;
						}
						}
					}
				}
				.mt {
					padding-bottom: 30px;
					a:hover {color: rgba(0, 0, 0, 0.5)};
				}
			}
		}

		.depth2 {
			@media screen and (max-width: 1024px){
				border-top: 1px solid #e2e2e2;
			}
			@media screen and (max-width: 767px){
				font-size: 9px;
			}
			ul {
			display: flex;
			border-bottom: 1px solid #e2e2e2;
			:nth-child(1) {
				a {
					font-weight: 400;
					color: #000;
				}
			}
			li {
				padding: 15px 0 15px 45px;
				a {
					color: #666666;
					font-weight: 300;
					cursor: pointer;
					&:hover {
						color: rgba(0, 0, 0, 0.5);
					}
				}				
			}
			}
		}
	}
		.depth3{
			display: none;
			margin:20px 45px;
			@media screen and (max-width: 1024px){
				display: block;
			}
				
		}
`

const Footer = () => {
	return (
		<FooterBlock>
			<div className='footer'>
				<div className="depth1">
					<ul className='big'>
						<li className='list'>
							<h4 className='mt'><Link>그룹소개</Link></h4>
							<ul>
								<li><Link>기업소개</Link></li>
								<li><Link>인사말</Link></li>
								<li><Link>연혁</Link></li>
								<li><Link>브랜드 스토리</Link></li>
							</ul>
						</li>
						<li className='list'>
							<h4 className='mt'><Link>사업분야</Link></h4>
							<ul>
								<li><Link>그룹사 현황</Link></li>
								<li><Link>우주항공∙오션∙방산</Link></li>
								<li><Link>에너지∙소재</Link></li>
								<li><Link>금융</Link></li>
								<li><Link>유통∙서비스</Link></li>
							</ul>
						</li>
						<li className='list'>
							<h4 className='mt'><Link>뉴스룸</Link></h4>
							<ul>
								<li><Link>뉴스룸 메인</Link></li>
								<li><Link>미디어센터</Link></li>
								<li><Link>한화저널</Link></li>
							</ul>
						</li>
						<li className='list'>
							<h4 className='mt'><Link>지속가능경영</Link></h4>
							<ul>
								<li><Link>Overview</Link></li>
								<li><Link>Environment</Link></li>
								<li><Link>Social</Link></li>
								<li><Link>Goveranace</Link></li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="depth2">
					<ul>
						<li><a>개인정보처리방침</a></li>
						<li><a>사이트맵</a></li>
						<li><a>찾아오시는 길</a></li>
						<li><a>문의하기</a></li>
						<li><a>공지사항</a></li>
					</ul>
				</div>
				<div className="depth3">
				<svg width="132" height="37" viewBox="0 0 132 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_32_746)">
<path d="M14.6363 18.9537C14.1226 14.2735 19.0182 10.5141 25.5752 10.5713C32.1322 10.6221 37.8648 14.4577 38.3784 19.1315C38.8921 23.8181 33.9965 27.5648 27.4395 27.514C20.8825 27.4695 15.1499 23.6339 14.6363 18.9537ZM39.6023 20.4079C39.0126 14.6037 32.4112 9.84735 24.8649 9.78385C17.3123 9.72034 11.6812 14.3751 12.2709 20.1793C12.8607 25.9835 19.4621 30.7399 27.0083 30.8034C34.5546 30.8606 40.1984 26.2121 39.6023 20.4079Z" fill="#FBB584"/>
<path d="M28.2059 30.9185C24.4898 34.8113 18.5226 35.1351 14.8763 31.6425C11.2363 28.1498 11.2934 22.1678 15.0158 18.2814C18.7318 14.395 24.7054 14.0711 28.3391 17.5574C31.979 21.0501 31.9219 27.0321 28.1995 30.9185M14.426 18.1544C10.1075 22.6758 10.0378 29.6294 14.2675 33.6873C18.4972 37.7451 25.4347 37.3705 29.7532 32.849C34.078 28.3276 34.1478 21.374 29.9117 17.3161C25.682 13.2583 18.7445 13.6329 14.4197 18.1544" fill="#F89B6C"/>
<path d="M14.8313 3.59185C22.5614 0.689746 30.2092 3.6236 31.9087 10.1454C33.6082 16.6672 28.7189 24.313 20.9888 27.2087C13.2586 30.1108 5.61089 27.177 3.9114 20.6552C2.20557 14.1397 7.10112 6.50029 14.8313 3.59185ZM7.65282 6.08752C-0.36904 12.4506 -2.41097 21.6649 3.08702 26.6689C8.59135 31.6793 19.5493 30.5807 27.5775 24.2177C35.5993 17.861 37.6413 8.6467 32.1369 3.6363C26.6326 -1.36776 15.6683 -0.269153 7.65282 6.08752Z" fill="#F37321"/>
<path d="M58.0679 11.2892V25.6854H55.8168V18.0904H47.2939V25.6854H45.0427V11.2892H47.2939V16.1218H55.8168V11.2892H58.0679Z" fill="black"/>
<path d="M63.4722 25.6852C62.4195 25.6852 61.5888 25.3931 60.9737 24.8025C60.3459 24.2119 60.0352 23.4562 60.0352 22.5291V21.7607C60.0352 20.8209 60.3459 20.0588 60.9737 19.4682C61.5888 18.865 62.4195 18.5665 63.4722 18.5665H69.3443V18.5093C69.3443 17.3536 68.7102 16.7821 67.4482 16.7821H60.9166V14.8643H67.4102C68.7609 14.8643 69.7946 15.2072 70.5048 15.8994C71.2277 16.5661 71.5955 17.5314 71.5955 18.7951V22.6117C71.5955 23.5896 71.2658 24.358 70.5999 24.9232C69.9975 25.4375 69.1541 25.6916 68.0634 25.6916H63.4659L63.4722 25.6852ZM67.5814 20.4779H64.0176C62.8634 20.4779 62.2927 20.9669 62.2927 21.9449V22.3005C62.2927 23.2657 62.8698 23.7484 64.0176 23.7484H67.5814C68.7546 23.7484 69.3443 23.2657 69.3443 22.3005V21.9449C69.3443 20.9669 68.7546 20.4779 67.5814 20.4779Z" fill="black"/>
<path d="M78.1889 14.8584H80.4021C81.8035 14.8584 82.9069 15.2648 83.7059 16.0777C84.5049 16.8905 84.9045 18.0272 84.9045 19.4814V25.6857H82.6533V19.5957C82.6533 18.694 82.4757 18.0336 82.1269 17.6208C81.6894 17.081 81.0552 16.8143 80.2308 16.8143H78.3158C77.5167 16.8143 76.8889 17.081 76.4387 17.6208C76.1153 18.0336 75.9504 18.694 75.9504 19.5957V25.6857H73.6992V19.4814C73.6992 18.0272 74.0987 16.8969 74.8977 16.0777C75.6968 15.2648 76.7938 14.8584 78.1826 14.8584H78.1889Z" fill="black"/>
<path d="M95.292 24.2375C94.493 25.2027 93.4974 25.6853 92.3052 25.6853H90.9164C89.6672 25.6853 88.6716 25.2916 87.9296 24.5042C87.2257 23.7675 86.877 22.7197 86.877 21.3671V14.8644H89.1091V21.3862C89.1091 22.1736 89.2803 22.7515 89.6164 23.1135C90.0033 23.5262 90.5106 23.7358 91.1384 23.7358H92.1149C92.7554 23.7358 93.2691 23.5262 93.6559 23.1135C94.0047 22.7515 94.1822 22.1736 94.1822 21.3862V14.8644H96.3954V21.3862C96.3954 22.1736 96.5666 22.7515 96.9027 23.1135C97.2895 23.5262 97.7968 23.7358 98.4246 23.7358H99.4012C100.042 23.7358 100.555 23.5262 100.942 23.1135C101.291 22.7515 101.468 22.1736 101.468 21.3862V14.8644H103.701V21.3671C103.701 22.7197 103.339 23.7675 102.61 24.5042C101.868 25.2916 100.872 25.6853 99.6041 25.6853H98.2344C97.0676 25.6853 96.091 25.2027 95.2856 24.2375H95.292Z" fill="black"/>
<path d="M110.308 16.8139C109.509 16.8139 108.881 17.0806 108.431 17.6204C108.107 18.0331 107.943 18.6936 107.943 19.5953V25.6853H105.691V11.251H107.943V15.5184C108.596 15.0802 109.338 14.858 110.175 14.858H112.388C113.789 14.858 114.893 15.2644 115.692 16.0772C116.491 16.8901 116.89 18.0268 116.89 19.481V25.6853H114.639V19.5953C114.639 18.6936 114.462 18.0331 114.113 17.6204C113.675 17.0806 113.041 16.8139 112.217 16.8139H110.302H110.308Z" fill="black"/>
<path d="M122.185 25.6852C121.132 25.6852 120.302 25.3931 119.687 24.8025C119.059 24.2119 118.748 23.4562 118.748 22.5291V21.7607C118.748 20.8209 119.059 20.0588 119.687 19.4682C120.302 18.865 121.132 18.5665 122.185 18.5665H128.057V18.5093C128.057 17.3536 127.423 16.7821 126.161 16.7821H119.63V14.8643H126.123C127.474 14.8643 128.507 15.2072 129.218 15.8994C129.941 16.5661 130.308 17.5314 130.308 18.7951V22.6117C130.308 23.5896 129.979 24.358 129.313 24.9232C128.71 25.4375 127.867 25.6916 126.776 25.6916H122.179L122.185 25.6852ZM126.294 20.4779H122.73C121.576 20.4779 121.006 20.9669 121.006 21.9449V22.3005C121.006 23.2657 121.583 23.7484 122.73 23.7484H126.294C127.467 23.7484 128.057 23.2657 128.057 22.3005V21.9449C128.057 20.9669 127.467 20.4779 126.294 20.4779Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_32_746">
<rect width="131.4" height="36" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
				</div>
			</div>
		</FooterBlock>
	);
};

export default Footer;
