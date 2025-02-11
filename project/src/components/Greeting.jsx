
export const Greeting = () => {

    const date = new Date()
    const hour = date.getHours()
    let msg = ''

    if (hour >= 6 && hour < 12){ 
        msg = 'Bom dia! ☀️'
    } else if (hour >= 12 && hour < 18){
        msg = 'Boa Tarde! ⛅'
    }else{
        msg = 'Boa noite! 🌙'
    }
    
    return (
        <div>
            {msg}
        </div>
    );
}