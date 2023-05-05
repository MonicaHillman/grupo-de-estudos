import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const loaderTextura = new THREE.TextureLoader();

loader.load('public/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
    animate(gltf);

}, undefined, function (error) {
    console.error(error);
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



const bgTexture = loaderTextura.load('public/textures/wallpaper.jpg');
scene.background = bgTexture;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

function animate(gltf) {
    requestAnimationFrame(animate);
    /*
    gltf.rotation.x += 0.01;
    gltf.rotation.y += 0.01;*/

    renderer.render(scene, camera);
}
