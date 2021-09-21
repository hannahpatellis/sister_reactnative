const scale = require("./scale")
// @ponicode
describe("scale.scale", () => {
    test("0", () => {
        let callFunction = () => {
            scale.scale(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            scale.scale(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            scale.scale(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            scale.scale(64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            scale.scale(16)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            scale.scale(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
