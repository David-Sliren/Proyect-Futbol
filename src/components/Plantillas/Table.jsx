import React from "react";

function Table({ children }) {
  return (
    <table className="border-2 ">
      <tr className="border-2 border-t-0">
        <th>Cub</th>
        <th>PJ</th>
        <th>G</th>
        <th>E</th>
        <th>P</th>
        <th>GF</th>
        <th>GC</th>
        <th>DG</th>
        <th>Pts</th>
      </tr>
      {children}
    </table>
  );
}

export default Table;
