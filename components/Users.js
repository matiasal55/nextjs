import Router from 'next/router';

const Users = (props) => {
    return (
        <div>
            {props.users.map((user) => (
                <li key={user.id} className='list-group-item list-group-item-action' onClick={(e) => Router.push('/users/[id]', `/users/${user.id}`)}>
                    <h5>{user.name}</h5>
                    <p>Email: {user.email}</p>
                </li>
            ))}
        </div>
    );
};

export default Users;
