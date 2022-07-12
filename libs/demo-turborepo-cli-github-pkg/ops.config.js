module.exports = {
  fileLint: [
    {
      srcFolders: ["."],
      targets: [
        "README.md",
        "tsconfig.json",
        "tsconfig.build.json",
        "jest.config.js",
        ".eslintrc.json",
      ],
    },
    {
      srcFolders: [".husky"],
      targets: ["commit-msg", "pre-push"],
    },
    {
      parentFolders: ["src/commands"],
      targets: ["__tests__/{{file}}.test.ts"],
      // match all command .ts files (not including index) and ensure that they have an associated test
      test: /^((?!index).+)\.ts$/g,
    },
  ],
  mdLint: [
    {
      src: ["README.md"],
      rules: [
        {
          type: "heading",
          depth: 2,
          test: /getting started/i,
        },
      ],
    },
  ],
};
