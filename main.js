const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60x&s=frozen
The quick brown fox jumps over the lazy dog.
aabbcccdddd
`

// 정규식 생성 방식

//1. 생성자
//const regexp = new RegExp('the','gi')

//2. 리터럴
//const regexp = /the/gi
//console.log(str.match(regexp))


//메소드

//1. test
//const regexp = /fox/gi
//console.log(regexp.test(str))

//2. replace
//const regexp = /fox/gi
//console.log(str.replace(regexp,'AAA'))
//원본 데이터 손상X
//console.log(str)

// const str -> let str
//str = str.replace(regexp,'AAA')
//console.log(str)

//플래그(옵션)
//console.log(str.match(/\.$/gim))

//패턴(표현)
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gim))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
//숫자를 포함한 영어 알파벳 2개이상 3개이하 반복
console.log(str.match(/\w{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/[fox]/g))
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d{1,}/g))

const h = ` the hello   world    !

`
console.log(h.replace(/\s/g,''))

console.log(str.match(.{1,}/(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))

