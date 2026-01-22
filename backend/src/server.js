import exporess from 'express';
import path from 'path';
import { ENV } from './lib/env.js';


const app = exporess();

const __dirname= path.resolve();

console.log(ENV.PORT);
console.log(ENV.DB_URL)

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API is running..' });
});
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'this is boobs endpoint' });
});

//make our app ready for development
if(ENV.NODE_ENV === 'production'){
    app.use(exporess.static(path.join(__dirname, '../frontend/build')));
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });

}

app.listen(ENV.PORT, () => console.log('Server running on port:', ENV.PORT));