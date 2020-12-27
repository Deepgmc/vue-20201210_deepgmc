export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: `
    <button
      type="button"
      @click="handleBtnClick"
    >{{counter}}</button>
  `,

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  // Компонент должен иметь модель
  data: function () {
    return {
      counter: this.count
    }
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    handleBtnClick() {
      this.$emit('increment', this.count + 1)
    }
  }
};
