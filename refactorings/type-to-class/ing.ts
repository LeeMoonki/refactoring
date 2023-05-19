const car = {
  stop() {
    //
  },

  drive() {
    //
  },
};

enum TrafficLight {
  RED,
  YELLOW,
  GREEN,
}

const CYCLE = [TrafficLight.RED, TrafficLight.GREEN, TrafficLight.YELLOW];
function updateCarForLight(current: TrafficLight) {
  if (current === TrafficLight.RED) {
    car.stop();
  } else {
    car.drive();
  }
}

interface TrafficLight2 {
  isRed(): boolean;
  isYellow(): boolean;
  isGreen(): boolean;
}

class Red implements TrafficLight2 {
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

class Yellow implements TrafficLight2 {
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

class Green implements TrafficLight2 {
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

export {};
