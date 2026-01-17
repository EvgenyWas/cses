import sys


def solve(s1: str, s2: str) -> int:
    m, n = len(s1) + 1, len(s2) + 1
    matrix = [[0 for _ in range(m)] for _ in range(n)]
    for i in range(m):
        matrix[0][i] = i
    for i in range(n):
        matrix[i][0] = i

    for i in range(1, m):
        for j in range(1, n):
            price = 0 if s1[i - 1] == s2[j - 1] else 1
            matrix[j][i] = min(
                matrix[j - 1][i] + 1, matrix[j][i - 1] + 1, matrix[j - 1][i - 1] + price
            )

    return matrix[n - 1][m - 1]


if __name__ == "__main__":
    data = sys.stdin.read().splitlines()
    s1 = data[0].rstrip("\n")
    s2 = data[1].rstrip("\n")
    sys.stdout.write(str(solve(s1, s2)))
