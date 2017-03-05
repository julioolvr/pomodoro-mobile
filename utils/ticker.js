export default class {
  constructor(onSecond = () => {}) {
    this.startedAt = Date.now();
    this.lastSecond = 0;

    this.interval = setInterval(() => {
      const second = Math.round((Date.now() - this.startedAt) / 1000);

      if (second > this.lastSecond) {
        this.lastSecond = second;
        onSecond(second);
      }
    }, 50);
  }

  cancel() {
    clearInterval(this.interval);
  }
}
