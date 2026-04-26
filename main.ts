let express = require('express');
let app = express();

app.get('/', (req: any, res: any) => {
    res.send('<h1 style="text-align: center;">Привіт, мій друже!</h1>');
});

app.listen(3000, () => {
    console.log(`'Сервер працює на порту 3000!'`);
});