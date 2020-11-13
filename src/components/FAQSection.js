import styled from 'styled-components';
import { StyledAbout } from '../styles';

export default function Faqsection(props) {
	return (
		<StyledFAQ>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<div className='question'>
				<h4>How Do I Start?</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
						mollitia.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			<div className='question'>
				<h4>Daily Schedule</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
						mollitia.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			<div className='question'>
				<h4>Diffrent Payment Methods</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
						mollitia.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
			<div className='question'>
				<h4>What Products Do You Offer?</h4>
				<div className='answer'>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
						mollitia.
					</p>
				</div>
				<div className='faq-line'></div>
			</div>
		</StyledFAQ>
	);
}

const StyledFAQ = styled(StyledAbout)`
	display: block;
	span {
		display: block;
	}

	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}

	.faq-line {
		background: #ccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}

	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}

	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;
