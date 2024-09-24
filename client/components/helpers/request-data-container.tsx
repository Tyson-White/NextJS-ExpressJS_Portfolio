'use client'

import { useGetMeQuery } from "@/redux/api"

const RequestDataContainer = () => {

    const {data} = useGetMeQuery('')

    return (
      <></>
    )
}

export default RequestDataContainer