/**
 * Botanical Greenhouse Ambience Generator using Web Audio API
 * Generates an ethereal, calming acoustic breeze and gentle harmonic glass bell
 * without external audio downloads.
 */

class BotanicalSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    const ctx = this.ctx;

    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
    this.masterGain.connect(ctx.destination);

    // 1. Soft Pink/Brown Noise Breeze (Greenhouse Wind)
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.1;
    }

    this.noiseNode = ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Resonant lowpass filter to mimic warm wind through leaves
    this.filterNode = ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(260, ctx.currentTime);
    this.filterNode.Q.setValueAtTime(1.5, ctx.currentTime);

    // Gently modulate wind frequency
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(0.2, ctx.currentTime);
    lfoGain.gain.setValueAtTime(80, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(this.filterNode.frequency);
    lfo.start();

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.masterGain);
    this.noiseNode.start();

    // 2. Periodic serene glass harmonic tones (like water droplets on glasshouse panes)
    const playChime = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const pitches = [523.25, 659.25, 783.99, 987.77, 1046.5]; // C5, E5, G5, B5, C6 Pentatonic
      const freq = pitches[Math.floor(Math.random() * pitches.length)];

      const osc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      chimeGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.025, this.ctx.currentTime + 0.08);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.5);

      osc.connect(chimeGain);
      chimeGain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 2.6);
    };

    this.intervalId = window.setInterval(playChime, 6500);
    // Play initial chime
    setTimeout(playChime, 800);
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        if (this.noiseNode) {
          try { this.noiseNode.stop(); } catch { /* ignore */ }
          this.noiseNode = null;
        }
      }, 1300);
    }
  }

  public getActive(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new BotanicalSoundscape();
