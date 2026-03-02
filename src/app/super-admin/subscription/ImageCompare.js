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

export default function ImageCompare() {
  const [srcA, setSrcA] = useState(null);
  const [srcB, setSrcB] = useState(null);
  const [metaA, setMetaA] = useState(null);
  const [metaB, setMetaB] = useState(null);
  const aRef = useRef(null);
  const bRef = useRef(null);

  const loadImage = (file, setterSrc, setterMeta, ref) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setterMeta({ w: img.width, h: img.height, palette: getPaletteFromImage(img, 6) });
      setterSrc(url);
      ref.current = img;
    };
    img.src = url;
  };

  return (
    <div className="p-4 max-w-4xl">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Image A</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => loadImage(e.target.files?.[0], setSrcA, setMetaA, aRef)}
          />
          {srcA && (
            <div className="mt-3">
              <img src={srcA} alt="A" className="w-full rounded shadow-sm" />
              <div className="mt-2 text-sm text-gray-600">{metaA?.w} x {metaA?.h}px</div>
              <div className="mt-2 flex gap-2">
                {metaA?.palette?.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div style={{ background: c }} className="w-8 h-8 rounded" />
                    <div className="text-xs text-gray-700">{c}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Image B</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => loadImage(e.target.files?.[0], setSrcB, setMetaB, bRef)}
          />
          {srcB && (
            <div className="mt-3">
              <img src={srcB} alt="B" className="w-full rounded shadow-sm" />
              <div className="mt-2 text-sm text-gray-600">{metaB?.w} x {metaB?.h}px</div>
              <div className="mt-2 flex gap-2">
                {metaB?.palette?.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div style={{ background: c }} className="w-8 h-8 rounded" />
                    <div className="text-xs text-gray-700">{c}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <p>Compare both images side-by-side. No automatic diff/highlighting is applied — this is a visual comparison with dimensions and palettes.</p>
      </div>
    </div>
  );
}
