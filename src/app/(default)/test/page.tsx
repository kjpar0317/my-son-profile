console.log(process.env.NODE_ENV);

async function getUsers() {
  // Fetch data from external API
  const res = await fetch(
    process.env.NODE_ENV !== "production"
      ? `http://localhost:3000/api/test`
      : `https://my-son-profile.vercel.app/api/test`
  );
  const result = await res.json();
  // Pass data to the page via props
  return result;
}

export default async function TestPage() {
  const users = await getUsers();
  console.log(users);

  return <div>test</div>;
}
