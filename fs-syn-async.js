// ! method Syn
// const {readFileSync, writeFileSync} = require("fs")

// const read1 = readFileSync(__dirname+"/content/file1.txt",'utf8')
// const read2 = readFileSync(__dirname+"/content/file2.txt",'utf8')
// console.log(read1)
// console.log(read2)

// writeFileSync(__dirname+"/content/result.txt",`Here is some data \n ${read1} \n ${read2}`,{flag:'a'})
// console.log('done')

// ! method Asyn
const {readFile,writeFile} = require('fs')

readFile(__dirname+'/content/file1.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const file1 = result

    readFile(__dirname+'/content/file2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const file2 = result
        console.log(file2)
        writeFile(__dirname+"/content/resulCheck.txt",`${file2}`,(err,result) => {
            if (err){
                console.log(err)
                return
            }
            console.log(result)

        } )
    })
})