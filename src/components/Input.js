import Component from '../Component.js';

export default class Input extends Component {
  setup() {
    this.$state = this.$props.$state;
  }
  template() {
    return `
    <input class="a" value=${this.$state.a} />
    <input class="b" value=${this.$state.b} />
    `;
  }

  setEvent() {
    const { setInput } = this.$props;
    this.$target.addEventListener('keyup', ({ target }) => {
      if (target.classList.contains('a')) {
        setInput({ ...this.$state, a: parseInt(target.value) });
      }
      if (target.classList.contains('b')) {
        setInput({ ...this.$state, b: parseInt(target.value) });
      }
    });
  }
}
