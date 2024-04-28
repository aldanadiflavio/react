import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard username="alhstar" name="Aldana Tamara Di Flavio" />
            <TwitterFollowCard username="mapachepedro" name="Pedro el mapache" />
            <TwitterFollowCard username="pepe123" name="Pepe Lopez" />

        </section>
        
    )
}