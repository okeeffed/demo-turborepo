import prompts from "prompts";

import { opts } from "../../utils/opts";

function helloWorld() {
  const world = (opts.w ?? opts.world) as string;
  console.log(`Hello, ${world}!`);
}

async function showMeaning() {
  let meaning = (opts.m ?? opts.meaning) as string;

  if (!meaning) {
    const res = await prompts({
      type: "text",
      name: "meaning",
      message: "What is the meaning of life?",
    });

    meaning = res.meaning as string;
  }

  console.log("The meaning of life is:", meaning);
}

export const runImpl = async (): Promise<void> => {
  helloWorld();
  await showMeaning();
};
