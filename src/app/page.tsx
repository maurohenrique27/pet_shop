type Props = {
  title: string;
};

const Component = ({ title }: Props) => {
  return <div>Teste</div>;
};
export default function Home() {
  return (
    <div>
      <h2>Rocketseat</h2>
      <Component title={1} />
    </div>
  );
}
