const car = {
  stop() {
    //
  },

  drive() {
    //
  },
};

interface TrafficLight {
  updateCar(): void;
}

class Red implements TrafficLight {
  updateCar() {
    car.stop();
  }
}

class Yellow implements TrafficLight {
  updateCar() {
    car.drive();
  }
}

class Green implements TrafficLight {
  updateCar() {
    car.drive();
  }
}

export const CYCLE = [new Red(), new Green(), new Yellow()];

export function updateCarForLight(current: TrafficLight) {
  current.updateCar();
}
