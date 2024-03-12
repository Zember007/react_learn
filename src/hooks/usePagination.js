import { useMemo } from "react"


export const usePagination = (totalPage) => {
    const pagination = useMemo(() => {
        let PagesArray = []
        for (let i = 0; i < totalPage; i++) {
            PagesArray.push(i + 1)
        }

        return PagesArray
    }, [totalPage])


    return pagination
}