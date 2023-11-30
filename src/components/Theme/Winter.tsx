import React from "react";
import Snowfall from "react-snowfall";
import sf1 from './images/snowflake_1.png';
import sf2 from './images/snowflake_2.png';
import sf_s from './images/snowflake_special.png';


const Winter = () => {
    const [amount, setAmount] = React.useState(150);
    const [wind, setWind] = React.useState(1);
    const [speed, setSpeed] = React.useState(1);
    const [images, setImages] = React.useState([]);
    
    React.useEffect(() => {
        let tx = 0;
        let ty = 0;
        const onMouse = (ev: MouseEvent) => {
            const mx = ev.movementX;
            const my = ev.movementY;
            let dt = Math.sqrt(mx*mx + my*my);
            setWind(mx);
            if (dt > 1000) {
                dt = 1000;
            }
            setSpeed(dt + 1);
            setAmount(dt + 150);
        }
        const onTouch = (ev: TouchEvent) => {
            const x = ev.touches[0].clientX;
            const y = ev.touches[0].clientY;
            const mx = tx - x;
            const my = ty - y;
            tx = x;
            ty = y;
            let dt = Math.sqrt(mx*mx + my*my);
            setWind(mx);
            if (dt > 1000) {
                dt = 1000;
            }
            setSpeed(dt + 1);
            setAmount(dt + 150);
        }
        window.addEventListener('mousemove', onMouse);
        window.addEventListener('touchmove', onTouch);
        return () => {
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('touchmove', onTouch);
        }
    }, [])

    React.useEffect(() => {
        const imgs = [sf1, sf2,  sf1, sf2, sf1, sf2, sf1, sf2, sf1, sf2,  sf1, sf2, sf1, sf2, sf1, sf2, sf_s].map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });
        setImages(imgs);
    }, [])

    return (
        <div>
            <Snowfall
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
                snowflakeCount={amount}
                wind={[0, wind]}
                speed={[0.1, speed]}
                radius={[5, 23]}
                images={images}
            />

        </div>
    )
}

export default Winter;