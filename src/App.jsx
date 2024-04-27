import './App.css'

export function App(){
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-img" src="public/avatar.jpg" alt="Avatar" />
                <div className="tw-followCard-info">
                    <strong>Aldana Tamara Di Flavio</strong>
                    <span className="tw-followCard-infoUserName">@alhstar</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )
}