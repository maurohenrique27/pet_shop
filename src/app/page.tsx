export default function Home() {
  return (
    <div className="bg-background-primary p-6 ">
      <div className="flex items-center justify-between md:mb-8">
        <div>
          <h1 className="text-title text-content-primary mb-2">Sua agenda</h1>
          <p className="text-paragraph-small text-content-secondary ">
            Aqui você ver todos os clientes e serviços agendados para hoje.
          </p>
        </div>
      </div>
    </div>
  );
}
