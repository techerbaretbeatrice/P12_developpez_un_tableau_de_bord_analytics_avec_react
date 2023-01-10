import { useState, useEffect, createContext } from 'react'
import api from '../api'

/**
 * data context 
 * @module
 * @return Provider
 */

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false);
    const [userId] = useState(12);
    const [loading, setLoading] = useState(false)

    const loadData = async (id) => {
        setLoading(true)
        const dataObj = {
            userInfo: null,
            activityList: null,
            averageSessionList: null,
            userCompletion: null,
            userKeyIndicator: null,
            performance: null
        }
        try {
            dataObj.userInfo = await api.getUserInfoById(id)
            dataObj.activityList = await api.getUserActivityListById(id)
            dataObj.averageSessionList = await api.getUserAverageSessionListById(id)
            dataObj.userCompletion = await api.getUserCompletionById(id)
            dataObj.userKeyIndicator = await api.getUserKeyIndicator(id)
            dataObj.performance = await api.getUserPerformance(id)
        } catch (err) {
            setError(true)
        }


        setData(dataObj)
        setLoading(false)
    }
    useEffect(() => {
        loadData(userId)
    }, [userId])
    return (
        <DataContext.Provider value={{ data, loading, error }}>
            {children}
        </DataContext.Provider>
    )

}

