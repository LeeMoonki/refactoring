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

export {};
