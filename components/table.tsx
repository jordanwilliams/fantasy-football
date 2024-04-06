import { ReactNode } from 'react';
import styles from './table.module.css';

type TableContainerProps = {
	children: ReactNode;
};

type TableProps = {
	children: ReactNode;
};

type TableHeadProps = {
	children: ReactNode;
};

type TableRowProps = {
	children: ReactNode;
};

type TableBodyProps = {
	children: ReactNode;
};

type TableDataProps = {
	children: ReactNode;
};

export function TableContainer({ children }: TableContainerProps) {
	return <div className={styles.tableContainer}>{children}</div>;
}

export function Table({ children }: TableProps) {
	return <table className={styles.table}>{children}</table>;
}

export function TableHead({ children }: TableHeadProps) {
	return <thead className={styles.tableHead}>{children}</thead>;
}

export function TableHeadCell({ children }: TableHeadProps) {
	return <th className={styles.tableHeadCell}>{children}</th>;
}

export function TableRow({ children }: TableRowProps) {
	return <tr className={styles.tableRow}>{children}</tr>;
}

export function TableBody({ children }: TableBodyProps) {
	return <tbody>{children}</tbody>;
}

export function TableCell({ children }: TableDataProps) {
	return <td className={styles.tableCell}>{children}</td>;
}
