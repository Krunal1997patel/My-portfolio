import React from 'react';
import '../styling/dashboard.scss';
import codeimage from '../images/code-img.svg';

const Dashboard = (props) => {
	var TxtType = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtType.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 200 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};

	window.onload = function () {
		var elements = document.getElementsByClassName('typewrite');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-type');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #000}';
		document.body.appendChild(css);
	};
	return (
		<div className='dashboard-background'>
			<div className='dashboard-center'>
				<div className='dashboard-text'>
					<h3 className='text-1'>Hey, i'm</h3>
					<h2 className='text-2'>Krunal</h2>
					<h2 className='text-3'>Patel</h2>
					<h3 className='text-4'>
						I am a
						<span
							className='text-4 typewrite'
							// data-period='2000'
							data-type='[ " Full Stack Developer.", " Front End Developer.", " Back End Developer.", " Gamer." ]'
						></span>
					</h3>
				</div>
				<div className='dashboard-img'>
					<img src={codeimage} alt='codeing ' />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
