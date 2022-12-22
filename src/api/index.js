export const USER_ID = 12;


/**
 * call api
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
                console.log(new Date(a.day) > new Date(b.day), a.day, b.day)
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
 * call api get datas from localhost:3000/user/id
 * @async getUserInfoById
 * @param {number}id
 * @return userInfos
 */
const getUserInfoById = async (id) => {
    // utiliser fetch pour appeler le l'api qui retourne un JSON response
    // transforme le retour en json
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    console.log(json)
    const userInfo = new UserInfo(json.data)
    console.log("user info", userInfo)
    return userInfo
}


/**
 * call api get datas from localhost:3000/user/id/activity
 * @async getUserActivityListById
 * @param {number}id
 * @return activity
 */
const getUserActivityListById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/activity`)
    const json = await jsonResult.json()
    console.log(json)
    const activity = new Activity(json.data)
    return activity
}


/**
 * call api get datas from localhost:3000/user/id/average-sessions
 * @async getUserAverageSessionListById
 * @param  {number}id 
 * @returns averageSessions
 */
const getUserAverageSessionListById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const json = await jsonResult.json()
    console.log(json)
    const averageSessions = new AverageSessions(json.data)
    return averageSessions

}

/**
 * call api get datas from localhost:3000/user/id
 * @async getUserCompletionById
 * @param {number}id
 * @return userInfo
 */

const getUserCompletionById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    const userInfo = new UserInfo(json.data)
    console.log(json)
    return userInfo

}

/**
 * call api get datas from localhost:3000/user/id
 * @async getUserInfoById
 * @param {number}id
 * @return userInfo
 */

const getUserKeyIndicator = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    console.log(json)
    const userInfo = new UserInfo(json.data)
    return userInfo

}


/**
 * getUserPerformance
 * @param {number} id 
 * @returns api
 */
const getUserPerformance = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/performance`)
    const json = await jsonResult.json()
    console.log(json)
    const performance = new Performance(json.data)
    return performance

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




