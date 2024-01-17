export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return <div>{id == "1" ? <p>Hello Patric</p> : <p>Hello Stranger</p>}</div>;
}
