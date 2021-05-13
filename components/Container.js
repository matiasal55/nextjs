import Navigation from './Navigation';
import Head from 'next/head';

const Container = (props) => {
    return (
        <div>
            <Head>
                <title>Primer proyecto Next JS</title>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
                    integrity='sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l'
                    crossorigin='anonymous'
                />
            </Head>
            <Navigation />
            <div className='container'>{props.children}</div>
        </div>
    );
};

export default Container;
