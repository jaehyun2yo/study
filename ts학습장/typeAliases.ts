import { type } from "os";

type jaehyun = string;
const myName: jaehyun = "jaehyun";

type Developer = {
  name: string;
  skill: string;
};

type User<T> = {
  name: T;
};

// 타입별칭과 인터페이스의 차이

interface Dev {
  name: string;
  skill: string;
}

let jaehyu: Dev;

type DevType = {
  name: string;
  skill: string;
};

let jaehyun: DevType;
