import Component from './Component.js';
import Input from './components/Input.js';

export default class App extends Component {
  setup() {
    this.$state = {
      a: 0,
      b: 2,
    };
  }
  template() {
    return `
      <main data-component="input1"></main> 
      <div data-component="button"></div> 
    `;
  }

  mounted() {
    const { setInput, sub } = this;
    const $input = this.$target.querySelector('[data-component="input1"]');
    const $button = this.$target.querySelector('[data-component="button"]');
    new Input($input, { $state: this.$state, setInput: setInput.bind(this) });
  }

  setInput(newState) {
    this.setState({ ...this.$state, ...newState });
  }

  sub() {
    const { a, b } = this.$state;
  }

  add() {
    const { a, b } = this.$state;
  }
}
