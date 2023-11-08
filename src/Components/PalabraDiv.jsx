import React, { useEffect, useState } from 'react'

const PalabraDiv = ({ palabra, selectedLetter, arraySelectedLetters, draw, stickman }) => {

    const letters = quitarAcentos(palabra?.toLowerCase()).split('')


    function quitarAcentos(cadena) {
        const acentos = [
            { de: 'á', a: 'a' },
            { de: 'é', a: 'e' },
            { de: 'í', a: 'i' },
            { de: 'ó', a: 'o' },
            { de: 'ú', a: 'u' },
            { de: 'ü', a: 'u' },
            { de: 'Á', a: 'A' },
            { de: 'É', a: 'E' },
            { de: 'Í', a: 'I' },
            { de: 'Ó', a: 'O' },
            { de: 'Ú', a: 'U' },
            { de: 'Ü', a: 'U' },
        ];

        for (let i = 0; i < acentos.length; i++) {
            cadena = cadena?.replace(new RegExp(acentos[i].de, 'g'), acentos[i].a);
        }

        return cadena;
    }




    return (
        <div className='flex items-center justify-center flex-row '>
            {letters.map((l, i) => {
                return (<div key={i} className='flex items-center justify-center border-b-2 w-10 h-10 m-2'>
                    <p className={arraySelectedLetters.includes(l) ? 'block' : 'hidden'}>{l}</p>
                </div>)
            })}
        </div>
    )
}

export default PalabraDiv