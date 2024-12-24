import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const generatePoints = (numberOfPoints: number) => {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < numberOfPoints; i++) {
    const lastIndex = points.length - 1;
    const lastPoint =
      lastIndex >= 0 ? points[lastIndex] : new THREE.Vector3(0, 0, 0);

    // Bounding next point so that they generally trend positive and upwards
    const dx = Math.random() * 10 - 5;
    const dy = Math.random() * 10 - 5;
    const dz = Math.random() * 10 - 5;
    const x = Math.floor(Math.min(lastPoint.x + dx, 100));
    const y = Math.floor(Math.min(lastPoint.y + dy, 100));
    const z = Math.floor(Math.min(lastPoint.z + dz, 100));

    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
};

function Rotate() {
  const mount = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (mount.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      camera.position.z = 50;

      const renderer = new THREE.WebGLRenderer({
        canvas: mount.current,
      });
      renderer.setSize(window.innerWidth / 2 - 24, window.innerHeight);

      const material = new THREE.LineBasicMaterial({ color: 0x00 });
      const curve = new THREE.CatmullRomCurve3(generatePoints(100));
      curve.tension = 0.5;
      curve.closed = false;

      const splinePoints = curve.getPoints(1000);

      const geometry = new THREE.BufferGeometry().setFromPoints(splinePoints);

      const line = new THREE.Line(geometry, material);

      scene.add(line);

      renderer.setClearColor(0xffffff, 1);

      // Camera movement variables
      const radius = 50;
      let theta = 0;

      // Initial camera position based on spherical coordinates
      camera.position.x = radius * Math.cos(theta);
      camera.position.z = radius * Math.sin(theta);
      camera.position.y = 0;

      function animate() {
        requestAnimationFrame(animate);

        theta += 0.01;

        camera.position.x = radius * Math.cos(theta);
        camera.position.z = radius * Math.sin(theta);

        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }

      animate();
    }
  }, []);

  return <canvas className='h-full w-full' ref={mount}></canvas>;
}

export default Rotate;
