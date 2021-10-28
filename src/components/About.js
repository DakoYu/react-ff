import './About.css';

const About = () => {
    return (
        <section className='about'>
            <h3>Learn More</h3>
            <p>Want to know about my upcoming projects, or simply chat? Just sign up for my mailing list. No spam from me, I promose! Because it doesn't work anyway :p</p>
            <form>
                <input type='email' placeholder='Email'/>
                <a href='/' class='btn'>Subscribe</a>
            </form>
        </section>
    )
}

export default About;