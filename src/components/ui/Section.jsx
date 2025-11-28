import clsx from 'classnames';

export default function Section({ className, children }) {
  return <section className={clsx('py-12 md:py-16', className)}>{children}</section>;
}
