const car = {
  stop() {
    //
  },

  drive() {
    //
  },
};

function updateCarForLight(current: TrafficLight) {
  if (current.isRed()) {
    car.stop();
  } else {
    car.drive();
  }
}

interface TrafficLight {
  isRed(): boolean;
  isYellow(): boolean;
  isGreen(): boolean;
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
}

const CYCLE = [new Red(), new Green(), new Yellow()];

export {};
