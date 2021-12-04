const cors = require('cors'),
      ytdl = require('ytdl-core'),
      express = require('express'),
      baseURL = 'https://www.youtube.com/watch?v=',
      app = express();
app.use(cors());
app.get('/:id/:type', async (req, res) => {
  const { id, type } = req.params;
  if (type === 'audio') {
    res.setHeader('Content-Disposition',`attachment; filename=${id}.mp3`);
    ytdl(baseURL + id, {filter: 'audioonly',quality: 'highest'}).pipe(res);
  } else if (type === 'video'){
    res.header('Content-Disposition',`attachment; filename="${id}.mp4"`);
    ytdl(baseURL + id, {filter: 'videoonly',quality:'highestvideo'}).pipe(res);
  } else res.send('400 Invaild format type.');
});
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.header('Content-Disposition',`attachment; filename="${id}.mp4"`);
  ytdl(baseURL + id, {filter: 'audioandvideo',quality:'highestvideo'}).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server ready at port ${port}`));
//tPEE9ZwTmy0  MvO0oJcqBmA