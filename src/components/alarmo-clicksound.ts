export class ClickSound {
  private soundUrl?: string;
  // Hold references until playback ends: a bare Audio with nothing pointing at
  // it can be garbage collected mid-play, which silences the click.
  private playing: HTMLAudioElement[] = [];

  constructor(soundUrl?: string) {
    if (!soundUrl) return;
    this.soundUrl = soundUrl;
    // Warm the HTTP cache so the first press is not delayed by the fetch.
    new Audio(soundUrl).preload = 'auto';
  }

  async play() {
    if (!this.soundUrl) return;

    // ponytail: a fresh element per press, so rapid presses overlap instead of
    // restarting one shared element. Released again on 'ended'.
    const sound = new Audio(this.soundUrl);
    this.playing.push(sound);
    const release = () => {
      this.playing = this.playing.filter(e => e !== sound);
    };
    sound.addEventListener('ended', release, { once: true });

    try {
      await sound.play();
    } catch (error) {
      release();
      // Never let a failed blip (e.g. autoplay blocked) break the button it is attached to.
      console.error('Error playing click sound:', error);
    }
  }
}
