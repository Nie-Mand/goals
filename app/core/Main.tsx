interface MainProps {
  children: React.ReactNode
  className?: string
}

export function Main({ children, className }: MainProps) {
  return (
    <main className={`contained py-10 ${className ?? ''}`}>{children}</main>
  )
}
