import { HomeAssistant } from 'custom-card-helpers';
import { PENDING_STATES } from '../const';

export class PendingSound {
  private audio?: HTMLAudioElement;
  private _hass?: HomeAssistant;
  private _entity?: string;
  private hasSoundUrl: boolean;

  constructor(soundUrl?: string) {
    this.hasSoundUrl = !!soundUrl;

    if (this.hasSoundUrl) {
      this.audio = new Audio(soundUrl);
      this.audio.loop = true;
      // Load up front: calling play() on an element that has not buffered yet
      // is rejected before the media becomes decodable.
      this.audio.preload = 'auto';
      this.audio.load();
    }
  }

  set hass(hass: HomeAssistant) {
    const oldHass = this._hass;
    this._hass = hass;
    this.hassChanged(oldHass);
  }

  set entity(entity: string) {
    this._entity = entity;
  }

  private hassChanged(oldHass?: HomeAssistant) {
    if (!this._hass || !this._entity) return;

    if (!oldHass || oldHass.themes !== this._hass.themes || oldHass.language !== this._hass.language) {
      this.updateAudio();
      return;
    }

    if (
      oldHass.states[this._entity].state !== this._hass.states[this._entity].state ||
      oldHass.states[this._entity].attributes.delay !== this._hass.states[this._entity].attributes.delay
    ) {
      const oldState = oldHass.states[this._entity].state;
      const newState = this._hass.states[this._entity].state;
      if (PENDING_STATES.includes(newState)) this.playSound();
      else if (PENDING_STATES.includes(oldState)) this.stopSound();
      this.updateAudio();
    }
  }

  updateAudio() {
    if (this._hass && this._entity) {
      const state = this._hass.states[this._entity].state;
      if (PENDING_STATES.includes(state)) this.playSound();
    }
  }

  async playSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    // Already sounding: do not restart, or a re-render would stutter the loop.
    if (!this.audio.paused) return;

    try {
      await this.audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  }

  pauseSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    this.audio.pause();
  }

  stopSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
