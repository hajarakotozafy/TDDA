const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const deviceActionsRoutes = require('./routes/deviceActionsRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/device', deviceRoutes);
app.use('/api/device_actions', deviceActionsRoutes);

app.listen(3000, () => console.log(`Le serveur écoute sur http://localhost/:3000...`))