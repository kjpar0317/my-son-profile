async function getUsers() {
  const res = await fetch("/api/test");

  return res.json();
}

export default async function TestPage() {
  const data = await getUsers();

  console.log(data);

  return <div>test</div>;
}
