
const Faq = () => {
  const faqs = [
    {
      q: "What is the check-in/check-out time?",
      a: "Check-in is from 2 PM, and check-out is before 12 PM.",
    },
    {
      q: "Is breakfast included?",
      a: "Currently breakfast is not included, but a full kitchen is available.",
    },
    {
      q: "Do you allow pets?",
      a: "Unfortunately pets are not allowed at the moment.",
    },
    {
      q: "Is parking available?",
      a: "Yes, we provide a secure private parking space.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { Faq };