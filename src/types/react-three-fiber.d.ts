import { Object3DNode } from '@react-three/fiber';
import { Object3D } from 'three';

declare module '@react-three/fiber' {
  interface ThreeElements {
    primitive: Object3DNode<Object3D, typeof Object3D>;
  }
} 