import React from 'react'
import { Redirect } from 'react-router-dom'
import {CountDown} from './CountDown'
import {StartBtn} from './StartBtn'
import socket from '../socketConfig'
import {DisplayWords} from './DisplayWords'
import {Form} from './Form'
import {ProgressBar} from './ProgressBar'
import {ScoreBoard} from './ScoreBoard'
import {DisplayGameCode} from './DisplayGameCode'

export const TypeRacer = ({gameState}) => {
    const findPlayer = (players) => {
        return players.find(player => player.socketID === socket.id)
    }
    const {_id, players, words, isOpen, isOver} = gameState
    console.log(`open ${isOpen}`)
    const player = findPlayer(players)
    if(_id === ''){
        return <Redirect to='/' />
    }
    return (
        <div className='text-center'>
            <DisplayWords words={words} player={player}/>
            <ProgressBar wordsLength={words.length} players={players} player={player} />
            <Form isOpen={isOpen}  isOver={isOver} gameID={_id}/>
            <CountDown />
            <StartBtn player={player} gameID={_id}/>
            <DisplayGameCode gameID={_id} isOpen={isOpen} />
            <ScoreBoard players={players} />
        </div>
    )
    
}
