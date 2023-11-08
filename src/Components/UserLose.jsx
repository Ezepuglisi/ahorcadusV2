import React from 'react'

const UserLose = ({tryAgain}) => {
    return (
        <div className='flex items-center flex-col justify-center gap-8'>
            <p>Perdiste, vuelve a intentarlo</p>
            <button className='bg-indigo-300 p-2 rounded-lg' onClick={() => tryAgain()}>Volver a intentar</button>
        </div>
    )
}

export default UserLose