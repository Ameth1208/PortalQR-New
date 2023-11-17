import { component$, useClientEffect$, useStore } from '@builder.io/qwik'
import './qr.css'
import qr from './../../assets/bot.qr.png'

export const QR = component$(() => {

    const state = useStore({
        count: 0,
    })

    useClientEffect$(() => {
        setInterval(() => {
            state.count++
        }, 800)
    })

    return (
        <div class={"qr"}>
            <img width={350} height={350} src={qr} alt="QR" />
            {/* <img width={350} height={350} src={'qr.png?time=' + state.count} alt="QR" /> */}
        </div>
    )
})
