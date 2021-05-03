import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Lorem Ipsum</span> dolor sit amet.
            </h1>
            <p className={headerStyles.description}>Consectetur adipisicing elit. Aliquam atque, dolores eaque quam quo rerum tempora! A laborum libero velit!</p>
        </div>
    )
}

export default Header