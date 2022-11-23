import { useState, useEffect, createContext } from 'react'
import api from '../api'



export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [userId] = useState(12);
    const [loading, setLoading] = useState(false)

    const loadData = async (id) => {
        setLoading(true)
        const dataObj = {
            userInfo: null,
            activityList: null,
            averageSessionList: null,
            performance: {
                cardio: null
            }
        }
        dataObj.userInfo = await api.getUserInfoById(id)
        dataObj.activityList = await api.getUserActivityListById(id)
        dataObj.averageSessionList = await api.getUserAverageSessionListById(id)
        dataObj.performance = await api.getUserPerformancePerCategory(id)

        setData(dataObj)
        setLoading(false)
    }
    useEffect(() => {
        loadData(userId)
    }, [userId])
    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    )

}

