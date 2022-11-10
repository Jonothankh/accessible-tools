import './Footer.css'

const Footer = (props) =>
{
    return (
        <footer>
            <p className='notice'>This site is by <a href='https://jonothan.dev'>Jonothan</a>. </p>
            <p className='notice'>If you wish to contribute, use <a href='https://forms.gle/QuubaSXYPf2cChSE9'>this form</a>.</p>
            <p className='notice'>To avoid too much duplication of similar things, each thing should be the best available.</p>
        </footer>
    )

}

export default Footer