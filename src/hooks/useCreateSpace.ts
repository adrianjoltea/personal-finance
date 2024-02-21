export function createSpace(str) {
  return str.replace(/(.{4})/g, "$1 ").trim();
}
