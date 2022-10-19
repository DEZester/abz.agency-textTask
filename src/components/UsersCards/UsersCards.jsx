import UserCard from './UserCard/UserCard';

const UsersCards = () => {
  return (
    <section className="getRequest">
      <div className="usersCards">
        <h1 className="usersCards__title">Working with GET request</h1>
        <div className="usersCards__container">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
        <button className="default-btn">Show more</button>
      </div>
    </section>
  );
};

export default UsersCards;
