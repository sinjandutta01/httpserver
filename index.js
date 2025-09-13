const http=require('http')
const PORT=5000

const server=http.createServer((req,res)=>{
  res.end('hello world')
})

server.listen(PORT,()=>{
  //console.log('server is running')
  console.log(`server is running ${PORT}`)
})

