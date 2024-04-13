import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>TensorFlow + Comlink</h1>
    <div class="card">
      <button id="prediction" type="button"></button>
    </div>
  </div>
`;

setupPrediction(document.querySelector<HTMLButtonElement>("#prediction")!);

function getTfWorker() {
  const tfWorker = new ComlinkWorker(
    new URL("./tensorflowWorker", import.meta.url),
    {},
  );
  return tfWorker;
}

async function predict() {
  return await getTfWorker().runModel([1, 2, 3]);
}

async function setupPrediction(element: HTMLButtonElement) {
  const setPredictor = async (prediction: number) => {
    element.innerHTML = `prediction is ${prediction}`;
  };
  element.addEventListener("click", async () => setPredictor(await predict()));
  setPredictor(await predict());
}
