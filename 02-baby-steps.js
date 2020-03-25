// console.log(Number(process.argv[2]))
let i=2
let sum=0
while(process.argv[i]){
    sum=sum+Number(process.argv[i])
    i++
}
console.log(sum)