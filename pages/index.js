import fetch from 'isomorphic-fetch';
import Container from '../components/Container';
import Users from '../components/Users';

const Index = (props) => {
    return (
        <Container>
            <h1>Index</h1>
            <Users users={props.users} />
        </Container>
    );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return { users: data };
};

export default Index;
