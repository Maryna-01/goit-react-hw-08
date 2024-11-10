import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <div className={css.container}>
                <h1 className={css.title}>
                    <span style={{ color: 'pink' }}>Welcome </span>
                </h1>
            </div>
        </>
    );
};

export default HomePage;
