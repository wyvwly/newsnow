export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">MIT LICENSE</a>
      <span>
        <span>NewsNow © 2026 project from ourongxing</span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
