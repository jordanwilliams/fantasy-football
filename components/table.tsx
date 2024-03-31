import { ReactNode } from 'react';
import styles from './table.module.css';

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

export function Table({ children }: TableProps) {
	return <table className="">{children}</table>;
}

export function TableHead({ children }: TableHeadProps) {
	return <thead className="">{children}</thead>;
}

export function TableHeadCell({ children }: TableHeadProps) {
	return <th className="">{children}</th>;
}

export function TableRow({ children }: TableRowProps) {
	return <tr className="">{children}</tr>;
}

export function TableBody({ children }: TableBodyProps) {
	return <tbody className="">{children}</tbody>;
}

export function TableCell({ children }: TableDataProps) {
	return <td className="">{children}</td>;
}
