/**
 * call api
 * @async getUserInfoById
 * @async getUserActivityListByid
 * @async getUserAverageSessionListById
 * @async getUserPerformancePerCategory
 */

/**
 * call api
 * @async getUserInfoById
 * @param {number}id
 * @return api
 */
const getUserInfoById = (id) => {
    return {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    }
}


/**
 * call api
 * @async getUserActivityListById
 * @param {number}id
 * @return api
 */
const getUserActivityListById = (id) => {
    return [
        {
            day: '2020-07-01',
            kilogram: 70,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 69,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 70,
            calories: 280
        },
    ]
}

/**
 * call api
 * @async getUserAverageSessionListById
 * @param  {number}id 
 * @returns api
 */
const getUserAverageSessionListById = (id) => {
    return [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 23
        },
        {
            day: 3,
            sessionLength: 45
        },
        {
            day: 4,
            sessionLength: 50
        },

    ]
}


/**
 * getUserPerformancePerCategory
 * @param {*} kind 
 * @param {number} id 
 * @returns api
 */
const getUserPerformancePerCategory = (kind, id) => {
    return 80
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUserActivityListById,
    getUserInfoById,
    getUserAverageSessionListById,
    getUserPerformancePerCategory,
}