import * as PIXI from 'pixi.js'

export default class Sketch {
	constructor(options) {
		
	 
 
		
		this.width = window.innerWidth
		this.height = window.innerHeight
		
		this.app = new PIXI.Application({
			backgroundColor: 0x000000,
			resolution: 1,
			resizeTo: window
		})

		document.body.appendChild(this.app.view)

		this.app.view.style.width = this.width + 'px'
		this.app.view.style.height = this.height + 'px'

		this.container = new PIXI.Container()
		
		this.app.stage.addChild(this.container)
 	 
		this.add()
		this.resize()
		this.setupResize()
		this.render()


	}
	add() {
		this.block = new PIXI.Sprite(PIXI.Texture.WHITE)
		this.block.tint = 0xff000
		this.block.scale.set(this.width/ 200, this.height/200)
 
		this.container.addChild(this.block)
 
	}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width =window.innerWidth
		this.height = window.innerWidth
		this.app.view.style.width = this.width + 'px'
		this.app.view.style.height = this.height + 'px'
	}

	render() {
		this.app.ticker.add(delta => {

		})
	}
 
}
new Sketch({
	dom: document.getElementById('container')
})
 