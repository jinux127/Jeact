let currentObserver = null;

const state = {
  a: 10,
  b: 20,
};

const stateKeys = Object.keys(state);
const observer = () => console.log(`a+b = ${state.a + state.b}`);

for (const key of stateKeys) {
  let _value = state[key];
  const observers = new Set();
  Object.defineProperty(state, key, {
    get() {
      if (currentObserver) observers.add(currentObserver);
      return _value;
    },
    set(value) {
      _value = value;
      observers.forEach((observer) => observer());
    },
  });
}

const plus_calc = () => {
  currentObserver = plus_calc;
  console.log(`a+b = ${state.a + state.b}`);
};
const minus_calc = () => {
  currentObserver = minus_calc;
  console.log(`a-b = ${state.a - state.b}`);
};

plus_calc();
minus_calc();

state.a = 100;
state.b = 200;
