import React from "react";
import css from "./table.module.scss";
import { useTable, useBlockLayout, useSortBy } from "react-table";
import { FixedSizeList } from "react-window";
import classNames from "classnames";

const scrollbarWidth = () => {
  // thanks too https://davidwalsh.name/detect-scrollbar-width
  const scrollDiv = document.createElement("div");
  scrollDiv.setAttribute("style", "width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;");
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export default scrollbarWidth;

export function ReactTable({ columns, data, sortBy, minTableHeight, hiddenColumns = [] , onRowClick = () => {} }) {

  const defaultColumn = React.useMemo(
    () => ({
      width: 150
    }),
    []
  );

  const scrollBarSize = React.useMemo(() => scrollbarWidth(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {sortBy,  hiddenColumns}
    },
    useSortBy,
    useBlockLayout
  );


  const generateCellProps = (cell) => {
    const {style, ...cellProps} = cell.getCellProps({
      className: cell.column.collapse ? 'collapse' : '',
    });
    return {...cellProps, style: {width: style.width}};
  }

  return <div className={css.tableContainer}>
    <div {...getTableProps()} className={css.table}>
      <div>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className={css.tr}>
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps(column.getSortByToggleProps())} className={css.th}>
                {column.render("Header")}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </div>
            ))}
          </div>
        ))}
      </div>

        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()} onClick={() => onRowClick(row.original)} className={css.tr}>
                    {row.cells.map(cell => {
                        return (
                            <td
                                className={css.td}
                                {...generateCellProps(cell)}
                            >
                                {cell.render('Cell')}
                            </td>
                        )
                    })}
                </tr>
            )
        })}
        </tbody>
    </div>
  </div>;
}