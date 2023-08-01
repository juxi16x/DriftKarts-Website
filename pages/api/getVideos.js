export default function handler(req, res) {
    fetch('https://youtube.googleapis.com/youtube/v3/search?&maxResults=10&type=video&channelId=UCF4jzVCa2J45NXnNtf6XBoA&key=' + process.env.API_KEY).
    then((resp) => resp.json())
    .then((resp) => {
        res.status(200).send(resp);
    });
}