import React from 'react';
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
									<input type='text' name='name' textarea='' />
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
									<textarea name='message'></textarea>
								</label>
							</p>
							<p>
								<button className='button' type='submit'>
									Submit
								</button>
							</p>
						</form>
					</div>

					<div className='my-info'>
						<a>Laurel, Maryland</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
