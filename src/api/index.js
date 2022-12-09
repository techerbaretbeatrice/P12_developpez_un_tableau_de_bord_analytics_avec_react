export const USER_ID = 12;

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
const getUserInfoById = async (id) => {
    // utiliser fetch pour appeler le l'api qui retourne un JSON response
    // transforme le retour en json
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    console.log(json)
    return json.data
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
        {
            day: 5,
            sessionLength: 30
        },
        {
            day: 6,
            sessionLength: 50
        },
        {
            day: 7,
            sessionLength: 50
        }


    ]
}

const getUserCompletionById = (id) => {
    return {
        id: 12,
        todayScore: 0.80

    }
}

const getUserKeyIndicator = (id) => {
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
 * getUserPerformancePerCategory
 * @param {*} kind 
 * @param {number} id 
 * @returns api
 */
const getUserPerformance = (kind, id) => {
    return {
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUserActivityListById,
    getUserInfoById,
    getUserAverageSessionListById,
    getUserCompletionById,
    getUserKeyIndicator,
    getUserPerformance,

}