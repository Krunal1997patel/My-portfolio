import React from 'react';
import GithubLogo from '../images/github-brands.svg';
import EmailLogo from '../images/envelope-regular.svg';
import ResumeLogo from '../images/file-regular.svg';
import LocationLogo from '../images/map-marker-alt-solid.svg';
import LinkedinLogo from '../images/linkedin-in-brands.svg';
import '../styling/contact.scss';

const Contact = (props) => {
	return (
		<div id='Contact' className='contact-backgroung'>
			<div className='contact-center'>
				<h2>Contact</h2>
				<hr />
				<div className='contact-input-info'>
					<div className='form-input'>
						<form name='contact' method='POST' data-netlify='true'>
							<p>
								<label>
									Full Name
									<br />
									<input type='text' name='name' className='name' />
								</label>
							</p>
							<p>
								<label>
									Email
									<br />
									<input type='email' name='email' />
								</label>
							</p>

							<p>
								<label>
									Message
									<br />
									<textarea
										// rows='4'
										// cols='30'
										className='text-area'
										name='message'
									></textarea>
								</label>
							</p>
							<p>
								<button className='button' type='submit'>
									Submit
								</button>
							</p>
						</form>
					</div>

					<div className='vl'></div>

					<div className='my-info'>
						<a className='hide'>
							<img src={LocationLogo} alt='location-img' />
							Laurel, Maryland
						</a>
						<a href='https://github.com/Krunal1997patel' target='blank'>
							<img src={GithubLogo} alt='github-img' />
							<span>GitHub</span>
						</a>
						<a href='https://www.linkedin.com/in/pkrunal616/' target='blank'>
							<img src={LinkedinLogo} alt='linkedin-img' />
							<span>linkedin</span>
						</a>
						<a
							href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pkrunal616@gmail.com'
							target='blank'
						>
							<img src={EmailLogo} alt='email-img' />
							<span>Email</span>
						</a>
						<a
							href='https://docs.google.com/document/d/19GHQKMO2MZADJMic1nucwd0NH4qPUXjVan7jX0MSM7o/edit'
							target='blank'
						>
							<img src={ResumeLogo} alt='resume-img' />
							<span>Resume</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
