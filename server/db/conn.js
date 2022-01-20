const mongoose=require('mongoose');


const DB =`mongodb+srv://pooja:poojasingh@cluster0.ckg2n.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('connection successfull')
}).catch((err) => {
    console.log(err)
})
