type FooterProps = {
  translation: {
    footer: {
      name: string;
      copyright: string;
    };
  };
};

const Footer = ({ translation }: FooterProps) => {
  const year = new Date().getFullYear();
  // Consider splitting translation.footer into separate variables for maintainability
  const { name, copyright } = translation.footer;

  // If you expect more fields, you can use a config object or map over an array of items
  // Example for future extensibility:
  // const footerItems = [
  //   { label: 'name', value: name },
  //   { label: 'copyright', value: copyright },
  //   // Add more items here as needed
  // ];

  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 font-medium">
      <p>
        {`© ${year} ${name}. ${copyright}`}
      </p>
    </footer>
  )
}

export { Footer }