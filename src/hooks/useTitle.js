import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-NVIS`
    }, [title])
}

export default useTitle;