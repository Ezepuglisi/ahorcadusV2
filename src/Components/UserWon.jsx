import React from 'react'

const UserWon = ({ tryAgain }) => {
    return (
        <div className='flex items-center justify-center flex-col gap-8'>
            <p>Felicidades, has ganado 😊</p>
            <button className='bg-indigo-300 p-2 rounded-lg' onClick={() => tryAgain()}>¡Vuelve a jugar!</button>
        </div>
    )
}

export default UserWon