# CSES problem set solutions

This repository contains my solutions to the [CSES Problem Set](https://cses.fi/problemset/), which I’m working through as practice while reading [_Guide to Competitive Programming_](https://a.co/d/becTpe3) by Antti Laaksonen.

## Structure

- Each problem has its own file, and all solutions are organized into folders by problem set topics.
- A base template `_template.js` is included, which handles reading from `stdin` and is suitable for direct submission to CSES.

## Goals

- Practice problem-solving and algorithmic thinking.
- Improve speed and accuracy in competitive programming.
- Apply techniques from the book to real problems.

## Running automatically with [VS Code tasks](https://code.visualstudio.com/docs/debugtest/tasks)

Run any CSES solution interactively with multi-line input and automatic reruns for testing.

1. Make the loop script executable:

```bash
chmod +x .vscode/scripts/loop.sh
```

2. Run the VS Code task `Run CSES solution`, pick the folder (topic), and enter the script name (without `*.js` extension).

3. Type your input (multi-line supported), then press Ctrl+D to run the script.

4. After execution, press Enter to rerun or Ctrl+C to quit.
