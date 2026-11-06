import { useState } from 'react'

const tints = [
  ['#1f5a43', '#e8913a'], ['#0f3d2e', '#c9a96a'], ['#2b6f7a', '#f0c987'],
  ['#5b3a1e', '#e8b24a'], ['#1b4d5c', '#7fc4b8'], ['#3b5b3a', '#e5c27a'],
]
const seed = (s = '') => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) % tints.length

// Image with a tinted gradient fallback (used until real photos are added).
export default function Img({ src, alt = '', className = '', style, ...rest }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    const [a, b] = tints[seed(src)]
    return (
      <div
        role="img"
        aria-label={alt}
        className={`img-fallback ${className}`}
        style={{ background: `linear-gradient(135deg, ${a}, ${b})`, ...style }}
      />
    )
  }
  return (
    <img src={src} alt={alt} loading="lazy" className={className} style={style}
      onError={() => setFailed(true)} {...rest} />
  )
}
