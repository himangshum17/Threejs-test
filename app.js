// ThreeJS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
// Cube Geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);
// color for the cube Geometry
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const texture = new THREE.TextureLoader().load('./assets/texture/box.jpg');
// texture for the cube Geometry
const material = new THREE.MeshStandardMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 0, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

camera.position.z = 5;
controls.update();

// Animate the Scene
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  cube.rotation.z += 0.001;
  controls.enablePan = false;
  controls.update();
  renderer.render(scene, camera);
}

// Adjust on window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();
