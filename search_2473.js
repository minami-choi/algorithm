function solution(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const liquids = input[0]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)

  let i = 0,
    j = n - 1,
    idx1,
    idx2,
    idx3,
    diff = Infinity

  // 두쌍을 먼저 뽑아놓고,
  // 나머지 값에서 마지막 하나를 뽑는?
  while (i < j) {
    let sumOf2 = liquids[i] + liquids[j]
    // console.log("sumOf2", sumOf2, i, j)

    let sumOf3 = 0
    let m = i + 1,
      n = j - 1

    while (m <= n) {
      let mid = Math.abs(parseInt((m + n) / 2))
      sumOf3 = sumOf2 + liquids[mid]
      console.log("index sumOf3", mid, sumOf3)
      if (diff > Math.abs(sumOf3)) {
        diff = Math.abs(sumOf3)
        idx1 = i
        idx2 = j
        idx3 = mid
      }

      if (sumOf3 < 0) {
        m += 1
      } else {
        n -= 1
      }
    }
    if (sumOf3 < 0) {
      i += 1
    } else {
      j -= 1
    }
    console.log(liquids[idx1], liquids[idx2], liquids[idx3], sumOf3)
  }
  console.log(liquids[idx1], liquids[idx2], liquids[idx3])
}

solution2(`5
-2 6 -97 -6 98`)

solution2(`7
-2 -3 -24 -6 98 100 61`)
// -6 -3 -2

solution2(`10
11 23 55 -9 199 -34 -76 76 -1 -3`)

function solution2(params) {
  const input = params.split("\n")
  const n = parseInt(input.shift())

  const liquids = input[0]
    .split(" ")
    .map(a => +a)
    .sort((a, b) => a - b)
  let idx1,
    idx2,
    idx3,
    diff = Infinity

  for (let i = 0; i < n; i++) {
    let j = i + 1,
      k = n - 1
    while (1) {
      if (j >= k) break

      const sum = liquids[i] + liquids[j] + liquids[k]

      if (diff > Math.abs(sum)) {
        diff = Math.abs(sum)
        idx1 = i
        idx2 = j
        idx3 = k
      }

      if (sum < 0) j += 1
      else k -= 1
    }
  }
  console.log(liquids[idx1], liquids[idx2], liquids[idx3])
}
