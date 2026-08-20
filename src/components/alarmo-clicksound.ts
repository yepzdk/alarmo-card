export class ClickSound {
  private audio?: HTMLAudioElement;

  constructor(soundUrl?: string) {
    if (!soundUrl) return;
    // Preloaded template: the file is fetched once, so the first press is not silent.
    this.audio = new Audio(soundUrl);
    this.audio.preload = 'auto';
  }

  async play() {
    if (!this.audio) return;

    // ponytail: play a clone so rapid presses overlap instead of cutting each other off.
    // Clones are collected once they finish; no pool needed.
    const sound = this.audio.cloneNode() as HTMLAudioElement;
    try {
      await sound.play();
    } catch (error) {
      // Never let a failed blip (e.g. autoplay blocked) break the button it is attached to.
      console.error('Error playing click sound:', error);
    }
  }
}
