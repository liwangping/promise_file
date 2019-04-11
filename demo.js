// js的后端用核心模块打理起服务器开发
// 要读文件，先引入fs
const fs = require('fs');

//读取文件
// js运行在服务器命令行上
//找到文件 代码由cpu 内存 a.text在磁盘的文件夹里
// IO操作 花时间 打开文件，读取文件，输出到命令行里
// 耗时 callback 回调函数 是异步的
// fs.readFile('./a.txt','utf8',(err,data) => {
//     console.log(data);
// })
// fs.readFile('./b.txt','utf8',(err,data) => {
//     console.log(data);
// })

// 当出现耗时问题，找primise ,这是一类问题
// promise 是耗时问题的包裹 

const fileAPromise = new Promise((resolve,reject) =>{
    fs.readFile('./a.txt','utf-8',(err,data) =>{
        if (err) {
            reject(err);
            //把这个东西拒绝掉
            return;
        }
        resolve(data);
    })
});
const fileBPromise = new Promise((resolve, reject) =>{
    fs.readFile('./b.txt','utf-8',(err,data) =>{
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    })
})
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise
        // 接着执行下一个Promise
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

    



