export default function Anchor({
  className,
  href,
  target,
  title,
  label,
}: {
  className: string;
  href: string;
  target: string;
  title: string;
  label: string;
}) {
  return (
    <a className={className} href={href} target={target} title={title}>
      {label}
    </a>
  );
}
