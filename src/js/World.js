import * as THREE from 'three';
import { Mesh } from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import * as dat from 'dat.gui';

class World {

	constructor() {
		this.canvas = document.querySelector('canvas.background');
		this.scene = new THREE.Scene();	
		this.clock = new THREE.Clock();
		this.camera = null;
		this.raycaster = null;
		this.controls = null;
		this.debugger = null;
		this.gui = null;
		this.light = null;
		this.loaders = {
			draco: null,
			gltf: null,
			mixer: null
		}
		this.meshes = {
			cube: {
				material: null,
				geomerty: null,
				mesh: null
			}
		};
		this.configs = {
			width: this.canvas.clientWidth,
			height: this.canvas.clientWidth
		};
	}

	init = () => {
		this.initCamera();
		this.initLoaders();
		this.initControls();
		// this.createCube();
		this.initGUI();
		this.resizer();
		this.initLight();
		this.initModel();
		this.render();
		this.animate();
	};

	initGUI = () => {
		this.gui = new dat.GUI();
		const camera = this.gui.addFolder('Camera');
		const position = camera.addFolder('Position');
		const rotation = camera.addFolder('Rotation');
		position.add(this.camera.position, 'x').min(-100).max(100);
		position.add(this.camera.position, 'y').min(-100).max(100);
		position.add(this.camera.position, 'z').min(-100).max(100);
		rotation.add(this.camera.rotation, 'x').min(-10).max(10).step(0.1);
		rotation.add(this.camera.rotation, 'y').min(-100).max(100);
		rotation.add(this.camera.rotation, 'z').min(-100).max(100);
		console.log(this.camera)
	}

	initLight = () => {
		this.light = new THREE.AmbientLight(0xffffff, 1);
		this.light.position.x = 5;
		this.light.position.y = 5;
		this.light.position.z = 15;
		this.scene.add(this.light);
		const helper = new THREE.PointLightHelper(this.light)
		this.scene.add(helper);
	};

	initLoaders = () => {
		this.loaders.draco = new DRACOLoader();
		this.loaders.draco.setDecoderPath('three/draco/');
		this.loaders.gltf = new GLTFLoader();
		this.loaders.gltf.setDRACOLoader(this.loaders.draco);
	};

	initModel = () => {
		this.loaders.gltf.load('three/models/world/world.glb', 
			(gltf) => {
				console.log(gltf);
				this.scene.add(gltf.scene)
			}
		)
	};

	initControls = () => {
		this.controls = new TrackballControls(this.camera, this.canvas);
		this.controls.enableDamping = true;
	}


	resizer = () => {
		window.addEventListener('resize', () => {
			this.configs.widht = this.canvas.clientWidth,
			this.configs.height = this.canvas.clientWidth,	
			this.initCamera();
			this.render();
			this.initControls();
		});
	};

	initCamera = () => {
		this.camera = new THREE.PerspectiveCamera(75, this.configs.width / this.configs.height, 1, 1000);
		this.camera.position.z = 15;
		this.camera.rotateOnAxis.y  = 90 * Math.PI;
	};

	initControls = () => {
		this.controls = new TrackballControls(this.camera, this.canvas);
		this.controls.enableDamping = true;
	};


	render = () => {
		this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
		this.renderer.setClearColor( 0x000000, 0 );
		this.renderer.setSize(this.configs.width, this.configs.height);
		this.renderer.render(this.scene, this.camera);
	};

	animate = () => {
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
		window.requestAnimationFrame(this.animate);
	};

}

export default World;
