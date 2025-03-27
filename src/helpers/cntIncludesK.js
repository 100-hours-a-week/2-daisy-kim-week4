export default function changeCnt(cnt) {
  if (cnt > 100000) {
    return '100k';
  } else if (cnt > 10000) {
    return '10k';
  } else if (cnt > 1000) {
    return '1k';
  }
  return cnt;
}
