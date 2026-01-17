import sys


def solve(data: list[str]):
    pass


if __name__ == "__main__":
    data = sys.stdin.read().splitlines()
    sys.stdout.write(str(solve([line.strip("\n") for line in data])))
