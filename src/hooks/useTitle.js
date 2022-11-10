import { useEffect } from "react"

//----------------------------
// custom hook for setting title bar title
//----------------------------

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-NVIS`
    }, [title])
}

export default useTitle;