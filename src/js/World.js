import { gsap } from "gsap";

class Background {

	constructor() {
		this.name = 'background';
		this.preview = {
			small: document.querySelectorAll('.preview__item--big .content__item'),
			big: document.querySelectorAll('.preview__item--small .content__item'),
		},
		this.images = document.querySelectorAll('.item__image');
		this.background = {
			body: document.querySelector('body'),
			triangle: document.querySelectorAll('.triangle__item'),
			squares: document.querySelectorAll('.background__square')
		}
	}

	init = () => {
		if (!document.querySelector(`.js-${this.name}`)) return false;
		this.setupSquareAnimation()
		this.setupPreviewAnimation();
		this.setupColorSwitcher();

	}

	setupColorSwitcher = () => {
		this.images.forEach((image) => {
			image.addEventListener('click', (event) => this.switchBackgroundColor(event))
		});
		this.switchBackgroundColor('purple');
	};

	setupSquareAnimation = () => {
		const timeline = gsap.timeline({ repeat: -1, yoyo: true, ease: 'linear' });
		timeline.to(this.background.squares, { y: 30, duration: 6 });
	}

	setupPreviewAnimation = () => {
		const timeline = gsap.timeline();
		timeline.to(this.preview.small, { y: -16, opacity: 1 , duration: 1, stagger: 0.1 });
		timeline.to(this.preview.big, { y: -16, opacity: 1 , duration: 1, stagger: 0.1 });
	}

	switchBackgroundColor = (event) => {
		const color = event.target ? event.target.dataset.color : 'purple';
		switch (color) {
			case 'yellow': {
				gsap.to(this.background.body, { backgroundColor: '#FAD961', duration: 0.3 });
				gsap.to(this.background.triangle, { backgroundImage: "linear-gradient(270deg, rgba(249, 82, 197, 0.75) 0%, rgba(153, 82, 255, 0.0) 80%)", duration: 0.3 })
				gsap.to(this.background.squares, { backgroundImage: "linear-gradient(135deg, rgba(249, 82, 197, 0.75) 0%, rgba(153, 82, 255, 0.0) 80%)", duration: 0.3 })
				break;
			}
			case 'cyan': {
				gsap.to(this.background.body, { backgroundColor: '#007DFA', duration: 0.3 });
				gsap.to(this.background.triangle, { backgroundImage: "linear-gradient(270deg, rgba(0, 199, 250, 0.75) 0%, rgba(0, 125, 250, 0.0) 80%)", duration: 1 })
				gsap.to(this.background.squares, { backgroundImage: "linear-gradient(135deg, rgba(0, 199, 250, 0.75) 0%, rgba(0, 125, 250, 0.0) 80%)", duration: 1 })
				break;
			}
			case 'purple': {
				gsap.to(this.background.body, { backgroundColor: '#684BB1', duration: 0.3 });
				gsap.to(this.background.triangle, { backgroundImage: "linear-gradient(270deg, rgba(249, 82, 197, 0.75) 0%, rgba(153, 82, 255, 0.0) 80%)", duration: 1 })
				gsap.to(this.background.squares, { backgroundImage: "linear-gradient(135deg, rgba(249, 82, 197, 0.75) 0%, rgba(153, 82, 255, 0.0) 80%)", duration: 1 })
				break;
			}
			default: {
				console.log('its not purple');
			}
		}
	}

}

export default Background;