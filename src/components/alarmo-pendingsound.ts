import { HomeAssistant } from 'custom-card-helpers';
import { PENDING_STATES } from '../const';

export class PendingSound {
  private audio?: HTMLAudioElement;
  private audioPosition: number = 0;
  private storageKey: string;
  private isPlayingKey: string;
  private _hass?: HomeAssistant;
  private _entity?: string;
  private lastUpdateTime: number = 0;
  private hasSoundUrl: boolean;

  constructor(soundUrl?: string, storageKey: string = 'alarmoPendingAudioPosition') {
    this.hasSoundUrl = !!soundUrl;
    this.storageKey = storageKey;
    this.isPlayingKey = `${storageKey}_isPlaying`;

    if (this.hasSoundUrl) {
      this.audio = new Audio(soundUrl);
      this.audio.loop = true;
      this.loadAudioState();
      this.audio.addEventListener('timeupdate', this.throttledTimeUpdate.bind(this));
      window.addEventListener('beforeunload', this.saveAudioState.bind(this));
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

  loadAudioState() {
    if (!this.hasSoundUrl || !this.audio) return;

    const savedPosition = localStorage.getItem(this.storageKey);
    const wasPlaying = localStorage.getItem(this.isPlayingKey) === 'true';

    if (savedPosition) {
      this.audioPosition = parseFloat(savedPosition);
      this.audio.currentTime = this.audioPosition;
    }

    if (wasPlaying) {
      this.playSound();
    }
  }

  saveAudioState() {
    if (!this.hasSoundUrl || !this.audio) return;

    localStorage.setItem(this.storageKey, this.audioPosition.toString());
    localStorage.setItem(this.isPlayingKey, this.audio.paused ? 'false' : 'true');
  }

  throttledTimeUpdate() {
    if (!this.hasSoundUrl || !this.audio) return;

    const now = Date.now();
    if (now - this.lastUpdateTime > 1000) {
      // Update every second
      this.lastUpdateTime = now;
      this.audioPosition = this.audio.currentTime;
      this.saveAudioState();
    }
  }

  async playSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    this.audio.currentTime = this.audioPosition;
    try {
      await this.audio.play();
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  }

  pauseSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    this.audio.pause();
    this.saveAudioState();
  }

  stopSound() {
    if (!this.hasSoundUrl || !this.audio) return;

    this.audio.pause();
    this.audioPosition = 0;
    this.saveAudioState();
  }
}
