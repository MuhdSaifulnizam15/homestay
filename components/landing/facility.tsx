
const Facility = () => {
  const facilities = [
    { title: "Air Conditioning", desc: "Stay cool and comfortable" },
    { title: "Wi-Fi", desc: "High-speed internet throughout" },
    { title: "Kitchen", desc: "Fully equipped for cooking" },
    { title: "Parking", desc: "Secure private parking space" },
  ];

  return (
    <section id="facilities" className="py-6 px-6 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center">Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {facilities.map((f, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Facility };