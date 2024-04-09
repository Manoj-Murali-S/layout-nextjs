import Link from 'next/link'


const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return (
    <div>
      <h3>list items</h3>
      <div className="flex gap-3">
        
      <Link href="/login">Login</Link>
      <Link href="/register">register</Link>
      <Link href="/billing">billing</Link>
      </div>
      
      {data ? (
       <>
          {data.map((user) => (
            <div key={user.id}>
              <p className="name">{user.name}</p>
            </div>
          ))}
        </> 
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Home;
