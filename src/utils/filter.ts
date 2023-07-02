interface Arr extends Array<{
    id: number,
    prediction: string | null
}> {}

const array: Arr = [{id: 1, prediction: null}, {id: 2, prediction: "1"}]

const filtered: Arr = array.filter(
    (e): e is Exclude<typeof e, null> => e.prediction !== null
)
console.log(filtered)
