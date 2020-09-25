import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://yuri:16032014@cluster0.wsxga.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
);
