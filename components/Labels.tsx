export default function Labels({ labels, onLabel }: { labels: string[], onLabel: (label: string) => void }) {
  const renderLabels = labels.map(label => <li className="cursor-pointer" key={label} onClick={() => onLabel(label)}>{label}</li>);

  return (
    <ul className="w-8">{renderLabels}</ul>
  );
}
