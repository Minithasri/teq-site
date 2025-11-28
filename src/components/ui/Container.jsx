import clsx from 'classnames';

export default function Container({ className, children }) {
  return <div className={clsx('container mx-auto', className)}>{children}</div>;
}
