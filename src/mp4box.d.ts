declare module 'mp4box' {
  export interface MP4Track {
    id: number;
    created: Date;
    modified: Date;
    volume: number;
    track_width: number;
    track_height: number;
    timescale: number;
    duration: number;
    bitrate: number;
    codec: string;
    language: string;
    nb_samples: number;
  }

  export interface MP4Info {
    duration: number;
    timescale: number;
    isFragmented: boolean;
    isProgressive: boolean;
    hasMoov: boolean;
    hasIods: boolean;
    brands: string[];
    created: Date;
    modified: Date;
    tracks: MP4Track[];
    videoTracks: MP4Track[];
    audioTracks: MP4Track[];
  }

  export interface MP4Sample {
    track_id: number;
    description: any;
    is_rap: boolean;
    is_sync: boolean;
    dts: number;
    cts: number;
    duration: number;
    timescale: number;
    size: number;
    data: ArrayBuffer;
  }

  export interface MP4File {
    onReady?: (info: MP4Info) => void;
    onError?: (e: string) => void;
    onSamples?: (id: number, user: any, samples: MP4Sample[]) => void;
    appendBuffer(data: ArrayBuffer & { fileStart?: number }): number;
    start(): void;
    stop(): void;
    flush(): void;
    setExtractionOptions(id: number, user?: any, options?: { nbSamples?: number }): void;
  }

  export class DataStream {
    static BIG_ENDIAN: boolean;
    static LITTLE_ENDIAN: boolean;
    buffer: ArrayBuffer;
    constructor(arrayBuffer?: ArrayBuffer, byteOffset?: number, endianness?: boolean);
    writeUint8(value: number): void;
    writeUint16(value: number): void;
    writeUint32(value: number): void;
    writeUint8Array(arr: Uint8Array): void;
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
  }

  export function createFile(): MP4File;
}
