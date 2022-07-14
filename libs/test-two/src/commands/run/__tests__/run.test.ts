import { execSync } from "child_process";

test('"index run -w world -m love" outputs "Hello world!" and "The meaning of life is: love"', () => {
  const stdout = execSync(`npm start -- run -w 'world!' -m 'love'`, {
    encoding: "utf-8",
  });

  expect(/Hello, world!/gm.test(stdout)).toBeTruthy();
  expect(/The meaning of life is: love/gm.test(stdout)).toBeTruthy();
});

test('"index run --world world --meaning love" outputs "Hello world!" and "The meaning of life is: love"', () => {
  const stdout = execSync(`npm start -- run -w 'world!' -m 'love'`, {
    encoding: "utf-8",
  });

  expect(/Hello, world!/gm.test(stdout)).toBeTruthy();
  expect(/The meaning of life is: love/gm.test(stdout)).toBeTruthy();
});
