export class ClickSound {
  private audio?: HTMLAudioElement;

  constructor(soundUrl?: string) {
    if (!soundUrl) return;
    // Keep one fully loaded element: creating a fresh Audio per press and
    // calling play() immediately fails, because the media is not decodable yet.
    this.audio = new Audio(soundUrl);
    this.audio.preload = 'auto';
    this.audio.load();
  }

  async play() {
    if (!this.audio) return;

    // ponytail: rewind and replay the one loaded element. A click is short
    // enough that restarting it on a fast double-press is not worth a pool.
    try {
      this.audio.currentTime = 0;
      await this.audio.play();
    } catch (error) {
      // Never let a failed blip (e.g. autoplay blocked) break the button it is attached to.
      console.error('Error playing click sound:', error);
    }
  }
}
