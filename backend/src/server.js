import exporess from 'express';
import { ENV } from './lib/env.js';


const app = exporess();

console.log(ENV.PORT);
console.log(ENV.DB_URL)

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'API is running..' });
})

app.listen(ENV.PORT, () => console.log('Server running on port:', ENV.PORT));