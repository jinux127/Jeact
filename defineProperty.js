const state = {
  a: 10,
  b: 20,
};

const stateKeys = Object.keys(state);

for (const key of stateKeys) {
  let value = state[key];
  Object.defineProperty(state, key, {
    get() {
      console.log(`state.${key}: ${value}`);
      return value;
    },
    set(value) {
      this.value = value;
      console.log(`변경된 state.${key}의 값은 ${this.value}`);
    },
  });
}

console.log(`a+b = ${state.a + state.b}`);

state.a = 100;
state.b = 200;
