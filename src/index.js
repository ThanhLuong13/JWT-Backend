import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebroute from './routes/web';

const app = express();
const PORT = process.env.PORT || 3030

configViewEngine(app);

initWebroute(app);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})