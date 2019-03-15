export const state = () => ({
  score: 7,
  cars: [],
  carUid : 0,
  carData: {
    1: {
      price: 3,
      value: 4,
      speed: 16
    },
    2: {
      price: 17,
      value: 20,
      speed: 7
    },
    3: {
      price: 90,
      value: 110,
      speed: 12
    },
    4: {
      price: 900,
      value: 999,
      speed: 5
    }
  },
  carSpawnPoint: {
    left: 0,
    bottom: 0
  }
});

export const mutations = {
  updateScore (state, amount) {
    state.score += amount;
  },
  setCarSpawnPoint(state, point) {
    state.carSpawnPoint.left = point.left;
    state.carSpawnPoint.bottom = point.top;
  },
  spawnCar (state, carId) {
    state.cars.push({
      id: carId,
      uid: state.carUid
    });
    state.carUid += 1;
  },
  deleteCar(state, carUid) {
    for (let i = 0; i < state.cars.length; i += 1)
    {
      if (state.cars[i].uid === carUid)
      {
        state.cars.splice(i, 1);
        break;
      }
    }
  }
};
