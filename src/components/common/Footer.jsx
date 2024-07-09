import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterBlock = styled.div`
background: #fff;
padding-top: 50px;
border-top: 1px solid #e2e2e2;
	.footer {
		.depth1 {
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
			</div>
		</FooterBlock>
	);
};

export default Footer;