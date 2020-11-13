import home1 from '../img/home1.png';
import {
	StyledAbout,
	StyledDescription,
	StyledHide,
	StyledImage,
} from '../styles';

const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<div className='title'>
					<StyledHide>
						<h2>We work to make</h2>
					</StyledHide>
					<StyledHide>
						<h2>
							your <span>dreams</span>
						</h2>
					</StyledHide>
					<StyledHide>
						<h2>come ture.</h2>
					</StyledHide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</p>
				<button>Contact Us</button>
			</StyledDescription>
			<StyledImage>
				<img src={home1} alt='guy with a camera' />
			</StyledImage>
		</StyledAbout>
	);
};

export default AboutSection;
