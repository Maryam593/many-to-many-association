
import express from 'express';
import AllRoutes from './Routes/index.js';

const myApp = express();
myApp.use(AllRoutes)

myApp.listen(3000,()=>{
     console.log("hello")
})