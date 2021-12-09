express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
connectDB();
const port=5000;

app.use(express.json())
app.use('/api/users', require('./routes/users'));
app.listen(port, error=>{
    try {
        console.log(`the server is running on ${port}...`);
    } catch (error) {
        console.log('error');
    }
})
