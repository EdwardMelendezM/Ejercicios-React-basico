import { forwardRef } from "react";
import Button from "../../Button";

function TableBlockView({ focusId, data, columns, onChange, onCreate }, ref) {
  return (
    <div>
      <Button> Add new column</Button>
      <Button> Add new row</Button>
      <table>
        <thead>
          <tr>
            {columns.map((head) => (
              <th key={crypto.randomUUID()}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={crypto.randomUUID()}>
              {columns.map((cell, cellIndex) => (
                <td key={crypto.randomUUID()}>{row[cell].toString() ?? ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default forwardRef(TableBlockView);
