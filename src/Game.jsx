import React, { useEffect, useRef, useState } from 'react'
import { words } from './assets/words'
import PalabraDiv from './Components/PalabraDiv';
const Game = () => {
    const alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    // const stickman = useRef()
    const [context, setContext] = useState()
    const [selectedWord, setSelectedWord] = useState()
    const [selectedLetter, setSelectedLetter] = useState()
    const [arraySelectedLetters, setArraySelectedLetters] = useState([])
    const [correctLetters, setCorrectLetters] = useState([])

    const [isFrame1Drawed, setIsFrame1Drawed] = useState(false)
    const [isFrame2Drawed, setIsFrame2Drawed] = useState(false)
    const [isFrame3Drawed, setIsFrame3Drawed] = useState(false)
    const [isFrame4Drawed, setIsFrame4Drawed] = useState(false)
    const [isHeadDrawed, setIsHeadDrawed] = useState(false)
    const [isTorsoDrawed, setIsTorsoDrawed] = useState(false)
    const [isRightArmDrawed, setIsRightArmDrawed] = useState(false)
    const [isLeftArmDrawed, setIsLeftArmDrawed] = useState(false)
    const [isRightLegDrawed, setIsRightLegDrawed] = useState(false)
    const [isLeftLegDrawed, setIsLeftLegDrawed] = useState(false)
    const [buttonPista, setButtonPista] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [viewPista, setViewPista] = useState(false)
    const [letters, setLetters] = useState()
    const [userWin, setUserWin] = useState(false)

    const frame1 = function () {
        draw(0, 150, 150, 150);
        setIsFrame1Drawed(true)

    };

    const head = function () {

        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
        setIsHeadDrawed(true)

    }

    const frame2 = function () {
        draw(10, 0, 10, 600);
        setIsFrame2Drawed(true)
    };

    const frame3 = function () {
        draw(0, 5, 70, 5);
        setIsFrame3Drawed(true)

    };

    const frame4 = function () {
        draw(60, 5, 60, 15);
        setIsFrame4Drawed(true)

    };

    const torso = function () {
        draw(60, 36, 60, 70);
        setIsTorsoDrawed(true)

    };

    const rightArm = function () {
        draw(60, 46, 100, 50);
        setIsRightArmDrawed(true)

    };

    const leftArm = function () {
        draw(60, 46, 20, 50);
        setIsLeftArmDrawed(true)

    };

    const rightLeg = function () {
        draw(60, 70, 100, 100);
        setIsRightLegDrawed(true)

    };

    const leftLeg = function () {
        draw(60, 70, 20, 100);
        setIsLeftLegDrawed(true)

    };

    const endGame = () => {
        setIsGameOver(true)
    }

    const tryAgain = () => {
        setUserWin(false)
        if (context) {
            context.clearRect(0, 0, 400, 400);
            context.beginPath()
            context.strokeStyle = "#fff";
            context.lineWidth = 2;
        }
        const position = getRandomInt(60)
        setSelectedWord(words[position])

        setIsFrame1Drawed(false)
        setIsFrame2Drawed(false)
        setIsFrame3Drawed(false)
        setIsFrame4Drawed(false)
        setIsHeadDrawed(false)
        setIsTorsoDrawed(false)
        setIsLeftArmDrawed(false)
        setIsRightArmDrawed(false)
        setIsLeftLegDrawed(false)
        setIsRightLegDrawed(false)

        setIsGameOver(false)
        setButtonPista(false)
        setViewPista(false)
        setCorrectLetters([])

        setLetters()

        setSelectedLetter()
        setArraySelectedLetters([])

    }

    useEffect(() => {


        if (selectedLetter) {
            if (!letters.includes(selectedLetter.toLowerCase())) {
                if (!isFrame1Drawed) frame1()
                else if (!isFrame2Drawed) frame2()
                else if (!isFrame3Drawed) frame3()
                else if (!isFrame4Drawed) frame4()
                else if (!isHeadDrawed) head()
                else if (!isTorsoDrawed) torso()
                else if (!isRightArmDrawed) rightArm()
                else if (!isLeftArmDrawed) leftArm()
                else if (!isRightLegDrawed) { rightLeg(), setButtonPista(true) }
                else if (!isLeftLegDrawed) leftLeg()
                else endGame()
            } else {
                setCorrectLetters([...correctLetters, selectedLetter])
            }
        }

    }, [selectedLetter])


    useEffect(() => {
        // stickman.current = document.getElementById('stickman')
        setContext(document.getElementById('stickman').getContext('2d'))
        const position = getRandomInt(60)
        setSelectedWord(words[position])
    }, [])

    useEffect(() => {
        if (context) {
            context.beginPath();
            context.strokeStyle = "#fff";
            context.lineWidth = 2;
        }
    }, [context])

    useEffect(() => {
        if (selectedWord?.word) {
            setLetters(quitarAcentos(selectedWord.word?.toLowerCase()).split(''))
        }
    }, [selectedWord])


    useEffect(() => {

        if (isFrame1Drawed &&
            isFrame2Drawed &&
            isFrame3Drawed &&
            isFrame4Drawed &&
            isHeadDrawed &&
            isLeftArmDrawed &&
            isLeftLegDrawed &&
            isRightArmDrawed &&
            isRightLegDrawed) {
            endGame()
        }


    }, [
        isFrame1Drawed,
        isFrame2Drawed,
        isFrame3Drawed,
        isFrame4Drawed,
        isHeadDrawed,
        isLeftArmDrawed,
        isLeftLegDrawed,
        isRightArmDrawed,
        isRightLegDrawed
    ])

    useEffect(() => {


        const lettersWithoutRepeat = new Set(letters)

        if (letters && (correctLetters?.length == lettersWithoutRepeat?.size)) {
            setUserWin(true)
        }
    }, [correctLetters])



    const draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
        console.log(context)
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

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
            cadena = cadena.replace(new RegExp(acentos[i].de, 'g'), acentos[i].a);
        }

        return cadena;
    }



    return (
        <div className="flex items-center text-white w-full justify-evenly my-auto">

            <div>
                <div className='rounded-lg border-2 mb-5 p-5 flex items-center justify-center bg-green-900'>
                    <canvas id="stickman" />
                </div>
                {selectedWord && <PalabraDiv palabra={selectedWord.word} selectedLetter={selectedLetter} arraySelectedLetters={arraySelectedLetters} draw={draw} />}
                {isGameOver &&
                    <div className='flex items-center justify-center flex-col mt-3'>
                        <p>La palabra era :</p>
                        <p className='text-xl mt-3'>{selectedWord.word.toUpperCase()}</p>
                    </div>}
            </div>
            <div>
                {
                    userWin ?
                        <>
                            <div className='flex items-center justify-center flex-col gap-8'>
                                <p>Felicidades, haz ganado 😊</p>
                                <button className='bg-indigo-300 p-2 rounded-lg' onClick={() => tryAgain()}>¡Vuelve a jugar!</button>
                            </div>
                        </>
                        :
                        <>
                            {selectedWord && !isGameOver &&
                                <div className='flex items-center justify-center flex-col'>
                                    <div className='grid grid-cols-7 mb-3'>
                                        {alfabeto.map((letra, i) => {
                                            return <button disabled={arraySelectedLetters.includes(letra.toLowerCase())} key={i} onClick={() => { setSelectedLetter(letra), setArraySelectedLetters([...arraySelectedLetters, letra.toLowerCase()]) }} className='m-1 bg-indigo-300 px-2 py-px rounded-md text-xl hover:bg-indigo-500 disabled:bg-indigo-300/20 disabled:cursor-not-allowed'>{letra}</button>
                                        })}
                                    </div>
                                    {buttonPista && !viewPista && <button className='bg-indigo-300 p-2 rounded-lg' onClick={() => setViewPista(true)}>Necesito una pista 💡</button>}
                                    {viewPista && <p className='p-2 border-2'>{selectedWord.meaning}</p>}
                                    {/* <p className='p-2 border-2'>{selectedWord.meaning}</p> */}
                                </div>
                            }


                            {isGameOver &&
                                <div className='flex items-center flex-col justify-center gap-8'>
                                    <p>Perdiste, vuelve a intentarlo</p>
                                    <button className='bg-indigo-300 p-2 rounded-lg' onClick={() => tryAgain()}>Volver a intentar</button>
                                </div>
                            }
                        </>


                }

            </div>


        </div>
    )
}

export default Game