// addTilt.ts - small util
export function addTilt(card: HTMLElement) {
  const rect = () => card.getBoundingClientRect();
  const onMove = (e: PointerEvent) => {
    const r = rect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = py * 6; // tilt X
    const ry = px * -8; // tilt Y
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
  };
  const onLeave = () => { card.style.transform = 'none'; };
  card.addEventListener('pointermove', onMove);
  card.addEventListener('pointerleave', onLeave);
  return () => {
    card.removeEventListener('pointermove', onMove);
    card.removeEventListener('pointerleave', onLeave);
  };
}
