export const USER_ID = 12;


/**
 * call api methods
 * @module Api
 * @async getUserInfoById
 * @async getUserActivityListByid
 * @async getUserAverageSessionListById
 * @async getUserCompletionById
 * @async getUserPerformance
 */

/**
 * data modeling of user resources
 * @constructor
 */
class UserInfo {
    constructor(parameters) {
        /**
         * The firstName of the user
         * @type {string}
         * @public
         */
        this.firstName = parameters.userInfos?.firstName
        /**
         * The id of the user
         * @type {string}
         * @public
         */
        this.id = parameters.id
        /**
         * The lastName of the user
         * @type {string}
         * @public
         */
        this.lastName = parameters.lastName
        /**
         * The score of the user
         * @type {number}
         * @public
         */
        this.todayScore = parameters.todayScore || parameters.score
        /**
        * The calorie count of the user
        * @type {number}
        * @public
        */
        this.calorieCount = parameters.keyData.calorieCount
        /**
        * The protein count of the user
        * @type {number}
        * @public
        */
        this.proteinCount = parameters.keyData.proteinCount
        /**
        * The carbohydrate count of the user
        * @type {number}
        * @public
        */
        this.carbohydrateCount = parameters.keyData.carbohydrateCount
        /**
        * The lipid count of the user
        * @type {number}
        * @public
        */
        this.lipidCount = parameters.keyData.lipidCount
    }
}

/**
 * data modeling of user Performance resources
 * @constructor 
 */
class Performance {
    constructor(parameters) {
        /**
        * The category of performance
        * @type {string}
        * @public
        */
        this.kind = parameters.kind
        /**
        * The id of the user
        * @type {number}
        * @public
        */
        this.id = parameters.userId
        /**
        * array from datas performances
        * @type {array}
        * @public
        */
        this.data = parameters.data.reverse()
    }
}

/**
 * data modeling of user activity resources
 * @constructor 
 */
class Activity {
    constructor(parameters) {
        /**
        * the id of user
        * @type {number}
        * @public
        */
        this.id = parameters.userId
        /**
        * Array from  weight and burned calories  per day
        * @type {array}
        * @public
        */
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
 * data modeling of user average sessions resources
 * @constructor 
 */
class AverageSessions {
    constructor(parameters) {
        /**
        * The id of user
        * @type {number}
        * @public
        */
        this.id = parameters.userId
        /**
        * Array from user session(date and session length)
        * @type {array}
        * @public
        */
        this.sessions = parameters.sessions
    }
}

/**
 * call api get datas from root localhost:3000/user/id
 * @async getUserInfoById
 * @param {number}id
 * @return userInfos identity resources
 */
const getUserInfoById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    const userInfo = new UserInfo(json.data)
    return userInfo
}


/**
 * call api get datas from root localhost:3000/user/id/activity
 * @async getUserActivityListById
 * @param {number}id
 * @return activity resources
 */
const getUserActivityListById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/activity`)
    const json = await jsonResult.json()
    const activity = new Activity(json.data)
    return activity
}


/**
 * call api get datas from root localhost:3000/user/id/average-sessions
 * @async getUserAverageSessionListById
 * @param  {number}id 
 * @returns averageSessions resources
 */
const getUserAverageSessionListById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const json = await jsonResult.json()
    const averageSessions = new AverageSessions(json.data)
    return averageSessions

}

/**
 * call api get datas from root localhost:3000/user/id
 * @async getUserCompletionById
 * @param {number}id
 * @return userInfo completion resources
 */

const getUserCompletionById = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    const userInfo = new UserInfo(json.data)
    return userInfo

}

/**
 * call api get datas from  root localhost:3000/user/id
 * @async getUserInfoById
 * @param {number}id
 * @return userInfo key indicator resources
 */

const getUserKeyIndicator = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}`)
    const json = await jsonResult.json()
    const userInfo = new UserInfo(json.data)
    return userInfo

}


/**
 * call api get datas from root localhost:3000/user/id/performance
 * @param {number} id 
 * @returns perfomance resources
 */
const getUserPerformance = async (id) => {
    const jsonResult = await fetch(`http://localhost:3000/user/${id}/performance`)
    const json = await jsonResult.json()
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




