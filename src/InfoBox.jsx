import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
//import TsunamiIcon from '@mui/icons-material/Tsunami';

export default function InfoBox({info}){
    const INIT_URL = "https://unsplash.com/photos/Jt8Mq6J4Gow/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fHx8MTc0NzQ5MzU2MHww&force=true";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1661848579238-cd68bcb91c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjB3ZWF0aGVyJTIwaG90fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1676401863809-1fc34aa46d97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlciUyMGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1543914165-a64da60b2225?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlciUyMHJhaW55fGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL: COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <SunnyIcon/>: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
                        <div>Temperatue = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>The Weather can be described as {info.weather} and  feels Like = {info.feelsLike}&deg;C</div>

                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}