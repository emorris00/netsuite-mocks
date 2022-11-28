const SuiteCloudJestStubs = require("suitecloud-unit-testing-stubs")
const KeyedSet = require("./keyed-set.cjs")
const { createUserEventContext, keyedSetGetSet } = require("./helpers.cjs");

class SuiteScriptMocks {
    @keyedSetGetSet()
    #records = new KeyedSet(value => [value.id, value.type])
    savedRecords = []
    createdRecords = []

    @keyedSetGetSet()
    #searches = new KeyedSet(value => value.id, value => value.searchId, value => value.title)

    searchResults = []

    @keyedSetGetSet()
    #lookupFieldsResults = new KeyedSet(value => [value.id, value.searchId])

    currentScript
    currentUser
    currentSession

    features = {}

    reset = () => {
        this.#records.clear()
        this.savedRecords = []
        this.createdRecords = []
        this.#searches.clear()
        this.#lookupFieldsResults.clear()
    }

    createUserEventContext = createUserEventContext;

    stubs = [
        ...SuiteCloudJestStubs.customStubs,
        { module: "N/record", path: "<rootDir>/node_modules/netsuite-mocks/lib/mocks/record" },
        { module: "N/runtime", path: "<rootDir>/node_modules/netsuite-mocks/lib/mocks/runtime" },
        { module: "N/search", path: "<rootDir>/node_modules/netsuite-mocks/lib/mocks/search" },
    ]
}

module.exports = new SuiteScriptMocks()