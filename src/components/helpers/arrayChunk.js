export const arrayChunk = ((arr, chunkSize) => {
  let chunk = [];
  for (let i = 0,len = arr.length; i < len; i += chunkSize)
    chunk.push(arr.slice(i, i + chunkSize));
  return chunk;
});