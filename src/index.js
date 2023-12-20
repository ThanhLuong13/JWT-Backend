import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebroute from './routes/web';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3030

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

configViewEngine(app);

initWebroute(app);

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})