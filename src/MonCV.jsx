import React from 'react';
import { Link } from 'react-router-dom';
import './cv.css'; // Assurez-vous d'avoir un fichier MonCV.css avec vos styles

function MonCV() {
    return (
        <div>
            <header>
                <h1>Abizouhour Assia</h1>
                <p>Âge: 22</p>
                <p>Tél: 0679694796</p>
                <p>Email: assiaabizouhour123@gmail.com</p>
                <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/assia-abi-zouhour-109bb0234/">Mon LinkedIn</a></p>
                <p><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/">Mon Facebook</a></p>
                <p><i className="fab fa-instagram"></i> <a href="https://www.instagram.com/">Mon Instagram</a></p>
                <Link to="/form"><button>Go to Form</button></Link>
                </header>
            <section>
                <h2>Élève ingénieure à l'EMI</h2>
                <p>Élève ingénieure en réseaux et télécommunications intéressée par l'administration des systèmes, la virtualisation et les technologies cloud. Forte d'une solide formation académique et d'une volonté d'acquérir une expérience pratique, je recherche activement un stage dans un environnement dynamique où je pourrai mettre en œuvre mes compétences techniques.</p>
            </section>
            <section>
                <h2>Formation et Diplôme</h2>
                <ul>
                    <li>2018 - Baccalauréat - Lycée Riad</li>
                    <li>2019 - Classes préparatoires - Lycée Mohamed V</li>
                    <li>2021 - Cycle ingénieur - EMI</li>
                </ul>
            </section>
            <section>
        <h2>Compétences Techniques</h2>
        <ul>
            <li>Administration des systèmes</li>
            <li>Conception et configuration des réseaux informatiques</li>
            <li>Maîtrise des langages de programmation</li>
        </ul>
    </section>
    <section>
        <h2>Compétences Linguistiques</h2>
        <ul>
            <li>Arabe - maternelle</li>
            <li>Français - courant</li>
            <li>Anglais - courant</li>
        </ul>
    </section>
    <section>
        <h2>Autres</h2>
        <p>Informations complémentaires : Loisirs, Sports, etc.</p>
    </section>
            <footer>
                <p>Edité par : Abizouhour Assia</p>
                <p>Dernière Mise à jour : 13/05/2024</p>
            </footer>
        </div>
    );
}

export default MonCV;

