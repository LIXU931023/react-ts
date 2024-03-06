const ctx: Worker = self as any;

ctx.onmessage = ({ data: { question } }) => {
  ctx.postMessage({
    answer: question + 42,
  });
};