export default function Headers({ columns }) {
  return (
    <tr key={crypto.randomUUID()}>
      {columns.map((head) => (
        <th key={crypto.randomUUID()}>{head}</th>
      ))}
    </tr>
  );
}
