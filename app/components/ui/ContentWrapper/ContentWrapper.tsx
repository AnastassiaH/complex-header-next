import styles from "./ContentWrapper.module.scss";

export default function ContentWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
