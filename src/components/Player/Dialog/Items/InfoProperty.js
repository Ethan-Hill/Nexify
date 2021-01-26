export default function InfoTitle({ title, name }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <h1 className="mb-3">{name}</h1>
    </div>
  );
}
