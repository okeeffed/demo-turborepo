# CLI Template Starter

Test.

## Getting started

1. Change `nodejs-cli-template` to the name of the CLI.
2. Begin adding new commands.

## Refresher

If you need a refresher, look at `src/commands/__tests__/hello.test.ts`

## Options

In short: options are a pain when breaking up the files.

Use `yargs-parser` for managing options within a function.

More info can be found [here](https://github.com/tj/commander.js/#options).

```ts
// example option
program.option("-c, --cheese [type]", "Add cheese with optional type");

program.parse(process.argv);

const options = program.opts();
if (options.cheese === undefined) console.log("no cheese");
else if (options.cheese === true) console.log("add cheese");
else console.log(`add cheese type ${options.cheese}`);

// veradic options
program
  .option("-n, --number <numbers...>", "specify numbers")
  .option("-l, --letter [letters...]", "specify letters");

program.parse();

console.log("Options: ", program.opts());
console.log("Remaining arguments: ", program.args);

// required option
program.requiredOption("-c, --cheese <type>", "pizza must have cheese");

program.parse();
```

```s
# Option
$ pizza-options
no cheese
$ pizza-options --cheese
add cheese
$ pizza-options --cheese mozzarella
add cheese type mozzarella

# Veradic
$ collect -n 1 2 3 --letter a b c
Options:  { number: [ '1', '2', '3' ], letter: [ 'a', 'b', 'c' ] }
Remaining arguments:  []
$ collect --letter=A -n80 operand
Options:  { number: [ '80' ], letter: [ 'A' ] }
Remaining arguments:  [ 'operand' ]
$ collect --letter -n 1 -n 2 3 -- operand
Options:  { number: [ '1', '2', '3' ], letter: true }
Remaining arguments:  [ 'operand' ]

# Required
$ pizza
error: required option '-c, --cheese <type>' not specified
```

## Prompts

```ts
const response = await prompts({
  type: "text",
  name: "meaning",
  message: "What is the meaning of life?",
});
console.log("The meaning of life is:", response.meaning);
```
