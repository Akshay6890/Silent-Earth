import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.138.3/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const bg=document.getElementById("bg");
bg.appendChild( renderer.domElement );
           
/*const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

const light = new THREE.AmbientLight( 0xffffff ); //white light
scene.add( light );
            
camera.position.z = 200;

const controls = new OrbitControls( camera , renderer.domElement);
controls.minDistance=110;
controls.maxDistance=200;

const earthTex = new THREE.TextureLoader().load('earth-1.jpg');
const earth  = new THREE.Mesh(
    new THREE.SphereGeometry(100,32,32),
    new THREE.MeshStandardMaterial({
        map : earthTex,
    })
);
    
scene.add(earth);

function animate() {
    requestAnimationFrame( animate );
                
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.1;
    //cube.rotation.z += 10;
    //earth.rotation.y += 0.01;
    
    controls.update();
    renderer.render( scene, camera );
}

animate();
