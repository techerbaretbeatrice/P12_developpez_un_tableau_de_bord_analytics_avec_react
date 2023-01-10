export const USER_ID = 12;


/**
 * mock api
 * @module
 * @async getUserInfoById
 * @async getUserActivityListByid
 * @async getUserAverageSessionListById
 * @async getUserCompletionById
 * @async getUserPerformance
 */

/**
 * @constructor 
 */
class UserInfo {
    constructor(parameters) {
        this.firstName = parameters.userInfos?.firstName
        this.id = parameters.id
        this.lastName = parameters.lastName
        this.todayScore = parameters.todayScore || parameters.score
        this.calorieCount = parameters.keyData.calorieCount
        this.proteinCount = parameters.keyData.proteinCount
        this.carbohydrateCount = parameters.keyData.carbohydrateCount
        this.lipidCount = parameters.keyData.lipidCount
    }
}

/**
 * @constructor 
 */
class Performance {
    constructor(parameters) {
        this.kind = parameters.kind
        this.id = parameters.userId
        this.data = parameters.data.reverse()
    }
}

/**
 * @constructor 
 */
class Activity {
    constructor(parameters) {
        this.id = parameters.userId
        this.sessions = parameters.sessions.sort(
            (a, b) => {
                if (new Date(a.day) < new Date(b.day)) return - 1
                return 1
            }
        ).map((item, idx) => {
            item.key = idx + 1
            return item
        })
    }
}

/**
 * @constructor 
 */
class AverageSessions {
    constructor(parameters) {
        this.id = parameters.userId
        this.sessions = parameters.sessions
    }
}

/**
 * mock api 
 * @async getUserInfoById
 * @param {number}id
 * @return userInfos
 */
const getUserInfoById = async (id) => {
    // utiliser fetch pour appeler le l'api qui retourne un JSON response
    // transforme le retour en json

    return new UserInfo({
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
    })
}


/**
 * mock api
 * @async getUserActivityListById
 * @param {number}id
 * @return activity
 */
const getUserActivityListById = async (id) => {

    return new Activity(
        {
            userId: 12,
            sessions: [
                {
                    day: '2020-07-01',
                    kilogram: 80,
                    calories: 240
                },
                {
                    day: '2020-07-02',
                    kilogram: 80,
                    calories: 220
                },
                {
                    day: '2020-07-03',
                    kilogram: 81,
                    calories: 280
                },
                {
                    day: '2020-07-04',
                    kilogram: 81,
                    calories: 290
                },
                {
                    day: '2020-07-05',
                    kilogram: 80,
                    calories: 160
                },
                {
                    day: '2020-07-06',
                    kilogram: 78,
                    calories: 162
                },
                {
                    day: '2020-07-07',
                    kilogram: 76,
                    calories: 390
                }
            ]
        }
    )
}


/**
 * mock api
 * @async getUserAverageSessionListById
 * @param  {number}id 
 * @returns averageSessions
 */
const getUserAverageSessionListById = async (id) => {

    return new AverageSessions(
        {
            userId: 12,
            sessions: [
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
                    sessionLength: 0
                },
                {
                    day: 6,
                    sessionLength: 0
                },
                {
                    day: 7,
                    sessionLength: 60
                }
            ]
        }

    )

}

/**
 * mock api
 * @async getUserCompletionById
 * @param {number}id
 * @return userInfo
 */

const getUserCompletionById = async (id) => {

    return new UserInfo({
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
    })

}

/**
 * mock api
 * @async getUserInfoById
 * @param {number}id
 * @return userInfo
 */

const getUserKeyIndicator = async (id) => {

    return new UserInfo({
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
    })

}


/**
 * mock api
 *@async getUserPerformance
 * @param {number} id 
 * @returns api
 */
const getUserPerformance = async (id) => {

    return new Performance(
        {
            userId: 12,
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
    )

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




