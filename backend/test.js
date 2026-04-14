const mongoose = require('mongoose'); 
mongoose.connect('mongodb://admin:admin@ac-lmmpvpx-shard-00-00.oqijvgm.mongodb.net:27017,ac-lmmpvpx-shard-00-01.oqijvgm.mongodb.net:27017,ac-lmmpvpx-shard-00-02.oqijvgm.mongodb.net:27017/deb?authSource=admin&replicaSet=atlas-radkbx-shard-0&tls=true').then(() => { 
  console.log('success'); 
  process.exit(0); 
}).catch(e => {
  console.log(e);
  process.exit(1);
});
