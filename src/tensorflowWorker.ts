import * as tf from "@tensorflow/tfjs";

export const runModel = async (data: number[]): Promise<number> => {
  const model = tf.sequential({
    layers: [tf.layers.dense({ inputShape: [3], units: 1 })],
  });
  model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

  const xs = tf.tensor2d([data], [1, 3]);
  const ys = tf.tensor2d([1], [1, 1]);
  await model.fit(xs, ys, { epochs: 10 });
  return model.predict(tf.tensor2d([data], [1, 3])).dataSync();
};
