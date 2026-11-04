// Procedural Web Audio API sound generator for tactile micro-interactions and ambient soundscape
class SoundFXController {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientOscs: OscillatorNode[] = [];
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;

  private init() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isAmbientPlaying) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  public toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      this.stopAmbient();

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 2.5);
      masterGain.connect(this.ctx.destination);
      this.ambientGain = masterGain;

      // Deep ethereal chords (E minor 9: E, B, D, F#)
      const frequencies = [82.41, 123.47, 146.83, 185.0, 220.0];
      this.ambientOscs = frequencies.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const oscGain = this.ctx!.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

        // Low pass filter for warm analog feel
        const filter = this.ctx!.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, this.ctx!.currentTime);

        oscGain.gain.setValueAtTime(0.3 / (idx + 1), this.ctx!.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        return osc;
      });

      this.isAmbientPlaying = true;
    } catch {
      // Audio context policy
    }
  }

  public stopAmbient() {
    try {
      if (this.ambientGain && this.ctx) {
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.ambientOscs.forEach(o => {
            try { o.stop(); o.disconnect(); } catch {}
          });
          this.ambientOscs = [];
          this.ambientGain = null;
        }, 1250);
      }
    } catch {}
    this.isAmbientPlaying = false;
  }

  public playHover() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.025);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.025);
    } catch {}
  }

  public playClick() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.05);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.05);
    } catch {}
  }

  public playToggle(active: boolean) {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      const now = this.ctx.currentTime;
      const startFreq = active ? 440 : 660;
      const endFreq = active ? 880 : 330;

      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.08);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(now + 0.08);
    } catch {}
  }

  public playSuccessChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C major 7 chord
      freqs.forEach((f, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + i * 0.03);
        gain.gain.setValueAtTime(0.04, now + i * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.03 + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + i * 0.03);
        osc.stop(now + i * 0.03 + 0.5);
      });
    } catch {}
  }
}

export const soundFX = new SoundFXController();
