const cors = require('cors'),
      ytdl = require('ytdl-core'),
      express = require('express'),
      baseURL = 'https://www.youtube.com/watch?v=',
      app = express();
app.use(cors());
app.get('/:id/:type', async (req, res) => {
  try {
    const { id, type } = req.params;
    if (type === '0') {
      res.setHeader('Content-Disposition',`attachment; filename=${id}.mp3`);
      ytdl(baseURL + id, {filter: format => format.container === 'm4a' && !format.encoding,quality: 'highest'}).pipe(res);
    } else if (Number(type) < 3 && Number(type) > -1){
      res.header('Content-Disposition',`attachment; filename="${id}.mp4"`);
      ytdl(baseURL + id, {filter: type === '1' ? 'videoonly' : 'audioandvideo',quality:'highestvideo'}).pipe(res);
    }} catch (e) {console.log(e);}
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server ready at port ${port}`));//tPEE9ZwTmy0