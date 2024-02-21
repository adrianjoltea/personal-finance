export function createSpace(str: string) {
  return str.replace(/(.{4})/g, "$1 ").trim();
}
