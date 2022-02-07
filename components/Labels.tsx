export default function Labels({ labels, onLabel }: { labels: string[], onLabel: (label: string) => void }) {
  const renderLabels = labels.map(label => <li key={label} onClick={() => onLabel(label)}>{label}</li>)

  return (
    <ul>{renderLabels}</ul>
  )
}
