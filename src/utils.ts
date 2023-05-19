export function currentTime() {
  const d = new Date();
  return (
    "" + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
  );
}
