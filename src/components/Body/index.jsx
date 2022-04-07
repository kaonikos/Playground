import React, {useEffect, useState} from 'react'
import {createUseStyles} from 'react-jss'
import './styles.css'

const Body = () => {

    const [top, setTop] = useState()
    const [left, setLeft] = useState()
    const [move, setMove] = useState(false)

    useEffect(
        () => {
            const element = document.getElementById('blob')
            if (element) {
                element.style.position = "absolute";
                element.style.top = `${top-50}px`
                element.style.left = `${left-50}px`
            }
            console.log(top,left)
        }, [top,left]
    )

    useEffect(
        () => {
            if (move) {
                onmousemove = (e) => {
                    setTop(e.clientY)
                    setLeft(e.clientX)
                }
            } else {
                onmousemove = (e) => {

                }
            }
        },[move]
    )

    return (
        <div className='body'>
            <div className='blob' id='blob' onClick={() => setMove(!move)}>
            </div>
        </div>
    )
}

export default Body
