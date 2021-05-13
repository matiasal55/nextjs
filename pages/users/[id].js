import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import Container from '../../components/Container';

const User = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const { user } = props;
    return (
        <Container>
            <h2>{user.name}</h2>
        </Container>
    );
};

User.getInitialProps = async (ctx) => {
    const id = ctx.query.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return { user: data };
};

export default User;
