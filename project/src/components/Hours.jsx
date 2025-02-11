'use client';

import { useEffect } from "react"
import { useState } from "react"

export const Hours = () => {
    const [hours, setHora] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const clock = new Date()
            setHora(clock.getHours());
            setMinutes(clock.getMinutes());
            setSeconds(clock.getSeconds());
        }, 1000)
        
        return () => clearInterval(interval); // limpar o intervalo qdo recarregar a pagina
    })

    return (
        <div>
            {hours}:{String(minutes).padStart(2, "0")}:
            <span className="italic">{String(seconds).padStart(2, "0")}</span>
        </div>
    );
};