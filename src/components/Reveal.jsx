import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, ...props }) {
  const { ref, visible } = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
