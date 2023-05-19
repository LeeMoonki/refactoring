const car = {
  stop() {
    //
  },

  drive() {
    //
  },
};

interface TrafficLight {
  isRed(): boolean;
  isYellow(): boolean;
  isGreen(): boolean;
  updateCar(): void;
}

class Red implements TrafficLight {
  isRed() {
    return true;
  }

  isYellow() {
    return false;
  }

  isGreen() {
    return false;
  }

  updateCar() {
    car.stop();
  }
}

class Yellow implements TrafficLight {
  isRed() {
    return false;
  }

  isYellow() {
    return true;
  }

  isGreen() {
    return false;
  }

  updateCar() {
    car.drive();
  }
}

class Green implements TrafficLight {
  isRed() {
    return false;
  }

  isYellow() {
    return false;
  }

  isGreen() {
    return true;
  }

  updateCar() {
    car.drive();
  }
}

export const CYCLE = [new Red(), new Green(), new Yellow()];

export function updateCarForLight(current: TrafficLight) {
  current.updateCar();
}
