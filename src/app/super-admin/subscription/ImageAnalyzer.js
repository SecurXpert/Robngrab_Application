"use client";

import React, { useRef, useState } from "react";

function toHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((v) => v.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

function getPaletteFromImage(img, maxColors = 5) {
  // draw to canvas (downscale) and count quantized colors
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const W = 200;
  const scale = Math.max(1, Math.max(img.width / W, img.height / W));
  const w = Math.max(1, Math.round(img.width / scale));
  const h = Math.max(1, Math.round(img.height / scale));
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;

  const counts = new Map();
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha < 125) continue;
    // quantize to 5 bits per channel to reduce variations
    const r = data[i] & 0b11111000;
    const g = data[i + 1] & 0b11111000;
    const b = data[i + 2] & 0b11111000;
    const key = `${r},${g},${b}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  const palette = sorted.slice(0, maxColors).map(([key]) => {
    const [r, g, b] = key.split(",").map((v) => parseInt(v, 10));
    return toHex(r, g, b);
  });
  return palette;
}

export default function ImageAnalyzer({ onApply }) {
  const [src, setSrc] = useState(null);
  const [dims, setDims] = useState(null);
  const [palette, setPalette] = useState([]);
  const imgRef = useRef(null);

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setDims({ w: img.width, h: img.height });
      const p = getPaletteFromImage(img, 6);
      setPalette(p);
      setSrc(url);
      imgRef.current = img;
    };
    img.src = url;
  };

  const applyDominant = () => {
    if (palette.length === 0) return;
    const dominant = palette[0];
    onApply && onApply(dominant);
  };

  return (
    <div className="p-4 max-w-xl">
      <label className="block text-sm font-medium mb-2">Upload image</label>
      <input type="file" accept="image/*" onChange={handleFile} />

      {src && (
        <div className="mt-4">
          <img src={src} alt="preview" className="w-full rounded shadow-sm" />
          <div className="mt-3 text-sm text-gray-600">
            Dimensions: {dims?.w} x {dims?.h} px
          </div>

          <div className="mt-3 flex gap-2 items-center">
            {palette.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <div style={{ background: c }} className="w-8 h-8 rounded" />
                <div className="text-xs text-gray-700">{c}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            <button onClick={applyDominant} className="bg-blue-600 text-white px-3 py-2 rounded">
              Apply dominant color
            </button>
            <button onClick={() => { setSrc(null); setPalette([]); setDims(null); }} className="border px-3 py-2 rounded">
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
