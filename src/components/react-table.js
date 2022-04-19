import React from "react";
import css from "./table.module.scss";
import {useTable, useSortBy, useFlexLayout} from "react-table";
import classNames from "classnames";
import {useSticky} from "react-table-sticky";


export function ReactTable({
                               columns, data, sortBy, hiddenColumns = [], onRowClick = () => {
    }
                           }) {

    const defaultColumn = React.useMemo(
        () => ({
            width: 150
        }),
        []
    );

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
            initialState: {sortBy, hiddenColumns}
        },
        useSortBy,
        useFlexLayout,
        useSticky
    );


    const generateCellProps = (cell) => {
        const {style, ...cellProps} = cell.getCellProps({
            className: cell.column.collapse ? 'collapse' : '',
        });
        return {...cellProps, style: {width: style.width, minWidth: style.width}};
    }

    return <div className={css.tableContainer}>
        <div {...getTableProps()} style={{width: "fit-content"}} className={classNames(css.table, css.sticky)}>
            <div className={css.header}>
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

            <div {...getTableBodyProps()} className={css.tbody}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <div {...row.getRowProps()} onClick={() => onRowClick(row.original)} className={css.tr}>
                            {row.cells.map(cell => {
                                return (
                                    <div
                                        className={css.td}
                                        {...generateCellProps(cell)}
                                    >
                                        {cell.render('Cell')}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>;
}