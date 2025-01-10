
type PrevNext = {
  page: number,
  totalPage: number,
  setPage: (page: number)=>void
}

export default function PrevNext({
  page,
  totalPage,
  setPage
}:PrevNext) {

  const firstCl = page <= 1 ? "hidden" : ""
  const lastCl = page >= totalPage ? "hidden" : ""

  const btnCl = `
    fixed top-2 w-12 h-12 rounded-md
    bg-black bg-opacity-10
    hover:bg-black hover:bg-opacity-50 hover:text-opacity-100
    text-opacity-70
    text-white text-3xl cursor-pointer
    flex justify-center items-center
  `
  function prev() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function next() {
    if (page < totalPage) {
      setPage(page + 1)
    }
  }
  return(<>
    <div className={`${btnCl} ${firstCl} left-2`}
      onClick={prev}
    >
      &lt;
    </div>
    <div className={`${btnCl} ${lastCl} right-2`}
      onClick={next}
    >
      &gt;
    </div>
  </>)
}