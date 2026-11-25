export default function GithubProjects() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold mb-16">
          Github Showcase
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              CRUD PHP OOP PostgreSQL
            </h3>

            <p className="mt-4 text-slate-400">
              PHP • PostgreSQL • OOP
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              CRUD MVC OOP PHP MySQL
            </h3>

            <p className="mt-4 text-slate-400">
              PHP • MVC • MySQL
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}