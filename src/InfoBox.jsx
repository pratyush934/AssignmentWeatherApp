import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1663064607895-309dc594fde7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAINY_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidityCurr > 80
                ? RAINY_URL
                : info.temprature > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city + " "}
              {info.humidityCurr > 80 ? (
                <UmbrellaIcon />
              ) : info.temprature > 15 ? (
                <SevereColdIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature : {info.temprature} &#176;C</div>
              <div>MaxTemp : {info.tempMax} &#176;C</div>
              <div>MinTemp : {info.tempMin} &#176;C</div>
              <div>Humidity : {info.humidityCurr}</div>
              <div>
                The weather can be described as <i>{info.info}</i> and feels
                like <i>{info.feelsLikes}</i>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;
