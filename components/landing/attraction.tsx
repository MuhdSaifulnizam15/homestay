
const Attraction = () => {
  const attractions = [
    { name: "Teluk Cempedak Beach", desc: "10 mins drive" },
    { name: "Kuantan City Mall", desc: "15 mins drive" },
    { name: "Sungai Pandan Waterfall", desc: "25 mins drive" },
    { name: "Taman Gelora", desc: "12 mins drive" },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <h2 className="text-3xl font-bold mb-8 text-center">Nearby Attractions</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {attractions.map((a, idx) => (
          <div key={idx} className="rounded-lg border p-4 bg-card shadow-sm">
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Attraction };