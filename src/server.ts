import app from './app';

const PORT: Number = 3000;

app.app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});