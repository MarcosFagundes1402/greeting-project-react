
export const Greeting = () => {

    const hour = new Date().getHours()
    let greeting = ''

    if (hour >= 0 && hour < 12){ 
        greeting = 'Bom dia! ☀️'
    } else if (hour >= 12 && hour < 18){
        greeting = 'Boa Tarde! ⛅'
    }else if (hour >= 18 && hour <= 23){
        greeting = 'Boa noite! 🌙'
    }
    
    return (
        <div>
            {greeting}
        </div>
    );
}