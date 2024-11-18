import logo from '../../public/section_image_.png';
import './Section.css';

export default function Section() {
    return (
        <section className="section">
            <div className="section-container">
                <article className="section-content">
                    <header className="section-header">
                        <h1>Learn from the best and aim to the top</h1>
                    </header>
                    <figure className="section-image">
                        <img src={logo} alt="Poker logo" />
                    </figure>
                </article>
            </div>
        </section>
    );
}
