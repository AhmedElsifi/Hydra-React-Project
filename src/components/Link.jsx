export default function Link({ link, children }) {
  return (
    <a className="font-bold text-sm text-white" href={link}>
      {children}
    </a>
  );
}
