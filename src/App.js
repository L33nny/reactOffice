import React from "react";
import "./styles.css";
import { DetailsList } from "office-ui-fabric-react";

var items = [
  { Id: 1, Title: "a", Val: 10 },
  { Id: 2, Title: "b", Val: 11 },
  { Id: 3, Title: "c", Val: 12 }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DetailsList
        items={items}
        onRenderItemColumn={_renderItemColumn.bind(this)}
      />
    </div>
  );
}

function _renderItemColumn(item, index, column) {
  const fieldContent = item[column.fieldName];
  if (column.key === "Val") {
    return <input type="number" value={item.Val} onChange={onAmountChange} />;
  } else {
    return <span>{fieldContent ? fieldContent.toString() : ""}</span>;
  }
}

function onAmountChange(e) {
  console.log(e.target.value);
}
