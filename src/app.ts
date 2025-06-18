import routers from "./routers";

const express=require('express')
const cors=require('cors')

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json())
app.use('/api',routers)

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
