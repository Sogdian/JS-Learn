import { Canvas, useFrame } from '@react-three/fiber';
//компонент от @react-three/fiber, создаёт WebGL-контекст, т.е. сам <canvas> элемент в DOM.
<Canvas>

//позиция и поле обзора камеры (field of view)
//ты задаёшь позицию камеры в 3D-пространстве с помощью массива координат:
  //5 — по X, смещение камеры вправо относительно центра сцены.
  //9 — по Y, высота камеры — камера находится выше объекта.
  //10 — по Z, отдаление камеры назад, т.е. по направлению "от зрителя к сцене".
camera={{ position: [5, 9, 10]}}

//Угол Обзора Камеры
//Это угол в вертикальной плоскости, в градусах, определяющий, сколько сцена охватывается камерой.
  // Чем больше fov, тем шире угол обзора (и тем больше "деформация" перспективы).
  // Чем меньше fov, тем уже обзор (и изображение выглядит "приближённым").
camera={{ fow: 45}}


//направленный свет (как солнце), чтобы освещать 3D-объекты
//направленный свет (directional light) в сцене, и position задаёт точку, откуда исходит свет.
  //0 по X — свет прямо по центру по горизонтали.
  //10 по Y — свет находится высоко над сценой (как солнце в зените).
  //0 по Z — свет прямо над объектом, не смещён вперёд или назад.
<directionalLight position={[0, 10, 0]} /> - не использовать

<directionalLight intensity={0.8} />

//Это заставит загрузиться свежий файл.
const { scene, animations } = useGLTF('models/man.glb?v=2');

//от React, нужен для асинхронной загрузки (например, 3D-моделей). Показывает fallback, пока модель грузится
  <Suspense fallback={null}>

//позволяет вращать камеру мышкой вокруг сцены, но отключён "панорамный" режим (перемещение камеры влево-вправо/вверх-вниз).
<OrbitControls enablePan={false} />
  //вращение вокруг себя
  <OrbitControls enablePan={false} />
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }

//создаёт ссылку на группу объектов в сцене, используется для управления или анимации.
  const group = useRef<Group>(null);

//хук из @react-three/drei, загружает 3D-модель формата .glb (GLTF).
const { scene, animations } = useGLTF('models/bb8.glb');
  //Возвращает scene (сама 3D-сцена модели)
  //Возвращает animations (если в .glb были анимации)

//useAnimations(animations, group) — обрабатывает анимации, даёт доступ к actions, чтобы их воспроизводить.
const { actions } = useAnimations(animations, group);

//useEffect — при монтировании компонента запускает первую доступную анимацию:
  // reset() — сбрасывает анимацию в начало,
  // play() — запускает её.
  useEffect(() => {
    const actionNames = Object.keys(actions || {});
    if (actionNames.length > 0) {
    const firstAction = actions?.[actionNames[0]];
    firstAction?.reset().play();
    }
  }, [actions]);

//отрисовывает scene как "сырой" объект Three.js (примитив)
    <primitive object={scene} />

//Дополнительный рассеянный свет
<ambientLight intensity={2} />
