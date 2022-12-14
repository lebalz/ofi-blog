import React from "react";
import Snowfall from "react-snowfall";

const Winter = () => {
    const [amount, setAmount] = React.useState(150);
    const [wind, setWind] = React.useState(1);
    const [speed, setSpeed] = React.useState(1);
    
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
            />

        </div>
    )
}

export default Winter;