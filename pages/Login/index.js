import styles from "../../styles/Users.module.css";
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data }
  }
}

const Ninjas = ({ users }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {users.map(userlist => (
        <Link href={'/Login/' + userlist.id} key={userlist.id}>
          <a className={styles.single}>
            <h3>{ userlist.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;
