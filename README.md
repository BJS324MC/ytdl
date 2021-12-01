# ytdl - An extremly light youtube downloader
ytdl aims to be really easy to use while also being powerful enough for complex tasks.

# How to start
1. Clone this repository:
`git clone https://github.com/BJS324MC/ytdl.git`

2. Start the server:
`npm start`

# Using the API
The API format is: `/(YoutubeID)/(type)`<br>
Where:
- `YoutubeID` is the video id you want to download
- `type` is the type of format to download as
  - `0` is MP3 format
  - `1` is MP4 format without audio
  - `2` is MP4 format