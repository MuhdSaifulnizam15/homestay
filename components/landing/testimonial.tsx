
const Testimonial = () => {
  const testimonials = [
    {
      name: "Aisyah, Kuala Lumpur",
      feedback:
        "Lovely stay! The house was clean and cozy, and the location was perfect.",
    },
    {
      name: "Hafiz, Johor",
      feedback:
        "Great hospitality. Facilities are complete and very family friendly.",
    },
    {
      name: "Mei Ling, Singapore",
      feedback:
        "We enjoyed the peaceful environment. Highly recommended for weekend getaways.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <h2 className="text-3xl font-bold mb-8 text-center">
        What Our Guests Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="italic">“{t.feedback}”</p>
            <p className="mt-4 font-semibold text-right">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Testimonial };