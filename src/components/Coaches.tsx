import { coaches } from '../../userData.js';
import { Coach } from '../types/Coach.ts';
import './Coaches.css';

export default function Coaches() {
    return (
        <section className="coaches">
            <h2 className="coaches-heading">Meet Our Coaches</h2>
            <div className="coaches-list">
                {coaches.map((coach: Coach, index: number) => (
                    <article className="coach-card" key={index}>
                        <h3 className="coach-name">{coach.name}</h3>
                        <p className="coach-bio">{coach.bio}</p>
                        <p className="coach-speciality">
                            <strong>Specialty:</strong> {coach.speciality.join(', ')}
                        </p>
                        <p className="coach-stakes">
                            <strong>Stakes:</strong> {coach.stakes.join(', ')}
                        </p>
                        <p className="coach-price">
                            <strong>Price per hour:</strong> ${coach.price_per_hour.toFixed(2)}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
